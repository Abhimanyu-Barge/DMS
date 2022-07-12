<template>
  <div>
    <v-flex sm12>
      <br />
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-flex xs12>
          <h1>Date : {{ state.date | formatDate }}</h1>
          <v-card-actions>
            <datepicker v-model="state.date"></datepicker>
            <v-select :items="items" label="Shift"></v-select>
            
          </v-card-actions>
          <v-card-actions>
           <v-text-field
              v-model="coustomer.id"
              label="Customer Id"
              :error-messages="errors.collect('C_Id')"
              v-validate="'required|numeric'"
              data-vv-name="C_Id"
              required
            ></v-text-field>
          <v-text-field
            value="Abhimanyu Barge"
            label="Coustomer Name"
            filled
            readonly
          ></v-text-field>
          </v-card-actions>
        </v-flex>
        
        <v-flex xs12>
          <v-card-actions>
          <v-text-field
            label="Milk"
            outlined
          ></v-text-field>
          <v-select :items="milktype" label="Type"></v-select>
          </v-card-actions>
        </v-flex>
        <v-flex xs12>
           <v-card-actions>
        <v-text-field
            label="Fat"
            outlined
          >
          </v-text-field>
           <v-text-field
            label="Degree"
            outlined
          ></v-text-field>
          
          <v-text-field
            label="SNF"
            outlined
          ></v-text-field>
          
           </v-card-actions>
        </v-flex>

        <v-flex xs12>
           <v-card-actions>
             <v-text-field
            label="Mik Rate"
            outlined
          ></v-text-field>

          <v-text-field
            label="Total Payment"
            outlined
          ></v-text-field>
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
  name: "Collection",
  data() {
    return {
      coustomer: {},
      items: ["Morning", "Eveing"],
       milktype: ["Cow", "Buffalo"],
      dictionary: {
        custom: {
          C_Id: {
            required: "Coustomer id is required",
            numeric: "Coustomer ID Contain only Number",
          },
        },
      },
      state: {
        date: new Date(),
      },
    };
  },
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
};
</script>
