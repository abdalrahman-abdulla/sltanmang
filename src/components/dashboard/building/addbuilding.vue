<template>
  <div class="users  pt-4 mt-3">
        <div class="container-fluid ">
                <div class="row m-0 p-0  d-flex flex-row-reverse">
                    <div class="logo"  >
                        <font-awesome-icon :icon="['fas', 'building']"  class="float-right icons" fixed-width/>
                    </div>
                    <div class="title">
                        <span class="tit-1 m-0 p-0 ">
                            تسجيل وحدة سكنية  
                        </span>
                        <span class="tit-2 m-0 p-0">
                        تسجيل الوحدة ومعلومات الزبون والدفعات مع التواريخ
                        </span>
                    </div>
                </div>
        
                
                <div class="row  m-0 p-0 pt-4 mt-3">
                    <div class="card w-100">
                        <div class="card-header border-0 bg-white d-flex justify-content-end  p-3 px-2">
                            
                            <div class="table-tit ">
                                معلومات الزبون  

                            </div>
                            
                        </div>
                        <div class="card-body py-0 pb-3">
                            <form class=" tab row flex flex-row-reverse " @submit.prevent="addBuilding()">
                                
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3  align-self-start">
                                        <input :disabled="buildingend==true" type="text" class="form-control" placeholder="  اسم الزبون" v-model="form.client_name" :class="{ 'is-invalid': form.errors.has('client_name') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'user']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="client_name"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3  align-self-start">
                                        <input type="text" :disabled="buildingend==true"  class="form-control" placeholder="  رقم الوحدة السكنية" v-model="form.building_no" :class="{ 'is-invalid': form.errors.has('building_no') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'sort-numeric-up']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="building_no"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3  align-self-start">
                                        <input type="text" :disabled="buildingend==true" class="form-control" placeholder="  سعر الوحدة السكنية" v-model="form.building_price" :class="{ 'is-invalid': form.errors.has('building_price') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'money-bill']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="building_price"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3   align-self-start">
                                        <input type="text" :disabled="buildingend==true" class="form-control" placeholder="  رقم هاتف الزبون" v-model="form.client_phone" :class="{ 'is-invalid': form.errors.has('client_phone') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'phone']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="client_phone"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3 mt-3  align-self-start">
                                        <input type="text" :disabled="buildingend==true" class="form-control" placeholder="تاريخ تسليم الوحدة" v-model="form.delivery_date" onfocus="(this.type='date')" onblur="(this.type='text')" :class="{ 'is-invalid': form.errors.has('delivery_date') }"> 
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="delivery_date"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3 mt-3  align-self-start">
                                        <input type="text" :disabled="buildingend==true" class="form-control" placeholder=" تاريح ترويج معاملة القرض " v-model="form.loan_date" onfocus="(this.type='date')" onblur="(this.type='text')" :class="{ 'is-invalid': form.errors.has('loan_date') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="loan_date"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3 mt-3  align-self-start">
                                        <input type="text"  :disabled="buildingend==true" class="form-control" placeholder="  تاريخ استلام القرض"  v-model="form.loan_receiving_date" onfocus="(this.type='date')" onblur="(this.type='text')" :class="{ 'is-invalid': form.errors.has('loan_receiving_date') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="loan_receiving_date"></has-error>
                                    </div>
                                    <div class="input-group   col-3 input-group-sm px-0 pl-3 mt-3   align-self-start">
                                        <input type="text" :disabled="buildingend==true" class="form-control" placeholder="مبلغ القرض  "  v-model="form.loan_price" :class="{ 'is-invalid': form.errors.has('loan_price') }">
                                        <div class="input-group-append">
                                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'money-bill']"  class="text-white icon" fixed-width/></span>
                                        </div>
                                        <has-error :form="form" field="loan_price"></has-error>
                                    </div>     
                                    <div class="form-group col-3 input-group-sm px-0 pl-3 mt-3   bg-white align-self-start">
                                        
                                        <textarea class="form-control textarea " :disabled="buildingend==true" rows="3" cols="5" id="comment" placeholder="ملاحظات" v-model="form.notice" :class="{ 'is-invalid': form.errors.has('notice') }"></textarea>
                                        <has-error :form="form" field="notice"></has-error>
                                    </div>  
                                    <div class="row col-12 pl-0"  :class="buildingend==true ?  ' d-none' : '' ">
                                        <button class="btn add-item-end btn-success ml-0  rounded-smrounded-sm text-white btn-sm mx-2"   >
                                    
                                                 {{updateMode ? 'تعديل الوحدة  ':'اضافة الوحدة اولا '}}        
                                        
                                        </button>
                                    </div> 
                                    
                                
                                    
                            </form>
                            <div class="row table-tit  flex p-3 flex-row-reverse " :class="buildingend?  ' ' : 'd-none' ">
                                <div >
                                    دفعات الوحدة  
                                </div>    

                            </div>
                            <div class="row  tab px-4 " :class="buildingend?  ' ' : 'd-none' ">
                                
                                <div class="col-12 tab-head tab-row d-flex flex-row-reverse  justify-content-between ">
                                    
                                    <div class="tab-contain p-0 col-1">الدفعة</div>
                                    <div class="tab-contain p-0 col-1">مرحلة العمل</div>
                                    <div class="tab-contain p-0 col-1">مبلغ الفقرة</div>
                                    <div class="tab-contain p-0 col-1">تاريخ استحقاق الدفعة</div>
                                    <div class="tab-contain p-0 col-1">المبلغ المسدد </div>
                                    <div class="tab-contain p-0 col-1">تاريخ التسديد</div>
                                    <div class="tab-contain p-0 col-1">تاريخ انجاز الفقرة</div>
                                    <div class="tab-contain p-0 col-2">تاريخ الدفعة قبل الاخيرة</div>
                                    <div class="tab-contain p-0 col-1" @click="soon()">الوصل</div>
                                    <div class="tab-contain p-0 col-1">عمليات</div>
                                    <div class="tab-contain p-0 col-1">تسديد</div>
                                    
                                    
                                        
                                    
                                </div>
                                <!-- start body -->
                                
                                <div class="col-12 tab-row d-flex flex-row-reverse  justify-content-between " v-for="(payment, index) in payments" :key="index">
                                    
                                    <div class="tab-contain p-0 col-1">{{payment.payment_name}}</div>
                                    <div class="tab-contain p-0 col-1">{{payment.work_stage}}</div>
                                    <div class="tab-contain p-0 col-1">{{payment.payment_money}}</div>
                                    <div class="tab-contain p-0 col-1">{{payment.payment_date}}</div>
                                    <div class="tab-contain p-0 col-1">{{payment.amount_paid}}</div>
                                    <div class="tab-contain p-0 col-1">{{payment.paid_date}}</div>
                                    <div class="tab-contain p-0 col-1">{{payment.completion_payment_date}}</div>
                                    <div class="tab-contain p-0 col-2">{{payment.penultimate_payment_date}}</div>
                                    <div class="tab-contain p-0 col-1" @click="soon()">الوصل</div>
                                    <div class="tab-contain p-0 col-1">
                                        
                                        <span class="icon trash rounded  " @click="deletepayment(payment)"><font-awesome-icon :icon="['fas', 'trash']"  class=" " fixed-width/></span> 
                                        <span class="icon pen rounded ml-1" @click="editpaymentshow(payment)"> <font-awesome-icon :icon="['fas', 'pen']"  class="  " fixed-width/> </span>
                                        
                                    
                                    </div>
                                     
                                    <div class="tab-contain p-0 col-1" @click="addpaid(payment)"><button class="plus rounded " data-toggle="modal" data-target="#addpayment"><font-awesome-icon :icon="['fas', 'plus-circle']"  class="text-white icon" fixed-width/></button></div>
                                    
                                    
                                    
                                    
                                    
                                        
                                    
                                </div>  
                                <!-- end body -->
                            </div>


                        </div>
                        <div class="card-footer bg-white text-right  px-4" :class="buildingend?  ' ' : 'd-none' ">
                            <div class="row d-flex flex-row-reverse  px-2">
                            <div class="col-2 text-right">
                                    : المبلغ المسدد                                
                            </div>
                            <div class="col-1 text-center yell-ba ">
                                    {{formatToCurrency(totalpaid)}}                                  
                            </div>
                            <div class="col-2 text-right">
                                    : مجموع الدفعات والمقدمة                                
                            </div>
                            <div class="col-1 text-center yell-ba yell-ba-2">
                                     {{formatToCurrency(totalpayment)}}                                
                            </div>
                            </div>
                            <div class="row d-flex flex-row-reverse  p-2">
                            <div class="col-2 text-right">
                                    : مبلغ القرض
                            </div>
                            <div class="col-1 text-center yell-ba yell-ba-2">
                                    {{formatToCurrency(totalloan)}}                                    
                            </div>
                            <div class="col-2 text-right">
                                    : المبلغ المتبقي من الدفعات                             
                            </div>
                            <div class="col-1 text-center yell-ba yell-ba-2">
                                    {{formatToCurrency(totalpayment-totalpaid)}}                              
                            </div>
                            </div>
                            <div class="row px-4">
                                <div class="table-tit-button">
                                 <button class="btn add-item-end btn-success ml-0  rounded-smrounded-sm text-white btn-sm mx-2"  @click="endpage()" >
                                    
                                          {{updateMode ? 'تعديل وانهاء  ':'اضافة وانهاء  '}}         
                                        
                                    </button>
                                <button class="btn add-item rounded-smrounded-sm text-white btn-sm" data-toggle="modal" data-target="#additem" @click="cleanpayemrnt()">
                                    
                                            اضافة فقرة     
                                    
                                </button>
                                
                                
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>


        <div class="modal fade" id="additem" tabindex="-1" role="dialog" aria-labelledby="additem" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content w-50">
                <div class="modal-header border-0 حلا-0">
                    <div class="w-100 ">
                        <span class="modal-title table-tit float-right" id="additem"  >اضافة فقرة بناء</span>
                    </div>
                    
                </div>
                <div class="modal-body pt-0">
                    <form action="">
                        <div class="input-group  input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="   اسم الفقرة " v-model="payment.payment_name">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'network-wired']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group  input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="   مرحلة العمل" v-model="payment.work_stage">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'network-wired']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group   input-group-sm  px-2 py-1 ">
                            <input type="text" class="form-control" placeholder=" مبلغ الفقرة  " v-model="payment.payment_money">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'money-bill-alt']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="تاريخ استحقاق الدفعة " v-model="payment.payment_date" onfocus="(this.type='date')" onblur="(this.type='text')">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="تاريخ انجاز الفقرة " v-model="payment.completion_payment_date" onfocus="(this.type='date')" onblur="(this.type='text')">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="تاريخ الدفعة قبل الاخيرة " v-model="payment.penultimate_payment_date" onfocus="(this.type='date')" onblur="(this.type='text')">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                    </form> 

                </div>
                <div class="modal-footer border-0 table-tit-button pt-0">
                    <button type="button" class="btn rounded  text-white btn-sm mx-auto add-item"   @click="addPayment()" > اضافة فقرة <font-awesome-icon :icon="['fas', 'plus-circle']"  class="text-white icon" fixed-width/></button>
                    
                </div>
                
                </div>
            </div>
        </div>

        <!--edit modal -->
        <div class="modal fade" id="editpayment" tabindex="-1" role="dialog" aria-labelledby="additem" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content w-50">
                <div class="modal-header border-0 حلا-0">
                    <div class="w-100 ">
                        <span class="modal-title table-tit float-right" id="additem"  >تعديل فقرة بناء</span>
                    </div>
                    
                </div>
                <div class="modal-body pt-0">
                    <form action="">
                        <div class="input-group  input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="   اسم الفقرة " v-model="editpayment.payment_name">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'network-wired']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group  input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="   مرحلة العمل" v-model="editpayment.work_stage">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'network-wired']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group   input-group-sm  px-2 py-1 ">
                            <input type="text" class="form-control" placeholder=" مبلغ الفقرة  " v-model="editpayment.payment_money">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'money-bill-alt']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="تاريخ استحقاق الدفعة " v-model="editpayment.payment_date" onfocus="(this.type='date')" onblur="(this.type='text')">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="تاريخ انجاز الفقرة " v-model="editpayment.completion_payment_date" onfocus="(this.type='date')" onblur="(this.type='text')">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                        <div class="input-group input-group-sm px-2 py-1 ">
                            <input type="text" class="form-control" placeholder="تاريخ الدفعة قبل الاخيرة " v-model="editpayment.penultimate_payment_date" onfocus="(this.type='date')" onblur="(this.type='text')">
                            <div class="input-group-append">
                            <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                            </div>
                            
                        </div>
                    </form> 

                </div>
                <div class="modal-footer border-0 table-tit-button pt-0">
                    <button type="button" class="btn rounded  text-white btn-sm mx-auto add-item"   @click="editpaymentfun()" > تعديل الفقرة <font-awesome-icon :icon="['fas', 'plus-circle']"  class="text-white icon" fixed-width/></button>
                    
                </div>
                
                </div>
            </div>
        </div>   



        <div class="modal fade" id="addpayment" tabindex="-1" role="dialog" aria-labelledby="addpayment" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content w-50">
            <div class="modal-header border-0 حلا-0">
                <div class="w-100 ">
                    <span class="modal-title table-tit float-right" id="addpayment">اضافة فقرة تسديد</span>
                </div>
                
            </div>
            <div class="modal-body pt-0">
                <form action="">
                    <div class="input-group  input-group-sm px-2 py-1 ">
                        <input type="text" class="form-control" placeholder=" المبلغ المسدد" v-model="payment.amount_paid">
                        <div class="input-group-append">
                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'money-bill-alt']"  class="text-white icon" fixed-width/></span>
                        </div>
                        
                    </div>
                    <div class="input-group   input-group-sm  px-2 py-1 ">
                        <input type="date" class="form-control" placeholder="   تاريخ التسديد  " v-model="payment.paid_date">
                        <div class="input-group-append">
                        <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                        </div>
                        
                    </div>
                     
                </form> 

            </div>
            <div class="modal-footer border-0 table-tit-button pt-0" >
                <button type="button" class="btn rounded  text-white btn-sm mx-auto add-item"  @click="addrepayment()">   تسجيل واغلاق <font-awesome-icon :icon="['fas', 'plus-circle']"  class="text-white icon" fixed-width/></button>
                 
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
 import Vue from 'vue'
 Vue.component(HasError.name, HasError);
 Vue.component(AlertError.name, AlertError);
 import router from "../../../router/index"

export default {
     
  name: "addbuilding",
  data() {
      return {
            updateMode:false,
            buildingend:false,
            form: new Form({
                client_name: '',
                building_no: '',
                building_price: '',
                client_phone: '',
                delivery_date : '',
                loan_date : '',
                loan_receiving_date: '',
                loan_price: '',
                notice: '',   
            }),
            payment:{
                id:null,
                payment_name:'',
                work_stage:'',
                payment_money:'',
                payment_date:'',
                completion_payment_date:'',
                penultimate_payment_date:'',
                amount_paid:null,
                paid_date:null
            },
            editpayment:{},
            payments:[],
            totalloan:0,
            totalpayment:0,
            totalpaid:0

      }
  },
  methods: {

        addBuilding(){
                 if (!this.updateMode) {
                    this.form.post(this.$store.getters.get_url+'building',{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`}}).then(({data}) => {
                 
                     
                    this.buildingend=true;
                    this.form.id=data;
                    Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                    }).fire({
                    type: 'success',
                    title: 'building added successfully'
                    })
                    });}
                    else
                    {
                        this.editBuilding();
                    }
        },
        editBuilding(){
                if (this.updateMode) {
                     this.form.put(this.$store.getters.get_url+'building/'+this.form.id,{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`}}).then(() => {
                         Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                    }).fire({
                    type: 'success',
                    title: 'building updated successfully'
                    })
                    
                    this.buildingend=true;
                     });}
             
        },
        addPayment(){
            
            axios.post(this.$store.getters.get_url+'building/'+this.form.id+'/payment',{
                token:this.$store.getters.get_token,
                data:this.payment
                }).then(({data})=>{
                this.payment.id=data;
                this.payments.push({...this.payment});
                this.totalpayment+=this.payment.payment_money*1;
                this.totalpayment=this.totalpayment*1;
                this.totalloan+=this.payment.loan_price*1;
                this.totalloan=this.totalpayment*1;
                

                 
                this.payment={};
                 $('#additem').modal('hide');
                 
            })
            
        },
        addpaid(paym){
            this.payment=paym;
        },
        addrepayment(){
            axios.put(this.$store.getters.get_url+'building/'+this.form.id+'/payment/'+this.payment.id+'/add_repayment' ,{
                token:this.$store.getters.get_token,
                data:this.payment
                }).then(()=>{
                this.totalpaid+=this.payment.amount_paid*1; 
                 this.payment={};
                 $('#addpayment').modal('hide');
                 
                 
            })
        },
        deletepayment(payment){
             
            Swal.fire({
            title: 'Are you sure?  ',
            text:  "you want to delete '" + payment.payment_name + "'  .......You wont be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(this.$store.getters.get_url+'building/'+this.form.id+'/payment/'+payment.id ,{ headers: {"Authorization" : `Bearer ${this.$store.getters.get_token}`} }).then(() => {
                 Swal.fire(
                'Deleted!',
                payment.payment_name + ' has been deleted.',
                'success'
                )
                });
                setTimeout(() => {  this.loadpayment()}, 2000);
            }
            })
            
        },
        endpage(){
             
                const toast = Swal.mixin({
                toast: true,
                icon:'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000
                });
                toast.fire({
                    type: 'success',
                    title: 'building added success'
                })
                router.push({ name: 'buildings' })
             
        },
        formatToCurrency(amount){
            return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').slice(0, -3)+' IQD'; 
        },
        loadbuilding(id){
            axios.post(this.$store.getters.get_url+'building/'+id,{
                token:this.$store.getters.get_token}).then(({data}) => {
                this.form.fill(data.data)
                 
                  this.loadpayment();
            }).catch(()=>{
                router.push({ name: 'buildings' })
            });
        },
        loadpayment(){
                    this.totalpaid=0
                    this.totalpayment=0
                    this.totalloan=0
                    
            axios.post(this.$store.getters.get_url+'building/'+this.$route.params.id+'/payment/all',{
                token:this.$store.getters.get_token}).then(({data}) => {
                  this.payments=data.data;
                 this.payments.forEach(payment => {
                     
                    this.totalpaid+=payment.amount_paid*1;
                    this.totalpayment+=payment.payment_money*1;
                    this.totalloan+=payment.loan_price*1;
                   
                 });
                  
            });
        },
        editpaymentshow(paym){
            this.editpayment=paym; 
                
            $('#editpayment').modal('show');
              

        },
        editpaymentfun(){
            axios.put(this.$store.getters.get_url+'building/'+this.form.id+'/payment/'+this.editpayment.id ,{ 
                token: this.$store.getters.get_token,
                data:this.editpayment}).then(() => {
                                   
                      $('#editpayment').modal('hide');
                     });
        },
        soon(){
          
         $('#showmessage').modal('show');
        },
        cleanpayemrnt(){
            this.payment={};
        }
        
  },
  mounted() {
       
     if(this.$route.params.id){
         this.form.id=this.$route.params.id;
         this.loadbuilding(this.$route.params.id);
         this.updateMode=true;
     }
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

 
 
 

 

.input-group input,.input-group-append span{
font-size: 14px !important;
border-color: black;
border-right: 0;
 
 text-align: right;
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

::placeholder {
  color: #6E84A3;
  font-size: 11px;
  text-align: right;
}

.textarea
{
font-size: 12px !important;
resize: none;
 }


 .tab-contain
{
    
    font-size: 12px;
    text-align: center;
    color: #303658;

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
 
    
    font-size: 13px;
    cursor: pointer;
}
span.pen 
{
    color:#39AFD1 ;
}
span.trash 
{
    color: #f0567c ;
}


.card-footer
{
    font-size: 12px;
    color: #303658;
}


.yell-ba  
{
    background-color:#F89808;
    color: white;
     border-radius: 20px;
     
    
}

.yell-ba-2
{
    background-color: #39AFD1;
}


.add-item
{
    background-color: #f0567c;
    font-size: 10px;
}
.add-item-end
{
     
    font-size: 10px;
}
button.plus 
{
    background-color: #39AFD1;
    font-size: 12px;
    padding:  4px 8px;
    cursor: pointer;
    border: 0;
}

 
</style>
 
