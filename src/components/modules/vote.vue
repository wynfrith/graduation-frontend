<script>
  export default {
    props: {
      counts: Number
    },
    data() {
      return {
        voteStatus: 0
      }
    },
    methods: {
      vote(num) {
        if(num == 1) {
          if (this.voteStatus == 1) { // undo like
            this.voteStatus = 0;
            this.counts -= 1;
          } else if (this.voteStatus == -1){ // like and cancel hate
            this.voteStatus = 1;
            this.counts += 2;
          } else{ // like
            this.voteStatus = 1;
            this.counts += 1;
          }
        } else if(num == -1) {
          if (this.voteStatus == -1) {
            this.voteStatus = 0; // undo hate
            this.counts += 1;
          } else if (this.voteStatus == 1){ // hate and cancel like
            this.voteStatus = -1;
            this.counts -= 2;
          } else {
            this.voteStatus = -1;
            this.counts -= 1;
          }
        }
      }
    }
  }
</script>

<template >
  <div class="vote">
    <button
      type="button"
      class="ui basic button up"
      :class="{'blue': voteStatus == 1}"
      @click="vote(1)"
    ><i class="caret up icon"></i></button>

    <p class="">{{ counts }}</p>

    <button
      type="button"
      class="ui basic button down"
      :class="{'red': voteStatus == -1}"
      @click="vote(-1)"
    ><i class="caret down icon"></i></button>
  </div>
</template>

<style scoped media="screen">
  i {
    font-size: 2rem;
    position: absolute;
    left: 8px;
  }
  button {
    position: absolute;
    width: 36px;
    height: 26px;
    left:0px;
    padding: 11px 12px !important;
  }
  .vote {
    margin: 5px;
    width: 36px;
    text-align: center;
    position: absolute;
  }
  button.up {
    top: 0px;
  }
  button.down {
    top: 50px;
  }
  button.up i {
    top: 4px;
  }
  button.down i {
    top: 6px;
  }
  .vote p{
    font-size: 1.15rem;
    padding-top: 25px;
    color: rgba(0,0,0,.6);
  }
</style>
