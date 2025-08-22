# Electron Vue Template

一个现代化的 Electron 桌面应用开发模板，集成了 Vue 3、Ant Design、UnoCSS 和 SQLite。

## 🚀 技术栈

- **[Electron](https://www.electronjs.org/)** - 跨平台桌面应用框架
- **[Vue 3](https://vuejs.org/)** - 渐进式 JavaScript 框架
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript 的超集，提供类型安全
- **[Ant Design Vue](https://antdv.com/)** - 企业级 UI 设计语言
- **[UnoCSS](https://uno.antfu.me/)** - 即时原子化 CSS 引擎
- **[SQLite](https://www.sqlite.org/)** - 轻量级关系型数据库
- **[Vite](https://vitejs.dev/)** - 下一代前端构建工具

## ✨ 特性

- 🎯 **开箱即用** - 预配置的开发环境，快速启动项目
- 🔥 **热重载** - 开发时支持热重载，提升开发体验
- 📦 **TypeScript** - 完整的 TypeScript 支持，类型安全
- 🎨 **现代 UI** - 基于 Ant Design Vue 的现代化界面
- 🚀 **原子化 CSS** - 使用 UnoCSS 的高效样式解决方案
- 🗄️ **数据库支持** - 集成 SQLite 本地数据库
- 🔧 **一键构建** - 支持跨平台打包部署
- 📱 **响应式设计** - 适配不同屏幕尺寸

## 📦 安装

```bash
# 克隆项目
git clone <repository-url>
cd electron-vue-tpl

# 安装依赖
npm install
# 或者
yarn install
```

## 🛠️ 开发

```bash
# 启动开发服务器
npm run dev
# 或者
yarn dev
```

## 🏗️ 构建

```bash
# 构建应用
npm run build
# 或者
yarn build
```

## 📁 项目结构

```
electron-vue-tpl/
├── electron/                 # Electron 主进程
│   ├── main.ts              # 主进程入口文件
│   ├── preload.ts           # 预加载脚本
│   ├── database.ts          # 数据库模块
│   └── tsconfig.*.json      # TypeScript 配置
├── src/                     # Vue 渲染进程
│   ├── components/          # Vue 组件
│   │   ├── HomePage.vue     # 首页组件
│   │   ├── DatabaseExample.vue # 数据库示例
│   │   ├── ComponentsExample.vue # 组件示例
│   │   └── AboutPage.vue    # 关于页面
│   ├── assets/              # 静态资源
│   ├── App.vue              # 根组件
│   ├── main.ts              # 渲染进程入口
│   ├── reset.css            # CSS 重置
│   └── tech-styles.css      # 科技感样式
├── build/                   # 构建配置
├── dist/                    # 构建输出目录
├── package.json             # 项目配置
├── vite.config.ts           # Vite 配置
├── uno.config.ts            # UnoCSS 配置
└── README.md               # 项目文档
```

## 🔧 配置说明

### Electron 配置

主进程配置在 `electron/main.ts` 中，包含：
- 窗口创建和管理
- IPC 通信处理
- 数据库初始化
- 应用生命周期管理

### Vue 配置

渲染进程配置在 `src/main.ts` 中，包含：
- Vue 应用初始化
- 插件注册
- 样式导入

### 数据库配置

SQLite 数据库配置在 `electron/database.ts` 中，提供：
- 数据库连接管理
- ES Module 兼容性处理
- 错误处理机制

## 🎨 样式系统

### UnoCSS

项目使用 UnoCSS 作为原子化 CSS 引擎，配置文件：`uno.config.ts`

预设快捷类：
- `tech-card` - 科技感卡片样式
- `btn-primary` - 主要按钮样式
- `btn-secondary` - 次要按钮样式

### 科技感主题

`src/tech-styles.css` 提供了完整的科技感主题样式，包括：
- CSS 变量定义
- 渐变背景效果
- 卡片样式
- 按钮和表单样式
- 响应式设计

## 🗄️ 数据库使用

项目集成了 SQLite 数据库，提供完整的 CRUD 操作示例：

```typescript
// 在主进程中初始化数据库
const db = await open({
  filename: dbPath,
  driver: sqlite3.Database
});

// 创建表
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
```

## 🔄 IPC 通信

预加载脚本 (`electron/preload.ts`) 定义了渲染进程与主进程的通信接口：

```typescript
// 渲染进程中调用
const version = await window.electronAPI.getAppVersion();
const users = await window.electronAPI.getUsers();
```

## 📱 组件示例

项目包含完整的组件示例：

1. **HomePage** - 首页展示，包含技术栈介绍
2. **DatabaseExample** - 数据库操作示例
3. **ComponentsExample** - Ant Design 组件展示
4. **AboutPage** - 项目介绍和使用说明

## 🛡️ 类型安全

项目使用 TypeScript 提供完整的类型支持：
- Electron API 类型定义
- Vue 组件类型推导
- 数据库操作类型安全
- IPC 通信类型检查

## 📝 开发建议

1. **组件开发** - 在 `src/components/` 目录下创建新组件
2. **样式编写** - 优先使用 UnoCSS 原子类，复杂样式使用 CSS 模块
3. **数据库操作** - 通过 IPC 在主进程中处理数据库操作
4. **状态管理** - 小型应用使用 Vue 3 的 Composition API，大型应用可考虑 Pinia
5. **错误处理** - 使用 try-catch 和 Ant Design 的 message 组件显示错误

## 🔄 更新日志

### v1.0.0
- 初始版本发布
- 集成 Electron + Vue 3 + Ant Design + UnoCSS + SQLite
- 提供完整的开发环境配置
- 包含常用功能示例

## 📄 许可证

[MIT License](LICENSE)

---

⭐ 如果这个模板对您有帮助，请给个 Star 支持一下！
