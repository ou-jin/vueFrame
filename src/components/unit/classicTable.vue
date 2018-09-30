<template>
  <div class="content column-start-center">

    <div class="column15  fontStyle3 boxStyle5   ">
      <div class="row110  boxStyle6 ">
        <div class="content row-flex-start">
          <div class="row10 row-center  " v-for="item in titleList">
            {{item.param}}
          </div>
        </div>

      </div>
    </div>

    <div class="column85   boxStyle5">
      <div class="row110 boxStyle3">

        <div class="column15 row-flex-start fontStyle3 borderStyle3"
             v-for="item in paramList"
        >
          <div class="row10 row-center">{{item.p1}}</div>
          <div class="row10 row-center">{{item.p2}}</div>
          <div class="row10 row-center">{{item.p3}}</div>
          <div class="row10 row-center">{{item.p4}}</div>
          <div class="row10 row-center">{{item.p5}}</div>
          <div class="row10 row-center">{{item.p6}}</div>
          <div class="row10 row-center">{{item.p7}}</div>
          <div class="row10 row-center">{{item.p8}}</div>
          <div class="row10 row-center">{{item.p9}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        titleList:[
          {'param':'参数1'},
          {'param':'参数2'},
          {'param':'参数3'},
          {'param':'参数4'},
          {'param':'参数5'},
          {'param':'参数6'},
          {'param':'参数7'},
          {'param':'参数8'},
          {'param':'参数9'},
        ],
        paramList:[

          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },
          {
            p1:'p1',
            p2:'p2',
            p3:'p3',
            p4:'p4',
            p5:'p5',
            p6:'p6',
            p7:'p7',
            p8:'p8',
            p9:'p9',
          },


        ]

      }
    },
    name: ""
  }
</script>

<style scoped>

</style>
