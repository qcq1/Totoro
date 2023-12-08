<template>
  <div class="videoContainer">
    <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
      <source src="https://qcq-wxl.oss-cn-beijing.aliyuncs.com/1.mp4" type="video/mp4">
    </video>
  </div>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <el-button v-btn class="el-button" text>🎨</el-button>
      </el-header>
      <el-main class="el-main">
        <el-avatar class="el-avatar" shape="circle"/>
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
  .common-layout .el-header{
    padding: 0;
    --el-header-height: 6.5vh;
  }
  .common-layout .el-main{
    padding: 0;
    height: 93.5vh;
  }
  .common-layout .el-avatar{
    --el-avatar-size: 3.5vw;
  }
  .common-layout .el-button{
    float: right;
    --el-font-size-base: 1vw ;
    min-width: 5vw;
    min-height: 5vh;
  }
  .common-layout .el-button:hover{
    background: #67c23a !important;
    color: white !important;
    font-weight: bold;
    border-color: #67c23a !important;
    zoom: 120%;
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
