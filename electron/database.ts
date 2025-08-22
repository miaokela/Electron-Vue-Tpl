// 数据库模块的安全包装器，处理 ES Module 和打包环境的兼容性
import { fileURLToPath } from "url";
import path from "path";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let sqlite3: any;
let open: any;

try {
  // 在 ES Module 环境中使用 require 来加载 CommonJS 模块
  const require = createRequire(import.meta.url);
  sqlite3 = require("sqlite3");
  
  // 动态导入 sqlite
  const sqliteModule = await import("sqlite");
  open = sqliteModule.open;
  
  console.log("✅ SQLite modules loaded successfully");
} catch (error) {
  console.error("❌ Failed to load SQLite modules:", error);
  
  // 提供一个简单的 fallback 实现
  sqlite3 = {
    Database: class MockDatabase {
      constructor(path: string, callback?: Function) {
        console.warn("Using mock SQLite database");
        if (callback) callback(new Error("SQLite3 not available"));
      }
    }
  };
  
  open = async () => {
    throw new Error("SQLite not available in this environment");
  };
}

export { sqlite3, open };
