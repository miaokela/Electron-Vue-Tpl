#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const electronDir = path.join(rootDir, 'electron');
const pngPath = path.join(electronDir, 'logo.png');
const icnsPath = path.join(electronDir, 'logo.icns');

console.log('Building application icons...');

// 检查 PNG 文件是否存在
if (!fs.existsSync(pngPath)) {
  console.error('Source PNG file not found:', pngPath);
  process.exit(1);
}

// 在 macOS 上生成 ICNS 文件
if (process.platform === 'darwin') {
  try {
    // 创建临时目录
    const tempDir = path.join(electronDir, 'temp-iconset');
    const iconsetDir = path.join(tempDir, 'icon.iconset');
    
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true });
    }
    fs.mkdirSync(iconsetDir, { recursive: true });

    // 生成不同尺寸的图标
    const sizes = [
      { size: 16, name: 'icon_16x16.png' },
      { size: 32, name: 'icon_16x16@2x.png' },
      { size: 32, name: 'icon_32x32.png' },
      { size: 64, name: 'icon_32x32@2x.png' },
      { size: 128, name: 'icon_128x128.png' },
      { size: 256, name: 'icon_128x128@2x.png' },
      { size: 256, name: 'icon_256x256.png' },
      { size: 512, name: 'icon_256x256@2x.png' },
      { size: 512, name: 'icon_512x512.png' },
      { size: 1024, name: 'icon_512x512@2x.png' }
    ];

    // 检查是否安装了 sips（macOS 自带）
    try {
      execSync('which sips', { stdio: 'ignore' });
      
      for (const { size, name } of sizes) {
        const outputPath = path.join(iconsetDir, name);
        execSync(`sips -z ${size} ${size} "${pngPath}" --out "${outputPath}"`, { stdio: 'inherit' });
      }

      // 生成 ICNS 文件
      execSync(`iconutil -c icns "${iconsetDir}" -o "${icnsPath}"`, { stdio: 'inherit' });
      
      // 清理临时文件
      fs.rmSync(tempDir, { recursive: true });
      
      console.log('✅ ICNS file generated successfully:', icnsPath);
      
      // 更新 package.json 中的图标路径
      const packageJsonPath = path.join(rootDir, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      packageJson.build.mac.icon = 'electron/logo.icns';
      
      // 只有当文件不存在时才添加到 files 数组
      const icnsFile = 'electron/logo.icns';
      if (!packageJson.build.files.includes(icnsFile)) {
        packageJson.build.files.push(icnsFile);
      }
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      
      console.log('✅ Updated package.json with ICNS icon path');
      
    } catch (error) {
      console.warn('⚠️  Could not generate ICNS file (sips/iconutil not available):', error.message);
      console.log('📝 Using PNG file as fallback');
    }
  } catch (error) {
    console.error('❌ Error generating ICNS file:', error.message);
    console.log('📝 Using PNG file as fallback');
  }
} else {
  console.log('📝 Non-macOS platform detected, using PNG icon');
}

console.log('✅ Icon build process completed');
