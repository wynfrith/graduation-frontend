<script>
export default {
  props: {
    current: Number,
    nums: Number
  },
  methods: {
    go(pageNum) {
      this.$dispatch('goPage', pageNum);
    }
  }
}
</script>
<template>
  <div class="ui pagination menu main-pagination">
    <a class="item icon" v-if="current > 1" @click="go(current-1)">
      <i class="left arrow icon"></i>
    </a>
    <a class="item icon"
    :class="{'active': current == num+1}"
    v-for="num in nums" @click="go(num+1)">
      {{ num+1 }}
    </a>
    <a class="item icon" v-if="current < nums" @click="go(current+1)">
      <i class="right arrow icon"></i>
    </a>
  </div>

</template>

<style media="screen" scoped >
/* 首页分页 */
.ui.pagination.menu.main-pagination {
  margin: 1rem 0;
  font-size: .82rem;
}
</style>
