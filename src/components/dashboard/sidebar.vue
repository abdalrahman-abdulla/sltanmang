<template>
  <div class="sidebar h-100 w-100 pt-5 text-white">
    <div class="logo overflow-hidden  m-0 p-0 h-25 d-flex flex-wrap  justify-content-center  ">
        <img class="h-100 " src="../../assets/images/logo.png" alt="" >
    </div>
    <div class="user ">
        <div class="user-details row h-100 m-2 mt-3 rounded">
            
            <div class="user-name col-9 text-right" v-if="user">
                <span class="d-block">
                       {{user.name }}
                </span>
                <span class="d-block">
                        {{user.permission.permission_name}}
                </span>
            </div>
            
            <div class="user-img col-3 p-2  ">
                <img class="w-100 rounded-circle " src="../../assets/images/avatar.png" alt="" >
            </div>

        </div>
    </div>
    <div class="list-bar m-2 mt-4">
        <ul class = "list-unstyled text-right text-white" v-if="user">
            <li @click="soon()" v-if="user.permission.statistics" class="soon">الاحصائيات<font-awesome-icon :icon="['fas', 'chart-bar']"  class="text-white ml-2 icons" fixed-width/></li>
            <router-link
                to="/dashboard/users"
                class="text-decoration-none text-white" 
                >
                <li class=" text-white" v-if="user.permission.users" :class="currentUrl=='users'?'active':''" >
                
                    المستخدمين<font-awesome-icon :icon="['fas', 'users']"  class="text-white ml-2 icons" fixed-width/>
               
                </li>
            </router-link>

            <router-link
                to="/dashboard/buildings"
                class="text-decoration-none text-white" 
                >
                <li v-if="user.permission.buildings" :class="currentUrl=='buildings'?'active':''">
                    
                    الوحدات الكسنية<font-awesome-icon :icon="['fas', 'building']"  class="text-white ml-2 icons" fixed-width/>
                    
                </li>
            </router-link>

            <router-link
                to="/dashboard/revenues"
                class="text-decoration-none text-white" 
                >
                <li v-if="user.permission.revenues" :class="currentUrl=='revenues'?'active':''">
                    
                    الايرادات<font-awesome-icon :icon="['fas', 'money-bill-wave']"  class="text-white ml-2 icons" fixed-width/>
                    
                </li>
            </router-link>
            <router-link
                to="/dashboard/workstages"
                class="text-decoration-none text-white" 
                >    
                <li v-if="user.permission.work_stages" :class="currentUrl=='workstages'?'active':''">
                
                 مراحل العمل<font-awesome-icon :icon="['fas', 'clipboard-list']"  class="text-white ml-2 icons" fixed-width/>
                
                </li>
             </router-link>  
             <router-link
                to="/dashboard/money"
                class="text-decoration-none text-white" 
                >  
                <li v-if="user.permission.money" :class="currentUrl=='money'?'active':''">
                    
                    المبالغ المسحقة<font-awesome-icon :icon="['fas', 'money-check-alt']"  class="text-white ml-2 icons" fixed-width/>
                    
                
                </li>
            
            </router-link>
             <router-link
                to="/dashboard/notifications"
                class="text-decoration-none text-white" 
                > 
                <li v-if="user.permission.notifications" :class="currentUrl=='notifications'?'active':''"> 
               
                  الاشعارات <font-awesome-icon :icon="['fas', 'bell']"  class="text-white ml-2 icons" fixed-width/>
                
                 
                </li>
            </router-link> 
            <li @click="performLogout()"> تسجيل الخروج <font-awesome-icon :icon="['fas', 'sign-out-alt']"  class="text-white ml-2 icons" fixed-width/></li>
             

        </ul>
    </div>
    
   </div>
</template>

<script>
import $ from 'jquery'; 
import router from "../../router/index";

 export default {
     
  name: "sidebar",
   data() {
       return {
            user:'',
            currentUrl:window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)
       }
   },
  methods: {
      userload(){
       this.user=this.$store.getters.get_user;
       
      },
      performLogout(){
          
        this.$store
        .dispatch("performLogoutAction")
        .then(() => {
           router.push({ name: 'login' })
        })
        .catch(err => {
        router.push({ name: 'login' })
          console.log(err);
        });
     
      },
      soon(){
          
         $('#showmessage').modal('show');
      }
  },
  computed: {
      
  },
  mounted() {
       
       
       this.userload()
  },
 
   
  
};


$(document).ready(function(){
  $("ul li").click(function(){
    
    $(this).addClass("active").parent().siblings().find('li').removeClass('active');
    $('li.soon').removeClass('active');
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  background-color: #282C41;
}
 

.user-details
{
        background-color: #303658;
}
.user-img img
{
    background-color: #F0567C;
}

.user-name
{
        padding: 15px 0;
}
.user-name span:first-child
{
    font-size: 13px;
}
.user-name span:last-child
{
    font-size: 9px;
}

ul li 
{
    font-size: 13px;
    padding: 7px 50px 7px 0px;
    cursor: pointer;

}

li.active 
{
    background-color: #F0567C;
    border-radius: 5px;
}
.icons
{
    font-size: 16px;
}
 


</style>
 
