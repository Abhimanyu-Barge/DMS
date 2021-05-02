<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
          <v-flex xs12 >
              <v-card color="blue-grey darken-2" class="white--text">
              
                  <v-card-title primary-title>
                    <div>
                      <div class="headline" >{{formatDates($store.state.currentSeletedPeroid.startDate, $store.state.currentSeletedPeroid.endDate)}}</div>
                      <span>{{$store.state.currentSeletedPeroid.periodName}}</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>

                  </v-card-actions>
            
              </v-card>
            </v-flex>
        <v-flex xs6>
          <v-card color="cyan darken-1" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs12>
                  <div>
                    <div>
                      <h3>Total Customer</h3>
                    </div>
                    <div>
                      <h3>{{totalCoustomerCount}}</h3>
                    </div>
                    
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card color="purple lighten-1 " class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs12>
                  <div>
                    <div>
                      <h3>Inserted Count</h3>
                    </div>
                    <div>
                      <h3>{{insertedCount}}</h3>
                    </div>
                    <!-- <div> <h3> <v-icon x-large color="white darken-2">{{"brightness_3"}}</v-icon> Evening </h3> </div> -->
                    <!-- <h3><v-icon large color="white darken-2">{{"local_shipping"}}</v-icon>   10</h3> -->
                    <!-- <h3><v-icon large color="white darken-2">{{"local_drink"}}</v-icon>  50.5L </h3> -->
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-flex xs12>
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
                  v-model="coustomer.name"
                  label="Customer Name "
                  :error-messages="errors.collect('C_Name')"
                  v-validate="'required'"
                  data-vv-name="C_Name"
                  required
                ></v-text-field>

              </v-card-actions>
              <v-card-actions>
                <v-text-field
                  v-model="coustomer.qtyLiter"
                  label="Quantity in ltr"
                  :error-messages="errors.collect('C_qtyl')"
                  v-validate="'required|decimal:3'"
                  data-vv-name="C_qtyl"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="coustomer.avgRate"
                  label="Avg. Rate"
                  :error-messages="errors.collect('C_avgRate')"
                  v-validate="'required|decimal:3'"
                  data-vv-name="C_avgRate"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="coustomer.totalAmount"
                  label="Total Amount "
                  :error-messages="errors.collect('C_totalAmount')"
                  v-validate="'required|decimal:3'"
                  data-vv-name="C_totalAmount"
                  required
                ></v-text-field>
              </v-card-actions>
              <v-card-actions>
                <v-text-field
                  v-model="coustomer.deductionAmount"
                  label="Deduction Amount if any"
                  :error-messages="errors.collect('C_deduction')"
                  v-validate="'decimal:3'"
                  data-vv-name="C_deduction"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="coustomer.netPayment"
                  label="Net payment"
                  :error-messages="errors.collect('C_netPayment')"
                  v-validate="'required'"
                  data-vv-name="C_netPayment"
                  required
                ></v-text-field>
              </v-card-actions>
              <div class="text-xs-center">
                <v-btn color="info" @click="updateCoustomer()">Add</v-btn>
                <!-- <v-btn color="info">Next</v-btn> -->
              </div>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-title>Nutrition
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.id }}</td>
                <td class="text-xs-left">{{ props.item.customer }}</td>
                <td class="text-xs-center">{{ props.item.qty }}</td>
                <td class="text-xs-center">{{ props.item.ratePl }}</td>
                <td class="text-xs-center">{{ props.item.tAmount }}</td>
                <td class="text-xs-center">{{ props.item.dAmount }}</td>
                <td class="text-xs-center">{{ props.item.nPayment }}</td>
                <td class="justify-center layout px-0">
                  <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                  <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                </td>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ search }}" found no results.</v-alert>
            </v-data-table>
          </v-card>

          <br>
          <br>
          <br>
          <br>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import format from "date-fns/format";
export default {
  name: "CreateReport",
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      slot: {},
         dateFormat: "D MMM YYYY",
      coustomer: {},
      insertedCount: 0,
      totalCoustomerCount: 0,
      dictionary: {
        custom: {
          C_Id:{
            required:"Coustomer id is required",
            numeric:"Coustomer ID Contain only Number"
          },
          C_qtyl:{
            required:"Quantity  is required",
            decimal:"Quantity Contain only Number"
          },
          C_avgRate:{
            required:"Average Rate  is required",
            decimal:"Rate Contain only Number"

          },
          C_totalAmount:{
              required:"Total Amount is required",
              decimal:"Amount Contain only Number"
          },
          C_deduction:{
               required:"Dedution Amount is required",
              decimal:"Dedution Amount Contain only Number"
          },
          C_netPayment: {
            required: "Net Payment  is Required"
          },
          C_Name: {
            required: "Coustomer Name is Require."
          }
        }
      },
      search: "",
      headers: [
        { text: "User ID", align: "left", sortable: true, value: "id" },
        { text: "Customer Name", align: "left", value: "customer" },
        { text: "Qty in ltr", align: "center", value: "qty" },
        { text: "Avg.Rate ", align: "center", value: "ratePl" },
        { text: "Amount", align: "center", value: "tAmount" },
        { text: "Deduction", align: "center", value: "dAmount" },
        { text: "Net payment", align: "center", value: "nPayment" },
        { text: "Action", align: "center" }
      ],
      desserts: [
        {
          value: false,
          id: 1,
          customer: "Prashant  Barge",
          qty: 6.0,
          ratePl: 24,
          tAmount: 144,
          dAmount: 44,
          nPayment: 100
        }
      ]
    };
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  created() {
    this.initPageData();
  },
  methods: {
    initPageData() {
      this.getCoustomerInsertedDetais();
      this.getTotalCoustomer();
    },
    getCoustomerInsertedDetais() {
      axios
        .post("/getInsertedCoustomer", this.$store.state.currentSeletedPeroid)
        .then(response => {
          if (response.status == 200 && response.data.status == true) {
            this.insertedDetails = response.data.insertedCoustomer[0].Customers;
            this.insertedCount = this.insertedDetails.length;
          } else {
            this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
          }
        })
        .catch(e => {});
    },
    getTotalCoustomer() {
      axios
        .post("/getTotalCoustomer")
        .then(response => {
          if (response.status == 200 && response.data.status == true) {
            console.log(JSON.stringify(response.data.coustomers.length));
            this.totalCoustomerCount = response.data.coustomers.length;
            this.coustomers = response.data.coustomers;
          } else {
            this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
          }
        })
        .catch(e => {});
    },
    editItem(item) {
      alert(item);
    },
    deleteItem(item) {
      alert(item);
    },
      formatDates(startDate, endDate) {
      let formattedDates = "";
      if (startDate) {
        formattedDates = format(startDate, this.dateFormat);
      }
      if (endDate) {
        formattedDates += " - " + format(endDate, this.dateFormat);
      }
      return formattedDates;
    },
    updateCoustomer(){
       this.$validator.validateAll().then(result => {
        if (result == true) {
          alert("hi my dear ");
        }else{
alert("error dear ");
        }
        });
    }
  }
};
</script>

<style>
</style>
