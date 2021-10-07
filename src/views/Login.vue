<template>
<div class="card card-primary" @submit.prevent="submitHandler">
    <div class="card-header">
      <h3 class="card-title">КиноЦМС</h3>
    </div>
    <form id="quickForm">
        <div class="card-body">
          <div class="form-group">
            <label for="email">Email</label>
            <input
                id="email"
                type="text"
                class="form-control"
                placeholder="Введите email"
                v-model.trim="email"
                :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            >
            <span class="error invalid"
            v-if="$v.email.$dirty && !$v.email.required"
            >
            Поле Email не должно быть пустым</span>
            <span class="error invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
            >
            Введите корретный Email</span>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Введите пароль"
                v-model.trim="password"
                :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            >
            <span class="error invalid"
            v-if="$v.password.$dirty && !$v.password.required"
            >
            Введите Пароль</span>
            <span class="error invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            >
            Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</span>
          </div>
        </div>
        <div class="card-footer">
            <button
                class="btn  btn-primary"
                type="submit"
            >
              Войти
            </button>
          <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
          </p>  
        </div>
      </form>
  </div>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default ({
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch(e) {console.log('error')}
    }
  }
  
})
</script>


<style lang="scss" scoped>
.card {
  width: 700px;
  margin: 0 auto;
}
.center {
  margin-top: 20px;
}
.error {
  color: red;
}
</style>
