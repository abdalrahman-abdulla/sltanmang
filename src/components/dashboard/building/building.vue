<template>
  <div class="users  pt-4 mt-3">
    <div class="container-fluid ">
            <div class="row m-0 p-0  d-flex flex-row-reverse">
                <div class="logo"  >
                    <font-awesome-icon :icon="['fas', 'building']"  class="float-right icons" fixed-width/>
                </div>
                <div class="title">
                    <span class="tit-1 m-0 p-0 ">
                        الوحدات السكنية
                    </span>
                    <span class="tit-2 m-0 p-0">
                        جميع الوحدات المسجلة في النظام
                    </span>
                </div>
            </div>
    
             
            <div class="row  m-0 p-0 pt-4 mt-3">
                <div class="card w-100">
                    <div class="card-header border-0 bg-white d-flex justify-content-between  p-3 px-2">
                        <div class="table-tit-button">
                            <button class="btn float-left rounded-smrounded-sm text-white btn-sm">
                                <router-link
                                    to="/dashboard/buildings/add"
                                    class="text-decoration-none text-white" 
                                    >
                                        تسجيل الوحدة السكنية 
                                </router-link>
                             </button>
                            <form class="float-left">
                                <div class="input-group   input-group-sm" @click="soon()">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text btn" >بحث</span>
                                    </div>
                                    <input type="text" class="form-control" disabled>
                                </div>
                            </form>
                        </div>
                        <div class="table-tit">
                            الوحدات السكنية

                        </div>
                        
                    </div>
                    <div class="card-body py-0 pb-3">
                        <div class=" tab px-2 ">
                            <div class="row tab-head tab-row d-flex flex-row-reverse  justify-content-between ">
                                
                                <div class="tab-contain p-0 col-1">تسلسل الوحدة</div>
                                <div class="tab-contain p-0 col-1">اسم الزبون</div>
                                <div class="tab-contain p-0 col-1">رقم الهاتف</div>
                                <div class="tab-contain p-0 col-1">رقم الوحدة السكنية</div>
                                <div class="tab-contain p-0 col-1">سعر الوحدة </div>
                                <div class="tab-contain p-0 col-1">تاريح تسليم الوحدة </div>
                                <div class="tab-contain p-0 col-1">
                                    <span class="p-2  "> حذف</span>
                                    <span class="p-2  "> تعديل </span>
                                </div>
                                 
                                     
                                
                            </div>
                            <!-- table body -->
                            <div class="row tab-row d-flex flex-row-reverse  justify-content-between " v-for="(building, index) in buildings" :key="index">
                                
                                <div class="tab-contain p-0 col-1">{{index+1}}</div>
                                <div class="tab-contain p-0 col-1">{{building.client_name}}</div>
                                <div class="tab-contain p-0 col-1">{{building.client_phone}}</div>
                                <div class="tab-contain p-0 col-1">{{building.building_no}}</div>
                                <div class="tab-contain p-0 col-1">{{building.building_price}}</div>
                                <div class="tab-contain p-0 col-1">{{building.delivery_date}}</div>
                                <div class="tab-contain p-0 col-1">
                                    <span class="  icon pen rounded text-white  mr-1 "> <router-link :to="{name:'editbuilding' ,params:{id:building.id}}" class="card-link text-white"><font-awesome-icon :icon="['fas', 'pen']"  class="  " fixed-width/></router-link>   </span>
                                    <span class="   icon trash ml-3 rounded text-white  " @click="deleteBuilding(building)"><font-awesome-icon :icon="['fas', 'trash']"  class=" " fixed-width/></span>
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
import Swal from 'sweetalert2';
import axios from 'axios';
import $ from 'jquery'; 
 import router from "../../../router/index"
 /*import { Form, HasError, AlertError } from 'vform';
 import Vue from 'vue'
 Vue.component(HasError.name, HasError);
 Vue.component(AlertError.name, AlertError);*/

export default {
     
 
  data() {
      return {
           buildings:[],
           

      }
  },
  methods: {
        loadBuilding(){
            axios.post('https://gentle-mesa-28063.herokuapp.com/api/building/all',{
                token:this.$store.getters.get_token}).then(({data}) => {
                this.buildings=data.data;
                
            });
        },
        deleteBuilding(building){
             
            Swal.fire({
            title: 'Are you sure?  ',
            text:  "you want to delete '" + building.building_no + "'  .......You wont be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(this.$store.getters.get_url+'building/'+building.id,{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`} }).then(() => {
                 Swal.fire(
                'Deleted!',
                building.building_no + ' has been deleted.',
                'success'
                )
                });
                
            }
            })
            setTimeout(() => {  this.loadBuilding()}, 2000);
        },
        soon(){
          
         $('#showmessage').modal('show');
        }


  },
  mounted() {
      this.loadBuilding();
      if(!this.$store.getters.get_user.permission['buildings'])
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
     
  background: #F8FAFF;
 
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

.input-group input,.input-group-prepend span{
font-size: 12px !important;
border-color: black;
border-left: 0  ; 
 
}
form{
    margin:  0 12px;
}

.input-group-prepend span
{
    background-color:#F0567C; 
    color: white;
    border-color: black;
    border: 1px solid #F0567C ; 
 
}
</style>
 
