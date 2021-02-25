import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import dashboard from "../views/dashboard.vue";
import users from "@/pages/dashboard/users.vue"; 
import building from "@/pages/dashboard/building/building.vue";
import addbuilding from "@/pages/dashboard/building/addbuilding.vue";
import Revenues from "@/pages/dashboard/Revenues.vue";
import workstages from "@/pages/dashboard/work-stages.vue"; 
import money from "@/pages/dashboard/money.vue"; 
import notification from "@/pages/dashboard/notification.vue";
import statistics from "@/pages/dashboard/stat.vue";
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
          name: "notification",
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
        { 
          path: 'statistics',
          component: statistics, 
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
