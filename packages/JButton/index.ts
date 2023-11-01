import JButton from "./src/index.vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
JButton.install = function (Vue: any) {
  Vue.component(JButton.name, JButton);
};

export default JButton;
