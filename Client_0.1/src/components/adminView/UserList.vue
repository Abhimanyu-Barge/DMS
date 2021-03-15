<template>
<div>
    <v-list two-line>

          <template v-for="(item, index) in items.slice(0,6)">

            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>

            <v-list-tile avatar v-else @click="getData" :key="item.title">
              <!-- image section -->
              <v-list-tile-avatar>

                <img :src="item.profileImg" >
              </v-list-tile-avatar>

               <!-- content section -->
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>


            </v-list-tile>

          </template>
        </v-list>
</div>
</template>

<script>
export default {
    name:'CoustomerList',
    data () {
    return {
        items: [
        { header: 'Today' },
        { profileImg: '/static/doc-images/lists/1.png', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { profileImg: '/static/doc-images/lists/1.png', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
       
      ]
    }
    },
    created(){
      alert("hi creted bro")
    },

    methods: {
        getData () {
            this.$router.push('/profile')
        }
    }
}
</script>

<style>

</style>
