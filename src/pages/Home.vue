<template>
  <v-container>
    <v-layout>
      <template v-for="(value, key, index) in providers">
        <v-flex class="pa-2" sm4 :key="key">
          <v-card :to="{name: 'provider',  params: {tenant: key}, meta: {title: value.title, alias: value.alias}}">
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
  data () {
    return {
      providers: {
        customBroker: {
          title: 'Custom Broker Provider',
          logo: '/static/images/customs.svg',
          alais: ''
        },
        ocean: {
          title: 'Ocean Provider',
          logo: '/static/images/ocean.svg',
          alais: ''
        },
        air: {
          title: 'Air Provider',
          logo: '/static/images/air.svg',
          alais: ''
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
