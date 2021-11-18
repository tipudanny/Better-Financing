<template>
    <nav
        @mouseover="isHover = true"
        @mouseout="isHover = false"
        :class="{change_nav_color: ($route.name !=='Home') || (scrollPosition > 60 || isHover)}"
        class="navbar navbar-light bg-light fixed-top"
    >

        <div class="container-fluid">
            <router-link to="/">
                <img
                    v-if="scrollPosition > 60 || isHover"
                    src="@/assets/images/logo.png"
                    class="navbar-brand" alt="logo"
                />
                <img
                    v-else-if="windowWidth < 1367 || isHover"
                    src="@/assets/images/logo.png"
                    class="navbar-brand" alt="logo"
                />
                <img
                    v-else-if="$route.name ==='Home'"
                    src="@/assets/images/logo-white.png"
                    class="navbar-brand" alt="logo"
                />
                <img
                    v-else
                    src="@/assets/images/logo.png"
                    class="navbar-brand" alt="logo"
                />
            </router-link>

            <ul class="navbar-nav">
                <li class="nav-item me-2">
                    <router-link to="/business-loans" class="nav-link">Loans</router-link>
                </li>
                <li class="nav-item me-2 ml-2">
                    <router-link to="/howitworks" class="nav-link">How it Works</router-link>
                </li>
                <li class="nav-item me-2 ml-2">
                    <a class="nav-link" href="#">(844) 956-2663</a>
                </li>
                <li class="nav-item me-2 ml-2">
                    <a class="nav-link" href="#">Español</a>
                </li>
                <li class="nav-item me-2 ml-2">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
            <div class="collapse-btn">
                <div class="apply-btn"> Apply Today</div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                    <svg height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g id="button-hamburger-black" transform="translate(-1337.5 -42)">
                            <path d="M0,0H19V3H0Z" data-name="Path Copy 6" fill="#fff"
                                  id="Path_Copy_6" transform="translate(1337.5 53)"></path>
                            <path d="M0,0H24V3H0Z" data-name="Path Copy 7" fill="#fff"
                                  id="Path_Copy_7" transform="translate(1337.5 42)"></path>
                            <path d="M0,0H24V3H0Z" data-name="Path Copy 8" fill="#fff"
                                  id="Path_Copy_8" transform="translate(1337.5 64)"></path>
                        </g>
                    </svg>
                </button>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useWindowSize } from 'vue-window-size';
export default {
    name: "Navbar",
    setup() {
        const { width, height } = useWindowSize();
        return {
            windowWidth: width,
            windowHeight: height,
        };
    },
    data() {
        return {
            scrollPosition: null,
            isHover:false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
    }
}
</script>

<style scoped>

</style>