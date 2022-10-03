<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" 
        :class="[task.reminder ? 'reminder': 'no-reminder', 'task']"
    >
        <h3>{{task.text}}</h3>
        <p>{{task.day}}</p>
        <span @click="$emit('delete-task', task.id)">delete</span>
    </div>
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

<style>
.task {
    width: 80%;
    margin: .4rem auto;
    padding: 0 1rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
}

.reminder {
    border-left: 4px solid green;
}

.no-reminder {
    border-left: 4px solid #ccc;
}

span {
    display: inline-block;
    background: red;
    padding: 4px;
    color: #fff;
    border-radius: 4px;
    margin-left: 0;
}
</style>