<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <h1>My Photo App</h1>
        <a class="cancel-cta"
           v-if="step === 2 || step === 3"
           @click="goToHome">
          Cancel
        </a>
        <a class="next-cta"
           v-if="step === 2"
           @click="step++">
          Next
        </a>
        <a class="next-cta"
           v-if="step === 3"
           @click="sharePost">
          Share
        </a>
      </div>
      <!-- PhoneBody Component -->
      <!-- bind data as props, shorthands will be ":posts" -->
      <Phonebody v-bind:step="step"
                 v-bind:postsFromUppermostComponent="posts"
                 v-bind:filtersFromUppermostComponent="filters"
                 :image="image"
                 :selectedFilter="selectedFilter"
                 v-model="caption" />
      <!-- Phonebody Component -->
      <div class="phone-footer">
        <div class="home-cta">
          <i class="fas fa-home fa-lg" @click="goToHome"></i>
        </div>
        <div class="upload-cta">
          <!--hold the responsibility of uploading the image and then directing the user to step 2.-->
          <input type="file" name="file" id="file" class="inputfile" @change="uploadImage" :disabled="step !== 1"/>
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
    import EventBus from "./event-bus"

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
            }
        },//created() hook is run when a Vue instance/component has just been created and the instance data and events can be accessed.
        created: function () {
            //event listner Observer
            EventBus.$on('new-filter',  evt => {
                this.selectedFilter = evt.filter;
            })
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
            },
            goToHome(){
                this.image = "";
                this.selectedFilter = "";
                this.caption = "";
                this.step = 1
            },
            sharePost() {
                const post = {
                    username: "Guest",
                    userImage:
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png",
                    postImage: this.image,
                    likes: 0,
                    caption: this.caption,
                    filter: this.selectedFilter
                };
                this.posts.unshift(post);
                this.goToHome();
            }
        },
        components: {
            Phonebody
        }
    }
</script>

<style lang="scss" src="./assets/styles/app.scss">
  // Styles from stylesheet
</style>
