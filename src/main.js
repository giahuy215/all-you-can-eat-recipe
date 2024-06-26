import { createApp } from "vue";
import "./style.css";
import "./assets/styles/global.css";
import App from "./App.vue";
import router from "./router/router";
import Antd from "ant-design-vue";

const app = createApp(App);

app.use(router);
app.use(Antd);

app.mount("#app");
