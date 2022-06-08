<template>
  <div class="app">
    <header>
      <app-header
        :loggedIn="loggedIn"
        @logoutHandler="handleLogout"
        @modalHandler="handleModalOpen"
      />
    </header>
    <main>
      <router-view />
      <div v-if="isModalOpen" class="modal">
        <app-login
          @closeHandler="handleModalClose"
          @loginHandler="handleLogin"
        />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppLogin from "./components/AppLogin.vue";

export default {
  components: {
    AppHeader,
    AppLogin,
  },
  data() {
    return {
      user: {},
      isModalOpen: false,
    };
  },
  computed: {
    loggedIn() {
      return this.user.name ? true : false;
    },
  },
  methods: {
    handleLogin(user) {
      this.user = user;
      localStorage.setItem("med-vue-user", JSON.stringify(user));
    },
    handleLogout() {
      this.user = {};
      localStorage.removeItem("med-vue-user");
    },
    handleModalOpen() {
      this.isModalOpen = true;
    },
    handleModalClose() {
      this.isModalOpen = false;
    },
  },
  created() {
    this.user = localStorage.getItem("med-vue-user")
      ? JSON.parse(localStorage.getItem("med-vue-user"))
      : {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a,
a:hover {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  text-decoration: none;
}

.button {
  border: 2px solid #ff685b;
  border-radius: 7px;
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;

  &:hover {
    box-shadow: 0px 0px 88px -50px rgba(255, 104, 91, 1);
  }

  &_white {
    background: white;
    color: #ff685b;
  }

  &_red {
    background: #ff685b;
    color: white;
  }
}

.app {
  background: white;

  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 100;
    top: 0;
    left: 0;
  }
}
</style>
