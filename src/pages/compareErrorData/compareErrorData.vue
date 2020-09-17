<template>
  <div class="content">
    <div class="contenttitle">
      <span class="fontset">相同故障数据分析比较</span>
    </div>
    <div class="selector">
      <div class="machineSelect">
        <span class="fontTime">机床：</span>
        <el-select v-model="machine" multiple placeholder="请选择" >
          <el-option v-for="item in options" :key="item.value" :label="item.tool" :value="item.value"></el-option>
        </el-select>
      </div>
      <div>
        <span class="fontTime">故障选择：</span>
        <el-select v-model="fault" multiple placeholder="请选择" >
          <el-option v-for="item in options" :key="item.value" :label="item.error" :value="item.value" ></el-option>
        </el-select>
      </div>
      <div>
        <span class="fontTime">故障时间段：</span>
         <el-date-picker v-model="time1" type="daterange" range-separator="——" start-placeholder="开始日期" end-placeholder="结束日期" >
    </el-date-picker>
      </div>
        <span class="fontTime"></span><el-button type="primary" round size='mini'>重置</el-button>
        <span class="fontTime"></span><el-button type="primary" round size='mini'>确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '1',
        tool: 'ATM',
        error: '主轴故障'
      }, {
        value: '2',
        tool: 'MC三轴',
        error: '主轴故障'
      }, {
        value: '3',
        tool: 'MC四轴',
        error: '主轴故障'
      }, {
        value: '4',
        tool: 'MC五轴',
        error: '主轴故障'
      }, {
        value: '5',
        tool: 'SUPER TG',
        error: '主轴故障'
      }],
      machine: [],
      fault: [],
      time1: ''
    }
  }
}
</script>

<style >
.selector{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin:20px;
  width: 80%;
  margin-left: 10%;
}
.selector .fontTime{
  margin:0 10px;
  font-weight: 600;
  font-size: 18px;
}
</style>
