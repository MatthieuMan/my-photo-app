<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <h1>My Photo App</h1>
      </div>
      <!-- PhoneBody Component -->
      <!-- pass in the posts and filters data arrays as props, shorthands will be ":posts" -->
      <Phonebody v-bind:postsFromUppermostComponent="posts" v-bind:filtersFromUppermostComponent="filters"  />
      <!-- Phonebody Component -->
      <div class="phone-footer">
        <div class="home-cta">
          <i class="fas fa-home fa-lg"></i>
        </div>
        <div class="upload-cta">
          <i class="far fa-plus-square fa-lg"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Phonebody from "./components/Phonebody";

    //Raw data actually
    import posts from "./data/posts"
    import filters from  "./data/filters"

    export default {
        name: "App",
        data() { // centralize all data in the uppermost parent App component. Children components will be more presentational and simply have their data as props passed in from App.
            return {
                posts,
                filters,
            };
        },
        components: {
            Phonebody
        }
    };
</script>

<style lang="scss" src="./assets/styles/app.scss">
  // Styles from stylesheet
</style>
