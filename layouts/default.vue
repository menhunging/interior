<script lang="ts" setup>
const isOpenHeader = ref(false);
const isOpenSearch = ref(false);

const handleDropHeader = () => {
    isOpenHeader.value = !isOpenHeader.value
};

const handleOpenSearch = () => {
    isOpenSearch.value = !isOpenSearch.value
};
</script>

<template>
    <div class="site-wrapper">

        <LayoutHeader :handleDropHeader="handleDropHeader" :handleOpenSearch="handleOpenSearch" />
        <LayoutDropHeader :isOpenHeader="isOpenHeader" :handleDropHeader="handleDropHeader" />
        <LayoutDropSearch :isOpenSearch="isOpenSearch" :handleOpenSearch="handleOpenSearch" />

        <main class="main">
            <slot />
        </main>

        <LayoutFooter />
    </div>
</template>

<style scoped></style>