Vue.component('todo-item', {
    props: ["todo","removeTodo"],
    template: `<div>{{todo.text}}</div>`
})
var app = new Vue({
    el: '#app',
    data: {
        todo: '',
        message: 'hello',
        todos: []
    },
    methods: {
        addTodo: function () {
            if(this.todo) {
                this.todos.push({text: this.todo})
                this.todo = ''
            }
        }
    }
})