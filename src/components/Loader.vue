<template>
  <v-card flat class="loader" v-if="loading">
    <img src="/static/images/loader.svg" class="loading"></div>
    <h3 class="display-1 grey--text text--darken-2">Loading...</h3>
  </v-card>
</template>
<script>
export default {
  name: 'Loader',
  props: {
    loading: Boolean
  }
}
</script>
<style lang="stylus" scoped>

.loader {
  position: fixed;
  background: transparent;
  top: 50%;
  left: 50%;
  margin: -10rem 0 0 -5rem;
  width: 10rem;
  height: 10rem;
  z-index: 1000;
  > h3 {
    text-align: center;
    margin: 3.5rem 0;
    font-weight: 300;
  }
}
.loading {
  -moz-animation: spin 1.5s infinite linear;
  -o-animation: spin 1.5s infinite linear;
  -webkit-animation: spin 1.5s infinite linear;
  animation: spin 1.5s infinite linear;
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
