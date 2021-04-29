<template>
<div>
    <v-list two-line>
          <template v-for="(item, index) in items.slice(0,6)">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

            <v-divider :key="index"></v-divider>

            <v-list-tile avatar  @click="getData" :key="item.title">

              <v-list-tile-avatar>
                <img :src="item.avatar" >
              </v-list-tile-avatar>

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
        items: []
    }
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
