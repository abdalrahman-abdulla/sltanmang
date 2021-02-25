<template>
    <div>
        <div class="modal fade" id="addpayment" tabindex="-1" role="dialog" aria-labelledby="addpayment" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content w-50">
                    <div class="modal-header border-0 حلا-0">
                        <div class="w-100 ">
                            <span class="modal-title table-tit float-right" id="addpayment">اضافة فقرة بناء</span>
                        </div>
                    </div>
                    <div class="modal-body pt-0">
                        <form action="">
                            <div class="input-group  input-group-sm px-2 py-1 ">
                                <input type="text" class="form-control" placeholder="     المبلغ المسدد">
                                <div class="input-group-append">
                                <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'money-bill-alt']"  class="text-white icon" fixed-width/></span>
                                </div>
                                
                            </div>
                            <div class="input-group   input-group-sm  px-2 py-1 ">
                                <input type="text" class="form-control" placeholder="   تاريخ التسديد  ">
                                <div class="input-group-append">
                                <span class="input-group-text btn"><font-awesome-icon :icon="['fas', 'calendar-day']"  class="text-white icon" fixed-width/></span>
                                </div>
                                
                            </div>
                        </form> 

                    </div>
                    <div class="modal-footer border-0 table-tit-button pt-0">
                        <button type="button" class="btn rounded  text-white btn-sm mx-auto add-item" data-dismiss="modal">   تسجيل واغلاق <font-awesome-icon :icon="['fas', 'plus-circle']"  class="text-white icon" fixed-width/></button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {

    name:"payment",

}
</script>