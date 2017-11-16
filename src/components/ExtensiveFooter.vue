<template>
  <v-footer dark class="app-footer">
    <v-container>
      <v-layout>
        <v-flex>
          <v-list dense class="transparent">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Home
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Manage Account
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Help
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex>
          <v-list dense class="transparent">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Terms and Conditions
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Privact Policy
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Collection Statement
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex>
          <template v-for="s in social">
            <v-btn icon :href="s.link" target="_blank" :key="s.title" class="btn-social">
              <div class="icon-social" :class="[s.title]" :alt="`Social link to ${s.title}`"></div>
            </v-btn>
          </template>
        </v-flex>
      </v-layout>
      <slot name="copy"></slot>
    </v-container>
  </v-footer>
</template>
<script>
// import svgLinkedin from '@/assets/social/linkedin.svg'
// import svgTwitter from '@/assets/social/twitter.svg'
// import svgFacebook from '@/assets/social/facebook.svg'
export default {
  name: 'Footer',
  data () {
    return {
      social: [
        {
          link: 'https://www.linkedin.com/',
          title: 'linkedin'
        },
        {
          link: 'https://twitter.com/?lang=en',
          title: 'twitter'
        },
        {
          link: 'https://www.facebook.com/',
          title: 'facebook'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.app-footer {
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
}

.btn-social {
  margin-right: 0;
  .icon-social {
    background-color: #fff;
    width: 24px;
    height: 24px;
  }
  .linkedin {
    mask: url(/static/images/social/linkedin.svg) no-repeat 50% 50%;
    -webkit-mask:  url(/static/images/social/linkedin.svg) no-repeat 50% 50%;
  }
  .twitter {
    mask: url(/static/images/social/twitter.svg) no-repeat 50% 50%;
    -webkit-mask:  url(/static/images/social/twitter.svg) no-repeat 50% 50%;
  }
  .facebook {
    mask: url(/static/images/social/facebook.svg) no-repeat 50% 50%;
    -webkit-mask:  url(/static/images/social/facebook.svg) no-repeat 50% 50%;
  }
}
</style>
