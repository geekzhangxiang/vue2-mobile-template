<template>
  <div class="login">
    <div class="input-box">
      <van-cell-group>
        <van-field
          v-model="username"
          error
          required
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="pwd"
          required
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
        />
      </van-cell-group>
      <van-button type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      let token = "adfhigklmnopqrstuvwxyz";
      localStorage.setItem("token", token);
    },
  },
};
</script>

<style lang="scss">
.van-cell-group {
  margin: 0.1rem 0;
}
.van-field__control {
  height: 0.8rem;
  border: solid 2px gray;
  border-radius: 0.15rem;
  font-size: 36rpx;
}

.input-box {
  width: 6rem;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 8%;
}
input::-webkit-input-placeholder {
  // color: red;
  font-size: 20px;
}
.btn {
  width: 3.6rem;
  text-align: center;
}
</style>