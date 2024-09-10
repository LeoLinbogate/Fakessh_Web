<template>
  <div class="iframe-container">
    <iframe
      src="https://livethreatmap.radware.com/"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ThreatMap",
};
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
