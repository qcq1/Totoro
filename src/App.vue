<template>
  <div class="common-layout">
    <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="https://qcq-wxl.oss-cn-beijing.aliyuncs.com/1.mp4" type="video/mp4">
      </video>
    </div>
    <el-container>
      <el-header></el-header>
      <el-main></el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
  body{
    margin: 0;
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
