<template>
  <div class="content">
    <div class="contenttitle ">
      <span class="fontset">异常数据分析报告</span>
    </div>
    <div class="timeSelect">
      <span class="fontTime">开始时间:</span>
      <el-date-picker v-model="startTime" type="date"  size="small" style="width: 25%" placeholder="选择开始日期"></el-date-picker>
      <span class="fontTime">结束时间:</span>
      <el-date-picker v-model="endTime" type="date" size="small" style="width: 25%" placeholder="选择结束日期"></el-date-picker>
      <span class="fontTime"></span>
      <el-button type="primary" size="mini" round>确定</el-button>
    </div>
    <!-- /////////////////// -->
  <el-table :data="tableData" style="width: 80%;margin-left:10%">
    <el-table-column label="机床名称" style="width: 30%">
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
  data () {
    return {
      startTime: '',
      endTime: '',
      tableData: [{
        name: 'ATM',
        state: '正常'
      },
      {
        name: 'MC三轴',
        state: '正常'
      },
      {
        name: 'MC四轴',
        state: '正常'
      },
      {
        name: 'MC五轴',
        state: '异常1'
      },
      {
        name: 'SUPER TG',
        state: '异常2'
      }]
    }
  },
  methods: {
    view (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style >
.timeSelect{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin:20px;
  width: 80%;
  margin-left: 8%;
}
.timeSelect .fontTime{
  margin: 0 5%;
  font-weight: 600;
  font-size: 18px;
}
</style>
