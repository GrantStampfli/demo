<template>
  <v-container>
    <v-layout>
      <template v-for="(value, key, index) in $store.getters.providers">
        <v-flex class="pa-2" sm4 :key="key">
          <v-card class="card-provider" :to="{name: 'provider',  params: {tenant: key}}">
            <v-card-media>
              <img :src="value.logo">
            </v-card-media>
            <v-card-actions>
              {{value.title}}
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Home',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('setHeader', 'Popular Services')
    })
  }
}
</script>
<style lang="stylus" scoped>
  .card-provider {
    opacity: .7;
  }
</style>
