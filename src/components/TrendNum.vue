<template>
  <div class="rectangle-container">
    <div class="rectangle">
      <div class="totalNumber">{{ totalNumber }}</div>
      <div class="description">{{ totalDesc }}</div>
    </div>
    <div class="rectangle spaced">
      <div class="totalNumber">{{ addrNumber }}</div>
      <div class="description">{{ addrDesc }}</div>
    </div>
    <div class="rectangle spaced">
      <div class="totalNumber">{{ usernameNumber }}</div>
      <div class="description">{{ userDesc }}</div>
    </div>
    <div class="rectangle spaced">
      <div class="totalNumber">{{ passwdNumber }}</div>
      <div class="description">{{ passDesc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GradientChart",
  data() {
    return {
      totalDesc: "攻击总数",
      addrDesc: "收录地址",
      userDesc: "收录用户名",
      passDesc: "收录信息串",
    };
  },
  props: {
    totalNumber: {
      type: [String, Number],
      required: true,
    },
    addrNumber: {
      type: [String, Number],
      required: true,
    },
    usernameNumber: {
      type: [String, Number],
      required: true,
    },
    passwdNumber: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.rectangle-container {
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 均匀分配空间 */
  width: 100%; /* 容器总宽度，根据需要调整 */
  padding: 0;
}

.rectangle {
  width: 25%;
  height: 80px; /* 固定高度 */
  border: 2px solid #1da2e0;
  border-radius: 10px; /* 圆角设置为 3px */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spaced {
  margin-left: 15px; /* 从第二个矩形开始增加左边距 */
}

.totalNumber {
  font-size: 25px;
  color: rgb(89, 136, 229);
}

.description {
  font-size: 14px;
  color: gray;
  margin-top: 10px; /* 调整间距 */
}
</style>
