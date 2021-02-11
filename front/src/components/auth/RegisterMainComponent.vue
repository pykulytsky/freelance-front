<template>
  <div class="wrapper">
    <h1>Hi, welcome to our site</h1>

    <div class="form">
      <h2>Please input your credentials</h2>
      <div class="center content-inputs">
        <div class="name">
          <input
            :class="{ 'form-group--error': $v.userName.$error }"
            v-model="userName"
            type="text"
            name="userName"
            class="question"
            id="userName"
            required
            autocomplete="off"
          />
          <label for="userName"
            ><span><unicon name="user"></unicon> Username...</span></label
          >

          <input
            :class="{ 'form-group--error': $v.firstName.$error }"
            v-model="firstName"
            type="text"
            name="firstName"
            class="question"
            id="firstName"
            required
            autocomplete="off"
          />
          <label for="firstName"
            ><span><unicon name="user"></unicon> First name...</span></label
          >

          <input
            :class="{ 'form-group--error': $v.lastName.$error }"
            v-model="lastName"
            type="text"
            name="lastName"
            class="question"
            id="lastName"
            required
            autocomplete="off"
          />
          <label for="lastName"
            ><span><unicon name="user"></unicon> Last name...</span></label
          >
        </div>

        <input
          :class="{ 'form-group--error': $v.email.$error }"
          v-model="email"
          type="email"
          name="email"
          class="question"
          id="email"
          required
          autocomplete="off"
        />
        <label for="email"
          ><span><unicon name="envelope"></unicon> Enter email...</span></label
        >

        <input
          :class="{ 'form-group--error': $v.password.$error }"
          v-model="password"
          type="password"
          name="password"
          class="question"
          id="password"
          required
          autocomplete="off"
        />
        <label for="password"
          ><span
            ><unicon name="key-skeleton"></unicon> Enter password...</span
          ></label
        >

        <input
          :class="{ 'form-group--error': $v.password1.$error }"
          v-model="password1"
          type="password"
          name="password1"
          class="question"
          id="password1"
          required
          autocomplete="off"
        />
        <label for="password1"
          ><span
            ><unicon name="key-skeleton"></unicon> Retype password...</span
          ></label
        >

        <div class="role-picker">
          <vs-radio v-model="role" val="1"> Performer </vs-radio>
          <vs-radio v-model="role" val="2"> Employer </vs-radio>
        </div>

        <vs-checkbox class="remember"> Remember me </vs-checkbox>

        <div class="action-section">
          <vs-button @click="register" border class="submit-btn">
            <unicon name="sign-in-alt" fill="limegreen"></unicon>
            Register
          </vs-button>

          <router-link class="" to="/register">
            Already have an account? Login by click here
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => {
    return {
      email: "",
      userName: "",
      password: "",
      password1: "",
      firstName: "",
      lastName: "",
      role: 1,

      roles: [1, 2],
    };
  },
  methods: {
    register() {
      if (!this.$v.email.$invalid && !this.$v.password.$invalid) {
        this.$anonHttp
          .post("auth/register/", {
            email: this.email,
            password: this.password,
            role: this.role,
            first_name: this.firstName,
            last_name: this.lastName,
            username: this.userName,
          })
          .then((response) => {
            this.$router.push("/activate");
          })
          .catch((error) => {
            this.$vs.notification({
              position: "top-center",
              title: "Invalid data",
              color: 'primary',
              width: '100%',
              icon: '<unicon name="exclamation-octagon"></unicon>',
              text: `<h2>${this.parseErrorMessage(error.response.data)}</h2>`,
            });
          });
      } else {
        this.$vs.notification({
          position: "top-center",
          title: "Invalid data",
          text: `Please enter a valid login data`,
        });
      }
    },

    parseErrorMessage(data) {
      var message = "";

      Object.keys(data).forEach(function (key) {
        message += `${key}: ${data[key]} `
      });

      return message
    },
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
    },
    password: {
      required,
      minLength: minLength(6),
    },
    password1: {
      required,
      minLength: minLength(6),
    },
    firstName: {
      required,
      minLength: minLength(6),
    },
    lastName: {
      required,
      minLength: minLength(6),
    },
    userName: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>

<style scoped>
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

/* input.question:focus,
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
} */

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  color: #8f8f8f;
  font-size: 20px;
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
  background: #eee;
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

.name {
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.role-picker {
  margin-top: 20px;
  display: flex;
}
</style>