<template>
<div>
    <v-flex sm12>
      <br />
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-flex xs12>
          <h1>Cattle feed</h1>
          <br>
           <h2>Date : {{ state.date | formatDate }}</h2>
          
          <v-card-actions>
            <datepicker v-model="state.date"></datepicker>
            <v-text-field
              v-model="coustomer.id"
              label="Customer Id"
              :error-messages="errors.collect('C_Id')"
              v-validate="'required|numeric'"
              data-vv-name="C_Id"
              required
            ></v-text-field>
         
          </v-card-actions>
           <v-card-actions>
                <v-text-field
            value="Abhimanyu Barge"
            label="Coustomer Name"
            filled
            readonly
          ></v-text-field>
           </v-card-actions>
          <v-card-actions>
               <v-select :items="items" label="type"></v-select>
                <v-text-field
            label="Quantity"
            outlined
          >
          </v-text-field>

            <v-text-field
            label="Rate"
            outlined
          >
          </v-text-field>
          </v-card-actions>
        </v-flex>
         <br>
        <v-btn block large color="info" @click="submit" >Submit</v-btn>
        <br>
      </v-card>
    </v-flex>
</div>  
</template>

<script>
import Datepicker from "vuejs-datepicker";
import moment from "moment";
export default {
   name:"Cattlefeed",
   data() {
    return {
        coustomer:{},
        state: {
        date: new Date(),
      },
      items: ["Nandan sliver", "nandan pp","bran","minral"]

    }},
  components: {
    Datepicker,
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
  },
}
</script>

<style>

</style>  