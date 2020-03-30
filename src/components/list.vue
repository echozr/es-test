<template>
<div class="list">
    <ul v-for="(item,idx) in list" :key="idx">
        <li>姓名：{{item.name}},年領：{{item.age}}</li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'list',
    data () {
        return {
            list: []
        }
    },
    async mounted () {
        const { data } = await axios.get('/list')
        if (data && data.code === 0) {
            this.list = data.list
        }
    }
}
</script>

<style scoped>

</style>
