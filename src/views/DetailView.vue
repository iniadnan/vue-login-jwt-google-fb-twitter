<template>
  <div>
    <Nav />
    <main class="py-20">
      <article
        class="w-full md:w-700px block mx-auto bg-gray-100 py-5 md:py-6 px-5 md:px-7 rounded"
      >
        <section class="mb-2 md:mb-3">
          <h2 class="font-semibold text-24px sm:text-26px md:text-30px lg:text-32px text-gray-800">{{ article.title }}</h2>
        </section>
        <div class="flex items-center justify-between mb-4 md:mb-5">
          <p
            class="flex items-center jusitfy-center font-medium text-12px md:text-14px text-gray-700"
          >
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
        <div>
          <p class="font-normal text-16px md:text-18px text-gray-700">{{ article.description }}</p>
        </div>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "DetailView",
  components: {
    Nav,
    Footer,
  },
  props: ["slug"],
  created() {
    this.getSingleArticle(this.slug);
  },
  methods: {
    ...mapActions({
      getSingleArticle: "article/getSingleArticle",
    }),
  },
  computed: {
    ...mapState({
      article: (state) => state.article.article,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
