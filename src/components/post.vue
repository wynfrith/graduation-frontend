<script>
  import Editor from './modules/editor/editor.vue'
  export default {
    components: {
      'editor': Editor
    }
  }
</script>
<template >
  <div class="ui container ">
    <div class="form-box">
      <form class="ui form">
        <div class="field">
          <input type="text" class="large" placeholder="输入标题, 说清问题">
        </div>
        <div class="field">
            <input type="text"  placeholder="标签, 可用,或;分割">
        </div>
        <div class="field">
          <editor></editor>
        </div>
        <div class="field submit-box">
          <button class="ui submit green  right floated large button">发布问题</button>
        </div>
      </form>
    </div>

  </div>

</template>

<style scoped media="screen">
  .ui.form .large {
    font-size: 1.2rem;
  }
  .ui.container .form-box{
    margin: 0 auto;

  }

  .form-box {
    width: 90%;
  }

</style>
