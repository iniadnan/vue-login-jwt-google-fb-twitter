<template>
  <div>
    <Nav />
    <main class="py-10 sm:py-14 md:py-20">
      <div class="container-ix8">
        <router-link
          :to="{ name: 'detail', params: { slug: article.slug } }"
          class="w-full sm:w-400px md:w-400px block mx-auto bg-gray-100 py-3 md:py-4 px-5 md:px-6 rounded"
          v-for="article in articles"
          :key="article.id"
        >
          <article>
            <div class="mb-2 md:mb-3">
              <h2 class="font-semibold text-19px md:text-25px text-gray-800">
                {{ article.title }}
              </h2>
            </div>
            <div class="mb-4 md:mb-5">
              <p
                class="text-14px md:text-16px text-gray-600 leading-snug break-words"
              >
                {{ article.description }}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <p class="flex items-center jusitfy-center font-medium text-12px md:text-14px text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 md:h-6 w-5 md:w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
                >{{ article.author }}
              </p>
              <p class="font-medium text-12px md:text-14px text-gray-700">
                {{ $filters.rewriteDate(article.date) }}
              </p>
            </div>
          </article>
        </router-link>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    Footer,
  },
  created() {
    this.getAllArticle();
  },
  methods: {
    ...mapActions({
      getAllArticle: "article/getAllArticle",
    }),
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.articles,
    }),
  },
};
</script>
