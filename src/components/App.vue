<template>
    <div class="app-container">
        <!--根组件固定顶部mint-ui-header-->
        <mt-header fixed title="新vue项目"></mt-header>
        <!--子组件-->
        <router-view></router-view>
        <!--mui-tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item " href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to='/member' class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact">

                </span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/shopcar" class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.app-container {
    padding-top: 40px;
}
</style>

