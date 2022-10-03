<template>
    <h3>{{task.text}}</h3>
    <p>{{task.day}}</p>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Task',
    props: {
        task: Object
    }
}

</script>

