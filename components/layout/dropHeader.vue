<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{
    isOpenHeader: boolean;
    handleDropHeader: (event: MouseEvent) => void;
}>();
</script>

<template>
    <div class="dropHeader dropBlock" :class="{ opened: isOpenHeader }">

        <span class="close" @click="handleDropHeader"></span>

        <div class="logo">
            <NuxtLink to="/" class="logo__link">
                <NuxtImg src="svg/logo.svg" alt="logo" />
            </NuxtLink>
        </div>

        <div class="footer-menu">
            <div class="footer-menu__col">
                <a href="#"><span class="text-default">Тренды</span></a>
                <a href="#"><span class="text-default">Дизайн</span></a>
                <a href="#"><span class="text-default">Архитектура</span></a>
                <a href="#"><span class="text-default">АРТ</span></a>
                <a href="#"><span class="text-default">Интерьеры</span></a>
                <a href="#" class="link-publish"><strong><span class="text-default">ОПУБЛИКОВАТЬ
                            ПРОЕКТ</span></strong></a>
            </div>
            <div class="footer-menu__col">
                <a href="#"><span class="text-default">DESIGN NOW</span></a>
                <a href="#"><span class="text-default">guide</span></a>
                <a href="#"><span class="text-default">ЖУРНАЛ</span></a>
            </div>
            <div class="footer-menu__col">
                <a href="#"><span class="text-default">о проекте</span></a>
                <a href="#"><span class="text-default">Legal info</span></a>
                <a href="#"><span class="text-default">редакция</span></a>
                <a href="#"><strong><span class="text-default">РЕКЛАМА</span></strong></a>
            </div>
            <div class="footer-menu__col">
                <a href="#"><span class="text-default">Telegram</span></a>
                <a href="#"><span class="text-default">Pinterest</span></a>
                <a href="#"><span class="text-default">VK</span></a>
                <a href="#"><span class="text-default">ZEN</span></a>
            </div>
        </div>

        <span class="not-project">Анкета для публикации проекта доступна только в десктопной версии сайта</span>

        <div class="subscribe-from">
            <h2 class="caption caption--h2">Подписывайтесь на нашу
                рассылку</h2>

            <form class="subscribe-from__form">
                <input type="email" placeholder="Ваша почта" />
                <button type="submit" class="btn">Подписаться</button>
            </form>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropHeader {
    display: grid;
    grid-template-columns: 1fr minmax(665px, 35%);
    background-color: $colorWhite;

    @include responsive1599 {
        grid-template-columns: 1fr minmax(500px, 35%);
    }

    @include responsive1279 {
        grid-template-columns: 1fr;
    }

    .footer-menu {
        grid-row: 2/3;
    }

    .subscribe-from {
        grid-column: 2/3;
        grid-row: 2/4;

        @include responsive1279 {
            grid-column: initial;
            grid-row: initial;
            order: 4;
            margin-top: 32px;
            max-width: 70%;
        }

        @include responsive767 {
            max-width: 100%;
            margin-top: 16px;
        }
    }
}
</style>