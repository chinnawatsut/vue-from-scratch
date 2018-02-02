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
// https://vuejs.org/v2/guide/components.html#What-are-Components
var app = new Vue({
    el:'#app',
    components: {
        'local-component':localComponent
    },
    data:{
        message:'bussiness'
    }
})