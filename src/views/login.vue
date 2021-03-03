<template>
    <div class="login h-100 "> 
        <div class="  row h-100  m-0 p-0">
            <div class="col-8 h-100 m-0 p-0 img-ba d-flex flex-wrap align-items-center justify-content-center flex-column  "> 
                <div class="logo text-white  ">
                    <img class="h-100" src="../assets/images/logo.png" alt="" >
                </div>
                <div class="title text-center text-white mb-3 color-cu">
                    <span>نظام المبيعات والايرادات </span><br>
                </div>
            </div>
            <div class="col-4 m-0 p-0 h-100 d-flex flex-column  justify-content-center">
                <div class="title text-center mb-3 color-cu">
                    <span>نظام ادارة </span><br>
                    <span>مجمع السلطان السكني </span>
                </div>
                <div class="form-login text-center  d-flex justify-content-center">
                    <form action=""  class=" " @submit.prevent="login()">
                        <label for="" class="color-cu mb-3">تسجيل الدخول</label>
                        <div class="input-group mb-2  "> 
                            <input type="text" class="form-control form-control-sm " placeholder="اسم المستخدم" v-model="username" required>
                            <div class="input-group-append">
                                <span class="input-group-text" ><font-awesome-icon :icon="['fas', 'user']"  class="text-white" fixed-width/></span>
                            </div> 
                        </div>
                        <div class="input-group mb-3 "> 
                            <input type="password" class="form-control form-control-sm" placeholder="كلمة المرور" v-model="password" required>
                            <div class="input-group-append">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'key']"  class="text-white" fixed-width/></span>
                            </div>
                        </div>
                        <div class="input-group mb-3 text-center text-danger bold" v-if="err"> 
                            <label class=" font-weight-bold w-100 text-center">{{err}}</label>
                        </div>
                        <div class="mb-2">
                            <button class="btn btn-sm text-white fill ة-3" @click.prevent="fill()">
                                ملئ الحقول تلقائياً
                            </button>
                        </div>
                        
                        <button class="btn btn-sm text-white " :class="isLoading?'d-none':''">
                            تسجيل الدخول
                            
                        </button>
                        <div class="spinner-border" role="status" :class="!isLoading?'d-none':''">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router/index"
export default {
    name: "login",
    data() {
        return {
                isLoading:false,
                username: '',
                password: '',
                err:null
        }
    },
    computed: {
        
    },
    methods: {
        login(){
            this.isLoading=true;
            this.$store
            .dispatch("performLoginAction", {
                username: this.username,
                password: this.password,
            })
            .then(() => { 
                this.isLoading=false;
                return router.push({ name: 'dashboard' });
            })
            .catch(err => {
                this.isLoading=false;
                console.log('failied' + err);
                this.err='اسم المستخدم او كلمة المرور غير صحيح';
            });  
        },
        fill(){
            this.username='abd009'
            this.password='password'
        }
    }, 
};
</script>

<style scoped>
.color-cu{
    color: #303658
}
.input-group-text
{
    background-color: #303658; 
}
.form-control
{
    direction: rtl;
}
.title
{
    font-size: 23px;
}
label
{
    font-size: 10px;
}
form
{
    width: 60%;
}
::placeholder {
    color: #303658;
    font-size: 10px;
    text-align: right;
}
.btn
{
    background-color: #F0567C;
    border: 0;
    font-size: 10px;
    padding: 6px 16px;
}

.img-ba
{
    position: relative;
    background-image: url('../assets/images/Group2x.png');
    background-size: cover;
}
.logo
{
    height: 30%;
}
.fill{
    background-color: #303658;
    padding: 6px;
}
</style>
