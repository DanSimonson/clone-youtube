<template>
  <div id="app">
    <!--<h1>Using Font Awesome "Brand" icons in Vue.js</h1>
    <p>Have a cup of coffee: <i class="fab fa-youtube"></i></i> </p>
    <p>Have a module of JavaScript: <i class="fas fa-search"></i></i> </p>
    <p>Have a module of Vue.js: <i class="fab fa-vuejs"></i> </p>-->
    <div id="content">
      <div id="searchBar">
        <Search @change="onTermChange"></Search>
      </div>
      <div id="videoDisplay"></div>
      <div id="videoList"></div>
    </div>
    <!--
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
  import Search from "./components/Search";
  export default {
    name: "App",
    components: {
      Search
    },
    data() {
      return {};
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
            console.log(response);
            //this.videos = response.data.items;
          });
        console.log(this.showTerm);
      }

    }
  };
</script>

<style>
  #app {
    border: 5px solid orange;
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;*/
  }

  #content {
    border: 5px solid blue;
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
    border: 5px solid green;
    grid-column: 1/4;
  }

  .searchDiv {}

  #videoDisplay {
    border: 5px solid black;
    grid-column: 1/3;
  }

  #videoList {
    border: 5px solid red;
  }

  /*#nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }*/
</style>