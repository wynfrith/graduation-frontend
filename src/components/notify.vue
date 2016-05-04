<script>
  export default {
    data() {
      return {
        notifies: []
      }
    },
    ready() {
      $('.notify .list').on('click', 'a', () => {
        store.readNotify($(this).parent().data('id'))
          .then(({data}) => {
            if (data.code == 0)
              this.$dispatch('readNotify', 1)
          })
      })
    },
    route: {
      // waitForData: true,
      data(trans) {
        store.getNotifies()
          .then(({data}) => {
            this.notifies = data;
          })
      }
    },
    methods: {
      readAllNotify() {
        store.readAllNotify()
          .then(({data}) => {
            if (data.n > 0 ) {
              this.$dispatch('readNotify', data.n);
              store.getNotifies()
                .then(({data}) => {
                  this.notifies = data;
                })
            }
          })
      }
    }
  }
</script>
<template id="">
  <div class="ui container">
    <div class="ui two column centered grid">
      <div class="fourteen wide column  ">
    <h2>我的消息</h2>
    <div class="ui divider"></div>
    <div class="notify-box">
      <div class="btns">
        <a  class="ui basic button tiny" @click="readAllNotify()">全部标为已读</a >
      </div>

      <div class="ui grid">
        <div class="wide column">
          <div class="notify">
            <div class="ui very relaxed list">
              <div class="item" v-for="notify in notifies" :class="{'unread': !notify.isRead}">
                <div class="content">
                  <div class="description" v-html="notify.content" data-id="{{notify._id}}">
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="more">
              <button class="ui basic tiny grey button">查看更多</button>
            </div> -->
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
  </div>

</template>

<style scoped media="screen">
h2 {
  font-weight: 400;
}
 .more {
   text-align: center;
 }
  .unread.item {
    background-color: #F5F5F5;
  }
  .ui.list>.item{
    padding-left: 25px;
  }
  .btns {
    padding-left: 1rem;
  }
  .notify {
  }
  .ui.grid {
    margin: 0;
    margin-top: 5px
  }
  .ui.list .item {
    /*border-top: 1px dotted #eee;*/
    border-top: 1px dotted rgba(230, 157, 157, 0.37);
  }
</style>
