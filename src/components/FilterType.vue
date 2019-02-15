<template>
    <div class="filter-type">
        <p>{{filter.name}}</p>
        <div class="img"
             :class="filter.name"
             :style="{ backgroundImage: 'url(' + image + ')' }">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterType",
        props: {
            filter: Object,
            image: String
        }
    }
</script>

<style lang="scss" src="../assets/styles/filter-type.scss">

</style>