<template>
<button class="phoneButtonStyle" :class="[this.size,this.type]"
        :style="{
        borderRadius:this.radius,
        height:this.height,
        width:this.width,
        backgroundColor:this.backgroundColor,
        fontSize:this.fontSize
        }"
        @click="click"
>{{this.value}}</button>
</template>

<script>
    export default {

      props: {
        value:String,
        size: String,
        type: String,
        radius:String,
        height:String,
        width:String,
        backgroundColor:String,
        fontSize:String,
        required: false,

      },
      data(){
        return{
        }
      },
      methods:{
        click(){
          this.$emit('click')
        }
      },
        name: ""
    }
</script>

<style scoped>
  .phoneButtonStyle{
    height: 35px;
    width: 85px;
    outline: none;
    border: none;
    background-color: #409EFF;
    border-radius: 5px ;
    color: white;
    font-size: 12px;
  }
  .m{
     height: 30px;
     width: 60px;
   }
  .l{
    height: 40px;
    width: 90px;
  }
  .xl{
    height: 45px;
    width: 120px;
  }
  .xxl{
    height: 50px;
    width: 240px;
  }
  .warm{
  background-color: #E6A23C;
  }
  .info{
    background-color: #909399;
  }
  .danger{
    background-color: #F56C6C;
  }
  .success{
    background-color: #67C23A;
  }
</style>
