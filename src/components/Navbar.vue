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
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item me-2">
                    <router-link to="/business-loans" class="nav-link">Business Loans</router-link>
                </li>
                <li class="nav-item me-2 ml-2">
                    <router-link to="/howitworks" class="nav-link">How it Works</router-link>
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

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body p-0">
                    <div class="offcanvas-menu">
                        <ul class="offcanvas-nav">
                            <li class="offcanvas-nav-item">
                                <router-link to="/" class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/icon-login.svg" alt="icon-login">
                                    <span>Login</span>
                                </router-link>
                            </li>
<!--                            <li class="offcanvas-nav-item">
                                <a class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/icon-personal-loans.svg"
                                         alt="icon-personal-loans"><span>Personal Loans</span>
                                </a>
                            </li>-->
                            <li class="offcanvas-nav-item">
                                <router-link to="/business-loans" class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/icon-business-loans.svg" alt="icon-business-loans">
                                    <span>Business Loans</span>
                                </router-link>
                            </li>
<!--                            <li class="offcanvas-nav-item">
                                <a class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/new-hm-01.svg" alt="new hm-01">
                                    <span>Home Loans</span>
                                </a>
                            </li>-->
                            <li class="offcanvas-nav-item">
                                <router-link to="/howitworks" class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/icon-how-it-works.svg" alt="icon-how-it-works">
                                    <span>How it Works</span>
                                </router-link>
                            </li>
<!--                            <li class="offcanvas-nav-item">
                                <a class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/icon-blog.svg" alt="icon-blog">
                                    <span>Resources</span>
                                </a>
                            </li>
                            <li class="offcanvas-nav-item">
                                <a class="offcanvas-nav-link" href="">
                                    <img src="@/assets/images/sidebar/icon-espanol.svg" alt="icon-espanol">
                                    <span>En Español</span>
                                </a>
                            </li>-->
                        </ul>
                        <div>
                            <button class="default-btn custom-btn mb-5">Apply Today</button>
                        </div>
                        <div class="call">
                            <span class="talk-to-loan-text">Talk to a Loan Specialist</span>
                            <a class="call-number" href="tel:8449562663">(844) 956-2663</a>
                        </div>
                    </div>
                    <div class="buttons midle-content-offcanvas">
                        <span class="code-line">
                            <span class="code-line-text"> Enter Offer Code</span>
                        </span>
                        <div class="personal-btn-group">
<!--                            <a href="">
                                <button class="personal-btn-sidebar">
                                    <img src="@/assets/images/sidebar/icon-personal-loans.svg"
                                         alt="icon-personal-loans">Personal
                                </button>
                            </a>-->
                            <a href="">
                                <button class="personal-btn-sidebar">
                                    <img src="@/assets/images/sidebar/icon-business-loans.svg"
                                         alt="icon-business-loans">Business
                                </button>
                            </a>
                        </div>
                    </div>

                    <div class="footer">
                        <img class="offcanvas-logo" src="@/assets/images/logo.png" alt="Logo Black">
                        <div class="offcanvas-menu-items">
                            <ul>
                                <li> Company</li>

                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                                <li>
                                    <a href="https://careers-loanme.icims.com/jobs/intro?branding">Careers</a>

                                </li>
                                <li>
                                    <a href="">Reviews</a>
                                </li>
                                <li>
                                    <a href="">Login</a>
                                </li>
                            </ul>
                            <ul>
                                <li> Legal</li>

                                <li>
                                    <a href="">Licenses &amp;
                                        Disclosures</a>
                                </li>
                                <li>
                                    <a href="">Credit Education</a>
                                </li>
                                <li>
                                    <a href="">Mobile
                                        Messaging</a>
                                </li>
                                <li>
                                    <a href="">Fair Lending
                                        Policy</a>
                                </li>
                                <li>
                                    <a href="">Responsible
                                        Lending</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import {useWindowSize} from 'vue-window-size';

export default {
    name: "Navbar",
    setup() {
        const {width, height} = useWindowSize();
        return {
            windowWidth: width,
            windowHeight: height,
        };
    },
    data() {
        return {
            scrollPosition: null,
            isHover: false
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
.navbar-brand {
    width: 150px;
}
</style>