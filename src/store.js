import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    term: ""
  },
  getters: {
    showTerm(state) {
      return state.term;
      //console.log(this.$store.state.term)
    }
  },
  mutations: {
    change(state, payload) {
      state.term = payload;
    }
  },
  actions: {
    change(context, payload) {
      setTimeout(() => {
        context.commit("change", payload);
      }, 2000);
    }
  }
});
