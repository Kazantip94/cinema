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
        <div class="form-group">
          <label for="name">Имя</label>
          <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Введите пароль"
              v-model.trim="name"
              :class="{invalid: $v.name.$dirty && !$v.name.required}"
          >
          <span class="error invalid"
            v-if="$v.name.$dirty && !$v.name.required"
            >
            Введите Имя</span>
        </div>
        <p>
          <label>
            <input type="checkbox" v-model="agree" />
            <span class="policy">С правилами согласен</span>
          </label>
        </p>
      </div>
      <div class="card-footer">
        <div>
          <button
              class="btn btn-primary"
              type="submit"
          >
            Зарегистрироваться
          </button>
        </div>

        <p class="center">
          Уже есть аккаунт?
          <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </form>
  </div>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default ({
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required},
    agree: {checked: v => v}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      console.log(formData)
      this.router.push('/')
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
.policy {
  margin-left: 10px;
}
</style>