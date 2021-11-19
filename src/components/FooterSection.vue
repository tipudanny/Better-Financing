<template>
    <!--    Footer Section-->
    <section class="footer-area">
        <div class="sponsored">
            <img src="@/assets/images/bbb.png" alt="bbb">
            <img src="@/assets/images/affairs.png" alt="affairs">
            <img src="@/assets/images/trustpilot.png" alt="trustpilot">
        </div>
        <div class="footer-content">
            <div class="row justify-content-center">
                <div class="col-md-3">
                    <div class="footer-logo">
                        <router-link to="/">
                            <img src="@/assets/images/logo.png" alt="footer-logo">
                        </router-link>
                    </div>
                    <div class="footer-text">
                        <p>© 2021 Better Financing. All Rights Reserved. 1900 S. State College Boulevard, Suite 300, Anaheim, CA
                            92806</p>
                    </div>
                    <div class="footer-social">
                        Follow Us
                        <span>
                            <img src="@/assets/images/icon-facebook.svg" alt="">
                            <img src="@/assets/images/icon-twitter.svg" alt="">
                            <img src="@/assets/images/icon-instagram.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="row footer-list justify-content-center">
                        <div class="col-md-3 loans-area">
                            <ul>
                                <li><router-link to="/business-loans"> Business Loans </router-link></li>
                                <li><router-link to="/howitworks"> How it Works </router-link></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <p>Company</p>
                            <ul>
                                <li><router-link to="/aboutus">About Us</router-link></li>
                                <li><router-link to="/contactus">Contact Us</router-link></li>
                                <li><router-link to="/faq">FAQ</router-link></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <p>Legal</p>
                            <ul>
                                <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                                <li><router-link to="/termsofuse">Terms</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-5">
                <div class="col-md-3">
                    <p class="subscription-text">Get tips, resources and special offers.</p>
                    <div class="input-group">
                        <input type="text" class="form-control" name="">
                        <div class="input-group-append">
                            <span class="input-group-text"> <span class="fa fa-chevron-right"></span>  </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 footer-bottom-info">
                    <p>
                        Where loans are offered by Better Financing, credit approval is subject to Better Financing’s credit standards.  Terms (including loan amount) may vary by applicant.  Better Financing loans, where required, are made pursuant to its lending licenses.  For example, California loans are made or arranged pursuant to a California Finance Lenders Law license #603K061.
                    </p>
                    <p>
                        Texas residents: Better Financing is a registered Texas Credit Services Organization and operates as a licensed Credit Access Business (CAB). The lender, PCAM CREDIT VIII, LLC, is an unaffiliated third party.
                    </p>
                    <div>
                        Terms and Conditions: Offers provided to customers who originated via a paid Google or Bing advertisement feature terms on Better Financing Prime of:
                        <div><strong> Minimum APR: </strong> 35.97%</div>
                        <div><strong> Maximum APR: </strong> 35.97%</div>
                        <div><strong> Maximum Loan Repayment Term: </strong> 60 Months</div>
                        <div><strong> Minimum Loan Repayment Term: </strong> 60 Months</div>
                    </div>
                    <br>
                    <div>
                        <strong>Representative Example:</strong> Maximum APR: 35.97% Maximum Loan Repayment Term: 60 Months Minimum Loan Repayment Term: 60 Months Representative Example: A homeowner in Utah with 580+ FICO, who meets income and other credit requirements could receive a loan for $5,000 with an interest rate of 36% and an origination fee of $0 for an APR of 35.97%. In this example, a consumer would receive $5,000 deposited into his or her account and will make 60 monthly payments of $180.56 each. Total repayment would be $10,833.60.
                    </div>
                    <br>
                    <p>
                        Your actual rate depends upon credit score, loan amount, loan term, home ownership, and credit usage & history. You can pay back the loan early with no pre-payment penalties. Please note that loan fees apply and affect the amount of cash you receive.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!--    Footer Section End -->
</template>

<script>
export default {
    name: "FooterSection"
}
</script>

<style scoped>
.footer-logo img{
    width: 150px;
}
</style>