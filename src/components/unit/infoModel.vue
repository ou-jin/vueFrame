<template>
    <div class="content column-start-center">
      <div class="column10 row-center fontStyle3"> 以 {{ this.$store.state.comment.currentPage}}为参数请求服务器对应接口加载数据</div>
      <div class="column90 row-center">
        <RowTable ></RowTable>
      </div>

    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
