<script lang="ts" setup>
import { getAssetPath } from '../utils/pathHelper';
</script>

<template>
    <footer class="footer">
        <div class="logo">
            <NuxtLink to="/" class="logo__link">
                <NuxtImg src="/svg/logo.svg" alt="logo" />
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

        <div class="copyRight">
            <p>
                &copy; Общество с ограниченной ответственностью «И+Д», 2024. Все права защищены. Использование
                материалов
                сайта interior.ru разрешается только с письменного согласия редакции и при наличии гиперссылки
                на interior.ru.
            </p>
        </div>

        <div class="subscribe-from">
            <h2 class="caption caption--h2">Подписывайтесь на нашу
                рассылку</h2>

            <form class="subscribe-from__form">
                <input type="email" placeholder="Ваша почта" />
                <button type="submit" class="btn">Подписаться</button>
            </form>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    padding: 32px;
    font-size: 14px;
    line-height: 17px;
    color: $colorBlack;
    display: grid;
    grid-template-columns: 1fr minmax(665px, 35%);

    @include responsive1599 {
        grid-template-columns: 1fr minmax(500px, 35%);
    }

    @include responsive1279 {
        grid-template-columns: 1fr;
    }

    @include responsive767 {
        padding: 16px;
    }

    .footer-menu {
        grid-row: 2/3;

        @include responsive1279 {
            grid-row: initial;
        }
    }

    .subscribe-from {
        grid-column: 2/3;
        grid-row: 2/3;

        .caption {
            max-width: 400px;
        }

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

.logo {
    position: relative;
    height: 56px;
    width: 193px;
    transition: width 0.2s;

    @include responsive1279 {
        order: 1
    }

    @include responsive767 {
        width: 130px;
    }

    &__link {
        width: 193px;
        height: 100%;
        display: flex;

        @include responsive767 {
            width: 130px;
        }

        &--static {}

        &--fixed {
            width: 25px;
        }
    }

    &:hover {}

    picture {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
    }

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.copyRight {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    max-width: 800px;
    margin-top: 36px;
    grid-row: 3/3;

    @include responsive1279 {
        order: 10;
        font-size: 14px;
        line-height: 20px;
        grid-row: initial;
    }

    @include responsive767 {
        font-size: 10px;
        line-height: 14px;
        margin-top: 16px;
    }

}

.not-project {
    order: 3;
    margin-top: 16px;
}
</style>