<template>
  <v-app light>
    <v-toolbar fixed color="primary" flat app dark height="70">
      <v-toolbar-title class="site-title">
        <router-link :to="{name: 'home'}">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <page-header :pagename="$store.getters.header" :height="70"></page-header>
      <v-container class="app-container">
        <loader :loading="loading"></loader>
        <v-fade-transition mode="out-in">
          <router-view :class="{'app-loading': loading}"></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <extensive-footer app :title="title"></extensive-footer>
  </v-app>
</template>

<script>
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import ExtensiveFooter from '@/components/ExtensiveFooter'
export default {
  data () {
    return {
      title: 'Demo'
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loader
    }
  },
  components: {
    'loader': Loader,
    'page-header': PageHeader,
    'extensive-footer': ExtensiveFooter
  }
}
</script>
<style lang="stylus">
#app {
  background-color: #FBFAF7;
  .app-container {
    max-width: 960px;
  }

  .app-loading {
    opacity: .05;
  }
}

.toolbar {
  .toolbar__content {
    max-width: 960px;
    margin: 0 auto;

    .site-title {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: 1px;
      text-transform: uppercase;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>