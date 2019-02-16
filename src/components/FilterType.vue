<template>
    <div class="filter-type">
        <p>{{filter.name}}</p>
        <div class="img"
             :class="filter.name"
             :style="{ backgroundImage: 'url(' + image + ')' }"
             @click="selectFilter">
        </div>
    </div>
</template>

<script>
    import EventBus from "../event-bus"

    export default {
        name: "FilterType",
        props: {
            filter: Object,
            image: String
        },
        methods: {
            selectFilter() {
                //event dispatcher (callback, object type arg for instance as below)
                 EventBus.$emit("new-filter", {filter : this.filter.name}); // or 2nd arg could be this.filter.name
            }
        }
    }
</script>

<style lang="scss" src="../assets/styles/filter-type.scss">

</style>