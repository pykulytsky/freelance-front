<template>
    <div class="wrapper">
        <h1>Hi, please login to use all the features of the site</h1>
        
        <div class="form">
            <h2>Please input your credentials</h2>
            <div class="center content-inputs">
                <input :class="{ 'form-group--error': $v.email.$error }" v-model="email" type="email" name="email" class="question" id="email" required autocomplete="off" />
                <label for="email"><span><unicon name="envelope"></unicon>  Enter email...</span></label>

                <input :class="{ 'form-group--error': $v.password.$error }" v-model="password" type="password" name="password" class="question" id="password" required autocomplete="off" />
                <label for="password"><span><unicon name="key-skeleton"></unicon>    Enter password...</span></label>

                <vs-checkbox
                    class="remember"
                >
                    Remember me
                </vs-checkbox>

                <div class="action-section">
                  <vs-button
                      @click="login"
                      border
                      class="submit-btn"
                    >
                      <unicon name="sign-in-alt" fill="limegreen"></unicon>
                      Login
                  </vs-button>

                  <router-link
                    class=""
                    to="/register"
                  >
                    Dont have an account? Register now
                  </router-link>

                </div>
            </div>
      </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data: () => {
      return {
        email: '',
        password: ''
      }
  },
  methods: {
      login() {
        if (!this.$v.email.$invalid && !this.$v.password.$invalid) {
          this.$anonHttp.post(
            'auth/login/',
            {
              email: this.email,
              password: this.password
            },
            {
              
            }
          )
          .then(response => {

          })
          .catch(error => {
            console.log(error)
          })
        }
        else {
          this.$vs.notification({
            position: 'top-center',
            title: 'Invalid data',
            text: `Please enter a valid login data`
          })
        }
      }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }


}
</script>

<style>
.wrapper {

    display: flex;
    flex-direction: column;

}

.form {
    border: solid 1px #2c3e50;
    padding: 55px;
}

input {
    font-size: 17px;
    margin-bottom: 25px;
}

.vs-button__content {
    font-size: 17px;
}

.custom-input {
    width: 100%;
}

input.question,
textarea.question {
  font-size: 30px;
  font-weight: 300;
  border-radius: 2px;
  margin: 15px;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid #2c3e50;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 20px;
  top: -35px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #EEE;
}

input[type="submit"]:active {
  background: #999;
}

/* input.question:valid ~ input[type="submit"], textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ input[type="submit"], textarea.question:invalid ~ input[type="submit"] {
  display: none;
} */

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

.remember {
    margin: 25px;
}

.action-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  
}
</style>