import Vue from 'vue'
Vue.directive('make-red', {
    inserted (el) {
        el.style.color = 'red'
    }
})
