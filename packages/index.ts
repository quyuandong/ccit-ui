// 全局注册组件
// import "ant-design-vue/dist/reset.css";
import * as utils from "./utils";
import JButton from "./JButton";
import CModalCard from "./CModalCard";
import CPageHeader from "./CPageHeader";

// 存储主题配置信息
const defaultThemeConfig = {
    token: {
      colorPrimary: "#00b96b",
    },
  },
  // 存储组件列表
  components = [JButton, CPageHeader, CModalCard],
  // 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install = function (Vue: any) {
    // 全局注册所有的组件
    components.forEach((item) => {
      Vue.component(item.name, item);
    });
  };

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 按需引入
export { utils, defaultThemeConfig, JButton, CPageHeader, CModalCard };

// 全量导出
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};
