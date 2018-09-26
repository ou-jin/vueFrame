<template>
<div class="content row-flex-end">
    <img  v-for="(item,index) in statList" :src=item.imgUrl class="imgStyle1">

</div>
</template>

<script>
    export default {

      created(){
        console.log(this.aImg)
        console.log(this.uImg === undefined)
       /* var a = this.uImg === undefined?"../../img/axx.png":this.uImg
        var b = this.aImg === undefined?'../../img/xx.png':this.aImg*/
       var axx = {
          imgUrl: require("../../img/axx.png")
        }
        var xx = {
          imgUrl: require("../../img/xx.png")
        }
        for(var i=0; i<this.stat;i++){
          this.statList.push(xx);
        }
        if(5-this.stat>0){
          for(var i=0; i<5-this.stat;i++){
            this.statList.push(axx);
          }
        }
      },
      data(){
        return{
          statList:[],
          activeImg:this.aImg,
          unActiveImg:this.uImg

        }
      },
      props: {
        stat: Number,
        aImg:String,
        uImg:String,
        required: false

      },
        name: ""
    }
</script>

<style scoped>
  .imgStyle1{
    height: 15px;
    width: 15px;
    margin-right: 15px;
  }
</style>
