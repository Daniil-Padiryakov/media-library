<template>
    <div class="flex justify-center mb-4">

        <input @click="getKey(name)"
               @input="updateMessage"
               v-for="(value, name) in item"
               :key="name" type="text"
               :value="item[name]"
               class="input input-bordered mr-4">
        <button @click="handle" class="btn btn-success">Save</button>

    </div>
</template>

<script>
    import { mapMutations} from "vuex";

    export default {
        name: "MyDialog",
        data() {
            return {
            }
        },
        computed: {
            item() {
                return this.$store.state.editedItem
            }
        },
        methods: {
            ...mapMutations(['editModeOff']),

            updateMessage (e) {
                this.$store.commit('updateMessage', e.target.value,)
            },
            handle() {
                this.editModeOff()
            },
            getKey(name) {
                this.$store.commit('setItemKey', name,)
            }
        },
    }
</script>

<style scoped>

</style>