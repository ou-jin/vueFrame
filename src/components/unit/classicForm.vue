<template>
  <div class="content column-start-center">
    <div class="column10 row-center fontStyle3">{{title}}</div>
    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数1:</div>
      <div class="row70 row-center fontStyle3">
        <OuInput width="70%" radius="8px" placeholder="请输入参数名"  ></OuInput>
      </div>
    </div>
    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数2:</div>
      <div class="row70 row-center fontStyle3">
        <OuInput width="70%"  radius="8px" placeholder="请输入参数名"  ></OuInput>
      </div>
    </div>

    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数3:</div>
      <div class="row70 row-center fontStyle3">
        <OuInput width="70%"  radius="8px" placeholder="请输入参数名"  ></OuInput>
      </div>
    </div>

    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数4:</div>
      <div class="row70 row-center fontStyle3">
        <el-checkbox-group v-model="form.p4" class="column90 column-start-center" >
        <div class="column50 row-center">
          <el-checkbox label="参数1" name="p4"></el-checkbox>
          <el-checkbox label="参数2" name="p4"></el-checkbox>
        </div>
          <div class="column50 row-center">
            <el-checkbox label="参数3" name="p4"></el-checkbox>
            <el-checkbox label="参数4" name="p4"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>

    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数5:</div>
      <div class="row70 row-center fontStyle3">
        <el-radio-group v-model="form.p5">
          <el-radio label="参数1"></el-radio>
          <el-radio label="参数2"></el-radio>
        </el-radio-group>
      </div>
    </div>

    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数6:</div>
      <div class="row70 row-center fontStyle3">
        <el-switch v-model="form.p6"></el-switch>
      </div>
    </div>

    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数7:</div>
      <div class="row70 row-center fontStyle3">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.p7" style="width: 70%;"size="small"></el-date-picker>
      </div>
    </div>

    <div class="column10 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数8:</div>
      <div class="row70 row-center fontStyle3">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.p8" style="width: 70%;" size="small"></el-time-picker>
      </div>
    </div>

    <div class="column15 borderStyle3 row-center" >
      <div class="row30 row-center fontStyle3">参数9:</div>
      <div class="row70 row-center fontStyle3">
        <el-input type="textarea" v-model="form.p9"  style="width: 70%;"></el-input>

      </div>
    </div>
    <div class="column10 row-center" >
      <OuButton border="5px" width="100%" @click="submit" value="提交"></OuButton>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          title:'新增',
          form:{
            p1:'',
            p2:'',
            p3:'',
            p4:[],
            p5:'',
            p6:false,
            p7:'',
            p8:'',
            p9:'',
          }
        }
      },
      methods:{
        submit(){
        }
      },
        name: ""
    }
</script>

<style scoped>

</style>
