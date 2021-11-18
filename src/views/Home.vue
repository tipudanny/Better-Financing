<template>
    <section class="hero-area">
        <div class="text-wrapper col-md-6">
            <div class="text">
                <h1>Here to help you with a better path forward.</h1>
                <p class="number"></p>
            </div>
        </div>
    </section>
    <section class="how-it-works-area">
        <div class="sponsored">
            <img src="@/assets/images/bbb.png" alt="bbb">
            <img src="@/assets/images/affairs.png" alt="affairs">
            <img src="@/assets/images/trustpilot.png" alt="trustpilot">
        </div>
        <div class="how-works-text">
            <div class="row justify-content-md-end justify-content-sm-center">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-9">
                            <h1>How it works</h1>
                            <div class="work-details">
                                <div class="info-title">
                                    <div class="info-icon">
                                        <img src="@/assets/images/check-icon.svg" alt="check-icon">
                                    </div>
                                    <div class="info-details">
                                        <h2>Secure</h2>
                                        <p>
                                            See what you qualify for now with our secure online form or call (844)
                                            956-2663 to speak with a trusted loan specialist now.
                                        </p>
                                    </div>
                                </div>
                                <div class="info-title">
                                    <div class="info-icon">
                                        <img src="@/assets/images/check-icon.svg" alt="check-icon">
                                    </div>
                                    <div class="info-details">
                                        <h2>Fast</h2>
                                        <p>
                                            Pre-qualify quick and get help even quicker with funds available for you in
                                            as soon as 3-4 hrs.
                                        </p>
                                    </div>
                                </div>
                                <div class="info-title">
                                    <div class="info-icon">
                                        <img src="@/assets/images/check-icon.svg" alt="check-icon">
                                    </div>
                                    <div class="info-details">
                                        <h2>Reliable</h2>
                                        <p>
                                            With over $3.5 billion in loans funded, we continue to make the impossible
                                            possible for the communities we serve.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="we-are-better-financing">
        <div class="title-area">
            <h1>We are Better Financing. Here to Help.</h1>
        </div>
        <div class="slider-area">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div v-if=" windowWidth > 991" class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="@/assets/images/staff-01.jpeg" alt="...">
                                <div class="carousel-details">
                                    <h2>Tina D.</h2>
                                    <p class="designation">Customer Success Agent</p>
                                    <p class="slider-title"> Tina is absolutely the Best! </p>
                                    <p class="slider-text">
                                        Tina is absolutely the Best! She was patient and understanding, taking time to
                                        hold my hand throughout the process.
                                        I am so very appreciative for all her help. Thank you, thank you Ms Tina D.
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="@/assets/images/staff-02.png" alt="...">
                                <div class="carousel-details">
                                    <h2>Micha C.</h2>
                                    <p class="designation">Customer Success Agent</p>
                                    <p class="slider-title"> Tina is absolutely the Best! </p>
                                    <p class="slider-text">
                                        Tina is absolutely the Best! She was patient and understanding, taking time to
                                        hold my hand throughout the process.
                                        I am so very appreciative for all her help. Thank you, thank you Ms Tina D.
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/images/staff-01.jpeg" alt="...">
                                <div class="carousel-details">
                                    <h2>Tina D.</h2>
                                    <p class="designation">Customer Success Agent</p>
                                    <p class="slider-title"> Tina is absolutely the Best! </p>
                                    <p class="slider-text">
                                        Tina is absolutely the Best! She was patient and understanding, taking time to
                                        hold my hand throughout the process.
                                        I am so very appreciative for all her help. Thank you, thank you Ms Tina D.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="carousel-inner carousel-inner-mb">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="profile-with-name">
                                    <img src="@/assets/images/staff-01.jpeg" alt="...">
                                    <div class="carousel-details">
                                        <h2>Tina D.</h2>
                                        <p class="designation">Customer Success Agent</p>
                                    </div>
                                </div>
                                <div class="carousel-details">
                                    <p class="slider-title"> Tina is absolutely the Best! </p>
                                    <p class="slider-text">
                                        Tina is absolutely the Best! She was patient and understanding, taking time to
                                        hold my hand throughout the process.
                                        I am so very appreciative for all her help. Thank you, thank you Ms Tina D.
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="profile-with-name">
                                    <img src="@/assets/images/staff-01.jpeg" alt="...">
                                    <div class="carousel-details">
                                        <h2>Tina D.</h2>
                                        <p class="designation">Customer Success Agent</p>
                                    </div>
                                </div>
                                <div class="carousel-details">
                                    <p class="slider-title"> Tina is absolutely the Best! </p>
                                    <p class="slider-text">
                                        Tina is absolutely the Best! She was patient and understanding, taking time to
                                        hold my hand throughout the process.
                                        I am so very appreciative for all her help. Thank you, thank you Ms Tina D.
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="profile-with-name">
                                    <img src="@/assets/images/staff-01.jpeg" alt="...">
                                    <div class="carousel-details">
                                        <h2>Tina D.</h2>
                                        <p class="designation">Customer Success Agent</p>
                                    </div>
                                </div>
                                <div class="carousel-details">
                                    <p class="slider-title"> Tina is absolutely the Best! </p>
                                    <p class="slider-text">
                                        Tina is absolutely the Best! She was patient and understanding, taking time to
                                        hold my hand throughout the process.
                                        I am so very appreciative for all her help. Thank you, thank you Ms Tina D.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
            </div>
        </div>
    </section>
    <section class="business-loan">
        <div class="row">
            <div class="col-md-6 business-content">
                <div class="row justify-content-center">
                    <div class="col-md-8 ">
                        <div class="text-title">
                            <h1>Options for your business.</h1>
                        </div>
                        <div class="info-text">
                            With minimal documentation required and conditional approval in as fast as 5 minutes, we
                            offer small businesses quick funding for faster growth.
                        </div>
                        <div class="business-btn btn btn-primary">Buiness Loan</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 business-image">
                <img src="@/assets/images/business-loan-bg.jpeg" class="img-fluid" alt="business loan">
            </div>
        </div>
    </section>
    <section class="zip-code-area">
        <div class="area-info">
            <div class="area-title">
                Find the right option for you.
            </div>
            <div class="area-sub-title">
                Check our Loan Calculator for Personal Loan Options from $600 to $30,000
            </div>
        </div>
        <div class="input-area">
            <div class="top-area">
                <div class="input-area-title">
                    Enter your zip code to get started!
                </div>
                <div class="zip-code-input">
                    <input
                        type="text"
                        name=""
                        id=""
                        maxlength="6"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                        placeholder="Zip Code"
                    >
                </div>
                <div class="btn btn-primary zip-cod-btn custom-btn"> Next <span class="fa fa-chevron-right"></span>  </div>
            </div>
            <div class="bottom-area">
                <div class="row">
                    <div class="col-md-6 text-start">Pre-qualification will not affect your credit score!</div>
                    <div class="col-md-6 text-end">Loan amounts may vary by state.</div>
                </div>
            </div>
        </div>
    </section>
    <section class="benefits-and-features-section section-padding ">
        <div class="custom-container">
            <!-- section title -->
            <div class="section-title text-center mt-5">
                <p class="section-title-text mb-1">Benefits and Features</p>
            </div>
            <!-- content -->
            <div class="row mt-5 pb-5">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div class="benefit-item text-center pb-5 pt-3">
                        <div class="benefit-item-body">
                            <div class="benefit-icon mb-5 mt-4">
                                <img src="@/assets/images/icon-flexible.svg" alt="flexible">
                            </div>
                            <!-- benefit item heading -->
                            <p class="benefit-item-heading-text">Flexible Loan Amounts</p>
                            <p class="common-text">Loan amounts from $600 - $20,000 in as fast as 3-4
                                hours.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div class="benefit-item text-center pb-5 pt-3">
                        <div class="benefit-item-body">
                            <div class="benefit-icon mb-5 mt-4">
                                <img src="@/assets/images/icon-247.svg" alt="24/7">
                            </div>
                            <!-- benefit item heading -->
                            <p class="benefit-item-heading-text">24/7 Funding</p>
                            <p class="common-text">Life doesn’t take days off and neither do we. Loan funding available
                                7 days a week.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="benefit-item text-center pb-5 pt-3">
                        <div class="benefit-item-body">
                            <div class="benefit-icon mb-5 mt-4">
                                <img src="@/assets/images/icon-guarantee.svg" alt="guarantee">
                            </div>
                            <!-- benefit item heading -->
                            <p class="benefit-item-heading-text">No Pre-Payment Penalties</p>
                            <p class="common-text">Pay off your loan at any time with absolutely no penalty or fee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  reliable start   -->
    <section class="reliable-section section-padding d-flex align-items-center">
        <div class="reliable-section-content text-center">
            <p class="reliable-title text-white">Secure. Fast. Reliable.</p>
            <p class="section-subtitle-text text-white reliable-subtitle">Apply for a loan today. Our pre-qualification
                process works without affecting your credit score and we can help you get a funding option in a matter
                of minutes.</p>
            <div>
                <button class="default-btn custom-btn">Apply Today</button>
            </div>
        </div>
    </section>
    <!--   reliable end -->
    <section class="consumer-advisory-section py-4 px-3 text-center">
        <p class="common-text mb-0 text-white">**CONSUMER ADVISORY** <a
            class=" text-white d-inline-block" href="#">Click to Learn More.></a></p>
    </section>
</template>

<script>
import {useWindowSize} from "vue-window-size";

export default {
    name: "Home",
    setup() {
        const {width, height} = useWindowSize();
        return {
            windowWidth: width,
            windowHeight: height,
        };
    },
    data() {
        return {}
    },
}
</script>

<style scoped>

</style>