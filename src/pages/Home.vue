<template>
  <v-container>
    <v-layout>
      <template v-for="(value, key, index) in providers">
        <v-flex class="pa-2" sm4 :key="key">
          <v-card class="card-provider" :to="{name: 'provider',  params: {tenant: key}}" v-on:click.prevent="navigateProvider(value, key)">
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
  },
  data () {
    return {
      providers: {
        customBroker: {
          title: 'Custom Broker Providers',
          logo: '/static/images/customs.svg',
          alais: ''
        },
        ocean: {
          title: 'Ocean Providers',
          logo: '/static/images/ocean.svg',
          alais: ''
        },
        air: {
          title: 'Air Providers',
          logo: '/static/images/air.svg',
          alais: ''
        }
      }
    }
  },
  methods: {
    navigateProvider (provider, param) {
      this.$store.dispatch('setHeader', provider.title)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .card-provider {
    opacity: .7;
  }
</style>
