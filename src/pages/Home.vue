<template>
  <v-container fluid grid-list-xs class="tenants">
    <v-layout row wrap>
      <template v-for="(p, i) in providers">
        <v-flex class="pa-3" md4 xs12 :key="i">
          <v-card tile class="card-tenant elevation-4" :to="{name: p.name}">
            <div class="tenant-logo">
              <img :src="p.logo" :height="70">
            </div>
            <v-card-actions class="justify-center">
              <h2 class="tenant-name headline">{{p.title}}</h2>
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
      providers: [
        {
          title: 'Custom Brokers',
          logo: '/static/images/customs.svg',
          name: 'customBroker'
        },
        {
          title: 'Ocean Providers',
          logo: '/static/images/ocean.svg',
          name: 'ocean'
        },
        {
          title: 'Air Providers',
          logo: '/static/images/air.svg',
          name: 'air'
        }
      ]
    }
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
