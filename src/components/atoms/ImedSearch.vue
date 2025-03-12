<script setup lang="ts">
const onChange = () => {}
</script>

<template>
    <div>
        <input type="search" @input="onChange" />
        <i class="fa fa-search ng-scope"></i>
    </div>
</template>

<style scoped>
div {
    display: flex;
}

input {
    padding: 0.5rem 1rem;
    border: 1px solid #C2C2C2;
    border-radius: 20px;
    margin: auto;
    outline: none;
}
</style>
