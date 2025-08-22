<template>
  <div class="h-screen bg-gray-50">
    <!-- 标题栏 -->
    <div class="bg-white shadow-sm border-b">
      <div class="px-6 py-4">
        <h1 class="text-2xl font-bold text-gray-800">Electron Vue Template</h1>
        <p class="text-gray-600 mt-1">基于 Electron + Vue3 + Ant Design + UnoCSS + SQLite 的开发模板</p>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="flex h-[calc(100vh-80px)]">
      <!-- 侧边栏 -->
      <div class="w-64 bg-white shadow-sm border-r">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          class="h-full border-r-0"
          @select="handleMenuSelect"
        >
          <a-menu-item key="home">
            <template #icon>
              <HomeOutlined />
            </template>
            首页
          </a-menu-item>
          <a-menu-item key="database">
            <template #icon>
              <DatabaseOutlined />
            </template>
            数据库示例
          </a-menu-item>
          <a-menu-item key="components">
            <template #icon>
              <AppstoreOutlined />
            </template>
            组件示例
          </a-menu-item>
          <a-menu-item key="about">
            <template #icon>
              <InfoCircleOutlined />
            </template>
            关于
          </a-menu-item>
        </a-menu>
      </div>

      <!-- 内容区域 -->
      <div class="flex-1 p-6 overflow-auto">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  HomeOutlined, 
  DatabaseOutlined, 
  AppstoreOutlined, 
  InfoCircleOutlined 
} from '@ant-design/icons-vue';
import HomePage from './components/HomePage.vue';
import DatabaseExample from './components/DatabaseExample.vue';
import ComponentsExample from './components/ComponentsExample.vue';
import AboutPage from './components/AboutPage.vue';

const selectedKeys = ref(['home']);

const components = {
  home: HomePage,
  database: DatabaseExample,
  components: ComponentsExample,
  about: AboutPage,
};

const currentComponent = computed(() => {
  return components[selectedKeys.value[0] as keyof typeof components] || HomePage;
});

const handleMenuSelect = ({ key }: { key: string }) => {
  console.log('Menu selected:', key);
};
</script>

<style scoped>
/* 组件特定样式 */
</style>
