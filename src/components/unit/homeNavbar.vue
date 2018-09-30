<template>
  <div class="hn_contend column-center-start">
    <div class="row-space-between hn_line">
      <div class="hn_span row-center">
       <!-- <img src="../img/list.png" class="imgStyle1" @click="showSideBar">-->
      </div>
      <div class="hn_span">

      </div>
    </div>
    <div class="hn_line row-flex-start">
      <div class="hn_span" @click="goRight">
      <!--  <img src="../img/left.png" class="pa_img1">-->
      </div>
<div class="page_content row-flex-start">
<div class="page_line row-flex-start " ref='pageBox'>
<div :class="timeIndex === index ? 'hn_page  row-center' : 'hn_page_clicked row-center'"
     v-for="(item, index) in this.$store.state.comment.pageList" :id="index"
>
 <div :class="'/'+item.name === currentPage?'row-center page_name pageClicked':'row-center page_name'" @click="goPage(item.path, index)">{{item.name}}</div>
  <div class="row-center pa_icon">
   <img src="../../img/delete.png" class="pa_img" @click="deletePage(item.path)">
  </div>
</div>
</div>
  </div>
      <div class="hn_span"  >
    <!--    <img src="../img/right.png" class="pa_img1" @click="goLeft">
        <img src="../img/delete.png" class="pa_img1" @click="deleteAll">-->
      </div>

  </div>
  </div>
</template>

<script>
  export default {

    data(){
      return{
        pageSite:0,
        timeIndex:""

      }
    },
    watch:{
      currentPage:function(val,oldval){
    /*    for(var i=0;i<this.pageList.length;i++){
          if(val===this.pageList[i].path){
            this.timeIndex=i
            if( document.getElementById(i)!=null){
              document.getElementById(i).scrollIntoView();
            }

          }
        }*/
      },
    },
    methods:{
      //通过减小scrollLeft的值让导航栏左移，避免pageSite无限小
      //当scrollLeft<pageSite时停止操作
      goRight(){
        if(this.$refs.pageBox.scrollLeft<=this.pageSite){
          this.pageSite=this.pageSite-200;

          this.$refs.pageBox.scrollLeft=this.pageSite;
        }
      },
      //通过增加scrollLeft的值让导航栏左移，避免pageSite无限大
      //当scrollLeft>pageSite时停止操作
      goLeft(){
        if(this.$refs.pageBox.scrollLeft>=this.pageSite){
          this.pageSite=this.pageSite+200;

          this.$refs.pageBox.scrollLeft=this.pageSite;
        }
      },
      //通过删除store中的pageList中的当前页面,更新导航页面
      //并更新currentPage的值
 /*     deletePage(s){
        this.$store.dispatch("comment/deleteOnePage",s);


       //如果关闭的是展示页面
        //将active下标移至开头
        //调整currentPage为pageList的首位
        //并跳转路由
        if(s==this.currentPage){
          this.timeIndex=0;
          this.$store.dispatch("comment/updateCurrentPage",this.pageList[0].path);
          this.$router.push({ path: this.pageList[0].path })
        }
      },*/
      deletePage(s){
        this.$store.dispatch("comment/updateCurrentPage","Index");
        this.$store.dispatch("comment/deleteOnePage",s);
        this.$router.push({ path:'infoModel' })
      },
     showSideBar() {
        this.$store.dispatch("comment/updateSideBarShow",!(this.$store.state.comment.sideBarShow));
      },
      //1*页面跳转
      //2*更新active标识
      //3*更新store中的currentPage
      goPage(s, e){
        console.log(s)
        this.timeIndex=e
        this.$router.push({ path:'infoModel'})
        this.$store.dispatch("comment/updateCurrentPage",s)
      },
      deleteAll(){

      }
    },
    //获取当前页面和页面列表并将其注册到data中
     computed: {
      currentPage:{
        get() {
          return this.$store.state.comment.currentPage;
        }
      },
       pageList:{
        get() {
          return this.$store.state.comment.pageList;
        }
       }
    },
    name: ""
  }
</script>

<style scoped>
  .hn_contend{
    height: 10%;width: 100%;box-shadow:0px 2px 0px 0px #f0f0f0; background-color: white;margin-bottom: 1%;
  }
  .hn_span{
    height: 100%;width: 20px;
  }
  .hn_page{
    height: 40px;width: 150px;margin-right: 20px;font-size: 12px;font-weight: bold;color: #2c3e50;
    border-radius: 15px;
  }
  .hn_page_clicked{
    height: 40px;width: 150px;margin-right: 20px;font-size: 12px;font-weight: bold;color: #2c3e50;
    border-radius: 15px;
  }
  .imgStyle1{
    height: 80%;width: 25%;
  }
  .hn_line{
    width: 100%;height: 50%;
  }
  .page_name{
    height: 50px;width: 100px;
  }
  .pa_icon{
    height: 35px;width: 35px;
  }
  .pa_img{
    height: 10px;width: 10px;
  }
  .pageClicked{
    color: #a2a2a2;
  }
  .pa_img1{
    height: 15px;width: 15px;margin-right: 15px;
  }
  .page_content{
    overflow:hidden;width: 800px;height: 50px;
  }
  .page_line{
    width: 800px;height: 100px;  overflow-x: scroll;overflow-y: hidden;
    /* 内容会被裁剪，会以滚动条显示 */
    white-space: nowrap;  /* 不换行 */
  }
</style>
