#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const electronDir = path.join(__dirname, '..', 'electron');
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎨 图标选择器');
console.log('================');
console.log('请选择要使用的图标风格:');
console.log('1. 蓝紫渐变风格 (现代科技感)');
console.log('2. 橙红渐变风格 (活力创意感)');
console.log('3. 绿青渐变风格 (自然清新感)');
console.log('');

rl.question('请输入选择 (1, 2 或 3, 默认为 1): ', (answer) => {
  const choice = answer.trim() || '1';
  
  let sourceSvg, sourcePng;
  let iconStyle;
  
  switch(choice) {
    case '1':
      sourceSvg = 'logo.svg';
      sourcePng = 'logo.png';
      iconStyle = '蓝紫渐变风格';
      break;
    case '2':
      sourceSvg = 'logo-orange.svg';
      sourcePng = 'logo-orange.png';
      iconStyle = '橙红渐变风格';
      break;
    case '3':
      sourceSvg = 'logo-green.svg';
      sourcePng = 'logo-green.png';
      iconStyle = '绿青渐变风格';
      break;
    default:
      console.log('❌ 无效选择，使用默认蓝紫渐变风格');
      sourceSvg = 'logo.svg';
      sourcePng = 'logo.png';
      iconStyle = '蓝紫渐变风格 (默认)';
  }
  
  try {
    // 检查文件是否存在
    const svgSource = path.join(electronDir, sourceSvg);
    const pngSource = path.join(electronDir, sourcePng);
    
    if (!fs.existsSync(svgSource) || !fs.existsSync(pngSource)) {
      console.log('❌ 图标文件不存在，请先生成图标');
      process.exit(1);
    }
    
    // 如果选择的不是默认图标，则替换文件
    if (choice !== '1') {
      console.log(`🔄 切换到 ${iconStyle}...`);
      
      // 备份当前图标
      if (fs.existsSync(path.join(electronDir, 'logo.svg'))) {
        fs.copyFileSync(
          path.join(electronDir, 'logo.svg'),
          path.join(electronDir, 'logo-backup.svg')
        );
      }
      if (fs.existsSync(path.join(electronDir, 'logo.png'))) {
        fs.copyFileSync(
          path.join(electronDir, 'logo.png'),
          path.join(electronDir, 'logo-backup.png')
        );
      }
      
      // 复制选择的图标
      fs.copyFileSync(sourceSvg, path.join(electronDir, 'logo.svg'));
      fs.copyFileSync(pngSource, path.join(electronDir, 'logo.png'));
      
      console.log('📁 已备份原图标为 *-backup.* 文件');
    }
    
    // 更新assets目录
    fs.copyFileSync(
      path.join(electronDir, 'logo.svg'),
      path.join(assetsDir, 'logo.svg')
    );
    fs.copyFileSync(
      path.join(electronDir, 'logo.png'),
      path.join(assetsDir, 'logo.png')
    );
    
    console.log(`✅ 已切换到 ${iconStyle}`);
    console.log('📱 正在重新生成所有尺寸的图标...');
    
    // 执行图标构建
    const { execSync } = require('child_process');
    execSync('npm run build:icons', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    
    console.log('🎉 图标更新完成！');
    console.log('');
    console.log('图标特点:');
    if (choice === '1') {
      console.log('• 蓝紫渐变的现代科技感');
      console.log('• 圆角正方形设计');
      console.log('• 艺术感字母T');
      console.log('• 专业商务风格');
    } else if (choice === '2') {
      console.log('• 橙红渐变的活力创意感');
      console.log('• 温暖充满活力的色调');
      console.log('• 动感十足的视觉效果');
      console.log('• 创新创意风格');
    } else if (choice === '3') {
      console.log('• 绿青渐变的自然清新感');
      console.log('• 清新自然的色彩搭配');
      console.log('• 现代环保理念');
      console.log('• 和谐舒适的视觉体验');
    }
    
  } catch (error) {
    console.error('❌ 图标切换失败:', error.message);
    process.exit(1);
  }
  
  rl.close();
});
