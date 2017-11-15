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
      <v-container>
        <transition :name="transitionName" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017 {{title}}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  export default {
    props: ['transitionName'],
    data () {
      return {
        title: 'Demo'
      }
    },
    components: {
      'page-header': PageHeader
    }
  }

</script>
<style lang="stylus">
.toolbar {
  .toolbar__content {
    max-width: 960px;
    margin: 0 auto;
    .site-title {
      padding: 10px 0;
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