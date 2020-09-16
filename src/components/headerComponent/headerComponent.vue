<template>
<div class="header">
  <div class="nav1">
        <!--left-->
        <div class="spacingleft"><i class="el-icon-menu"></i></div>
        <div class="spacingleft">首页</div>
        <!--right-->
        <div class="spacingright">admin <i class="el-icon-caret-bottom"></i></div>
        <div class="spacingright"><i class="el-icon-message-solid"></i></div>
        <div class="spacingright"><i class="el-icon-setting"></i><i class="el-icon-caret-bottom"></i></div>
        <div class="spacingright"><i class="el-icon-full-screen"></i></div>
  </div>
  <div class="nav2">
  <!--left-->
  <div class="arrowhead"><i class="el-icon-arrow-left"></i></div>
    <!--中间-->
    <div class="nav3"></div>
    <!--right-->
    <div class="arrowhead right"><i class="el-icon-circle-close"></i></div>
    <div class="arrowhead right"><i class="el-icon-arrow-right"></i></div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style >
.header{
position:fixed;
top: 0;
left: 180px;
right: 0;
}
.nav1{
  overflow:hidden;
 background-color: white;
}
.nav1 div{
  cursor: pointer;
  position: relative;
}
/*图标放上去*/
.nav1 div:hover{
  color: RGB(45,140,240);
}
/*左边图标的样式*/
.nav1 .spacingleft{
  margin:15px;
  float: left;
  font-size:12px;
  font-weight:bold;
}
/*右边图标的样式*/
.nav1 .spacingright{
  margin:15px 5px ;
  float: right;
  font-size:12px;
}
/*右侧顶部第二个导航条*/
.nav2{
  height: 30px;
  display:flex;

}
/*箭头的样式*/
.nav2 .arrowhead{
  float: left;
  width: 20px;
  height: 30px;
  background:white;
  font-size: 19px;
  margin:0px  0.5px;
}
.nav2 .sth{
  margin-top: 9px;
  margin-left:4px;
}
/*向右浮动*/
.right{
  float: right;
}
/*两边箭头夹着的中间部分*/
.nav3{
  float: left;
  background: RGB(240,240,240);
  width: 100%;
  height: 100%;
  box-shadow: darkgrey 10px 10px 5px -5px ;
}
</style>
