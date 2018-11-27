<template>
  <div id="app">
    <div id="content">
      <div id="searchBar">
        <div class='searchDiv'>
          <span><i class="fab fa-youtube">DanTube</i></span>
          <input type="text" v-model='newTerm' @keyup.enter="onTermChange(newTerm)"></input>
          <button @click="onTermChange(newTerm)"><i class=" fas fa-search"></i></button>
        </div>
      </div>
      <!-- <div v-if="shrunk" class='addjust'>-->
      <div id="videoDisplay">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="videoUrl" />
        </div>
        <div v-if="selectedVideo" class='details'>
          <h4>{{selectedVideo.snippet.title}} </h4>
          <p>{{selectedVideo.snippet.description}} </p>
        </div>
      </div>
      <div id="videoList">
        <ul>
          <li v-for="video in videos" :key="video.etag">
            <div class='wrapper' @click="onSelect(video)">
              <div>
                <img :src="video.snippet.thumbnails.default.url" />
              </div>
              <div>
                {{video.snippet.title}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- </div>-->
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
  import AppFooter from "./components/AppFooter"
  const API_KEY = "AIzaSyAeieUFVgxZH5g_xpIQTtoLa8SBw8HGJl8";
  import axios from "axios";

  export default {
    name: "App",
    components: {
      AppFooter
    },
    data() {
      return {
        newTerm: '',
        videos: [],
        selectedVideo: null,
        videoID: '',
        //shrunk: false
      };
    },
    computed: {
      videoUrl() {
        const videoId = this.videoID;
        return `https://www.youtube.com/embed/${videoId}`;
        console.log('videoID:')
      }
    },
    methods: {
      onTermChange(searchTerm) {
        axios
          .get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              key: API_KEY,
              type: "video",
              part: "snippet",
              q: searchTerm
            }
          })
          .then(response => {
            //console.log(response.data.items)
            this.videos = response.data.items;
            //this.videoID = 
            console.log(videos[0].id.videoID);
            //this.selectedVideo = response.data.items
          });
      },
      onSelect(video) {
        this.selectedVideo = video;
        this.videoID = video.id.videoId;
        //console.log(video.id.videoId);
      }
    },
    mounted() {
      //this.mymethod('success');
      this.onTermChange('vue.js');
    }
  };
</script>

<style>
  #app {
    /*border: 5px solid orange;*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;*/
  }

  #content {
    /*border: 5px solid blue;*/
    margin: 0 auto;
    display: grid;
    max-width: 960px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(150px, auto));
    /*grid-template-rows: ;*/
  }

  #searchBar {
    display: flex;
    align-items: center;
    justify-content: center;
    /*border: 5px solid green;*/
    grid-column: 1/4;
  }

  #videoDisplay {
    /*border: 5px solid black;*/
    grid-column: 1/3;
  }

  .details {
    margin: 10px 2px 0 2px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  #videoList {
    /*border: 5px solid red;*/
  }

  #videoList ul li {
    list-style-type: none;
  }

  .wrapper {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid lightgrey;
    margin: 2px;
  }

  i.fab.fa-youtube::before {
    color: red;
  }

  i.fas.fa-search {
    background-color: #e7e7e7;
    border: none;
    color: #111;
    /*padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;*/
    cursor: pointer;
  }

  .searchDiv input {
    width: 600px;
  }

  /**** media queries *****/
  @media only screen and (max-width: 768px) {
    #content {
      /*border: 5px solid blue;*/
      margin: 0 auto;
      display: grid;
      max-width: 960px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, minmax(150px, auto));
      /*grid-template-rows: ;*/
    }

    #videoDisplay {
      /*border: 5px solid black;*/
      grid-column: 1/4;
    }

    #videoList {
      /*border: 5px solid red;*/
      grid-column: 1/4;
    }

    .searchDiv input {
      width: 320px;
    }

  }

  @media only screen and (max-width: 499px) {
    .searchDiv input {
      width: 240px;
    }
  }

  @media only screen and (max-width: 390px) {
    .searchDiv input {
      width: 175px;
    }
  }

  @media only screen and (max-width: 700px) {}
</style>