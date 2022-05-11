<template>
  <article class="article">
    <img class="article__img" :src="imgPath">
    <h2 class="article__title">{{article.title}}</h2>
    <aside class="article__addition-info">
      <span class="article__addition-info__item">{{article.displayDate}}</span>
      <span class="article__addition-info__item">{{article.author}}</span>
    </aside>
    <p class="article__content">
      {{article.content}}
    </p>
    <a href="/">read more</a>
  </article>
</template>

<script>


export default {
  name: 'ArticleListItem',
  computed: {
    imgPath() {
      return require('@/assets/img/' + this.article.img)
    }
  },
  props: {
    article: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">

a{
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  cursor: pointer;
  margin: 0px;
  text-decoration: none;
  color:  #121221;
}

.article{
  display: flex;
  flex-direction: column;
  &__img{
    display: flex;
    object-fit: cover;
    border-radius: 8px;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9; //https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
  }
  &__title{
    color: #121221;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &__content{
    color: #444444;
  }
  &__addition-info{
    color: #949494;
    &__item:first-child{
      margin-right: 16px;
    }
  }
}


@media (min-width: 769px) {
  article{
    width: calc(25% - 22.5px);
    margin-bottom: 30px;
    margin-right: 30px;
  }
  article:nth-child(4n){
    margin-right: 0px;
  }
}

@media (max-width: 768px) and (min-width: 426px){
  article{
    width: calc(33.333% - 13.333px);
    margin-bottom: 20px;
    margin-right: 20px;
  }
  article:nth-child(3n){
    margin-right: 0px;
  }
}

@media (max-width: 425px) {
  article{
    width: calc(50% - 10px);
    margin-bottom: 20px;
    margin-right: 20px;
  }
  article:nth-child(2n){
    margin-right: 0px;
  }
}

</style>
