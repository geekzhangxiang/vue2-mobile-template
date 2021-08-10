<template>
  <div class="container">
      <div class="input-box">
      <van-cell title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
      </div>
     
  </div>
</template>

<script>
export default {
data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      console.log(date)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    //    debugger
    },
  },
}
</script>

<style lang='scss'>
 .van-cell{
    width: 90%;
    margin: 0.2rem auto;
    border: solid 2px green;
    border-radius: 0.33rem;
}
</style>



