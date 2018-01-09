<template>
  <div class="todo-content-title">
    <h2>Your tasks</h2>
    <p class="task-report">
      <span class="task-remain">{{ taskDone }} done</span> / {{ taskTotal }} task(s)</p>
  </div>

</template>

<script>
import ListStore from '../data/store'
export default {
  data() {
    return {
      listState: ListStore.state
    }
  },
  computed: {
    taskTotal() {
      return this.listState.items.length
    },
    taskDone() {
      let total =0;
      if (this.listState.items.length > 0) {
        for (let item of this.listState.items) {
          if (item.status == 'done') {
            total++;
          }
        }
        return total;
      }
    }
  }
}
</script>

<style lang="stylus">
base_dark = #4C4646
  .todo-content
    .todo-content-title
      padding 20px
      
      h2
        font-size 1.5em
        font-weight normal
        color base_dark
    
    .task-report
      font-size 0.9em
      color #afafaf
      margin-top 5px

</style>
