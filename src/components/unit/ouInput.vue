<template>
    <div class="inputStyle row-flex-end" :class="[this.size,this.type]"   :style="{
        borderRadius:this.radius,
        height:this.height,
        width:this.width,
        fontSize:this.fontSize
        }"
    >
      <input class="iStyle"  :placeholder="this.placeholder" v-model="currentValue">
    </div>
</template>

<script>
    export default {
      name: "",
      props: {
        value:String,
        size: String,
        type: String,
        radius:String,
        height:String,
        width:String,
        fontSize:String,
        placeholder:String,
        value:String,
        required: false,
      },
      computed:{
        currentValue: {
          // 动态计算currentValue的值
          get:function() {
            return this.value;
            // 将props中的value赋值给currentValue
            },
          set:function(val) {
            this.$emit('input', val);
          }
          // 通过$emit触发父组件
        }
        }


      }
</script>

<style scoped>
  .m{
    height: 30px;
    width: 100px;

  }
  .l{
    height: 30px;
    width: 250px;
  }
  .xl{
    height: 35px;
    width: 300px;
  }
  .xxl{
    height: 45px;
    width: 350px;
  }


.inputStyle{
  height: 30px;
  width: 200px;
  border-radius: 3px;
  outline: none;
  border: none;
  border: 1px solid #9c9c9c;
}
.iStyle{
  height: 28px;
  width: 80%;
  outline: none;
  border: none;
  margin-right: 10px ;
}
  .noBorder{
    height: 30px;
    width: 200px;
    outline: none;
    border: none;
  }
  .line{
    height: 30px;
    width: 200px;
    outline: none;
    border: none;
    border-bottom: 1px solid #9c9c9c;
  }
</style>
