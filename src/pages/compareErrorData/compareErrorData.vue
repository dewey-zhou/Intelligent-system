<template>
  <div class="content">
    <div class="contenttitle">
      <span class="fontset">相同故障数据分析比较</span>
    </div>
    <div class="timeblock">
      <label for="starttime">开始时间：</label><input id="starttime" class="timeinputbox" type="date" value="2020-02-02" />
      <label for="endtime" class="leftspacing">结束时间：</label><input id="endtime" class="timeinputbox" type="date" value="2020-02-02" />
      <button type="submit" class="btn btn-default btnset leftspacing">确定</button>
    </div>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
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
