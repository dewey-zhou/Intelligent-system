<template>
  <div class="undertone">
    <leftGuide/>
    <headerComponent/>
    <div class="leftContent">
      <router-view class=""></router-view>
    </div>
  </div>
</template>

<script>
import leftGuide from './components/leftGuide/leftGuide'
import headerComponent from './components/headerComponent/headerComponent'

export default {
  components: {
    leftGuide,
    headerComponent
  }
}
</script>

<style lang="" >
.undertone{
  position: absolute;
  background:RGB(240,240,240);
  width: 100%;
  height: 100%;
}
.leftContent{
  margin-top: 85px;
  margin-left: 180px;
}
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
</style>
