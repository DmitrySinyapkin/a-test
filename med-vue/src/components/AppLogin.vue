<template>
  <form class="login">
    <div class="login__title">Войти:</div>
    <label class="login__field">
      Логин: <input class="field__input" type='text' v-model="login" />
      <div class="field__message">{{loginMessage}}</div>
    </label>
    <label class="login__field">
      Пароль: <input class="field__input" type='password' v-model="password" />
      <div class="field__message">{{passwordMessage}}</div>
    </label>
    <div class="login__controls">
      <button
        class="button button_white login__button"
        @click.prevent="handleSubmit"
      >
        Войти
      </button>
      <button
        class="button button_white login__button"
        @click="this.$emit('closeHandler')"
      >
        Отмена
      </button>
    </div>
  </form>
</template>

<script>
import { validateLogin, validatePassword } from '../utils/validators'
import { loginUser } from '../api/fakeApi'
import router from '../router/index'

export default {
  name: "AppLogin",
  emits: ['loginHandler', 'closeHandler'],
  data() {
    return {
      login: "",
      password: "",
      loginMessage: "",
      passwordMessage: "",
      messages: {
        login: {
          empty: "Введите логин!",
          fail: "Недопустимые символы!",
        },
        password: {
          empty: "Введите пароль!",
          short: "Пароль слишком короткий!",
          fail: "Недопустимые символы!",
        },
      },
    };
  },
  methods: {
    loginValidationCallback(value) {
      this.loginMessage = value;
    },
    passwordVaidationCallback(value) {
      this.passwordMessage = value;
    },
    handleSubmit() {
      const loginValidation = validateLogin(
        this.login,
        this.loginValidationCallback,
        this.messages.login
      );
      const passwordValidation = validatePassword(
        this.password,
        this.passwordVaidationCallback,
        this.messages.password
      );

      if (loginValidation && passwordValidation) {
        loginUser(this.login, this.password)
          .then((resp) => {
            this.$emit('loginHandler', resp);
            this.$emit('closeHandler');
            router.push('/profile')
          })
          .catch((err) => alert(err.message));
      }
    },
  },
};
</script>

<style lang="scss">
@mixin form-font {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 20px;
}

.login {
  margin: 100px auto;
  z-index: 200;
  width: 300px;
  height: fit-content;
  background: white;
  border-radius: 7px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  &__title {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 34px;
  }

  &__field {
    @include form-font();
    padding-bottom: 10px;
    position: relative;

    .field__input {
      @include form-font();
      height: 40px;
      border: none;
      border-bottom: 1px solid black;

      &:focus {
        outline: none;
      }
    }

    .field__message {
      position: absolute;
      top: 64px;
      left: 0;
      font-family: "Montserrat";
      font-size: 12px;
      color: #ff685b;
    }
  }

  &__controls {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;

    .login__button {
      width: 100px;
      height: 40px;
    }
  }
}
</style>
