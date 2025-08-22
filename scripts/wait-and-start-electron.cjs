// 等待开发服务器启动然后启动 Electron
const { spawn } = require('child_process');

async function waitAndStartElectron() {
  console.log('等待开发服务器启动...');
  
  // 等待 8 秒
  await new Promise(resolve => setTimeout(resolve, 8000));
  
  console.log('启动 Electron...');
  const electron = spawn('electron', ['dist/electron/main.js'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'development' }
  });
  
  electron.on('error', (err) => {
    console.error('启动 Electron 失败:', err);
  });
}

waitAndStartElectron();
