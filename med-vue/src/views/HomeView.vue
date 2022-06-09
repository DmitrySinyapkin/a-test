<template>
  <div class="home">
    <h1 class="home__title">Место для получения медицинской помощи</h1>
    <div class="home__controls">
      <button v-if="loggedIn" class="button button_red" @click="handleLogout">Выйти</button>
      <button v-else class="button button_red" @click="handleLogin">Войти</button>
      <button class="button button_white" @click="handleNavigateToContacts">Контакты</button>
    </div>
    <div class="home__cardlist">
      <service-card v-for="card in cards" :key="card.title" :data="card" />
    </div>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'
import router from '../router/index'
import Card1 from '../assets/card1.svg'
import Card2 from '../assets/card2.svg'
import Card3 from '../assets/card3.svg'

export default {
  name: 'HomeView',
  components: {
    ServiceCard
  },
  props: {
    loggedIn: Boolean
  },
  emits: ['handleModalOpen', 'handleLogout'],
  computed: {
    cards() {
      return [
        {
            icon: Card1,
            title: 'Онлайн-прием',
            text: 'Рыба текст'
        },
        {
            icon: Card2,
            title: 'Экстренный Случай',
            text: 'Рыба текст'
        },
        {
            icon: Card3,
            title: 'Лечение рака',
            text: 'Рыба текст'
        }
    ]
    }
  },
  methods: {
    handleLogout() {
      this.$emit('handleLogout')
    },
    handleLogin() {
      this.$emit('handleModalOpen')
    },
    handleNavigateToContacts() {
      router.push('/contacts')
    }
  }
}
</script>

<style lang="scss">
.home {
    padding: 120px 200px;

    @media (min-width: 768px) and (max-width: 1224px) {
        padding: 70px 10px;
    }

    @media (max-width: 767px) {
        padding: 70px 10px;
    }

    &__title {
        width: 727px;
        margin-bottom: 35px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 58px;
        line-height: 80px;
        letter-spacing: 0.2px;
        color: #252B42;

        @media (max-width: 768px) {
            width: 355px;
            margin-bottom: 50px;
            font-size: 28px;
            line-height: 39px;
        }
    }

    &__controls {
        width: 310px;
        display: flex;
        gap: 10px;
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 30px;
        }

        button {
            width: 150px;
            height: 52px;
        }
    }

    &__cardlist {
        width: 1024px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        @media (min-width: 768px) and (max-width: 1200px) {
            width: 676px;
        }

        @media (max-width: 767px) {
            width: 100%;
        }
    }
}
</style>
