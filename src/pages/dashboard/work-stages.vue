<template>
<div class="users  pt-4 mt-3">
    <div class="container-fluid ">
            <div class="row m-0 p-0  d-flex flex-row-reverse">
                <div class="logo ml-2"  >
                    <font-awesome-icon :icon="['fas', 'clipboard-list']"  class="float-right icons" fixed-width/>
                </div>
                <div class="title">
                    <span class="tit-1 m-0 p-0 ">
                        مراحل العمل  
                    </span>
                    <span class="tit-2 m-0 p-0">
                        جميع الإيرادات المدخلة الى النظام
                    </span>
                </div>
            </div>
            <div class="row  m-0 p-0 pt-4 mt-3">
                <div class="card w-100">
                    <div class="card-header border-0 bg-white d-flex justify-content-between  p-3 px-2">
                        <div class="table-tit-button">
                            <button class="btn float-left rounded-smrounded-sm text-white btn-sm"  @click="filterDate()">
                                فلترة  
                            </button>
                            <form class="float-left d-flex">
                                <div class="input-group   input-group-sm">
                                    <input type="text" class="form-control" placeholder="التاريخ الى" v-model="toDate" onfocus="(this.type='date')" onblur="(this.type='text')">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                </div>
                                <div class="input-group   input-group-sm ml-2">
                                    <input type="text" class="form-control" placeholder="التاريخ من" v-model="fromDate" onfocus="(this.type='date')" onblur="(this.type='text')">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                </div>
                                <div class="input-group   input-group-sm ml-2" >
                                    <input type="text" class="form-control" placeholder="كلمة البحث" v-model="searchQuery">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="table-tit text-right">
                            مراحل العمل 
                        </div>
                    </div>
                    <div class="card-body py-0 pb-3">
                        <div class=" tab px-2 ">
                            <div class="row tab-head tab-row d-flex flex-row-reverse  justify-content-between ">
                                <div class="tab-contain p-0 col-2">تسلسل</div>
                                <div class="tab-contain p-0 col-2">اسم الزبون</div>
                                <div class="tab-contain p-0 col-2">رقم الوحدة السكنية</div>
                                <div class="tab-contain p-0 col-2">مرحلة البناء</div>
                                <div class="tab-contain p-0 col-3">تاريخ استحقاق الدفعة</div>
                            </div>
                            <!-- table body -->
                            <div class="row tab-row d-flex flex-row-reverse  justify-content-between " v-for="(workstage, index) in searchm" :key="index">
                                <div class="tab-contain p-0 col-2">{{index+1}}</div>
                                <div class="tab-contain p-0 col-2">{{workstage.client_name}}</div>
                                <div class="tab-contain p-0 col-2">{{workstage.building_no}}</div>
                                <div class="tab-contain p-0 col-2">{{workstage.work_stage}}</div>
                                <div class="tab-contain p-0 col-3 ">
                                    <div class="yell-ba w-25 mx-auto">
                                        <span class="w-25">{{workstage.payment_date}}</span>
                                    </div>
                                </div>
                            </div> 
                            <!-- table body -->     
                    </div>
                </div>  
            </div>
        </div>
    </div>         
</div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
import router from "../../router/index"
export default {
    name: "work-stages",
    data() {
        return {
            workstages:[],
            copyworkstages:[],
            temp:[], 
            fromDate:'',
            toDate:'',
            searchQuery:''
        }
    },
    methods: {
        loadworkstages(){
            axios.post(this.$store.getters.get_url+'workstages',{
                token:this.$store.getters.get_token}).then(({data}) => {
                this.workstages=data.data;
                this.copyworkstages=data.data;
            }).catch(()=>{
                this.$parent.checkau();
            });
        },
        filterDate(){
                this.temp=JSON.parse(JSON.stringify(this.copyworkstages));
                if(this.toDate && this.fromDate)
                {     
                    for (let index = 0; index < this.temp.length; index++) {
                        if(!(this.temp[index].payment_date <= this.toDate && this.temp[index].payment_date >= this.fromDate))
                        {
                            this.temp.splice(index,1);
                            index--;
                        }
                    }
                }
                this.workstages=this.temp;
        },
        soon(){
            $('#showmessage').modal('show');
        }
    },    
    mounted() {
        this.loadworkstages();
            if(!this.$store.getters.get_user.permission['work_stages'])
        {router.go(-1)}
    },
    computed: {
        searchm(){
            let vm = this;
            if(!vm.searchQuery){
                return this.workstages;
            }
            return vm.workstages.filter(workstage => {
                return workstage.client_name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) != -1 || workstage.work_stage.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) != -1 || workstage.building_no.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) != -1  
            })
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.eye 
{
    color:#39AFD1 ;
    font-size: 13px;
}
.input-group input,.input-group-append span{
font-size: 11px !important;
border-color: black;
border-right: 0  ; 
}
form{
    margin:  0 12px;
}
.input-group-append span
{
    background-color:#303658; 
    color: white;
    border-color: black;
    border: 1px solid #303658 ;  
}
.icon
{
    font-size: 14px;
}
::placeholder {
  color: #6E84A3;
  direction: rtl;
    font-size: 10px;
}
.yell-ba  
{
    background-color:#39AFD1;
    color: white;
     border-radius: 20px;
}
input::placeholder
{
    direction: rtl;
    font-size: 10px;
}
input
{
    direction: rtl;
    color:#303658;
}
</style>
 
