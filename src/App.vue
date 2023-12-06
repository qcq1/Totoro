<template>
  <div class="videoContainer">
    <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
      <source src="https://qcq-wxl.oss-cn-beijing.aliyuncs.com/1.mp4" type="video/mp4">
    </video>
  </div>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0">
        <el-button v-btn class="green-button" text>🎨🎨🎨</el-button>
      </el-header>
      <el-main style="padding: 0">
        <iframe src="/static/HeartVue.html" style="width: 12vw;min-height: 24vh;border-width: 0;margin-left: 42vw"></iframe>
      </el-main>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
  body{
    margin: 0;
  }
  .green-button{
    float: right;
    min-width: 5vw;
    min-height: 5vh;
  }
  .green-button:hover {
    background: #67c23a !important;
    color: white !important;
    font-weight: bold;
    border-color: #67c23a !important;
    min-width: 6vw;
    min-height: 6vh;
  }
  .videoContainer{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -100;
  }

  .videoContainer:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(25,29,34,.65);
  }
</style>
