<template>
    <div class='searchDiv'>
        <span><i class="fab fa-youtube">DanTube</i></span>
        <input type="text" v-model='newTerm' @input="change(newTerm)"></input>
        <button@click="onTermChange(newTerm)"><i class=" fas fa-search"></i></button>
            <!--@click="change(newTerm)"-->
            {{ showTerm }}
    </div>
</template>
<script>
    const API_KEY = "AIzaSyAeieUFVgxZH5g_xpIQTtoLa8SBw8HGJl8";
    import axios from "axios";
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex';
    export default {
        name: 'Search',
        data() {
            return {
                newTerm: ''
            }
        },
        computed: {
            ...mapGetters([
                'showTerm'
            ])
            /*showTerm() {
                return this.$store.getters.showTerm;
            }*/
        },
        watch: {
            showTerm(value) {
                console.log(`My store value for 'showTerm' changed to ${value}`);
                //onTermChange(this.newTerm);
            }
        },
        methods: {
            ...mapActions([
                'change'
            ]),
            //console.log(event.target.value)
            //this.$store.state.term = this.term;
            //this.$store.dispatch('change');
            /*...mapMutations([
                'change'
            ])*/
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
            }

        }
    }
</script>
<style>
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
        width: 800px;

    }
</style>