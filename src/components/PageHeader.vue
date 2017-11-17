<template>
  <v-toolbar color="white" class="elevation-1">
    <v-toolbar-title class="page-header">
      <h1 class="headline">
        <v-btn icon v-if="showBack" v-on:click="goBack()" class="ma-0">
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
