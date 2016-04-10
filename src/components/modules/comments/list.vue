<script>
import Comment from './comment.vue'
 export default {
   components: {
     'comment': Comment
   },
   props: {
     datas: Array
   }
 }

</script>
<template>
  <div class=" ui container">
    <div class="ui divider"></div>
    <div class="ui minimal comments">
      <div>
        <template v-for="data in datas">
          <comment
            :avatar="data.avator"
            :author="data.author"
            :date="data.date"
            :content="data.content"
          ></comment>
        </template>
      </div>

      <form class="ui form">
        <div class="field">
          <textarea rows="1" class="left floated" placeholder="询问更多信息或提出修改意见，请不要在评论里回答问题"></textarea>
          <div class="ui icon teal basic button right floated">
            <i class="icon edit"></i> 评论
          </div>
        </div>
      </form>
      <div class="clear">  </div>

    </div>

  </div>
</template>


<style scoped media="screen">
.ui.comments {
  margin: 0;
}
.ui.form .field {
  overflow: auto;
}
.right.button {
  margin-right: 10px;
}

.ui.form .field textarea {
  padding-top: 8px;
  padding-bottom: 8px;
  width: calc(100% - 110px);
  float: left;
  word-wrap: break-word;
  margin-left: 10px;
}
</style>
