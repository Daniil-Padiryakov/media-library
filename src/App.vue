<template>
    <div class="container max-w-screen-lg mx-auto p-5 bg-base-200 shadow-lg rounded-box">

        <div class="mb-4">
            <h1 class="text-center text-4xl font-medium">Media Library</h1>
        </div>

        <!--TODO-->
        <div class="tabs tabs-boxed flex justify-center mb-5 p-3 shadow-lg bg-base-100 rounded-box">
            <a class="tab tab-lg"
               :class="{'tab-active': currentTab === tab}"
               v-for="tab in allTabs" :key="tab"
               @click="changeTab(tab)">
                {{tab}}
            </a>
        </div>

        <my-dialog v-if="editMode"></my-dialog>

        <book-form v-if="currentTab === 'Books' && !editMode"></book-form>
        <movie-form v-else-if="currentTab === 'Movies' && !editMode"></movie-form>
        <music-form v-else-if="currentTab === 'Music' && !editMode"></music-form>

        <my-table></my-table>

    </div>
</template>

<script>
	import MyTable from "./components/UI/MyTable.vue";
	import BookForm from "./components/forms/BookForm.vue";
	import MovieForm from "./components/forms/MovieForm.vue";
	import MusicForm from "./components/forms/MusicForm.vue";
	import MyDialog from "./components/UI/MyDialog.vue";
	import {mapGetters, mapMutations} from "vuex";

	export default {
		components: {
			MyTable, BookForm, MovieForm, MusicForm, MyDialog
		},
		methods: {
			...mapMutations(['changeTab']),
		},
		computed: mapGetters(['allTabs', 'currentTab', 'editMode']),
	}
</script>

<style>
</style>
