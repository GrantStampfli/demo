<template>
  <v-container class="container-error">
    <img class="icon-forbidden" src="/static/images/forbidden.svg">
    <h3 class="display-1">{{ text }}</h3>
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
    this.$store.dispatch('setHeader', ' ')
  }
}
</script>
<style lang="stylus" scoped>
@import "~flexbox"
.container-error {
  margin-top: 3rem;
  flexbox(flex);
  flex-direction(column);
  justify-content(center);
  align-items(center);
  .icon-forbidden {
    max-width: 13rem;
    max-height: 13rem;
  }
  > h3 {
    padding: 1rem;
    text-align: center;
    margin: 4rem 0;
    font-weight: 300;
  }
}
</style>
