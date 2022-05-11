
import {ARTICLES} from "../../api/server"; //Данные приходят откуда-то.

export default {
  state: {
    articles_default: [

    ],
    articles: [

    ]
  },
  mutations: {
    updateArticles(state, articles) {
      state.articles_default = articles.map(item => {
        let date = new Date(item.date)
        let dateString = (( date.getDate() > 10 ) ? date.getDate(): '0' + date.getDate())
          + '.' + ((date.getMonth() + 1 > 10) ? (date.getMonth() + 1): '0' + (date.getMonth() + 1))
          + '.' + date.getFullYear()
        //Это можно было бы вынести в отдельную функцию, которую мы бы импортировали
        let article = item
        article.displayDate = dateString
        return article
      })
      state.articles = state.articles_default
    },
    updateSearchKeywords(state, payload) {
      let keywords = payload.replace(/\s+/g, ' ')
      if(keywords != '' && keywords != " "){
        let regularExp = new RegExp(keywords.toLowerCase(), 'g')
        state.articles = state.articles_default.filter(item => regularExp.test(item.title.toLowerCase()))
      }else{
        state.articles = state.articles_default
      }
    }
  },
  getters: {
    articles(state){
      return state.articles
    },
    articlesSortedByDate(state){
      return state.articles.sort((a,b) => {
        return Date.parse(a.date) - Date.parse(b.date)
      })
    }
  },
  actions: {
    getArticles(ctx) {
      ctx.commit('updateArticles', ARTICLES)
    }
  }
}
