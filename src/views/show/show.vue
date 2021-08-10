<template>
  <div class="container">
    <div @click="back">返回</div>

      <div>
       这是一个展示组件：
       路由组件传参：{{this.$route.query.name}}  
      </div>
     <div @click="gotoPage">跳转到下一页</div>
  </div>
</template>

<script>
export default {
methods:{
  back(){
       window.history.back()
  },
  gotoPage() {
     this.$router.push({path: "/calender"})
  }
}

}
</script>

<style>

</style>