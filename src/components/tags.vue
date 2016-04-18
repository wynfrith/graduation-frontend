<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          name: 'javascript',
          memo: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型',
          selected: false
        },
        {
          id: 2,
          name: 'go',
          memo:'Go语言专门针对多处理器系统应用程序的编程进行了优化，使用Go编译的程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程'
        },
        {
          id: 3,
          name: 'python',
          memo: 'Python, 是一种面向对象、解释型计算机程序设计语言'
        }
      ]
    }
  }
}

</script>
<template >
  <div class="ui container">
    <h2>热门标签</h2>
    <div class="ui divider"></div>
    <div class="ui grid">
        <div class="four wide column" v-for="tag in tags">
          <div class="ui card">
            <div class="content">
              <div class="header"><a href="#">{{tag.name}}</a></div>
              <div class="description">
                {{ tag.memo }}
              </div>
            </div>
          </div>
        </div>


    </div>
  </div>

</template>
