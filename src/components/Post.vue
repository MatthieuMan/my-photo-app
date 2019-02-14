<template>
    <div class="post">
        <div class="header level">
            <div class="level-left">
                <figure class="image is-32x32">
                    <img :src="post.userImage" />
                </figure>
                <span class="username">{{post.username}}</span>
            </div>
        </div>
        <div class="image-container"
             :class="post.filter"
             :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
             v-on:dblclick="like">
        </div>
        <div class="content">
            <div class="heart">
                <i class="far fa-heart fa-lg"
                   :class="{'fas': this.post.hasBeenLiked}"
                   @click="like"><!--shorthand for v-on:click-->
                </i>
            </div>
            <p class="likes">{{post.likes}} likes</p>
            <p class="caption"><span>{{post.username}}</span> {{post.caption}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: Object
        },
        methods:{
            like(){
                //increment or decrement the post.likes value based on the truthiness of post.hasBeenLiked
                //And toggle the value of the post.hasBeenLiked boolean
                this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
                this.post.hasBeenLiked = !this.post.hasBeenLiked;
            }
        }
    }
</script>

<style lang="scss" src="../assets/styles/post.scss">
    //Styles from assets directory
</style>