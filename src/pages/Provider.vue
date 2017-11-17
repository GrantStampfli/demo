<template>
  <v-container fluid grid-list-xs>
    <h1 class="display-2">{{this.total}} {{this.title}}</h1>
    <v-layout row wrap>
      <template v-for="(p, i) in providers">
        <v-flex class="pa-2" v-if="i <= showingIndex" :key="p.companyName + i" xs6 sm4 md3>
          <v-card tile class="provider" height="200px">
            <div class="provider-image">
              <v-card-media :src="p.images['Company Logo'].url" :alt="`${p.companyName} Logo`" height="100px"></v-card-media>
            </div>
            <v-card-text class="provider-name">
              <h5>{{p.companyName}}</h5>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
    <v-layout>
      <v-spacer></v-spacer>
      <div>
        <v-btn round large color="white" v-on:click="pagination.current += 1">Show More</v-btn>
        <h5 class="text-xs-center">{{showingCount}}</h5>
      </div>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>
<script>
import { store } from '@/store'
export default {
  name: 'Provider',
  beforeRouteEnter (to, from, next) {
    console.log(to)
    const title = store.getters.providers[to.name].title
    store.dispatch('setHeader', title)
    next(vm => {
      vm.title = title
      vm.getProvider(to.name)
    })
  },
  data () {
    return {
      title: '',
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
      const current = (this.showingIndex > this.total) ? this.total : this.pagination.current * this.pagination.perPage
      return 'Showing ' + current + ' of ' + this.total
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
@import "~flexbox"
  .provider {
    flexbox(flex);
    flex-direction(column);
    justify-content(center);
    align-items(center);
    .provider-image {
      height: 100px;
      width: 100px;
      .card__media {
        border-radius: 3px;
      }
    }
  }
</style>
