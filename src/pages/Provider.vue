<template>
  <v-container>
    <v-layout row wrap>
      <template v-for="(p, i) in providers">
        <v-flex class="pa-2" v-if="i <= showingIndex" :key="p.companyName" xs6 sm4 md3>
          <v-card>
            <v-card-media>
              <img :src="p.images['Company Logo'].url" :alt="`${p.companyName} Logo`">
            </v-card-media>
            <v-card-text>
              {{p.companyName}}
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
    <v-layout>
      <v-spacer></v-spacer>
      <v-btn round large color="white" v-on:click="pagination.current += 1">Show More</v-btn>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>
<script>
import { store } from '@/store'
export default {
  name: 'Provider',
  beforeRouteEnter (to, from, next) {
    console.log(to.meta)
    const provider = Object.entries(store.getters.providers).find(provider => {
      console.log(provider)
      return provider[0] === to.params.tenant
    })
    next(vm => {
      vm.$store.dispatch('setHeader', provider[1].title)
      vm.getProvider(to.params.tenant)
    })
  },
  data () {
    return {
      total: 0,
      providers: [],
      pagination: {
        current: 1,
        perPage: 20
      }
    }
  },
  computed: {
    showingIndex () {
      return this.pagination.current * this.pagination.perPage - 1
    },
    showingCount () {

    }
  },
  methods: {
    getProvider (type) {
      this.$http.get('/static/feed/sample.json').then(res => {
        this.providers = res.data.providers.filter(provider => provider.type === type)
        this.total = this.providers.length
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
