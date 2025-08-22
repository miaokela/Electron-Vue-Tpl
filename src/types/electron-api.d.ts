// 用户数据类型
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

// Electron API 类型定义
export interface ElectronAPI {
  // 应用信息
  getAppVersion: () => Promise<string>;
  
  // 数据库操作
  initDatabase: () => Promise<boolean>;
  getUsers: () => Promise<User[]>;
  addUser: (user: Omit<User, 'id' | 'created_at'>) => Promise<User>;
  deleteUser: (id: number) => Promise<boolean>;
  
  // 文件操作
  openFile: () => Promise<string | null>;
  saveFile: (content: string) => Promise<boolean>;
  
  // 系统操作
  showNotification: (options: { title: string; body: string }) => Promise<void>;
  
  // 窗口操作
  minimizeWindow: () => Promise<void>;
  maximizeWindow: () => Promise<void>;
  closeWindow: () => Promise<void>;
}

// 全局类型声明
declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

export {};
