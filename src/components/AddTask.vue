<template>
    <form @submit="onSubmit">
        <div class="form-control">
            <label for="text">Task</label>
            <input type="text" 
                v-model="text" name="text" placeholder="Add Task"/>
        </div>
        <div class="form-control">
            <label for="day">Time</label>
            <input type="text" 
                v-model="day" name="day" placeholder="Date and Time"/>
        </div>
        <div class="remainder">
            <label for="remainder">Set Remainder</label>
            <input type="checkbox" 
                v-model="remainder" name="remainder" />
        </div>
        <input type="submit" value="Add Task">
    </form>
</template>

<script>
    export default {
        name: 'AddTask',
        data() {
            return {
                text: '',
                day: '',
                remainder: false
            }
        },
        methods: {            
            onSubmit(e) {
                e.preventDefault();
                if(!this.text) {
                    alert('Please Add a Task!')
                    return;
                }

                const newTask = {
                    id: Math.floor(Math.random() * 1000),
                    text: this.text,
                    day: this.day,
                    remainder: this.remainder
                };

                this.$emit('add-task', newTask)

                this.text = '';
                this.day = '';
                this.remainder = false;
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .form-control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        margin: 5px auto;
    }

    .form-control label {
        margin-right: 1rem;
    } 

    .remainder {
        width: 60%;
        margin: 5px auto;
        display: flex;
        justify-content: space-between;
    }

    .remainder label {
        margin-right: 1rem;
    }

    input[type='text'] {
        margin-right: auto;
        padding: 5px;
    }

    input[type='checkbox'] {
        display: inline-block;
        margin-right: auto;
    }

    input[type='submit'] {
        display: inline-block;
        width: 60%;
        margin: 5px auto;
        padding: 5px;
        background-color: green;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
    }
</style>