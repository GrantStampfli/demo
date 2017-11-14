<template>
  <v-container>
    <v-layout row wrap>
      <template v-for="p in providers">
        <v-flex :key="p.companyName" xs6 sm4 md3>
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
      <v-btn round color="white" v-on:click="showMore()">Show More</v-btn>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>
<script>
import PageTitle from '@/components/PageTitle'
export default {
  name: 'Provider',
  beforeRouteEnter (to, from, next) {
    console.log(to)
    next(vm => {
      vm.getProvider(to.params.tenant)
    })
  },
  props: {},
  data () {
    return {
      total: 0,
      providers: []
    }
  },
  computed: {},
  methods: {
    getProvider (type) {
      this.$http.get('/static/feed/sample.json').then(res => {
        this.total = res.data.total
        this.providers = res.data.providers.filter(provider => provider.type === type)
      })
    },
    showMore () {}
  },
  components: {
    'page-title': PageTitle
  }
}
</script>
<style lang="stylus" scoped>

</style>
