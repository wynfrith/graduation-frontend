<script>
  import Editor from './modules/editor/editor.vue'
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
     mixins: [ clickaway ],
    components: {
      'editor': Editor
    },
    route: {
      data(trans) {
        return store.getTags()
          .then(({data}) => {
            this.tags = data;
          })
      }
    },
    data() {
      return {
        tags: [],
        errorField: '',
        msg: '',
        okMsg: '',
        model: {
          title: '',
          content: ''
        },
        form: {},
        choosedTags: [],
        tagsBoxOpen: false
      }
    },
    methods: {
      away: function(e) {
        if(e.srcElement.name!='tagsText') {
          this.tagsBoxOpen = false;
        }
      },
      chooseTag(tag) {
        let index = this.choosedTags.indexOf(tag.name)
        if(index == -1) {
          this.choosedTags.push(tag.name);
        } else {
          this.choosedTags.splice(index, 1);
        }
      },
      pureTags(){
        this.tagsText = this.choosedTags.join(';')
      },
      showTagsBox() {
        this.tagsBoxOpen = true;
      },
      onSubmit() {

        if (this.form.title.$invalid) {
          this.msg = "请输入标题!"
          this.errorField = 'title'
        } else if (this.form.tagsText.$invalid) {
          this.msg = "请选择至少一个标签!"
          this.errorField = 'tagsText'
        } else if (this.model.content.trim() == ''){
          this.msg = "请输入问题内容!"
          this.errorField = 'content'
        } else if (this.model.content.trim().length < 15) {
          this.msg = "你的内容太少了吧! (15字以上)"
          this.errorField = 'content'
        } else {
          this.okMsg = '问题发布成功, 正在跳转..';
          this.errorField = ''
        }
      },
      isError(name) {
        // return (this.form[name].$dirty && this.form[name].$invalid)
        //         || (this.form.$submitted && this.form[name].$invalid);
        if(name == 'tagsText') {
          return this.form.$submitted && this.tagsText == '' && this.form.title.$valid;
        }
        return (this.form.$submitted &&
                this.form[name].$invalid &&
                this.errorField == name)
      }
    },
    computed: {
      'tagsText': function() {
        return this.choosedTags.join(';')
      }
    },
    watch: {
      'model.content': function() {
        // clear error
        if (this.errorField == 'content')
          this.errorField = '';
      }
    }
  }
</script>
<template >
  <div class="ui container">
    <message :msg.sync="msg"></message>
    <message :msg.sync="okMsg" color="orange" :delay="2500"></message>
    <div class="form-box">
      <form name="form" v-form class="ui form" @submit.prevent="onSubmit">
        <div class="field" :class="{'error': isError('title')}">
          <input type="text" name="title" v-model="model.title" v-form-ctrl required maxlength="30" class="large" placeholder="输入标题, 说清问题">
        </div>
        <div class="field tags-field" :class="{'error': isError('tagsText')}">
            <input type="text" name="tagsText" v-model="tagsText" v-form-ctrl required placeholder="标签, 可用,或;分割" @click="showTagsBox()" @focus="showTagsBox()" @blur="pureTags()" autocomplete="off"  disableautocomplete >

            <div class="tags-box" v-show="tagsBoxOpen" v-on-clickaway="away">
              <p class="header">
                请选择问题的标签：
              </p>

              <div class="list">
                <span :class="{'actived': choosedTags.indexOf(tag.name) != -1}" v-for="tag in tags" @click="chooseTag(tag)">
                  {{ tag.name }}
                </span>
              </div>
            </div>
        </div>
        <div class="field" :class="{'error': errorField == 'content' }">
          <editor :content.sync="model.content" placeholder="问题详细内容 (最少15字)"></editor>
        </div>
        <div class="field submit-box">
          <button type="submit" class="ui submit green  right floated large button">发布问题</button>
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

  /*标签选择*/
  .tags-field {
    position: relative;
  }
  .tags-box {
    width: 400px;
    /*height: 150px;*/
    border: 1px solid #399E51;
    border-radius: 3px;
    position: absolute;
    background-color: #fff;
    z-index: 900;
    top: 40px;
  }
  .tags-box .header {
    padding: 8px;
    margin: 0;
    font-weight: 500;
    color: #666;
  }
  .tags-box .list {
    margin: 5px 15px 20px 15px;
  }
  .tags-box .list span:hover
  {
    background-color: #3FA557;
  }
  .tags-box .list .actived
  {
    background-color: #36C357 !important;
  }
  .tags-box .list span{
    display: inline-block;;
    background-color: #67BB7B;
    color: #fff;
    padding:1px 6px;
    border-radius: 4px;
    margin: 3px 2px;
    cursor: pointer;
  }


</style>
