<script lang="ts" setup>
const isOpenHeader = ref(false);
const isOpenSearch = ref(false);
const isOpenPublic = ref(false);

const handleDropHeader = () => {
    isOpenHeader.value = !isOpenHeader.value
};

const handleOpenSearch = () => {
    isOpenSearch.value = !isOpenSearch.value
};

const handleOpenPublic = () => {
    isOpenSearch.value = false
    isOpenHeader.value = false
    isOpenPublic.value = !isOpenPublic.value
};
</script>

<template>
    <div class="site-wrapper">

        <LayoutHeader :handleDropHeader="handleDropHeader" :handleOpenSearch="handleOpenSearch" />
        <LayoutDropHeader :isOpenHeader="isOpenHeader" :handleOpenPublic="handleOpenPublic"
            :handleDropHeader="handleDropHeader" />
        <LayoutDropSearch :isOpenSearch="isOpenSearch" :handleOpenSearch="handleOpenSearch" />

        <main class="main">
            <slot />
        </main>

        <LayoutFooter :isOpenPublic="isOpenPublic" :handleOpenPublic="handleOpenPublic" />
    </div>
</template>

<style scoped></style>