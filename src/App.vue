<template>
  <div class="common-layout">
    <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="https://qcq-wxl.oss-cn-beijing.aliyuncs.com/1.mp4" type="video/mp4">
      </video>
    </div>
    <el-button v-btn class="el-button" key="切换背景" type="success" text>切换背景</el-button>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
  body{
    margin: 0;
  }
  .el-button:hover {
    background: #67c23a !important;
    color: white !important;
    font-weight: bold;
    border-color: #67c23a !important;
  }
  /*按钮点击*/
  .el-button:focus {
    background: #67c23a !important;
    color: white !important;
    font-weight: bold;
    border-color: #67c23a !important;
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
