<template>
  <div class="report">
      <div class="reportTitle"><span>ATM</span>
      <span class="historyRecord">历史维修记录</span></div>
      <el-table :data="tableData" style="width: 80%;margin-left:10%;border:0.5px solid gray" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
    <el-table-column label="故障分类" style="width: 30%">
      <template slot-scope="scope">
        <span >{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="机床状态" style="width: 30%">
      <template slot-scope="scope">
        <span >{{ scope.row.state }}</span>
      </template>
    </el-table-column>
    <el-table-column label="分析报告">
      <template slot-scope="scope">
        <el-button size="mini" @click="view(scope.$index, scope.row)">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="" scoped>
.report{
    width: 25%;
    background-color: white;
    overflow: hidden;
    margin: 10px;
}
.reportTitle{
    margin:0 10%;
}
.historyRecord{
    float: right;
    font-size: 12px;
}
</style>
