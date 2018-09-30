<template>
  <div class="hs_contend "v-show="this.$store.state.comment.sideBarShow">
    <div class="hs_heart row-center">管理系统</div>
    <div class="hs_index row-center" @click="goIndex()">首页</div>

    <div class="hs_list_content">
    <div
         v-for="(menu,index) in menuList"
         class="hs_list"
    >
      <div
        @click ="getList(index)"
        class="hs_title row-center"
      >
        {{menu.name}}
      </div>
      <transition name="fade">
      <div
        class="hs_list"
         v-if="menu.id<0"
      >
      <div
        :class="list.url === currentPage ? 'hs_meau_active  row-center' : 'hs_meau row-center'"
        v-for="(list, index) in menu.list"
        @click="goPage(list.url,list.name)"
      >
    {{list.name}}
      </div>
      </div>
      </transition>
    </div>
    </div>


  </div>
</template>

<script>
    export default {
      watch:{
        currentPage:function(val,oldval){
/*          for(var i=0;i<this.pageList.length;i++){
            if(val===this.pageList[i].path){
              this.pageIndex=i
              if( document.getElementById(i)!=null){
                document.getElementById(i).scrollIntoView();
              }

            }
          }*/
        },
      },
      created () {
     //   this.menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]')
      },
      data(){
        return {
          isShow :false,
          menuList :[
            {
              name: '示例1',
              id: 1,
              list: [
                {
                  url: '/page1',
                  name: 'page1'
                },
                {
                  url: '/page2',
                  name: 'page2'
                }
              ]
            },
            {
              name: '示例2',
              id: 1,
              list: [
                {
                  url: '/page3',
                  name: 'page3'
                },
                {
                  url: '/page4',
                  name: 'page4'
                }
              ]
            },
            {
              name: '示例3',
              id: 1,
              list: [
                {
                  url: '/page5',
                  name: 'page5'
                },
                {
                  url: '/page6',
                  name: 'page6'
                }
              ],
              list: [
                {
                  url: '/page7',
                  name: 'page7'
                },
                {
                  url: '/page8',
                  name: 'page8'
                }
              ]
            }


          ],
          pageIndex: ''
        }
      },
      methods: {
        getList(s){
          this.menuList[s].id=-1*this.menuList[s].id
          this.$forceUpdate();
        },
        goPage(s,e){
          // 将页面信息注册到store
          //表单模板将根据currentPage信息加载不同的页面信息
          this.$store.dispatch("comment/updateCurrentPage",s)
          let page={
            path: s,
            name: e
          }
          this.$store.dispatch("comment/addPageList",page)
          this.$router.push({ path: 'infoModel' })
        },
        goIndex(){
          this.$router.push({ path: 'infoModel' })
        }
      },
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
.hs_contend{
  height: 100%;width: 12%;
}
.hs_list{
  width: 100%;overflow-y:auto;
}
.hs_list_content{
  width: 100%;overflow-y:auto;height: 80%;
}
.hs_index{
  height: 10%;width: 100%;font-weight: bold;font-size: 16px;color: slategray;
}
.hs_meau{
  width: 100%;height: 40px;font-size: 14px;color: #ababab;
}
.hs_meau_active{
    width: 100%;height: 40px;font-size: 14px;color: #f88d6f;
}
.hs_title{
  width: 100%;height: 50px;font-weight: bold;font-size: 13px;color: #7f7f7f;
  }
.hs_heart{
    height: 10%;width: 100%;background-color: #97d7fb; color: white;font-size: 16px;font-weight: bolder;
  }
</style>
