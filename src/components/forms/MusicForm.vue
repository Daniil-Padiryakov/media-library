<template>

    <form @submit.prevent="submit" class="flex justify-center mb-4">
        <input v-model="title" class="input input-bordered mr-4" type="text" placeholder="Title">
        <input v-model="author" class="input input-bordered mr-4" type="text" placeholder="Author">
        <input v-model="duration" class="input input-bordered mr-4" type="text" placeholder="Duration">
        <input v-model="desc" class="input input-bordered mr-4" type="text" placeholder="Description">

        <button class="btn btn-accent">Add Music</button>
    </form>


</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: "MusicForm",
        data() {
            return {
                title: '',
                author: '',
                duration: '',
                desc: '',
            }
        },
        methods: {
            ...mapMutations(['addMusic']),
            submit() {
                this.addMusic({
                    title: this.title,
                    author: this.author,
					          duration: this.duration,
                    desc: this.desc,
                })
                this.title = this.author = this.duration = this.desc = ''
            },
        }
    }
</script>

<style scoped>

</style>