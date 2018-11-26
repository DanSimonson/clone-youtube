import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    term: "",
    tubeVideos: [],
    titles: []
  },
  getters: {
    showTerm(state) {
      return state.term;
      //console.log(this.$store.state.term)
    },
    showtitle(state) {
      return state.titles;
    },
    showVideos(state) {
      return state.tubeVideos;
      //console.log(state.tubeVideos);
    }
  },
  mutations: {
    change(state, payload) {
      state.term = payload;
    },
    changeTitle(state, payload) {
      //console.log(payload);
      state.titles.push(payload);
      let i = 0;
      for (i = 0; i <= 5; i++) {
        //console.log(state.tubeVideos[i]);
      }
    },
    changeVideo(state, payload) {
      //console.log(payload);
      state.tubeVideos.push(payload);
      let i = 0;
      for (i = 0; i <= 5; i++) {
        //console.log(state.tubeVideos[i]);
      }
    }
  },
  actions: {
    change(context, payload) {
      setTimeout(() => {
        context.commit("change", payload);
      }, 2000);
    },
    changeTitle(context, payload) {
      setTimeout(() => {
        context.commit("changeTitle", payload);
      }, 2000);
    },
    changeVideo(context, payload) {
      setTimeout(() => {
        context.commit("changeVideo", payload);
      }, 2000);
    }
  }
});
