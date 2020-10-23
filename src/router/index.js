import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import dashboard from "../views/dashboard.vue";
import users from "@/components/dashboard/users.vue"; 
import building from "@/components/dashboard/building/building.vue";
import addbuilding from "@/components/dashboard/building/addbuilding.vue";
import Revenues from "@/components/dashboard/Revenues.vue";
import workstages from "@/components/dashboard/work-stages.vue"; 
import money from "@/components/dashboard/money.vue"; 
import notification from "@/components/dashboard/notification.vue";


import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/dashboard' 
  },
  {
    path: "/login",
    name: "login",
    component:login,
    meta: {
      secure: false
    }
  },
   
  {
    path: "/dashboard",
    name: "dashboard", 
    component:dashboard,
    children:
     [
        { 
          path: 'users',
          component: users,
          meta: {
            secure: true
          }
        },
        { 
          path: 'buildings',
          component: building,
          name:'buildings',
          meta: {
            secure: true
          }
        },
        { 
          path: 'Revenues',
          component: Revenues,
          meta: {
            secure: true
          }
        },
        { 
          path: 'workstages',
          component: workstages,
          meta: {
            secure: true
          }
        },
        { 
          path: 'money',
          component: money,
          meta: {
            secure: true
          }
        },
        { 
          path: 'notifications',
          component: notification,
          meta: {
            secure: true
          }
        },
        { 
          path: 'buildings/add',
          component: addbuilding,
          meta: {
            secure: true
          }
        },
        { 
          path: 'buildings/:id',
          component: addbuilding,
          name:'editbuilding',
          meta: {
            secure: true
          }
        },
    ], meta: {
      secure: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    // if no token
    if (!store.state.loggedIn) {
      //console.log("no token");
      next({
        path: "/login"
      });
    } else {
      next();

    }
  }  
  else{
    next()
  }
});
export default router;
