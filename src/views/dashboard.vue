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
import router from "../router/index"
 
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
    checkau(){
      this.$store
        .dispatch("checkauth")
        .then(() => { 
           
        })
        .catch(err => {
        router.push({ name: 'login' })
          console.log(err);
        });
    }
  },
   
   
};
</script>

<style>
.dashboard
{
  background-color: #F8FAFC;
}
.users
{
    height:90% !important ;
    overflow: auto;
    overflow-x: hidden;
}
.logo 
{
    font-size: 40px;
    color: #F0567C;
}
.title
{
  padding: 7px 0;
}
.tit-1
{
    display: block;
    text-align: right;
    color: #f0567c;
    font-size: 15px;
    line-height: 10px;
    margin-top: 6px !important;

}
.tit-2
{
    font-size: 12px;
    color: #6E84A3;
}
.table-tit
{
  
  
    color: #f0567c;
    font-size: 13px;
    line-height: 24px;
    
}

.table-tit-button button
{
    background-color:#f0567c ;
    font-size: 12px
}
 
.tab-contain
{
    
    font-size: 12px;
    text-align: center;

}

.tab-row
{
    padding: 10px;
}

.tab > div:nth-child(odd)
{
     
  background:#F8FAFF;
 
}
.tab-head
{
    background-color:#F5F6FA !important;

}
.tab-contain span.icon{
 
    padding: 2px 5px !important;
    font-size: 9px;
    cursor: pointer;
}
span.pen 
{
    background-color:#39AFD1 ;
}
span.trash 
{
    background-color: #f0567c ;
}



.input-group input,.input-group-append span{
font-size: 12px !important;
border-color: black; 
text-align: right;
 
}
 

.input-group-append span
{
    background-color:#303658; 
    color: white;
    border-color: #303658;
    border: 1px solid #303658 ; 
 
}
 

 ::placeholder {
  color: #6E84A3;
  font-size: 9px;
  text-align: right;
}

.modal-footer button
{
    font-size: 10px;
}

</style>

 