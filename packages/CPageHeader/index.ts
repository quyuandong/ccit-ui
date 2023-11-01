import CPageHeader from "./src/index.vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
CPageHeader.install = function (Vue: any) {
  Vue.component(CPageHeader.name, CPageHeader);
};

export default CPageHeader;
