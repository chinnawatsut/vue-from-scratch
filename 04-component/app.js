Vue.component('my-component', {
    template: '<div>Component</div>'
})

var localComponent = {
    template: '<div>Local Component</div>',
    data: function() {
      return {
          
      }
    }
}

var app = new Vue({
    el:'#app',
    components: {
        'local-component':localComponent
    },
    data:{
        message:'bussiness'
    }
})