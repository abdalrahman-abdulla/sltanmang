<template>
  <div class="users  pt-4 mt-3">
    <div class="container-fluid ">
            <div class="row m-0 p-0  d-flex flex-row-reverse">
                <div class="logo"  >
                    <font-awesome-icon :icon="['fas', 'bell']"  class="float-right icons" fixed-width/>
                </div>
                <div class="title">
                    <span class="tit-1 m-0 p-0 ">
                        الاشعارات
                    </span>
                    <span class="tit-2 m-0 p-0">
                        اشعارات القروض المستحقة 
                     </span>
                </div>
            </div>
    
             
            <div class="row  m-0 p-0 pt-4 mt-3">


                <div class="card w-100">
                    <div class="card-body ">
                        <div class="notif row d-flex flex-row-reverse" v-for="(notification, index) in notifications" :key="index">
                            <div class="notif-logo " >
                                <font-awesome-icon :icon="['fas', 'bell']"  class="" fixed-width/>
                            </div>
                            <div class="notif-det text-right">
                                <span class="notif-tit">
                                    <span>الدفعة </span> 
                                    <span> {{notification.payment_name}}</span> 
                                    
                                    <span> الخاصة بالمبنى </span>
                                    <span>{{notification.building_no}}</span>
                                    <span> لم تدفع الى الان </span> 
                                </span>
                                <p class="notif-desc">
                                    <span>الدفعة</span> 
                                    <span> {{notification.payment_name}}</span> 
                                    <span> الخاصة بالمبنى </span>
                                    <span>{{notification.building_no}}</span>
                                    لم تدفع الى الان من قبل العميل 
                                    <span>{{notification.client_name}}</span> 
                                    <br>
                                    علما انها مستحقة للدفع من تاريخ
                                    <span>{{notification.payment_date}}</span>
                                    وقدرها 
                                    <span>{{formatToCurrency(notification.payment_money)}}</span>
                                </p>
                            </div>
                        </div>
                        


                    </div>
                    
                </div>
                
            </div>
    </div>         
    </div>
   
   
</template>

<script>
 import axios from 'axios';
import router from "../../router/index"
export default {
     
  name: "notification",
  data() {
      return {
          notifications:[],
          copynotifications:[],
          temp:[],
          allnotifications:'',
          fromDate:'',
          toDate:'',

      }
  },
    methods: {
        loadnotifications(){
             
            axios.post(this.$store.getters.get_url+'notifications',{
                token:this.$store.getters.get_token}).then(({data}) => {
                this.notifications=data.data;
                this.copynotifications=data.data;
                 
            }).catch(()=>{
                this.$parent.checkau();
            });
        },
         
        formatToCurrency(amount){
            return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -3)+' IQD'; 
        },
         
    },
    
    mounted() {
        this.loadnotifications();
       if(!this.$store.getters.get_user.permission['notifications'])
        {router.go(-1)}
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.logo 
{
    font-size: 40px;
    color: #F0567C;
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
    font-size: 11px;
    color: #6E84A3;
} 
.notif-tit
{
    color: #34466C;
    font-size: 12px;
}
.notif-desc
{
    color: #6E84A3;
    font-size: 10px;
}

.notif-logo
{
    background-color: #FA4E79;
    border-radius: 50%;
    color: white;
    padding: 7px;
    font-size: 19px;
    margin: 6px 10px 0px 6px;
    height: 45px;
}

.notif-det
{
    direction: rtl;
}
</style>
 
 