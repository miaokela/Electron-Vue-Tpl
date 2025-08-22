<template>
  <div class="space-y-6">
    <!-- 欢迎卡片 -->
    <a-card title="欢迎使用 Electron Vue 模板" class="tech-card">
      <p class="text-gray-600 mb-4">
        这是一个基于现代前端技术栈的 Electron 应用开发模板，集成了以下技术：
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="tech-item">
          <div class="tech-icon bg-blue-100 text-blue-600">⚡</div>
          <h3 class="font-semibold">Electron</h3>
          <p class="text-sm text-gray-500">跨平台桌面应用</p>
        </div>
        <div class="tech-item">
          <div class="tech-icon bg-green-100 text-green-600">📱</div>
          <h3 class="font-semibold">Vue 3</h3>
          <p class="text-sm text-gray-500">组合式 API</p>
        </div>
        <div class="tech-item">
          <div class="tech-icon bg-purple-100 text-purple-600">🎨</div>
          <h3 class="font-semibold">Ant Design</h3>
          <p class="text-sm text-gray-500">企业级 UI</p>
        </div>
        <div class="tech-item">
          <div class="tech-icon bg-orange-100 text-orange-600">🚀</div>
          <h3 class="font-semibold">UnoCSS</h3>
          <p class="text-sm text-gray-500">原子化 CSS</p>
        </div>
        <div class="tech-item">
          <div class="tech-icon bg-gray-100 text-gray-600">🗄️</div>
          <h3 class="font-semibold">SQLite</h3>
          <p class="text-sm text-gray-500">本地数据库</p>
        </div>
        <div class="tech-item">
          <div class="tech-icon bg-red-100 text-red-600">📦</div>
          <h3 class="font-semibold">TypeScript</h3>
          <p class="text-sm text-gray-500">类型安全</p>
        </div>
      </div>
    </a-card>

    <!-- 快速开始 -->
    <a-card title="快速开始" class="tech-card">
      <div class="space-y-4">
        <div class="step">
          <div class="step-number">1</div>
          <div>
            <h4 class="font-semibold">安装依赖</h4>
            <code class="code-block">npm install</code>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div>
            <h4 class="font-semibold">启动开发服务器</h4>
            <code class="code-block">npm run dev</code>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div>
            <h4 class="font-semibold">构建应用</h4>
            <code class="code-block">npm run build</code>
          </div>
        </div>
      </div>
    </a-card>

    <!-- 系统信息 -->
    <a-card title="系统信息" class="tech-card">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="text-sm font-medium text-gray-500">Electron 版本</label>
          <p class="font-mono">{{ electronVersion }}</p>
        </div>
        <div>
          <label class="text-sm font-medium text-gray-500">Node.js 版本</label>
          <p class="font-mono">{{ nodeVersion }}</p>
        </div>
        <div>
          <label class="text-sm font-medium text-gray-500">Chrome 版本</label>
          <p class="font-mono">{{ chromeVersion }}</p>
        </div>
        <div>
          <label class="text-sm font-medium text-gray-500">应用版本</label>
          <p class="font-mono">{{ appVersion }}</p>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const electronVersion = ref('--');
const nodeVersion = ref('--');
const chromeVersion = ref('--');
const appVersion = ref('--');

onMounted(async () => {
  try {
    // 通过 IPC 获取版本信息
    if (window.electronAPI) {
      appVersion.value = await window.electronAPI.getAppVersion();
    }
    
    // 获取进程版本信息
    if (process && process.versions) {
      electronVersion.value = process.versions.electron || '--';
      nodeVersion.value = process.versions.node || '--';
      chromeVersion.value = process.versions.chrome || '--';
    }
  } catch (error) {
    console.error('Failed to get version info:', error);
  }
});
</script>

<style scoped>
.tech-item {
  @apply text-center p-4 rounded-lg border border-gray-200;
}

.tech-icon {
  @apply w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-2;
}

.step {
  @apply flex items-start space-x-4;
}

.step-number {
  @apply w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-1;
}

.code-block {
  @apply bg-gray-100 px-2 py-1 rounded font-mono text-sm;
}
</style>
