<template>
    <navbar/>
    <router-view></router-view>
    <footer-section/>
</template>

<script>
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
export default {
    name: "Layout",
    components: {
        FooterSection,
        Navbar
    },
}
</script>

<style scoped>

</style>