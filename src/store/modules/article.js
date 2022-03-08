import ArticleService from "@/services/ArticleService.js";

export const namespaced = true;

export const state = {
  articles: [],
  article: {},
};
export const mutations = {
  SET_ALL_ARTICLE(state, data) {
    state.articles = data;
  },
  SET_SINGLE_ARTICLE(state, data) {
    state.article = data;
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
  getSingleArticle({ commit }, slug) {
    return ArticleService.getSingleArticle(slug)
      .then((response) => {
        commit("SET_SINGLE_ARTICLE", response.data[0]);
      })
      .catch((error) => {
        console.log("Something Wrong: " + error);
      });
  },
};
export const getters = {};
