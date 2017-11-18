<template>
  <v-container fluid grid-list-xs class="provider-container">
    <h1 class="display-2">{{this.total}} {{this.title}}</h1>
    <v-layout row wrap>
      <template v-for="(p, i) in providers">
        <v-flex class="pa-2" v-if="i <= showingIndex" :key="p.companyName + i" xs12 sm6 md4 lg3>
          <v-card tile class="provider" height="200px">
            <div class="provider-image">
              <v-card-media :src="p.images['Company Logo'].url" :alt="`${p.companyName} Logo`" height="100px"></v-card-media>
            </div>
            <v-card-text class="provider-name">
              <v-subheader class="justify-center">{{p.companyName}}</v-subheader>
            </v-card-text>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
    <v-layout>
      <v-spacer></v-spacer>
      <div class="my-4">
        <v-btn round large class="px-4 mb-4" color="white" v-on:click="pagination.current += 1" :disabled="showingIndex >= total">Show More</v-btn>
        <v-subheader class="justify-center title grey--text">{{showingCount}}</v-subheader>
      </div>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Provider',
  beforeRouteEnter (to, from, next) {
    to.meta.loader()
    next(vm => {
      vm.title = to.meta.title
      vm.$store.dispatch('setHeader', to.meta.title)
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
      const current = (this.showingIndex >= this.total) ? this.total : this.pagination.current * this.pagination.perPage
      return 'Showing ' + current + ' of ' + this.total
    }
  },
  methods: {
    getProvider (type) {
      this.$http.get('/static/feed/sample.json').then(res => {
        const providers = res.data.providers.filter(provider => {
          return provider.type === type && provider.yearStarted >= 2010
        })
        this.providers = providers.sort(this.$compareValues('companyName'))
        this.total = this.providers.length
      }).then(() => this.$store.dispatch('setLoader', false))
    }
  },
  beforeRouteLeave (to, from, next) {
    // make sure spinner is off
    this.$store.dispatch('setLoader', false)
    next()
  }
}
</script>
<style lang="stylus" scoped>
  @import "~flexbox"
  .provider-container {
    h1 {
      padding: 1rem .5rem 2rem;
      font-weight: 300;
    }
  }
  .provider {
    flexbox(flex);
    flex-direction(column);
    justify-content(space-between);
    align-items(center);
    &:before {
      content: '';
      background: linear-gradient(
        to bottom,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0.25) 100%
      );
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 2;
      transition: all 250ms ease;
    }
    &:hover:before {
      cursor: pointer;
      opacity: .35;
    }
    .provider-image {
      flex(1,0 50%);
      height: 100px;
      width: 100px;
      margin-top: 1rem
      .card__media {
        border-radius: 3px;
      }
    }
    .provider-name {
      text-align: center;
      .subheader {
        align-items(start);
        min-height: 48px;
        font-size: 16px;
      }
    }
  }
</style>
