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
      // 使用 rsvg-convert (推荐) 或者 cairosvg 或者 ImageMagick
      if (process.platform === 'darwin') {
        // 首先尝试使用 rsvg-convert (如果安装了 librsvg)
        try {
          execSync(`rsvg-convert -w 512 -h 512 -b none "${svgPath}" -o "${pngPath}"`, { stdio: 'pipe' });
          console.log(`✅ 生成 ${icon.color} PNG (透明背景): ${icon.name}.png`);
        } catch (rsvgError) {
          // 如果 rsvg-convert 不可用，尝试使用 ImageMagick
          try {
            execSync(`convert -background none -size 512x512 "${svgPath}" "${pngPath}"`, { stdio: 'pipe' });
            console.log(`✅ 生成 ${icon.color} PNG (透明背景): ${icon.name}.png`);
          } catch (imagemagickError) {
            // 最后尝试使用 qlmanage，但它可能不保持透明背景
            console.warn(`⚠️  rsvg-convert 和 ImageMagick 不可用，使用 qlmanage (可能有白色背景)`);
            execSync(`qlmanage -t -s 512 -o "${electronDir}" "${svgPath}"`, { stdio: 'pipe' });
            
            // qlmanage 生成的文件名需要重命名
            const tempName = `${icon.name}.svg.png`;
            const tempPath = path.join(electronDir, tempName);
            
            if (fs.existsSync(tempPath)) {
              fs.renameSync(tempPath, pngPath);
              console.log(`⚠️  生成 ${icon.color} PNG (可能有白色背景): ${icon.name}.png`);
              console.log(`📝 建议安装 librsvg: brew install librsvg`);
              console.log(`📝 或安装 ImageMagick: brew install imagemagick`);
            }
          }
        }
      } else {
        console.log(`⚠️  在 ${process.platform} 平台上，请手动转换 ${svgPath} 为 PNG 格式`);
        console.log(`📝 推荐使用: rsvg-convert -w 512 -h 512 -b none "${svgPath}" -o "${pngPath}"`);
      }
    } catch (error) {
      console.warn(`⚠️  无法转换 ${icon.name}.svg:`, error.message);
      console.log(`📝 请手动将 ${svgPath} 转换为 PNG 格式，确保透明背景`);
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
