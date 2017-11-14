<template>
  <v-app light>
    <v-toolbar fixed color="primary" app dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
    <page-header :pagename="$store.getters.header" app></page-header>
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
