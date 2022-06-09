<template>
  <div class="profile">
    <h1 class="profile__text">Привет, {{username}}</h1>
    <div class="profile__controls">
      <button class="button button_red" @click="this.$emit('handleLogout')">{{logoutBtnText}}</button>
      <button className="button button_white" @click="handleNavigateToContacts">{{contactsBtnText}}</button>
    </div>
  </div>
</template>

<script>
import router from "../router/index";

export default {
  name: "ProfileView",
  emits: ['handleLogout'],
  data() {
    return {
      username: '',
      logoutBtnText: '',
      contactsBtnTex: ''
    };
  },
  methods: {
    handleNavigateToContacts() {
      router.push("/contacts");
    },
    handleResize() {
      this.logoutBtnText = window.innerWidth < 1000 ? "Выйти" : "Выйти из аккаунта"
      this.contactsBtnText = window.innerWidth < 1000 ? "Контакты" : "Перейти в контакты";
    }
  },
  created() {
    this.username = localStorage.getItem("med-vue-user")
      ? JSON.parse(localStorage.getItem("med-vue-user")).name
      : "";
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  }
};
</script>

<style lang="scss">
.profile {
  padding: 220px 200px;

  @media (max-width: 768px) {
    padding: 55px 10px;
  }

  &__text {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 58px;
    line-height: 80px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 39px;
    }
  }

  &__controls {
    display: flex;
    gap: 10px;

    button {
      height: 52px;
      width: 258px;

      @media (max-width: 1000px) {
        width: 145px;
      }
    }
  }
}
</style>
