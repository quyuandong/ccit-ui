<template>
  <div class="ccit-ui-page-header">
    <div class="head">
      <div class="main-title">{{ title }}</div>
      <div class="sub-title">
        <!-- <slot name="subTitle">{{ aaa }}测试与英语</slot> -->
        <slot name="type">{{ type }}</slot>
      </div>
    </div>
    <div class="page-main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CPageHeader",
  props: {
    title: { type: String, default: "我是一个测试的合同" },
    type: {
      type: String,
      default: "info",
    },
  },
};
</script>

<style lang="scss" >
.ccit-ui-page-header {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .head {
    padding: 15px 40px;
    width: 100%;
    border-bottom: 1px solid #f0f2f5;
    .main-title {
      font-weight: 600;
      font-size: 20px;
      // line-height: 60px;
    }
    .sub-title {
      padding-top: 15px;
      color: #909399;
      font-size: 14px;
    }
  }

  .page-main {
    padding: 5px 0px;
    background-color: #f0f2f5;
    width: 100%;
    min-height: 100%;
  }
}
</style>
