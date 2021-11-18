<template>
    <vue-progress-bar></vue-progress-bar>
    <router-view/>
</template>
<script>
export default {
    mounted() {
        this.$Progress.finish();
    },
    created() {
        this.$Progress.start();
        this.$router.beforeEach((to, from, next) => {
            this.$Progress.start();
            next();
        });
        this.$router.afterEach((to, from) => {
            this.$Progress.finish();
        });
    },
};
</script>
<style>
</style>
