<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <h1>My Photo App</h1>
      </div>
      <!-- PhoneBody Component -->
      <!-- bind data as props, shorthands will be ":posts" -->
      <Phonebody v-bind:step="step"
                 v-bind:postsFromUppermostComponent="posts"
                 v-bind:filtersFromUppermostComponent="filters"
                 :image="image"
                 :selectedFilter="selectedFilter"
                 v-model="caption"/>
      <!-- Phonebody Component -->
      <div class="phone-footer">
        <div class="home-cta">
          <i class="fas fa-home fa-lg"></i>
        </div>
        <div class="upload-cta">
          <input type="file" name="file" id="file" class="inputfile"
                 @change="uploadImage"/><!--hold the responsibility of uploading the image and then directing the user to step 2.-->
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>
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
                step: 1,//change the UI depending on where the user is on the submission process
                posts,
                filters,
                image: "",
                selectedFilter: "",
                caption: ""
            };
        },
        methods: {
            uploadImage(evt) {
                const files = evt.target.files;
                if (!files.length) return;
                const reader = new FileReader();
                //read the contents of the uploaded file and the evt sets the result and the new step
                reader.readAsDataURL(files[0]);
                reader.onload = evt => {
                    this.image = evt.target.result;
                    this.step = 2;
                };
                // Bypass for Chrome browser; enable reuploading of same files.
                // Directly set the value of the input field to a blank string.
                // Now when the user attempts to re-upload the same file again;
                // it will always be detected as a change event.
                document.querySelector("#file").value = "";
            }
        },
        components: {
            Phonebody
        }
    };
</script>

<style lang="scss" src="./assets/styles/app.scss">
  // Styles from stylesheet
</style>
