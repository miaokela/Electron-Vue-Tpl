import {
  app,
  BrowserWindow,
  ipcMain,
} from "electron";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import fs from "fs";
import { sqlite3, open } from "./database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 应用程序单实例锁
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
  process.exit(0);
}

let mainWindow: BrowserWindow;

function createWindow(): void {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    height: 900,
    width: 1400,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
  });

  // 加载应用程序
  if (process.env.NODE_ENV === "development") {
    const rendererPort = process.env.RENDERER_PORT || 5173;
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // 在 macOS 上，当单击 dock 图标并且没有其他窗口打开时，
    // 通常会在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 当所有窗口都关闭时退出，除非是 macOS。
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// 处理第二个实例
app.on("second-instance", () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

// 示例 IPC 处理器
ipcMain.handle("get-app-version", () => {
  return app.getVersion();
});

// 数据库初始化示例
async function initDatabase() {
  try {
    const dbPath = path.join(__dirname, "app.db");
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    // 创建示例表
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("✅ Database initialized successfully");
    return db;
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    return null;
  }
}

// 应用启动时初始化数据库
app.whenReady().then(initDatabase);
