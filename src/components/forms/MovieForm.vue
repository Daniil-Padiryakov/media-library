<template>

    <form @submit.prevent="submit" class="flex justify-center mb-4">
        <input v-model="title" class="input input-bordered mr-4" type="text" placeholder="Title">
        <input v-model="actors" class="input input-bordered mr-4" type="text" placeholder="Actors">
        <input v-model="duration" class="input input-bordered mr-4" type="text" placeholder="Duration">
        <input v-model="desc" class="input input-bordered mr-4" type="text" placeholder="Description">

        <button class="btn btn-accent">Add Movie</button>
    </form>


</template>

<script>
	import {mapMutations} from 'vuex'

	export default {
	  name: "MovieForm",
	  data() {
		  return {
			  title: '',
			  actors: '',
			  duration: '',
			  desc: '',
		  }
	  },
	  methods: {
		  ...mapMutations(['addMovie']),
		  submit() {
			  this.addMovie({
				  title: this.title,
				  actors: this.actors,
				  duration: this.duration,
				  desc: this.desc,
			  })
			  this.title = this.actors = this.duration = this.desc = ''
		  },
	  }
  }
</script>

<style scoped>

</style>