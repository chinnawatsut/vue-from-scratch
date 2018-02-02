var data = {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error:null
}
var vm = new Vue({
    el:'#app',
    data:data,
    beforeCreate: function(){
        console.log('Before create => Called synchronously immediately after the instance has been initialized, before data observation and event/watcher setup.')
    },
    created: function(){
        console.log('Created => At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks')
    },
    beforeMount: function(){
        console.log('Before mount(client-side) => Called right before the mounting begins: the render function is about to be called for the first time.')
    },
    mounted: function() {
        console.log('Mounted (it self) =>  where el is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called')
    },
    beforeUpdate: function(){
        console.log('Before Update => Called when data changes, before the DOM is patched')
    },
    updated: function(){
        console.log('Update => Called after a data change causes the virtual DOM to be re-rendered and patched.')
    }
})