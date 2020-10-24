<template>
  <div class="users  pt-4 mt-3">
    <div class="container-fluid ">
            <div class="row m-0 p-0  d-flex flex-row-reverse">
                <div class="logo"  >
                    <font-awesome-icon :icon="['fas', 'user']"  class="float-right icons" fixed-width/>
                </div>
                <div class="title">
                    <span class="tit-1 m-0 p-0 ">
                        المستخدمين
                    </span>
                    <span class="tit-2 m-0 p-0">
                        جميع المستخدمين الموجودين في النظام
                    </span>
                </div>
            </div>
    
             
            <div class="row  m-0 p-0 pt-4 mt-3">
                <div class="card w-100">
                    <div class="card-header border-0 bg-white d-flex justify-content-between  p-3 px-2">
                        <div class="table-tit-button">
                            <button class="btn rounded-sm text-white btn-sm" data-toggle="modal" data-target="#addUser" @click="addMode()">
                                اضافة مستخدم
                            </button>
                        </div>
                        <div class="table-tit">
                            المستخدمين
                        </div>
                        
                    </div>
                    <div class="card-body py-0 pb-3">
                        <div class=" tab px-2 ">
                            <div class="row tab-head tab-row d-flex flex-row-reverse  justify-content-between ">
                                
                                <div class="tab-contain p-0 col-1">رقم المستخدم</div>
                                <div class="tab-contain p-0 col-1" >الاسم</div>
                                <div class="tab-contain p-0 col-1">اسم المستخدم</div>
                                <div class="tab-contain p-0 col-1">الصلاحية</div>
                                <div class="tab-contain p-0 col-1">
                                    <span class="p-2  "> حذف</span>
                                    <span class="p-2  "> تعديل </span>
                                </div>
                                 
                                     
                                
                            </div>
                            <!-- table body -->
                            <div class="row tab-row d-flex flex-row-reverse  justify-content-between " v-for="(user, index) in users" :key="index" >
                                
                                <div class="tab-contain p-0 col-1">{{index+1}}</div>
                                <div class="tab-contain p-0 col-1">{{user.name}}</div>
                                <div class="tab-contain p-0 col-1">{{user.username}}</div>
                                <div class="tab-contain p-0 col-1">{{user.permission.permission_name}}</div>
                                <div class="tab-contain p-0 col-1">
                                    <span class="  icon pen rounded text-white  mr-1 " @click="editUser(user)"> <font-awesome-icon :icon="['fas', 'pen']"   fixed-width  /> </span>
                                    <span class="   icon trash ml-3 rounded text-white  " @click="deleteUser(user)"><font-awesome-icon :icon="['fas', 'trash']"   fixed-width  /></span>
                                </div>
                                 
                                     
                                
                            </div> 
                                
                            <!-- table body -->     
                                 
                        </div>


                    </div>
                    
                </div>
            </div>
    </div> 
    <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="adduser" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <div class="w-100 ">
                        <span class="modal-title table-tit float-right" id="adduser">معلومات مستخدم</span>
                    </div>
                    
                </div>
                <div class="modal-body row pt-0">
                            <div class="row d-flex w-100 px-4 flex-row-reverse">
                                <div class="input-group  col-6   input-group-sm  align-self-start">
                                    <input type="text" class="form-control" placeholder=" اسم المستخدم" v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'user']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                    <has-error :form="form" field="username"></has-error>
                                    
                                </div>
                                <div class="input-group  col-6   input-group-sm align-self-start ">
                                    <input type="text" class="form-control" placeholder=" الاسم " v-model="form.name"  :class="{ 'is-invalid': form.errors.has('name') }">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'user']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                            </div>
                             
                            <div class="row  d-flex w-100 px-4 flex-row-reverse  ">
                                <div class="input-group  col-6   input-group-sm  mt-2  align-self-start">
                                    <input type="password" class="form-control" placeholder=" كلمة المرور" v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'key']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                     <has-error :form="form" field="password"></has-error>
                                    
                                </div>
                                <div class="input-group  col-6   input-group-sm    mt-2  align-self-start">
                                    <input type="text" class="form-control" placeholder="الصلاحية " v-model="form.permission.permission_name" :class="{ 'is-invalid': form.errors.has('permission.permission_name') }">
                                    <div class="input-group-append">
                                    <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'shield-alt']"  class="text-white icon" fixed-width/></span>
                                    </div>
                                     <has-error :form="form" field="permission.permission_name"></has-error>
                                </div>
                                 
                            </div>
                                <div class=" col-12 mt-3">
                                    <span class=" table-tit float-right" id="adduser"> الوصول للصلاحيات </span>
                                </div>
                            
                            <div class="col-12 mt-2 row p-0  px-4" >
                                
                                <div class="col-4 mt-2 ">
                                    <input type="checkbox"   class=" ml-3 float-right" v-model="form.permission.money"  >
                                        <span class="tit-2 float-right" >المبالغ المستحقة</span>
                                        
                                    
                                </div>
                                <div class="col-4 mt-2">
                                        <input type="checkbox"   class="ml-3 float-right" v-model="form.permission.revenues"  >
                                        <span class="tit-2 float-right" >الايرادات</span>
                                        
                                    
                                    
                                </div>
                                <div class="col-4 mt-2">
                                    
                                        <input type="checkbox"   class=" ml-3 float-right" v-model="form.permission.statistics"  >
                                        <span class="tit-2 float-right" >الاحصائيات</span>
                                        
                                    
                                </div>
                                <div class="col-4 mt-2 ">
                                    <input type="checkbox"   class=" ml-3 float-right" v-model="form.permission.notifications"  >
                                        <span class="tit-2 float-right" >  الاشعارات</span>
                                        
                                    
                                </div>
                                <div class="col-4 mt-2">
                                        <input type="checkbox"   class="ml-3 float-right" v-model="form.permission.work_stages"  >
                                        <span class="tit-2 float-right" >مراحل العمل</span>
                                        
                                    
                                    
                                </div>
                            
                                <div class="col-4 mt-2">
                                    
                                        <input type="checkbox"   class=" ml-3 float-right" v-model="form.permission.buildings"   >
                                        <span class="tit-2 float-right" >الوحدات السكنية</span>
                                        
                                                        
                                    
                                </div>
                        
                </div>

                </div>
                <div class="modal-footer border-0 table-tit-button">
                    <button type="button" class="btn rounded-sm text-white btn-sm mx-auto" @click="editMode ? updateUser (): createUser()">{{ editMode ? 'تعديل المستخدم': 'اضافة المستخدم' }}</button>
                    
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
import { Form, HasError, AlertError } from 'vform';
import Vue from 'vue';
import router from "../../router/index"
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);


export default {
     
   
  data() {
      return { 
            editMode:false,
            users:[],
            form: new Form({
                id:'',
                name:'',
                username:'',
                password:'',
                permission:{
                    permission_name:'',
                    statistics:false,
                    buildings:false,
                    revenues:false,
                    money:false,
                    work_stages:false,
                    notifications:false,

                }
            })
      }
  },

  mounted() {
        
       this.loadUsers();
       if(!this.$store.getters.get_user.permission['users'])
        {router.go(-1)}
      
  },
  methods: {
      addMode(){
          this.editMode=false;
          this.form.reset();
          
      },
       loadUsers(){
           
                axios.post(this.$store.getters.get_url+'users/all',{
                    token:this.$store.getters.get_token
                }).then(({data}) => {
                this.users=data.data;
                 console.log(this.users)
                });
        },
        deleteUser(user){
            Swal.fire({
            title: 'Are you sure?',
            text:  "you want to delete '" + user.username + "'  .......You wont be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(this.$store.getters.get_url+'users/'+user.id,{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`} }).then(() => {
                 Swal.fire(
                'Deleted!',
                user.username + ' has been deleted.',
                'success'
                )
                });
                
            }
            })
            setTimeout(() => {  this.loadUsers()}, 2000);
        },
        createUser(){
            this.form.post(this.$store.getters.get_url+'users',{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`} }).then(() => {
                 
                 
                $('#addUser').modal('hide')
                setTimeout(() => {  this.loadUsers()}, 2000);
                this.form.reset ();
                });
                  Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                }).fire({
                    type: 'success',
                    title: 'user added successfully'
                    })
        },
        editUser(user){
            this.form.fill(user);
            this.editMode=true;
            $('#addUser').modal('show')

        },
        updateUser(){
            
            this.form.post(this.$store.getters.get_url+'users/'+this.form.id,{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`} },this.user).then(() => {
                 
            
            $('#addUser').modal('hide')
            setTimeout(() => {  this.loadUsers()}, 2000);
            this.form.reset ();
            this.editMode=false;
            });
            
        }
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
border-right: 0  ; 
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
 
