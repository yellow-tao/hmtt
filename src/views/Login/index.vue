<template>
  <div>
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="info.mobile"
        name="mobile"
        label="手机号"
        placeholder="请输入手机号"
        :rules="rules.mobile"
      />
      <van-field
        v-model="info.code"
        name="code"
        label="验证码"
        placeholder="请输入验证码"
        :rules="rules.code"
      />
      <div style="margin: 16px">
        <van-button
          :loading="isLoading"
          loading-text="加载中..."
          round
          block
          type="info"
          native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from "@/api";

export default {
  data() {
    return {
      info: { mobile: "", code: "" },
      isLoading: false,
      rules: {
        mobile: [
          { required: true, message: "请输入正确的手机号" },
          { pattern: /^1[2-9]\d/ },
        ],
        code: [{ required: true, message: "请输入验证码" }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      loginAPI(this.info)
        .then((res) => {
          this.$toast.success("登录成功");
          console.log(res.data);
        })
        .catch((err) => {
          this.$toast.fail("登录失败");
        });
      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>