<template>
  <div class="ccit-ui-page-header">
    <div class="head">
      <div class="main-title">{{ title }}</div>
      <div class="sub-title">
        <slot name="type" :type="type">{{ type }}</slot>
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
    title: { type: String, default: "" },
    type: { type: String, default: "" },
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
