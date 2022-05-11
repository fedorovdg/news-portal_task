<template>
  <button
    @click="toggle()"
  >

    <inline-svg
      style="display: flex"
      :class="{'reverse': toggled}"
      :src="getIconPath('sort')"
    />
  </button>
</template>

<script>

import InlineSvg from 'vue-inline-svg'

export default {
  name: 'SortButton',
  components: {
    InlineSvg
  },
  data(){
    return {
      toggled: false
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
      this.$emit('toogle', this.toggled)
    },
    getIconPath(iconName) {
      return iconName ? require('@/assets/icons/' + iconName + '.svg') : ''
    }
  }
}
</script>

<style lang="css" scoped>

button{
  display: flex;
  outline: none;
  background: transparent;
  border: 0px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0px;
}

.reverse{
  transform: rotate(180deg);
}

</style>
