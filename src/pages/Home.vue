<template>
  <v-container fluid grid-list-xs class="tenants">
    <v-layout>
      <template v-for="(value, key, index) in $store.getters.providers">
        <v-flex class="pa-3" sm4 :key="key">
          <v-card tile class="card-tenant elevation-4" :to="{name: key}">
            <div class="tenant-logo">
              <img :src="value.logo" :height="70">
            </div>
            <v-card-actions class="justify-center">
              <h2 class="tenant-name headline">{{value.title}}</h2>
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
  }
}
</script>
<style lang="stylus">
@import "~flexbox";
  .tenants {
    .card-tenant {
      flexbox(flex);
      flex-direction(column);
      justify-content(space-between);
      align-items(center);
      min-height: 300px;
      &:hover .tenant-logo {
        opacity: 1;
      }
      .tenant-logo {
        flex(1,1,50%);
        flexbox(flex);
        flex-direction(column);
        justify-content(center);
        opacity: .7;
      }
      .tenant-name {
        font-weight: 300;
        padding: 1rem 0 2rem;
      }
    }
  }
</style>
