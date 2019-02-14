<template>
    <div class="phone-body">
        <div class="feed">
            <!-- Post Component -->
            <!--components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props-->
            <Post v-for="post in postsFromUppermostComponent" :post="post" :key="postsFromUppermostComponent.indexOf(post)"></Post>
            <!-- Post Component -->
        </div>
    </div>
</template>

<script>
    import Post from "./Post";

    export default {
        name: "Phonebody",
        props: {
            postsFromUppermostComponent: Array, // specifying prop validation
            filters: Array
        },
        components: {
            Post
        }
    }
</script>

<style lang="scss" src="../assets/styles/phone-body.scss">
    // Styles from stylesheet
</style>