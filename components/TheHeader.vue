<template>
 <header>
   <Logo/>
   <search-input @blur="setSearchKeywords($event)"/>
 </header>
</template>

<script>


import Logo from "./Logo";
import SearchInput from "./shared/SearchInput";
export default {
  components: {
    Logo,
    SearchInput
  },
  data() {
    return {

    }
  },
  mounted () {


  },
  methods: {
    setSearchKeywords(event){
      this.$store.commit('updateSearchKeywords', event)
    }
  }
}
</script>

<style scoped lang="scss">

header{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}

</style>
