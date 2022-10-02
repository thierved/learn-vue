<template>
    <button :style="{background: color}">{{text}}</button>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Button',
        props: {
            text: String,
            color: String,
        }
    }
</script>

<style scoped>
    button {
        height: 2rem;
        padding: .2rem 1rem;
        color: aliceblue;
        border: none;
        border-radius: 5px;
    }
</style>