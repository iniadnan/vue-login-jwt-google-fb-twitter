import apiClient from "@/service.js";

export default {
  // GET ALL ARTICLE
  getAllArticle() {
    return apiClient.get("article/");
  },
  // GET SINGLE ARTICLE
  getSingleArticle(slug) {
    return apiClient.get("article/" + slug);
  },
};
