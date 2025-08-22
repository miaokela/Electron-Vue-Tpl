<template>
  <div class="space-y-6">
    <!-- Ant Design 组件展示 -->
    <a-card title="Ant Design 组件示例" class="tech-card">
      <div class="space-y-6">
        <!-- 按钮组 -->
        <div>
          <h4 class="font-semibold mb-3">按钮</h4>
          <div class="space-x-2">
            <a-button type="primary">Primary</a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button type="text">Text</a-button>
            <a-button type="link">Link</a-button>
            <a-button danger>Danger</a-button>
          </div>
        </div>

        <!-- 输入框 -->
        <div>
          <h4 class="font-semibold mb-3">输入框</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a-input v-model:value="inputValue" placeholder="基础输入框" />
            <a-input-password v-model:value="passwordValue" placeholder="密码输入框" />
            <a-input-search
              v-model:value="searchValue"
              placeholder="搜索框"
              enter-button
              @search="onSearch"
            />
            <a-textarea v-model:value="textareaValue" placeholder="多行文本" :rows="2" />
          </div>
        </div>

        <!-- 选择器 -->
        <div>
          <h4 class="font-semibold mb-3">选择器</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a-select v-model:value="selectValue" placeholder="请选择">
              <a-select-option value="option1">选项1</a-select-option>
              <a-select-option value="option2">选项2</a-select-option>
              <a-select-option value="option3">选项3</a-select-option>
            </a-select>
            <a-date-picker v-model:value="dateValue" placeholder="选择日期" />
            <a-time-picker v-model:value="timeValue" placeholder="选择时间" />
          </div>
        </div>
      </div>
    </a-card>

    <!-- 表格和列表 -->
    <a-card title="表格和列表" class="tech-card">
      <div class="space-y-6">
        <!-- 简单表格 -->
        <div>
          <h4 class="font-semibold mb-3">表格</h4>
          <a-table :columns="tableColumns" :data-source="tableData" size="small" />
        </div>

        <!-- 列表 -->
        <div>
          <h4 class="font-semibold mb-3">列表</h4>
          <a-list :data-source="listData" item-layout="horizontal">
            <template #renderItem="{ item }">
              <a-list-item>
                <template #actions>
                  <a>编辑</a>
                  <a>删除</a>
                </template>
                <a-list-item-meta :description="item.description">
                  <template #title>{{ item.title }}</template>
                  <template #avatar>
                    <a-avatar :src="item.avatar" />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
    </a-card>

    <!-- 反馈组件 -->
    <a-card title="反馈组件" class="tech-card">
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-3">消息提示</h4>
          <div class="space-x-2">
            <a-button @click="showSuccess">成功</a-button>
            <a-button @click="showInfo">信息</a-button>
            <a-button @click="showWarning">警告</a-button>
            <a-button @click="showError">错误</a-button>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-3">通知</h4>
          <div class="space-x-2">
            <a-button @click="openNotification">打开通知</a-button>
            <a-button @click="openModal">打开模态框</a-button>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-3">进度条</h4>
          <div class="space-y-2">
            <a-progress :percent="progressValue" />
            <a-progress :percent="progressValue" status="active" />
            <a-progress :percent="progressValue" type="circle" :width="80" />
          </div>
          <div class="mt-2 space-x-2">
            <a-button @click="decreaseProgress" :disabled="progressValue <= 0">-</a-button>
            <a-button @click="increaseProgress" :disabled="progressValue >= 100">+</a-button>
          </div>
        </div>
      </div>
    </a-card>

    <!-- UnoCSS 样式示例 -->
    <a-card title="UnoCSS 样式示例" class="tech-card">
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-3">响应式网格</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-blue-100 p-4 rounded-lg text-center">
              <div class="text-blue-600 text-2xl mb-2">📱</div>
              <div class="font-semibold">移动端</div>
            </div>
            <div class="bg-green-100 p-4 rounded-lg text-center">
              <div class="text-green-600 text-2xl mb-2">💻</div>
              <div class="font-semibold">平板</div>
            </div>
            <div class="bg-purple-100 p-4 rounded-lg text-center">
              <div class="text-purple-600 text-2xl mb-2">🖥️</div>
              <div class="font-semibold">桌面</div>
            </div>
            <div class="bg-orange-100 p-4 rounded-lg text-center">
              <div class="text-orange-600 text-2xl mb-2">📺</div>
              <div class="font-semibold">大屏</div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-3">动画效果</h4>
          <div class="flex space-x-4">
            <div class="w-16 h-16 bg-blue-500 rounded-lg animate-pulse"></div>
            <div class="w-16 h-16 bg-green-500 rounded-lg animate-bounce"></div>
            <div class="w-16 h-16 bg-purple-500 rounded-lg animate-spin"></div>
            <div class="w-16 h-16 bg-orange-500 rounded-lg animate-ping"></div>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-3">渐变背景</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"></div>
            <div class="h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg"></div>
            <div class="h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg"></div>
            <div class="h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message, notification, Modal } from 'ant-design-vue';

// 表单数据
const inputValue = ref('');
const passwordValue = ref('');
const searchValue = ref('');
const textareaValue = ref('');
const selectValue = ref(undefined);
const dateValue = ref(undefined);
const timeValue = ref(undefined);

// 进度条
const progressValue = ref(30);

// 表格数据
const tableColumns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '地址', dataIndex: 'address', key: 'address' },
];

const tableData = [
  { key: '1', name: '张三', age: 28, address: '北京市朝阳区' },
  { key: '2', name: '李四', age: 32, address: '上海市浦东新区' },
  { key: '3', name: '王五', age: 25, address: '深圳市南山区' },
];

// 列表数据
const listData = [
  {
    title: '第一个项目',
    description: '这是第一个项目的描述信息',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    title: '第二个项目',
    description: '这是第二个项目的描述信息',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    title: '第三个项目',
    description: '这是第三个项目的描述信息',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
];

// 方法
const onSearch = (value: string) => {
  message.info(`搜索: ${value}`);
};

const showSuccess = () => {
  message.success('这是一条成功消息');
};

const showInfo = () => {
  message.info('这是一条信息消息');
};

const showWarning = () => {
  message.warning('这是一条警告消息');
};

const showError = () => {
  message.error('这是一条错误消息');
};

const openNotification = () => {
  notification.info({
    message: '通知标题',
    description: '这是一条通知的详细描述信息，可以是比较长的文本内容。',
    duration: 4.5,
  });
};

const openModal = () => {
  Modal.info({
    title: '模态框标题',
    content: '这是模态框的内容，可以在这里显示更多详细信息。',
  });
};

const increaseProgress = () => {
  if (progressValue.value < 100) {
    progressValue.value += 10;
  }
};

const decreaseProgress = () => {
  if (progressValue.value > 0) {
    progressValue.value -= 10;
  }
};
</script>

<style scoped>
/* 组件特定样式 */
</style>
