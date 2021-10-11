<template>
    <tr v-for="item in itemsForTable">
        <td v-for="field in item">{{ field }}</td>
        <td>
            <button @click="pick(item)" class="btn btn-secondary btn-sm">Edit</button>
        </td>
    </tr>
</template>

<script>
	import {mapGetters, mapMutations} from "vuex";

	export default {
		name: "RowTable",
		computed: mapGetters(['itemsForTable']),
		methods: {
			...mapMutations(['setEditedItem', 'editModeOn']),

			pick(item) {
		  this.editModeOn()
		  this.setEditedItem(item)
			},

		}
	}
</script>

<style scoped>

</style>