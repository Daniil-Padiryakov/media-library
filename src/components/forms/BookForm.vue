<template>

    <form @submit.prevent="submit" class="flex justify-center mb-4">
        <input v-model="title" class="input input-bordered mr-4" type="text" placeholder="Title">
        <input v-model="author" class="input input-bordered mr-4" type="text" placeholder="Author">
        <input v-model="desc" class="input input-bordered mr-4" type="text" placeholder="Description">

        <button class="btn btn-accent">Add Book</button>
    </form>


</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "BookForm",
        data() {
            return {
                title: '',
                author: '',
                desc: '',
            }
        },
        methods: {
            ...mapMutations(['addBook']),
            submit() {
                this.addBook({
                    title: this.title,
                    author: this.author,
                    desc: this.desc,
                })
                this.title = this.author = this.desc = ''
            },
        }
    }
</script>

<style scoped>

</style>