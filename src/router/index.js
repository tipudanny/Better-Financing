import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '',
        component: function () {
            return import('../views/layout/Layout')
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: function () {
                    return import(/* webpackChunkName: "Home" */ '../views/Home')
                }
            },
            {
                path: '/business-loans',
                name: 'BusinessLoans',
                component: function () {
                    return import(/* webpackChunkName: "BusinessLoans" */ '../views/BusinessLoans')
                }
            },
            {
                path: '/howitworks',
                name: 'HowItWorks ',
                component: function () {
                    return import(/* webpackChunkName: "HowItWorks" */ '../views/HowItWorks')
                }
            },
            {
                path: '/aboutus',
                name: 'AboutUs ',
                component: function () {
                    return import(/* webpackChunkName: "AboutUs" */ '../views/AboutUs')
                }
            },
            {
                path: '/faq',
                name: 'Faq ',
                component: function () {
                    return import(/* webpackChunkName: "Faq" */ '../views/Faq')
                }
            },
            {
                path: '/privacy-policy',
                name: 'PrivacyPolicy',
                component: function () {
                    return import(/* webpackChunkName: "PrivacyPolicy" */ '../views/PrivacyPolicy')
                }
            },
            {
                path: '/termsofuse',
                name: 'TermsOfUse',
                component: function () {
                    return import(/* webpackChunkName: "TermsOfUse" */ '../views/TermsOfUse')
                }
            },
            {
                path: '/contactus',
                name: 'ContactUs',
                component: function () {
                    return import(/* webpackChunkName: "ContactUs" */ '../views/ContactUs')
                }
            },
        ],
    },
    // Not Found Page
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/PageNotFound')
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior (to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes
})

export default router
