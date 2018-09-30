<template>
    <div class="content column-start-center">
      <div class="column25 borderStyle3 row-center fontStyle3" >
        登录
      </div>

      <div class="column25 borderStyle3 row-center" >
        <div class="row30 row-center fontStyle3">用户名:</div>
        <div class="row70 row-center fontStyle3">
          <OuInput width="70%" radius="8px" placeholder="请输入用户名" v-model="loginFrom.userName"></OuInput>
        </div>
      </div>
      <div class="column25 borderStyle3 row-center" >
        <div class="row30 row-center fontStyle3">密码:</div>
        <div class="row70 row-center fontStyle3">
          <OuInput width="70%"  radius="8px" placeholder="请输入密码" v-model="loginFrom.passWord"></OuInput>
        </div>
      </div>
      <div class="column30 row-center" >
          <OuButton border="5px" width="100%" @click="login" value="登录"></OuButton>
      </div>
    </div>
</template>

<script>
  import { formCheck } from '../../tools/objectCheck.js';
    export default {
      data(){
        return{
          loginFrom:{
            userName:'',
            passWord:''
          }
        }
      },
    methods:{
      login(){
        if(formCheck(this.loginFrom)){
          this.$message(
            '用户名='+this.loginFrom.userName+'密码='+this.loginFrom.passWord
          );
        }


      }
    },
        name: ""
    }
</script>

<style scoped>

</style>
