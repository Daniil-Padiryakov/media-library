<template>
    <div class="overflow-x-auto p-3 shadow-lg bg-base-100 rounded-box flex-grow">
        <table class="table w-full">

            <thead>
                <row-head-table></row-head-table>
            </thead>

            <tbody>
                <row-table></row-table>
            </tbody>

        </table>
    </div>
</template>

<script>
    import RowTable from "./RowTable.vue";
    import RowHeadTable from "./RowHeadTable.vue";

    export default {
        name: "MyTable",
        components: {
            RowTable, RowHeadTable
        },
    }
</script>

<style scoped>

</style>