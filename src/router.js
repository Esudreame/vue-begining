import {createRouter, createWebHistory} from 'vue-router'
import userZone from "@/components/content/users/userZone";
import groupsZone from "@/components/content/groups/groupsZone";
import scheduleZone from "@/components/content/schedules/scheduleZone";


const routes = [
    {
        path: '/users',
        component: userZone
    },
    {
        path: '/schedules',
        component: scheduleZone
    },
    {
        path: '/groups',
        component: groupsZone
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})
