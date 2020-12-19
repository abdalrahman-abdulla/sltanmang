<template>
  <div class="navs bg-white">
    <div class="container-fluid  d-flex justify-content-between">
      <div class="opt  ">
        <font-awesome-icon :icon="['fas', 'power-off']"  class=" ml-2 icons" fixed-width @click="performLogout()" />
         <router-link
                :to="{ name: 'notification'}"
                class="text-decoration-none text-white" 
                > <font-awesome-icon :icon="['fas', 'bell']"  class=" ml-2 icons" fixed-width/> 
        </router-link>
         
                
      </div>
      <div class="title   ">
        <span>نظام مجمع السلطان السكني</span>
      </div> 
    </div>
     
  </div>
</template>

<script>
 import router from "../../router/index"; 
export default {
     
  name: "navs",
  methods: {
     performLogout(){
          
        this.$store
        .dispatch("performLogoutAction")
        .then(() => {
          router.push({ name: 'login' })
        })
        .catch(err => {
          console.log(err);
        });
     }
  },
};
</script>

<style scoped>
.navs
{
  height: 6%;
    box-shadow: 0px -16px 18px #888888;
    color: #303658;
}

.navs div div
{
  padding: 11px 0;
}
.opt *
{
  cursor: pointer;color: #303658;
}

.title
{
  font-size: 15px;color: #303658;
}
</style>
 
