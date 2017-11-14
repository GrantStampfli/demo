<template>
  <v-container>
    <v-layout row wrap>
      <template v-for="(p, i) in providers">
        <v-flex v-if="i <= showingIndex" :key="p.companyName" xs6 sm4 md3>
          <v-card>
            <v-card-media>
              <img :src="p.images['Company Logo'].url" :alt="`${p.companyName} Logo`">
            </v-card-media>
            <v-card-text>
              {{p.companyName}} {{i}}
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
    <v-layout>
      <v-spacer></v-spacer>
      <v-btn round color="white" v-on:click="pagination.current += 1">Show More</v-btn>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Provider',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getProvider(to.params.tenant)
    })
  },
  data () {
    return {
      providers: [],
      pagination: {
        current: 1,
        perPage: 20,
        total: 0
      }
    }
  },
  computed: {
    showingIndex () {
      return this.pagination.current * this.pagination.perPage
    }
  },
  methods: {
    getProvider (type) {
      this.$http.get('/static/feed/sample.json').then(res => {
        this.providers = res.data.providers.filter(provider => provider.type === type)
        this.pagination.total = this.providers.length
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
