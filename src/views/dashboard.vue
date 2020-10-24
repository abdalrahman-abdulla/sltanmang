<template>
 <div class="dashboard h-100" >
    <div class="  row h-100  m-0 p-0">
        <div class="col-10 h-100 m-0 p-0 "> 
          <navs />
          <router-view></router-view>

        </div>
        <div class="col-2 m-0 p-0 h-100 ">
              <sidebar  />
        </div>
    </div>
      <div class="modal fade text-dark" id="showmessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header  d-flex flex-row-reverse" >
                <h5 class="modal-title" id="exampleModalLongTitle">قريبا</h5>
                
                 
            </div>
            <div class="modal-body text-dark text-right">
                الموقع قيد التطوير ستتوفر الخاصية قريبا
            </div>
            <div class="modal-footer d-flex flex-row-reverse">
                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">OK</button>
                
            </div>
            </div>
        </div>
    </div>


</div>
</template>

<script>
// @ is an alias to /src
import sidebar from "@/components/dashboard/sidebar.vue";
import navs from "@/components/dashboard/navs.vue"; 

 
export default {
  name: "dashboard",
  components: {
    sidebar,
    navs,
    
  },
   
  mounted() {
            if(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)=='dashboard'){
                  var a= this.$store.getters.get_user.permission
                                  
                    delete a.permission_name  ;
                    delete a.statistics  ;
                    for (var key in a) {
                        if(a[key])
                        {
                            if(key=='work_stages')
                            return window.location.href = window.location.href +'/workstages';
                            else
                            return window.location.href = window.location.href +'/'+ key;
                        }
                    }

            }
             
             
             
              
  },
  data() {
      return {
            
      }
  },
  methods: {
    
  },
   
   
};
</script>

<style scoped>
.dashboard
{
  background-color: #F8FAFC;
}
</style>

 