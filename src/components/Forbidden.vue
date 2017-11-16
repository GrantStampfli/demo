<template>
  <v-container class="container-error">
    <img src="/static/images/forbidden.svg">
    <h3 class="headline">{{ text }}</h3>
  </v-container>
</template>
<script>
export default {
  name: 'Forbidden',
  props: {
    text: {
      type: String,
      default: 'Oops Something Went Wrong...'
    }
  },
  mounted () {
    this.$store.dispatch('setHeader', this.text)
  }
}
</script>
<style lang="stylus" scoped>
@import "~flexbox"
.container-error {
  flexbox(flex);
  flex-direction(column);
  justify-content(center);
  align-items(center);
  > h3 {
    padding: 1rem;
    text-align: center;
  }
}
</style>
