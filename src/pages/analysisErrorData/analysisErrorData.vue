<template>
  <div class="content">
    <div class="contenttitle ">
      <span class="fontset">异常数据分析报告</span>
    </div>
    <div class="block">
      <span class="demonstration">开始时间:</span>
      <el-date-picker v-model="startTime" type="date" placeholder="选择开始日期"></el-date-picker>
      <span class="demonstration">结束时间:</span>
      <el-date-picker v-model="endTime" type="date" placeholder="选择结束日期"></el-date-picker>
      <el-button type="primary">确定</el-button>
    </div>
    <div class="tableset">
      <el-table :data="tableData" style="width: 80%" :row-class-name="tableRowClassName">
        <el-table-column prop="name" label="机床名称" style="width: 30%"></el-table-column>
        <el-table-column prop="state" label="机床状态" style="width: 30%"></el-table-column>
        <el-table-column prop="report" label="分析报告"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startTime: '',
      endTime: '',
      tableData: [{
        name: 'ATM',
        state: '正常',
        report: '查看'
      },
      {
        name: 'MC三轴',
        state: '正常',
        report: '查看'
      },
      {
        name: 'MC四轴',
        state: '正常',
        report: '查看'
      },
      {
        name: 'MC五轴',
        state: '异常1',
        report: '查看'
      },
      {
        name: 'SUPER TG',
        state: '异常2',
        report: '查看'
      }]
    }
  }
}
</script>

<style >
.content{
  margin-top: 5px;
  overflow: hidden;
}
/*白色矩形的样式*/
.contenttitle{
  align-items: center;
  background: white;
  height: 50px;
}
/*标题字体样式*/
.fontset{
  margin-left:10px ;
  font: normal bolder 20px/50px 微软雅黑;
}
/*  时间选择*/
.block{
  margin: 10px;
  font-weight: 600;
  font-size: 18px;

}
.block div{
  margin-right: 10%;
  margin-top: 15px;
}
.tableset{
  margin-left: 10%;
}
</style>
