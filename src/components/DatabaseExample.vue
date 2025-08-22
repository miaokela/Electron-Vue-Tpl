<template>
  <div class="space-y-6">
    <!-- 数据库连接状态 -->
    <a-card title="数据库连接" class="tech-card">
      <div class="flex items-center space-x-4 mb-4">
        <a-badge :status="dbStatus === 'connected' ? 'success' : 'error'" />
        <span>{{ dbStatus === 'connected' ? '已连接' : '未连接' }}</span>
        <a-button @click="initDatabase" size="small" type="primary">
          初始化数据库
        </a-button>
      </div>
    </a-card>

    <!-- 用户管理 -->
    <a-card title="用户管理示例" class="tech-card">
      <!-- 添加用户表单 -->
      <div class="mb-6">
        <h4 class="font-semibold mb-3">添加新用户</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a-input
            v-model:value="newUser.name"
            placeholder="姓名"
            :disabled="dbStatus !== 'connected'"
          />
          <a-input
            v-model:value="newUser.email"
            placeholder="邮箱"
            :disabled="dbStatus !== 'connected'"
          />
          <a-button
            @click="addUser"
            type="primary"
            :disabled="!newUser.name || !newUser.email || dbStatus !== 'connected'"
            :loading="adding"
          >
            添加用户
          </a-button>
        </div>
      </div>

      <!-- 用户列表 -->
      <div>
        <div class="flex justify-between items-center mb-3">
          <h4 class="font-semibold">用户列表</h4>
          <a-button @click="loadUsers" size="small" :loading="loading">
            刷新
          </a-button>
        </div>
        
        <a-table 
          :columns="columns" 
          :data-source="users" 
          :pagination="false"
          size="small"
          :loading="loading"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <a-button 
                @click="deleteUser(record.id)" 
                size="small" 
                danger 
                type="text"
              >
                删除
              </a-button>
            </template>
          </template>
        </a-table>
      </div>
    </a-card>

    <!-- 数据库统计 -->
    <a-card title="数据库统计" class="tech-card">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="stat-item">
          <div class="stat-number">{{ users.length }}</div>
          <div class="stat-label">总用户数</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ recentUsers }}</div>
          <div class="stat-label">今日新增</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1</div>
          <div class="stat-label">数据表数</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ dbSize }}</div>
          <div class="stat-label">数据库大小</div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { message } from 'ant-design-vue';

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

const dbStatus = ref<'connected' | 'disconnected'>('disconnected');
const users = ref<User[]>([]);
const loading = ref(false);
const adding = ref(false);
const dbSize = ref('--');

const newUser = ref({
  name: '',
  email: ''
});

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: '操作',
    key: 'action',
    width: 100,
  },
];

const recentUsers = computed(() => {
  const today = new Date().toISOString().split('T')[0];
  return users.value.filter(user => 
    user.created_at.startsWith(today)
  ).length;
});

const initDatabase = async () => {
  try {
    // 这里应该调用 IPC 来初始化数据库
    // const result = await window.electronAPI.initDatabase();
    
    // 模拟数据库初始化
    await new Promise(resolve => setTimeout(resolve, 1000));
    dbStatus.value = 'connected';
    message.success('数据库初始化成功');
    loadUsers();
  } catch (error) {
    console.error('Database init error:', error);
    message.error('数据库初始化失败');
  }
};

const loadUsers = async () => {
  loading.value = true;
  try {
    // 这里应该调用 IPC 来获取用户数据
    // const result = await window.electronAPI.getUsers();
    
    // 模拟数据
    await new Promise(resolve => setTimeout(resolve, 500));
    users.value = [
      {
        id: 1,
        name: '张三',
        email: 'zhangsan@example.com',
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        name: '李四',
        email: 'lisi@example.com',
        created_at: new Date().toISOString()
      }
    ];
    dbSize.value = '2.5 KB';
  } catch (error) {
    console.error('Load users error:', error);
    message.error('加载用户数据失败');
  } finally {
    loading.value = false;
  }
};

const addUser = async () => {
  adding.value = true;
  try {
    // 这里应该调用 IPC 来添加用户
    // const result = await window.electronAPI.addUser(newUser.value);
    
    // 模拟添加用户
    await new Promise(resolve => setTimeout(resolve, 500));
    const user: User = {
      id: Date.now(),
      name: newUser.value.name,
      email: newUser.value.email,
      created_at: new Date().toISOString()
    };
    users.value.push(user);
    
    newUser.value = { name: '', email: '' };
    message.success('用户添加成功');
  } catch (error) {
    console.error('Add user error:', error);
    message.error('添加用户失败');
  } finally {
    adding.value = false;
  }
};

const deleteUser = async (id: number) => {
  try {
    // 这里应该调用 IPC 来删除用户
    // await window.electronAPI.deleteUser(id);
    
    // 模拟删除用户
    await new Promise(resolve => setTimeout(resolve, 300));
    users.value = users.value.filter(user => user.id !== id);
    message.success('用户删除成功');
  } catch (error) {
    console.error('Delete user error:', error);
    message.error('删除用户失败');
  }
};

onMounted(() => {
  // 检查数据库连接状态
  // 在实际应用中，这里应该调用 IPC 来检查数据库状态
});
</script>

<style scoped>
.stat-item {
  @apply text-center p-4 bg-gray-50 rounded-lg;
}

.stat-number {
  @apply text-2xl font-bold text-blue-600;
}

.stat-label {
  @apply text-sm text-gray-500 mt-1;
}
</style>
