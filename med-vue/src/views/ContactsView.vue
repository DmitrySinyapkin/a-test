<template>
    <div class="contacts">
        <h1 class="contacts__title">Контакты</h1>
    </div>
</template>

<style lang="scss">
.contacts {
    padding: 220px 200px;

    @media (max-width: 768px) {
        padding: 55px 10px;
    }

    &__title {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 58px;
        line-height: 80px;

        @media (max-width: 768px) {
            font-size: 28px;
            line-height: 39px;
        }
    }
}
</style>
