<template>
  <div class="content column-start-center">
    <div class="column20 borderStyle3 row-center fontStyle3" >
       注册
    </div>

    <div class="column15 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">用户名:</div>
      <div class="row70 row-center fontStyle3">
        <OuInput width="70%" radius="8px" placeholder="请输入用户名" v-model="loginFrom.userName"></OuInput>
      </div>
    </div>
    <div class="column15 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">密码:</div>
      <div class="row70 row-center fontStyle3">
        <OuInput width="70%"  radius="8px" placeholder="请输入密码" v-model="loginFrom.passWord"></OuInput>
      </div>
    </div>
    <div class="column15 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">手机号:</div>
      <div class="row70 row-center fontStyle3">
        <OuInput width="70%"  radius="8px" placeholder="请输入手机号" v-model="loginFrom.phone"></OuInput>
      </div>
    </div>
    <div class="column15 borderStyle3   row-center" >
      <div class="row30 row-center fontStyle3">验证码:</div>
      <div class="row70  row-center fontStyle3 ">
        <div class="row50 row-center "><OuInput width="100%"  radius="8px"
                                                placeholder="验证码" v-model="loginFrom.code"></OuInput></div>
        <div class="row50 row-center"><OuButton width="80%" value="1234" type="info"></OuButton></div>
      </div>
    </div>
    <div class="column20 row-center" >
      <OuButton border="5px" width="100%" @click="register" value="注册"></OuButton>
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
          passWord:'',
          code:'',
          phone:''
        }
      }
    },
    methods:{
      register(){
        this.$message(
          '用户名='+this.loginFrom.userName+'密码='+this.loginFrom.passWord+'验证码'+this.loginFrom.code+'手机号'+this.loginFrom.phone
        );

      }
    },
    name: ""
  }
</script>

<style scoped>

</style>
