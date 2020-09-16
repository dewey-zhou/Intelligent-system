<template>
  <div class="content">
    <div class="contenttitle ">
      <span class="fontset">异常数据分析报告</span>
    </div>
    <div class="timeblock">
      <label for="starttime">开始时间：</label><input id="starttime" class="timeinputbox" type="date" value="2020-02-02" />
      <label for="endtime" class="leftspacing">结束时间：</label><input id="endtime" class="timeinputbox" type="date" value="2020-02-02" />
      <button type="submit" class="btn btn-default btnset leftspacing">确定</button>
    </div>
    <div class="tableContent">
      <table class="table tableset">
        <!--<caption>基本的表格布局</caption>-->
        <thead class="tablehead">
          <tr>
            <th>机床名称</th>
            <th>机床状态</th>
            <th>分析报告</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ATM</td>
            <td class="state">正常</td>
            <td>
              <button class="btn btn-default see">查看</button>
            </td>
          </tr>
          <tr>
            <td>MC三轴</td>
            <td class="state">正常</td>
            <td>
              <button class="btn btn-default see">查看</button>
            </td>
          </tr>
          <tr>
            <td>MC四轴</td>
            <td class="state">正常</td>
            <td>
              <button class="btn btn-default see">查看</button>
            </td>
          </tr>
          <tr>
            <td>MC五轴</td>
            <td class="state">异常2</td>
            <td>
              <button class="btn btn-default see">查看</button>
            </td>
          </tr>
          <tr>
            <td>SUPER TG</td>
            <td class="state">异常1</td>
            <td>
              <button class="btn btn-default see">查看</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
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
/*时间输入框*/
.timeblock{
  margin: 15px;
  height:50px;
  margin:15px 10px 10px 210px;
  /*实现垂直居中*/
  align-items: center;
}

/*时间输入框中左边间距*/
.leftspacing{
  margin-left:10%;
}
/*时间输入框的大小*/
.timeinputbox{
  width: 25%;
  height: 30px;
}
/*表格样式*/
/* .table{} */
/*表格边框*/
.tableContent{
  margin:0 5% ;
  width: 80%;
  position: fixed;
  background-color: white;
}
.tableset{
  float: left;
  right: 10px;
  border: 1px solid RGB(240,240,240);
  margin:1% 5%;
  width: 90%;
}
.subtable{
  width:30%;
  padding:0px 45px 15px 0px;
}
.subtable2{
  width:45%;
  padding:0px 45px 15px 0px;
}
.navheight{
  height:300px;
}
/*表格第一行*/
.tablehead{
  background:RGB(240,240,240) ;
}
</style>
