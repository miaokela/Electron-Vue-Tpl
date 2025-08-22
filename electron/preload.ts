import { contextBridge, ipcRenderer } from "electron";

// 定义暴露给渲染进程的 API
const electronAPI = {
  // 获取应用版本 - 已在 main.ts 中实现
  getAppVersion: (): Promise<string> => ipcRenderer.invoke("get-app-version"),
};

// 将 API 暴露给渲染进程
contextBridge.exposeInMainWorld("electronAPI", electronAPI);

// 类型定义
type ElectronAPI = typeof electronAPI;

// 在窗口对象上添加类型定义
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export type { ElectronAPI };
