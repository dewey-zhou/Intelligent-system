<template>
  <div class="content">
    <div class="contenttitle">
      <span class="fontset">相同故障数据分析比较</span>
    </div>
    <div class="block">
    <span class="demonstration">开始时间</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style >

</style>
