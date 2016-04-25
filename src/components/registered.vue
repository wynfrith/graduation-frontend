<script>
export default {
  data() {
    return {
      email: ''
    }
  }
}

</script>
<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <message :msg.sync="errMsg"></message>
      <message :msg.sync="okMsg" color="orange" :delay="2500"></message>
      <h2 class="ui green image header">验证邮箱</h2>
        <div class="ui segment">
          <p>
            已经向您的邮箱中发送了一封邮件，来激活您的账户，请注意查收。
          </p>
          <p>
            <a href="#">回首页</a>
          </p>
        </div>
    </div>
  </div>
</template>

<style scoped media="screen">
    a {
      color: #28BC4B;
    }
    a:hover {
      text-decoration: underline;
    }
    p{
      font-size: 1.1rem;
      color: #859889;
    }
    a.green {
      color: #2AAF3D;
    }
    .column {
      margin-top: 60px;
      max-width: 700px;
    }
    .button {
    }
    input {
      font-size: 1rem !important;
    }
    .header {
      font-weight: normal !important;
    }
</style>
