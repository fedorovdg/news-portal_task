<template>
  <section class="container">
    <div class="top-line">
      <h1>Latest News</h1>
      <div class="top-line__right-part">
        <span class="top-line__right-part__date current_date hidden">{{currentWeekDay}}</span>
        <span class="top-line__right-part__date current_date">{{currentDate}}</span>
        <div class="top-line__right-part__sort-button-container">
          <sort-button @toogle="sortReverse($event)"/>
        </div>
      </div>
    </div>
    <div class="article-container">
      <article-list-item v-for="item in articles" :key="item.id" :article="item"/>
      <section class="article-container__empty" v-if="articles.length == 0">
        <h2>Sorry. There are no articles on your request :(</h2>
      </section>
    </div>
  </section>
</template>

<script>

import ArticleListItem from "./ArticleListItem";
import {GetCurrentDate, GetCurrentWeekDay} from "./helpers/DateOperation";
import SortButton from "../shared/SortButton";
export default {
  computed: {
    articles() {
      if(this.reversed){
        return this.$store.getters.articlesSortedByDate
      }else{
        return this.$store.getters.articlesSortedByDate.reverse()
      }

    },
    currentDate() {
      return GetCurrentDate()
    },
    currentWeekDay() {
      return GetCurrentWeekDay()
    }
  },
  components: {
    ArticleListItem,
    SortButton
  },
  data() {
    return {
      reversed: false
    }
  },
  mounted () {
    this.$store.dispatch('getArticles')
  },
  methods: {
    sortReverse(event){
      this.reversed = event
    }
  }
}
</script>

<style scoped lang="scss">

.article-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  &__empty{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    color: #949494;
  }
}

.top-line{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  margin-bottom: 24px;
  &__right-part{
    display: flex;
    flex-direction: row;
    &__date{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-right: 8px;
    }
    &__sort-button-container{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
}





@media (min-width: 769px) {
  .hidden{
    display: flex;
  }
}

@media (max-width: 768px) and (min-width: 501px){
  .hidden{
    display: flex;
  }
}

@media (max-width: 500px) { //500 - экспериментально полученный размер экрана, при котором день недели налазиет на "latest news"
  .hidden{
    display: none;
  }
}

</style>
