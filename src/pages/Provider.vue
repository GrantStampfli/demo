<template>
  <pre>{{providers}}</pre>
</template>
<script>
export default {
  name: 'Provider',
  beforeRouteEnter (to, from, next) {
    console.log(to)
    next(vm => {
      vm.getProvider(to.params.type)
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
    }
  },
  components: {}
}
</script>
<style lang="stylus" scoped>

</style>
