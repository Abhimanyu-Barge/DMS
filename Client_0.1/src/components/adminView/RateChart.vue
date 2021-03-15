<template>
  <div>
      <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-subheader>Select Product Type </v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          :items="items"
          v-model="e1"
          label="Select"
          single-line
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RateChart",
  data() {
    return {
        e1:null,
        items: []
    };
  },
  mounted() {
    axios
      .post(`/productList`)
      .then(response => {
      //  console.log(JSON.stringify(response))
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>

</style>
