<template>
  <div class="circle-container">
    <div class="circle">
      <div class="totalNumber">{{ totalNumber }}</div>
      <div class="description">{{ totalDesc }}</div>
    </div>
    <div class="circle">
      <div class="totalNumber">{{ addrNumber }}</div>
      <div class="description">{{ addrDesc }}</div>
    </div>
    <div class="circle">
      <div class="totalNumber">{{ usernameNumber }}</div>
      <div class="description">{{ userDesc }}</div>
    </div>
    <div class="circle">
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
.circle-container {
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 均匀分配空间 */
  width: 50%; /* 容器总宽度，根据需要调整 */
}

.circle {
  width: 100px; /* 固定宽度 */
  height: 100px; /* 固定高度 */
  border-radius: 50%;
  border: 3px solid rgba(19, 100, 19, 0.503);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.totalNumber {
  font-size: 20px;
  color: rgb(235, 160, 39);
}

.description {
  font-size: 14px;
  color: gray;
  margin-top: 10px; /* 调整间距 */
}
</style>
