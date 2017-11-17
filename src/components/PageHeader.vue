<template>
  <v-toolbar color="white" class="elevation-1" height="75">
    <v-toolbar-title class="page-header grey--text text--darken-2">
      <h1 class="title">
        <v-btn icon v-if="showBack" v-on:click="goBack()" class="ma-0" color="grey darken-2" flat>
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <span v-html="pagename || ' '"></span>
      </h1>
    </v-toolbar-title>
</v-toolbar>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    height: {
      type: Number,
      default: null
    },
    pagename: {
      type: String,
      default: 'Popular Services'
    }
  },
  data () {
    return {}
  },
  computed: {
    route () {
      return this.$store.getters.route
    },
    showBack () {
      if (this.route.from.name && this.route.name !== 'home') {
        return true
      }
      return false
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.page-header {
  .headline {
    height: 36px;
    margin: 0;
    font-weight: 300;
  }
}
</style>
