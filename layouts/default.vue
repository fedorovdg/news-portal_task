<template>
  <div class="container">
    <the-header class="the-header"/>

    <main style="">
      <Nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default {
  components: {
    TheFooter,
    TheHeader
  },
  mounted() {
  }
}
</script>
<style>


html{
  padding: 0px;
  font-family: sans-serif;

}

body{
  margin: 0;
  padding: 0;
  top: 0px;
}

main{
  padding-bottom: 124px !important;
}

@media (min-width: 769px) {
  main{
    padding: 0px 135px;
    margin-top: 72px;
    min-height: calc(100vh - 72px);
  }
  .the-header{
    padding: 0px 135px;
    margin-top: 32px;
  }
}

@media (max-width: 768px) and (min-width: 326px){
  main{
    padding: 0px 60px;
    margin-top: 48px;
    min-height: calc(100vh - 48px);
  }
  .the-header{
    padding: 0px 60px;
    margin-top: 32px;
  }
}

@media (max-width: 425px) {
  main{
    padding: 0px 30px;
    margin-top: 40px;
    min-height: calc(100vh - 40px);
  }
  .the-header{
    padding: 0px 30px;
    margin-top: 32px;
  }
}

.container{

}



</style>
