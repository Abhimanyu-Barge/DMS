<template>
   <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
         <v-flex xs12>
            <v-card >
              <v-card-title primary-title text-xs-center>
                <div class="headline">Grid system</div>
              </v-card-title>
                <div><h4>Vuetify has a 12 point grid system. Built using flex-box, the grid is used to layout an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.</h4></div>
         <br>     
               <v-card-title primary-title text-xs-center>
                <div class="headline">Usage</div>
              </v-card-title>
              <br>
              The v-container can be used for a center focused page, or given the fluid prop to extend its full width. v-layout is used for separating sections and contains the v-flex. The structure of your layout will be as follows, v-container » v-layout » v-flex. Each part of the grid chain is a flex-box element. The final, v-flex, automatically sets its children to have flex: 1 1 auto.
              <br><br>           
            </v-card>
          </v-flex>
            <v-flex xs12>
            <v-card >
              <v-card-title primary-title text-xs-center>
                <div class="headline"> Code:-</div>
              </v-card-title>
                <div>
<div style="display: block;" id="rulesformitem" class="formitem">
  <textarea cols="2" rows="10" id="rules" disabled>
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="`6${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="`4${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="`3${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="`2${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="`1${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
 </template>
  </textarea>
</div>
 </div>
 <br>               
</v-card>
 </v-flex>

<v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="`6${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="`4${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="`3${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="`2${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="`1${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
     <br>
    <br>
  </v-container>
</template>

<script>
export default {
    name: 'grid'
}
</script>

<style>
textarea
{
  border:1px solid #999999;
  height: 100%;
  width:100%;
  margin:5px 0;
  padding:3px;
}
</style>
