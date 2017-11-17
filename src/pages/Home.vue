<template>
  <v-container fluid grid-list-xs>
    <v-layout>
      <template v-for="(value, key, index) in $store.getters.providers">
        <v-flex class="pa-2" sm4 :key="key">
          <v-card tile class="card-provider" :to="{name: key}">
            <v-card-media :src="value.logo" :height="70" contain></v-card-media>
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
