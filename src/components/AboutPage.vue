<template>
  <div class="space-y-6">
    <!-- 项目介绍 -->
    <a-card title="关于此模板" class="tech-card">
      <div class="space-y-4">
        <p class="text-gray-600">
          这是一个现代化的 Electron 桌面应用开发模板，集成了当前最流行的前端技术栈，
          为开发者提供了一个快速启动项目的基础框架。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold mb-2 text-blue-600">🎯 设计目标</h4>
            <ul class="space-y-1 text-sm text-gray-600">
              <li>• 提供完整的开发环境配置</li>
              <li>• 集成主流前端技术栈</li>
              <li>• 包含常用功能示例</li>
              <li>• 支持跨平台打包部署</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2 text-green-600">✨ 主要特性</h4>
            <ul class="space-y-1 text-sm text-gray-600">
              <li>• TypeScript 类型安全</li>
              <li>• 热重载开发体验</li>
              <li>• 现代化 UI 组件库</li>
              <li>• 本地数据库支持</li>
            </ul>
          </div>
        </div>
      </div>
    </a-card>

    <!-- 技术栈详情 -->
    <a-card title="技术栈详情" class="tech-card">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 class="font-semibold mb-3 text-purple-600">核心框架</h4>
          <div class="space-y-3">
            <div class="tech-stack-item">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  ⚡
                </div>
                <div>
                  <div class="font-medium">Electron</div>
                  <div class="text-sm text-gray-500">跨平台桌面应用框架</div>
                </div>
              </div>
            </div>
            
            <div class="tech-stack-item">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <div>
                  <div class="font-medium">Vue 3</div>
                  <div class="text-sm text-gray-500">渐进式 JavaScript 框架</div>
                </div>
              </div>
            </div>
            
            <div class="tech-stack-item">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  📦
                </div>
                <div>
                  <div class="font-medium">TypeScript</div>
                  <div class="text-sm text-gray-500">JavaScript 的超集</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-3 text-orange-600">开发工具</h4>
          <div class="space-y-3">
            <div class="tech-stack-item">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  🎨
                </div>
                <div>
                  <div class="font-medium">Ant Design Vue</div>
                  <div class="text-sm text-gray-500">企业级 UI 设计语言</div>
                </div>
              </div>
            </div>
            
            <div class="tech-stack-item">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  🚀
                </div>
                <div>
                  <div class="font-medium">UnoCSS</div>
                  <div class="text-sm text-gray-500">即时原子化 CSS 引擎</div>
                </div>
              </div>
            </div>
            
            <div class="tech-stack-item">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  🗄️
                </div>
                <div>
                  <div class="font-medium">SQLite</div>
                  <div class="text-sm text-gray-500">轻量级关系型数据库</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-card>

    <!-- 开始使用 -->
    <a-card title="开始使用" class="tech-card">
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-2">📥 克隆项目</h4>
          <div class="bg-gray-100 p-3 rounded-lg font-mono text-sm">
            git clone &lt;repository-url&gt;<br>
            cd electron-vue-tpl
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">📦 安装依赖</h4>
          <div class="bg-gray-100 p-3 rounded-lg font-mono text-sm">
            npm install<br>
            # 或者<br>
            yarn install
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">🚀 启动开发</h4>
          <div class="bg-gray-100 p-3 rounded-lg font-mono text-sm">
            npm run dev<br>
            # 或者<br>
            yarn dev
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">🏗️ 构建应用</h4>
          <div class="bg-gray-100 p-3 rounded-lg font-mono text-sm">
            npm run build<br>
            # 或者<br>
            yarn build
          </div>
        </div>
      </div>
    </a-card>

    <!-- 项目结构 -->
    <a-card title="项目结构" class="tech-card">
      <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
        <div class="space-y-1">
          <div>electron-vue-tpl/</div>
          <div class="ml-4">├── electron/          # Electron 主进程</div>
          <div class="ml-4">│   ├── main.ts        # 主进程入口</div>
          <div class="ml-4">│   ├── preload.ts     # 预加载脚本</div>
          <div class="ml-4">│   └── database.ts    # 数据库模块</div>
          <div class="ml-4">├── src/               # Vue 渲染进程</div>
          <div class="ml-4">│   ├── components/    # Vue 组件</div>
          <div class="ml-4">│   ├── assets/        # 静态资源</div>
          <div class="ml-4">│   ├── App.vue        # 根组件</div>
          <div class="ml-4">│   └── main.ts        # 渲染进程入口</div>
          <div class="ml-4">├── build/             # 构建配置</div>
          <div class="ml-4">├── dist/              # 构建输出</div>
          <div class="ml-4">├── package.json       # 项目配置</div>
          <div class="ml-4">├── vite.config.ts     # Vite 配置</div>
          <div class="ml-4">└── uno.config.ts      # UnoCSS 配置</div>
        </div>
      </div>
    </a-card>

    <!-- 版权信息 -->
    <a-card class="tech-card">
      <div class="text-center text-gray-500">
        <p>Electron Vue Template</p>
        <p class="text-sm mt-1">基于 MIT 开源协议</p>
        <p class="text-xs mt-2">© 2024 All rights reserved</p>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// 无需额外逻辑
</script>

<style scoped>
.tech-stack-item {
  @apply p-3 bg-gray-50 rounded-lg;
}
</style>
