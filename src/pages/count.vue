<template>
    <div class="container">
        <h2 style="color: red;">count: {{ count }}</h2>

        Set Number:
        <input type="number" v-model='num' style="width:50px;"><br/>

        <button @click="actionIncrease(num)">+{{ num }}</button>
        <button @click="actionDecrease(num)">-{{ num }}</button>

        <button @click="actionCountReset">歸零</button>
    </div>
</template>





<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            num: 1
        }
    },
    // data () {
    //     return {
    //         count: 0,
    //     }
    // },
    // methods: {
    //     increase () {
    //         this.count += 1;
    //     },
    //     decrease () {
    //         this.count -= 1;
    //     }
    // }
    computed: mapGetters({
        // getCount return value 將會存在別名為 count 的 data 上
        count: 'getCount',
    }),
    methods: {
        ...mapActions([
            'actionIncrease',
            'actionDecrease',
            'actionCountReset'
        ]),
    }
}
</script>

<style lang="sass">
    .count
        color: red;
</style>