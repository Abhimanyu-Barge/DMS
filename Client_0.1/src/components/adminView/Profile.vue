<template>
<fade-transition :duration="200">
<div>

    <v-toolbar color="blue darken-3"
      dark
      app
      fixed>
           &nbsp;<v-btn icon @click.native="dialog = false" transition="scale-transition" origin="center center" @click="backTo" dark>
             <b> <v-icon >arrow_back</v-icon></b>
            </v-btn>
            <v-toolbar-title color="white darken-2"><b>Profile</b></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
<br>
<br>
<br>
<br>
 <v-layout justify-center>
     <br>
    <v-flex xs12 sm8>
      <v-card>
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(323) 555-6789</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon>mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>mcbeal@example.com</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Orlando, FL 79938</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-card-media src="https://picsum.photos/700?image=996" height="200px">
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
   </div>
    </fade-transition>
</template>

<script>
import {FadeTransition  } from 'vue2-transitions'
export default {
    name: 'Profile',
    methods: {
        backTo () {
            this.$router.push('/UserList')
        }
    },
    components: {
    FadeTransition
  }
}
</script>

<style>
.toolbar__title {
    font-size: 20px;
    color: white;
    font-weight: 500;
    letter-spacing: .02em;
    margin-left: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
