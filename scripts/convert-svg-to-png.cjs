#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const electronDir = path.join(__dirname, '..', 'electron');

console.log('🎨 转换 SVG 图标为 PNG...');

// 图标列表
const icons = [
  { name: 'logo', color: '蓝紫渐变' },
  { name: 'logo-orange', color: '橙红渐变' },
  { name: 'logo-green', color: '绿青渐变' }
];

for (const icon of icons) {
  const svgPath = path.join(electronDir, `${icon.name}.svg`);
  const pngPath = path.join(electronDir, `${icon.name}.png`);
  
  if (fs.existsSync(svgPath)) {
    try {
      // 使用 rsvg-convert (需要安装 librsvg) 或者 qlmanage (macOS 内置)
      if (process.platform === 'darwin') {
        // 使用 qlmanage 转换 (macOS 内置工具)
        execSync(`qlmanage -t -s 512 -o "${electronDir}" "${svgPath}"`, { stdio: 'pipe' });
        
        // qlmanage 生成的文件名需要重命名
        const tempName = `${icon.name}.svg.png`;
        const tempPath = path.join(electronDir, tempName);
        
        if (fs.existsSync(tempPath)) {
          fs.renameSync(tempPath, pngPath);
          console.log(`✅ 生成 ${icon.color} PNG: ${icon.name}.png`);
        }
      } else {
        console.log(`⚠️  在 ${process.platform} 平台上，请手动转换 ${svgPath} 为 PNG 格式`);
      }
    } catch (error) {
      console.warn(`⚠️  无法转换 ${icon.name}.svg:`, error.message);
      console.log(`📝 请手动将 ${svgPath} 转换为 PNG 格式`);
    }
  } else {
    console.warn(`⚠️  SVG 文件不存在: ${svgPath}`);
  }
}

console.log('🎉 图标转换完成！');
console.log('');
console.log('使用方法:');
console.log('1. npm run select:icon - 选择要使用的图标风格');
console.log('2. npm run build:icons - 生成所有尺寸的应用图标');
