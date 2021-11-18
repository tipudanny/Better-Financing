<template>
    <div class="bg-default">
        <!-- Header -->
        <div class="header bg-success py-5">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                            <h1 class="text-white">Ooops!</h1>
                            <p class="text-lead text-white">Page not found. Don't worry though, we have plenty of other pages to explore</p>
                            <router-link to="/" class="font-weight-bold text-danger mt-5">Back</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>
