<template>
<fade-transition :duration="200">
<div>

    <v-toolbar color="blue darken-3"
      dark
      app
      fixed>
           &nbsp;<v-btn icon @click.native="dialog = false" transition="scale-transition" origin="center center" @click="backTo" dark>
             <b> <v-icon>arrow_back</v-icon></b>
            </v-btn>
               <v-toolbar-title color="white"><b>Profile</b></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
<br>
<br>
<br>
<br>
 <v-container grid-list-md >

  <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
  </v-layout>
    </v-container>


   </div>
    </fade-transition>
</template>

<script>
import {FadeTransition  } from 'vue2-transitions'
export default {
  name: 'Collection Details',
   methods: {
        backTo () {
            this.$router.push('/dashboard')
        }
    },
    components: {
    FadeTransition
  }
}
</script>

<style>

</style>
