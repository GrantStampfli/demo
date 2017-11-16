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
      <page-header :pagename="$store.getters.header"></page-header>
      <v-container class="app-container">
        <transition :name="transitionName" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <extensive-footer app>
      <div slot="copy">&copy; 2017 {{title}}</div>
    </extensive-footer>
  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ExtensiveFooter from '@/components/ExtensiveFooter'
export default {
  data () {
    return {
      title: 'Demo',
      transitionName: 'slide-fade-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-fade-right' : 'slide-fade-left'
    }
  },
  components: {
    'page-header': PageHeader,
    'extensive-footer': ExtensiveFooter
  }
}
</script>
<style lang="stylus">
.app-container {
  max-width: calc(960px + 32px);
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