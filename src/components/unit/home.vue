<template>
  <div class="content row-flex-start">
    <HomeSidebar></HomeSidebar>
    <div class="column-start-center h_content">
      <HomeNavbar></HomeNavbar>
      <div class="content_box">
      <HomeContent></HomeContent>
      </div>
    </div>

  </div>
</template>

<script>
  import HomeContent from './homeContent'
  import HomeNavbar from './homeNavbar'
  import HomeSidebar from './homeSidebar'
    export default {
      components: {
        HomeSidebar,
        HomeNavbar,
        HomeContent
      },
        name: ""
    }
</script>

<style scoped>
  .h_content{
    width: 88%;height: 100%;
    background-color: #f8f8f8;
  }
  .content_box{
    height: 85%;
    width: 98%;
    background-color: white;
  }
</style>
