<template>
  <v-app light>
    <v-toolbar fixed color="primary" app dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>Login</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <transition :name="transitionName" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: ['transitionName'],
    data () {
      return {
        title: 'Demo'
      }
    }
  }

</script>
