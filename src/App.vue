<template>
<div id="app">
    <zr-list />
    <zrPrice />
</div>
</template>

<script>
import zrList from './components/list'
import zrPrice from './components/price'

export default {
    name: 'App',
    components: {
        zrList,
        zrPrice
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
