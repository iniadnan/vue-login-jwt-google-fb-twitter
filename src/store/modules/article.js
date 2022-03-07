import ArticleService from "@/services/ArticleService.js";

export const namespaced = true;

export const state = {
  articles: [],
};
export const mutations = {
  SET_ALL_ARTICLE(state, data) {
    state.articles = data;
  },
};
export const actions = {
  getAllArticle({ commit }) {
    return ArticleService.getAllArticle()
      .then((response) => {
        commit("SET_ALL_ARTICLE", response.data);
      })
      .catch((error) => {
        console.log("Something Wrong: " + error);
      });
  },
};
export const getters = {};
