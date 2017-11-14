<template>
  <v-card flat class="transparent">
    <div class="loader" :class="{'loading': loading}"></div>
    <h3 class="text-xs-center">Loading</h3>
  </v-card>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    loading: Boolean
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang="stylus" scoped>
.loading {
  -moz-animation: spin 0.75s infinite linear;
  -o-animation: spin 0.75s infinite linear;
  -webkit-animation: spin 0.75s infinite linear;
  animation: spin 0.75s infinite linear;
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }

  100% {
    -o-transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
  }

  100% {
    -ms-transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}
</style>
