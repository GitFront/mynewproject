<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item,i) in list' :key="i">
                <a href="http://www.itcast.cn/subject/phoneweb/index.html" target="_blank">
                    <img :src="baseurl+item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import config from '../../js/globalConfig.js';
export default {
    data() {
        return {
             baseurl: config.baseurl
        }
    },
    methods: {

    },
    props:['list']
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 180px;
    a {
        display: block;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>

