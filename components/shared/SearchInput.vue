<template>
  <div class="input-container">
    <input ref="input" @input="input($event)" @blur="blur()"/>

    <inline-svg
      style="display: flex"
      :src="getIconPath('search')"
    />
  </div>
</template>

<script>

import InlineSvg from 'vue-inline-svg'

export default {
  name: 'SearchInput',
  components: {
    InlineSvg
  },
  data(){
    return {
      value: ''
    }
  },
  mounted() {
    this.$refs.input.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        // можете делать все что угодно со значением текстового поля
        //this.$refs.input.blur()
        this.$refs.input.blur()
      }
    })
  },
  methods: {
    input(event){
      this.value = event.target.value
      console.log(this.value)
    },
    blur(){
      this.$emit('blur', this.value)
    },
    getIconPath(iconName) {
      return iconName ? require('@/assets/icons/' + iconName + '.svg') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container{
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: center;
}

input{
  display: flex;
  width: 100%;
  margin-right: 8px;
  border: 0px;
  border-bottom: 1px solid transparent;
  &:hover{
    border-bottom: 1px solid grey;
  }
  &:focus{
    border: 0px;
    outline: none;
    border-bottom: 1px solid #121221;
  }
}

.reverse{
  transform: rotate(180deg);
}

</style>
