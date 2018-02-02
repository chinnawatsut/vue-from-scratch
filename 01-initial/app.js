var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el:'#app-2',
    data:{
        message: 'This is second app'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Sony'},
            {text: 'Canon'},
            {text: 'Nikon'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello, Vue!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: ''
    }
})

Vue.component('todo-item',{
    props: ["todo"],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]      
    }
})
