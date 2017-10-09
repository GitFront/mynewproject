<template>
    <div class="home">
        <swiper :list="list"></swiper>
    </div>
</template>
<script>

import swiper from '../../components/swiper/swiper.vue';
export default {
    data() {
        return {
           list:[],
          

        }
    },
    created() {
        this.getlunbo();
    },
    methods: {
        getlunbo() {
            var url = 'http://127.0.0.1:8899/api/getlunbo';
            this.$http.get(url).then(res => {
                console.log(res);
                if (res.body.status == 0) {
                    this.list = res.body.message;
                }
            });
        }
    },
    components: { swiper }
}
</script>
<style lang="scss" scoped>

</style>
