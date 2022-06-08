<template>
  <div class="header">
    <div class="header__logo">
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </div>
    <div class="header__controls">
      <router-link to="/contacts">Контакты</router-link>
      <button
        v-if="loggedIn"
        class="button button_white button__login"
        @click="handleLogout"
      >
        Выйти
      </button>
      <button
        v-else
        class="button button_white button__login"
        @click="handleModalOpen"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/logo.svg";
export default {
  name: "AppHeader",
  computed: {
    logo() {
      return Logo;
    },
  },
  props: {
    loggedIn: Boolean,
    logoutHandler: Function,
    modalHandler: Function,
  },
  methods: {
    handleLogout() {
      this.$emits.logoutHandler();
    },
    handleModalOpen() {
      this.$emits.modalHandler();
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 80px;
  padding: 0 70px;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  &__logo {
    width: 54px;
    height: 23px;
    cursor: pointer;

    .logo__img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  &__controls {
    display: flex;
    gap: 60px;
    align-items: center;

    @media (max-width: 768px) {
      gap: 10px;
    }

    .button__login {
      width: 186px;
      height: 40px;

      @media (max-width: 768px) {
        width: 106px;
        height: 36px;
      }
    }
  }
}
</style>
