<template>
  <div class="content column-start-center">
    <div class="column10 row-flex-end">
      <OuButton value="新增" height="90%" @click="add"></OuButton>
    </div>

   <div class="column15  fontStyle3 boxStyle5   ">
     <div class="row110  boxStyle6 ">
       <div class="content row-flex-start">
         <div class="row10 row-center  " v-for="item in titleList">
           {{item.param}}
         </div>
       </div>

     </div>
    </div>

    <div class="column75   boxStyle5">
      <div class="row110 boxStyle3">

      <div class="column15 row-flex-start fontStyle3 borderStyle3"
      v-for="(item,index) in paramList"
      >
        <div class="row10 row-center">{{item.p1}}</div>
        <div class="row10 row-center">{{item.p2}}</div>
        <div class="row10 row-center">{{item.p3}}</div>
        <div class="row10 row-center">{{item.p4}}</div>
        <div class="row10 row-center">{{item.p5}}</div>
        <div class="row10 row-center">{{item.p6}}</div>
        <div class="row10 row-center">{{item.p7}}</div>
        <div class="row10 row-center">{{item.p8}}</div>
        <div class="row10 row-center fontStyle6">
          <div class="row50 row-center" @click="edit(index)">修改</div>
          <div class="row50 row-center" @click="del(index)">删除</div>
        </div>
      </div>
    </div>
    </div>

    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <div class="content column-start-center">
        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数1:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%" radius="8px" placeholder="请输入参数名" v-model="form.p1" ></OuInput>
          </div>
        </div>
        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数2:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名" v-model="form.p2" ></OuInput>
          </div>
        </div>

        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数3:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名" v-model="form.p3" ></OuInput>
          </div>
        </div>

        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数4:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名"v-model="form.p4"  ></OuInput>
          </div>
        </div>


        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数5:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名" v-model="form.p5" ></OuInput>
          </div>
        </div>

        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数6:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名" v-model="form.p6" ></OuInput>
          </div>
        </div>

        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数7:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名"  v-model="form.p7"></OuInput>
          </div>
        </div>

        <div class="column10 borderStyle3 row-center" >
          <div class="row30 row-center fontStyle3">参数8:</div>
          <div class="row70 row-center fontStyle3">
            <OuInput width="70%"  radius="8px" placeholder="请输入参数名" v-model="form.p8" ></OuInput>
          </div>
        </div>


      </div>


      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="title==='新增'?addSubmit():editSubmit()">确 定</el-button>
  </span>


    </el-dialog>
  </div>




</template>

<script>
    export default {
      data(){
        return{
          title:'新增',
          titleList:[
            {'param':'参数1'},
            {'param':'参数2'},
            {'param':'参数3'},
            {'param':'参数4'},
            {'param':'参数5'},
            {'param':'参数6'},
            {'param':'参数7'},
            {'param':'参数8'},
            {'param':'操作'},
          ],
          paramList:[

            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },
            {
              'p1':'p1',
              'p2':'p2',
              'p3':'p3',
              'p4':'p4',
              'p5':'p5',
              'p6':'p6',
              'p7':'p7',
              'p8':'p8',
              'p9':'p9',
            },




          ],
          dialogVisible:false,
          form:{
            p1:'',
            p2:'',
            p3:'',
            p4:'',
            p5:'',
            p6:'',
            p7:'',
            p8:'',
            p9:'',
          },
          editFlag:''
        }
      },
      methods:{
        open(){
          this.dialogVisible = true
        },
        edit(s){
          this.title= '修改'
          this.dialogVisible = true
          this.form=this.paramList[s]
          this.editFlag = s
        },
        editSubmit(){
          this.dialogVisible = false
          this.paramList[this.editFlag]=this.form
          this.form={
            p1:'',
              p2:'',
              p3:'',
              p4:'',
              p5:'',
              p6:'',
              p7:'',
              p8:'',
              p9:'',
          }
        },
        add(){
          this.title= '新增'
          this.dialogVisible = true
        },
        addSubmit(){
          this.dialogVisible = false
          this.paramList.push(this.form)
          this.form={
            p1:'',
            p2:'',
            p3:'',
            p4:'',
            p5:'',
            p6:'',
            p7:'',
            p8:'',
            p9:'',
          }
        },
        del(s){
          console.log(s)
          this.paramList.splice(s,1)
        },
        handleClose(){
          this.dialogVisible = false
        }
      },
        name: ""
    }
</script>

<style scoped>

</style>
