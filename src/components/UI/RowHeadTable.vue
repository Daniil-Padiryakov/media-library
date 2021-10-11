<template>
    <tr>
        <td v-for="(value, name) in itemsForTable[0]">{{ name }}</td>
        <td></td>
    </tr>
</template>

<script>
	import {mapGetters} from "vuex";

	export default {
      name: "RowTable",
      computed: mapGetters(['itemsForTable']),
	}
</script>

<style scoped>

</style>