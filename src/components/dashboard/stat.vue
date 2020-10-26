<template>
  <div class="users  mt-3">
    <div class="container-fluid ">
        <div class="row row-1 text-right m-0 p-0 d-flex flex-row-reverse">
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.usercount}}</div>
                        <div class="tit-2">المستخدمين</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.buildingcount}}</div>
                        <div class="tit-2">الوحدات السكنية</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.revenuescount}}</div>
                        <div class="tit-2">الايرادات</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.complete_build}}</div>
                        <div class="tit-2">الوحدات المكتملة</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.allbuildprice}}</div>
                        <div class="tit-2">المبلغ الإجمالي للوحدات المباعة</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.allbuildloan}}</div>
                        <div class="tit-2">المبلغ الإجمالي للقروض</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.amount_paid}}</div>
                        <div class="tit-2">المبلغ الإجمالي للدفعات المسددة</div>
                    </div>
                </div> 
            </div>
            <div class="col-3 p-1">
                <div class="row p-2 m-0 bg-white border-rounded item-1 d-flex flex-row-reverse bg-secondary">
                    <div class="logo-1">
                        <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                    </div>
                    <div class='p-1'>
                        <div class="tit-1">{{stat1.remainmoney}}</div>
                        <div class="tit-2">المبلغ المتبقي من الدفعات</div>
                    </div>
                </div> 
            </div> 
        </div>
        <div class="row row-2 text-right m-0 p-0">
            <div class="col-3 p-1">
                <div class="row w-100  bg-white border-rounded item-1 p-1 m-0">
                    <div class="canv-inf w-50 mx-auto">
                         <pie-chart height="180px" :donut="true" :legend="false" label="Value" :data="{'Blueberry': stat1.complete_build,'Strawberry': stat1.buildingcount-stat1.complete_build}" :colors="['#F0567C', '#1F78B4']" :dataset="{borderWidth: 0}" :labels="['Red', 'Blue']"> </pie-chart>

                                              
                    </div>
                    <div class="canv-desc w-100 p-3 px-5">
                        <div>
                            <font-awesome-icon :icon="['fas', 'square']"  class="ml-2 icons pink" fixed-width/>
                            <span>الوحدات المكتملة</span>
                        </div>
                        <div class="  pt-1">
                            <font-awesome-icon :icon="['fas', 'square']"  class="ml-2 icons blues" fixed-width/>
                            <span>الوحدات غير المكتملة</span>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
            <div class="col-9 p-1">
                <div class="row w-100 h-100 bg-white m-0 item-1">
                    <div class="col-12 tit-1 card-tit p-2">
                        احصائيات الإيرادات لكل شهر
                    </div>
                    <div class="col-12 h-75">
                        <line-chart :legend="false" :data="{'2017': 2, '2018': 5, '2019': 1, '2020': 5}" class="h-100" :library="{backgroundColor: 'rgba(27,239,119,0.5)',}" :curve="false" ></line-chart>
                    </div>
                    

                </div>
            </div>
        </div>
        <div class="row row-3 text-right m-0 p-0">
            <div class="col-4 p-1 ">
                <div class="row w-100  bg-white border-rounded p-1 m-0 item-1">
                    <div class="card  mb-3  border-0 w-100">
                        <div class="card-header pink p-1 border-0 bg-white d-flex w-100 justify-content-between">
                            <small>عرض الكل</small>
                            <span class="tit-1 card-tit">اخر اشعارات اليوم</span>
                            
                        </div>
                        <div class="card-body p-1 pt-2 ">
                            <div class="row m-0 bg-white d-flex flex-row-reverse my-1" v-for="(notification, index) in notifications" :key="index">
                                <div class="logo-1">
                                    <font-awesome-icon :icon="['fas', 'bell']"  class="icons" fixed-width/>
                                </div>
                                <div class='mr-1 py-1'>
                                    <div class="tit-1-card row-3-pri">{{notification.client_name}}</div>
                                    <div class="tit-2-card row-3-sec"> 
                                        <span>{{notification.payment_date}}<font-awesome-icon :icon="['fas', 'calendar-day']"  class="icons blues" fixed-width/></span>
                                        <span>{{notification.building_no}}<font-awesome-icon :icon="['fas', 'building']"  class="icons blues" fixed-width/></span>
                                        <span class="badge bgt-1 px-2 border-rounded text-dark">{{formatToCurrency(notification.payment_money)}}</span>
                                        
                                        
                                    </div>
                                    
                                </div>
                                <div class="flex-grow-1 text-left">
                                        <small class="span-pink py-2">عرض التفاصيل </small>
                                </div>
                            </div>
                                
                        </div>
                         
                    </div>
                </div> 
            </div>
            <div class="col-4 p-1 ">
                <div class="row w-100  bg-white border-rounded p-1 m-0 item-1">
                    <div class="card  mb-3  border-0 w-100">
                        <div class="card-header pink p-1 border-0 bg-white d-flex w-100 justify-content-between">
                            <small>عرض الكل</small>
                            <span class="tit-1 card-tit">الايرادات المسجلة اليوم</span>
                            
                        </div>
                        <div class="card-body p-1 pt-2  row-3-sec">
                            <div class="row m-0 bg-white d-flex flex-row-reverse my-1" v-for="(revenue, index) in revenues" :key="index">
                                <div class="logo-1 log-2">
                                    <font-awesome-icon :icon="['fas', 'money-check-alt']"  class="icons" fixed-width/>
                                </div>
                                <div class='mr-1 py-1'>
                                    <div class="tit-1-card">{{revenue.client_name}}</div>
                                    <div class="tit-2-card row-3-sec"> 
                                        <span>{{revenue.building_no}}<font-awesome-icon :icon="['fas', 'building']"  class="icons blues" fixed-width/></span>
                                        <span class="badge bgt-2 text-white px-2 border-rounded">{{formatToCurrency(revenue.amount_paid)}}</span>
                                    </div>
                                    
                                </div>
                                <div class="flex-grow-1 text-left">
                                        <small class="span-pink py-2">عرض التفاصيل </small>
                                </div>
                            </div> 
                        </div>
                         
                    </div>
                </div> 
            </div>
            <div class="col-4 p-1 ">
                <div class="row w-100  bg-white border-rounded p-1 m-0 item-1">
                    <div class="card  mb-3  border-0 w-100">
                        <div class="card-header pink p-1 border-0 bg-white d-flex w-100 justify-content-between">
                            <small>عرض الكل</small>
                            <span class="tit-1 card-tit">الوحدات المسجلة اليوم</span>
                            
                        </div>
                        <div class="card-body p-1 pt-2 ">
                            <div class="row m-0 bg-white d-flex flex-row-reverse my-1"  v-for="(building, index) in buildings" :key="index">
                                <div class="logo-1 log-3">
                                    <font-awesome-icon :icon="['fas', 'users']"  class="icons" fixed-width/>
                                </div>
                                <div class='mr-1 py-1'>
                                    <div class="tit-1-card">{{building.client_name}}</div>
                                    <div class="tit-2-card row-3-sec">
                                         
                                        <span>{{building.building_no}}<font-awesome-icon :icon="['fas', 'building']"  class="icons blues" fixed-width/></span>
                                        <span>{{building.client_phone}}<font-awesome-icon :icon="['fas', 'phone']"  class="icons blues" fixed-width/></span>
                                        
                                        
                                        
                                    </div>
                                    
                                </div>
                                <div class="flex-grow-1 text-left">
                                        <small class="span-pink py-2">عرض التفاصيل </small>
                                </div>
                            </div> 
                                
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
import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))



export default {
     
 data() {
     return {
           stat1:{},
           notifications:[],
           revenues:[],
           buildings:[],
     }
    }, 
  mounted() {
      this.loadstat1();
      f(!this.$store.getters.get_user.permission['statistics'])
        {router.go(-1)}
  },
  methods: {
      loadstat1(){
          axios.post(this.$store.getters.get_url+'statistics',{
                token:this.$store.getters.get_token}).then(({data}) => {
                this.stat1=data['statistics'];
                this.notifications=data['notifications'];
                this.revenues=data['revenues'];
                this.buildings=data['buildings']; 
                console.log(data['buildings'])
                                 
                this.calc()
            }).catch(()=>{
                this.$parent.checkau();
            });
      },
      formatToCurrency(amount){
            return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -3)+' IQD'; 
        }
  },
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-1
{
   border: 1px solid #DBDBDB;
}
 .logo-1
{
    background-color: #F0567C;
    padding: 7px;
    text-align: center;
    color: white;
    font-size: 18px;
    border-radius: 50%;
}
.tit-2{
    font-size: 10px;
    line-height: 18px;
}
 
.blues{
    color: rgba(30, 120, 180, 1);
    font-size: 18px;
}
.pink{
    color: rgba(240, 86, 124, 1);
    font-size: 18px;
}
.canv-desc
{
    direction: rtl;
    font-size: 12px;
} 
small
{
    font-size: 10px;
    cursor: pointer;
    line-height: 23px;
}
.card-tit
{
    font-size: 14px !important;
}
.tit-1-card
{
    color: #303658;
    font-size: 12px;
}
.tit-2-card  
{
    color: #303658;
    font-size: 11px; 
}

.card-body .logo-1{
  
    padding: 7px;
    
   
    font-size: 18px;
 
}

.tit-2-card .icons.blues{
    font-size: 10px;
}

.span-pink
{
    color: rgba(240, 86, 124, 1);
    font-size: 9px;
    line-height: 42px;
}

.log-2
{
    background-color: #39AFD1;

}

.bgt-1
{
    background-color: #08F888;
}
.bgt-2
{
    background-color: #F89808;
}
.row-3-sec
{
    color: #6E84A3 ;
}
.row-3-pri
{
    color: #34466C;
}
.log-3
{
    background-color: #303658;
}

#chart-1 
{
    height: 180px !important;
}
#chart-2
{
   background-color: rgba(27,239,119,0.05)
}
</style>
 
