<template>
    <div id="app" class="container">
        <div class="todo-wrapper">
            <todo-header></todo-header>
            <div class="todo-content">
                <todo-report></todo-report>
                <todo-list></todo-list>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from './components/TodoHeader.vue';
    import TodoReport from './components/TodoReport.vue';
    import TodoList from './components/TodoList.vue';
     // 引用组件

    export default {
        components: {
            "todo-header": Header,
            "todo-report": TodoReport,
            "todo-list": TodoList
        }
    }
</script>
<style lang="stylus">
body
    font-size 24px
</style>