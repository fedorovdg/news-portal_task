<template>
  <a class="logo" href="/">
    <div class="logo__left-part">
      News
    </div>
    <div class="logo__right-part">
      Portal
    </div>
  </a>
</template>

<script>


export default {
  name: 'Logo'
}
</script>

<style scoped lang="scss">

.logo{
  display: flex;
  flex-direction: row;
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;
  &__left-part{
    background: #121221;
    border-radius: 4px;
    color: #F8F8F8;
    padding: 8px;
  }
  &__right-part{
    background: transparent;
    border-radius: 4px;
    color: #121221;
    padding: 8px;
  }
}


</style>
