<template>
  <div class="page-header">
    <h1 class="headline mb-0">
      <v-btn icon v-if="showBack" v-on:click="goBack()" class="ma-0">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <span v-html="pagename || ' '"></span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    pagename: {
      type: String,
      default: 'Popular Providers'
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
      if (this.route.from.path !== '/') {
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
  background-color: #eee;
  padding: 14px;
  .headline {
    height: 36px;
  }
}
</style>
