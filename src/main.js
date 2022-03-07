import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./tailwind.css";

const app = createApp(App);

app.config.globalProperties.$filters = {
  rewriteDate(value) {
    const date = new Date(value);
    return date.toLocaleString(["en-US"], {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  },
};

app.use(router);
app.use(store);
app.mount("#app");
