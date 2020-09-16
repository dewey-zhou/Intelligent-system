<template>
  <div class="nav">
    <div class="center1">
      <img src="./img/logo.jpg" class="logo center-block" />
    </div>
    <ul>
      <li>
        <span :class="{on: '/analysiserrordata' === $route.path}" @click="goTo('/analysiserrordata')">异常数据分析报告</span>
      </li>
      <li>
        <span :class="{on: '/compareerrordata' === $route.path}" @click="goTo('/compareerrordata')">相同故障数据分析比较</span>
      </li>
      <li>
        <span :class="{on: '/erroranticipationaccuracy' === $route.path}" @click="goTo('/erroranticipationaccuracy')">故障分类预判</span>
      </li>
      <li>
        <span :class="{on: '/erroranticipationimitate' === $route.path}" @click="goTo('/erroranticipationimitate')">故障预判准确性分析报告</span>
      </li>
      <li>
        <span :class="{on: '/errorclassify' === $route.path}" @click="goTo('/errorclassify')">故障预判模拟</span>
      </li>
      <li>
        <span :class="{on: '/systemestimate' === $route.path}" @click="goTo('/systemestimate')">系统运行状态评估报告</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style >
.nav{
  /* position: relative; */
  position: fixed;
  float: left;
  left:0;
  top:0;
  background: #002141;
  color: #ffffff;
  height: 100%;
  width: 180px;
}
/*foxconnlogo大小*/
.logo{
  width:100px;
  height:40px ;
}
.nav li{
  list-style-type:none;
  margin-top: 20px;
  color: white;
}
.nav ul{
  padding-left: 30px;
  font-size:12px;
}
ul li span{
  cursor: pointer;
}
ul li  :hover{
  color: RGB(31,119,225);
}
.on{
  color: RGB(31,119,225);
}
</style>
