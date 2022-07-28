import {createRouter, createWebHistory} from 'vue-router'
import userZone from "@/components/content/users/userZone";


const routes = [
    {
        path: '/users',
        component: userZone
    },
    {
        path: '/schedule',
        component: userZone
    },
    {
        path: '/groups',
        component: userZone
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})
