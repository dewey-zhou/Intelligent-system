<template>
  <div class="content">
    <div class="contenttitle ">
      <span class="fontset">异常数据分析报告</span>
    </div>
    <div class="timeSelect">
      <span class="fontTime">开始时间:</span>
      <el-date-picker v-model="startTime" type="date"  size="small" style="width: 25%" placeholder="选择开始日期" format="yyyy 年 M 月 d 日" value-format="yyyy/M/d"></el-date-picker>
      <span class="fontTime">结束时间:</span>
      <el-date-picker v-model="endTime" type="date" size="small" style="width: 25%" placeholder="选择结束日期"></el-date-picker>
      <span class="fontTime"></span>
      <el-button type="primary" size="mini" round @click="timeFunc">确定</el-button>
    </div>
    <!-- /////////////////// -->
  <el-table :data="machineArr" style="width: 80%;margin-left:10%">
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
import {mapState} from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('getMachines')
    this.$store.dispatch('getPicture')
  },
  computed: {
    ...mapState(['machines', 'picture']),
    getMacineDetail () {
      const detailArr = []
      for (let i = 0; i < this.picture.length; i++) {
        const pictureTime = this.picture[i].time
        if (pictureTime.substring(0, pictureTime.indexOf(' ')) === this.getTime) {
          detailArr.push(this.picture[i])
        }
      }
      return detailArr
    },
    machineArr () {
      const machineArr = []
      for (let i = 0; i < this.getMacineDetail.length; i++) {
        const machine = this.getMacineDetail[i].machine
        const state = this.getMacineDetail[i].category === 5 ? '正常' : '异常'
        machineArr.push({name: machine, state: state})
      }
      return machineArr
    }
  },
  data () {
    return {
      startTime: '',
      endTime: '',
      getTime: ''
    }
  },
  methods: {
    view (index, row) {
      console.log(index, row)
    },
    timeFunc () {
      this.getTime = this.startTime
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
