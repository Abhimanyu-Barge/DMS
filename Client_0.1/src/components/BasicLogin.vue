<template>
  <div>
      <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100 p-t-50 p-b-90">
                <span class="login100-form-title p-b-51">
                  Organization Login 
                </span>
                <div class="wrap-input100 validate-input m-b-16" >
                  <input class="input100" type="text" name="username" placeholder="Enter User Name" v-model="login.userName">
                  <span class="focus-input100"></span>
                </div>
                <div class="wrap-input100 validate-input m-b-16">
                  <input class="input100" type="password" name="pass" placeholder="Enter Password"  v-model="login.password">
                  <span class="focus-input100"></span>
                </div>
                
                <div class="flex-sb-m w-full p-t-3 p-b-24">
                </div>
      
                <div class="container-login100-form-btn m-t-17">
                  <button class="login100-form-btn" @click="LoginUser">
                    Login
                  </button>
                    <!-- <a href="https://www.paypal.me/AbhimanyuBarge/100" target="_blank">Payment me</a> -->
                </div>
            </div>
          </div>
          
          
        </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import VueJWT from 'vuejs-jwt'
  import '../../static/css/util.css'
  import '../../static/css/main.css'
export default {
  name: 'loginScreen',
  data () {
    return {
      login:{}
    }
  },
  methods: {
    LoginUser () {
    axios.post('/login',this.login)
        .then(response => {
          if(response.status == 200 && response.data.text == true){
            sessionStorage.setItem('authorization',response.headers.authorization);
             var currentUser =  this.$jwt.decode(response.headers.authorization, 'secret')
            this.$router.push('/dashboard')
            this.$toasted.show('Welcome to '+currentUser.userName,{ theme: "outline", position: "top-center", duration : 1000})
      }
        })
        .catch(e => {
        })
    }
  }
}
</script>

