<template>
    <div class="phone-body">
        <!--the feed should only be shown when the user is at step 1-->
        <div v-if="step === 1" class="feed" v-dragscroll.y>
            <!-- Post Component -->
            <!--components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props-->
            <Post v-for="post in postsFromUppermostComponent" :post="post" :key="postsFromUppermostComponent.indexOf(post)"></Post>
            <!-- Post Component -->
        </div>
        <div v-if="step === 2"><!--If an image is uploaded we're in the second step-->
            <div class="selected-image"
                 :style="{ backgroundImage: 'url(' + image + ')' }"
                 :class="selectedFilter"></div><!--selectedFilter prop being used to determine what filter type should be applied-->
            <div class="filter-container" v-dragscroll.x>
                <!-- filter component-->
                <filter-type v-for="filter in filtersFromUppermostComponent" :filter="filter" :image="image" :key="filtersFromUppermostComponent.indexOf(filter)" />
            </div>
        </div>
        <div v-if="step === 3">
            <div class="selected-image"
                 :class="selectedFilter"
                 :style="{ backgroundImage: 'url(' + image + ')' }">
            </div>
            <div class="caption-container">
                <textarea class="caption-input"
                          placeholder="Write a comment buddy..."
                          type="text" :value="value"
                          @input="$emit('input', $event.target.value)"><!--Same as v-model-->
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import Post from "./Post"
    import FilterType from "./FilterType"

    export default {
        name: "Phonebody",
        props: {
            step: Number,
            postsFromUppermostComponent: Array, // specifying prop validation
            filtersFromUppermostComponent: Array,
            image: String, //a file input’s value attribute is often represented as a string.
            selectedFilter: String,
            value: String
        },
        components: {
            Post,
            "filter-type": FilterType //component declared as filter-type
        }
    }
</script>

<style lang="scss" src="../assets/styles/phone-body.scss">
    // Styles from stylesheet
</style>
