<template>
  <div class="demo-modal-card">
    <div :class="title ? 'card-title' : ''">
      <slot name="title">
        <span class="card-title-main" v-if="title">【{{ title }}】</span>
        <span class="card-title-sub" v-if="subTitle && title">
          ({{ subTitle }})
        </span>
      </slot>
    </div>
    <div class="card-btn">
      <slot name="btn"></slot>
    </div>
    <div class="card-main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CModalCard",
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
  },
};
</script>

<style lang="scss"  >
.demo-modal-card {
  width: 97%;
  margin: 15px auto;
  padding: 5px 10px 15px;
  min-height: 200px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 4px #ccc;
  .card-title {
    line-height: 30px;
    border-bottom: 1px solid #f0f2f5;
    margin-bottom: 5px;

    &-main {
      font-size: 17px;
    }
    &-sub {
      color: #909399;
      font-size: 14px;
    }
  }
  .card-btn .el-button + .el-button {
    margin-bottom: 5px;
  }
  .card-main {
    margin-top: 10px;
  }
}
</style>
