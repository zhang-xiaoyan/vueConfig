<template>
    <section class="app_wrap">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>
<script>
    export default {
        name: 'app',
        data(){
            return{

            }
        },
        created(){
            if (/Android/gi.test(navigator.userAgent)) {
                window.addEventListener('resize', function () {
                    if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                        window.setTimeout(function () {
                            document.activeElement.scrollIntoViewIfNeeded();
                        }, 0);
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .app_wrap{
        height: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>