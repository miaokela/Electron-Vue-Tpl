import { createApp } from "vue";
import "virtual:uno.css";
import "./reset.css";
import "./tech-styles.css";
import Antd from "ant-design-vue";
import App from "./App.vue";

const app = createApp(App);

app.use(Antd);
app.mount("#app");
