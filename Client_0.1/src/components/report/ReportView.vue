<template>
  <div>
    <div>
      <v-container fluid class="px-3">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-flex xs12></v-flex>
              <v-card-text>
                <div class="datepicker-trigger">
                  <v-text-field
                    type="text"
                    id="datepicker-trigger"
                    placeholder="Select Payment Period Date "
                    :value="formatDates(startDate, endDate)"
                    v-validate="'required'"
                  ></v-text-field>
                  <AirbnbStyleDatepicker
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'range'"
                    :fullscreen-mobile="true"
                    :date-one="startDate"
                    :date-two="endDate"
                    @date-one-selected="val => { startDate = val }"
                    @date-two-selected="val => { endDate = val }"
                  />
                </div>
                <v-text-field
                  label="Payment Period Name"
                  :error-messages="errors.collect('periodName')"
                  v-validate="'required'"
                  data-vv-name="periodName"
                  :counter="10"
                  required
                  v-model="periodName"
                ></v-text-field>
              </v-card-text>
              <v-flex xs12>
                <div class="text-xs-center">
                  <v-btn color="info" @click="createPeroid()">Create Payment Period</v-btn>
                </div>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 v-for="item in peroidDetails" :key="item.id">
              <v-card color="blue-grey darken-2" class="white--text">
                <a @click="redirectTo(item)" class="white--text">
                  <v-card-title primary-title>
                    <div>
                     
                      <div class="headline" >{{formatDates(item.startDate, item.endDate)}}</div>
                      <span>{{item.periodName}}</span>
                    </div>
                  </v-card-title>
                  <v-card-actions></v-card-actions>
                </a>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import format from "date-fns/format";
import axios from "axios";
export default {
  name: "ReportView",
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      dateFormat: "D MMM YYYY",
      startDate: "",
      endDate: "",
      periodName: "",
      peroidDetails: [],
      dictionary: {
        custom: {
          periodName: {
            required: "Period Name number field is required"
          }
        }
      }
    };
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  created() {
    this.getPeroidData();
  },
  methods: {
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
    redirectTo(seletedPeroid) {
      this.$store.commit('selectedPeroid', seletedPeroid);
      this.$router.push("/createReport");
    },
    createPeroid() {
      this.$validator.validateAll().then(result => {
        if (result == true) {
          if (this.startDate != "" && this.endDate != "") {
            let peroidData = {};
            peroidData.startDate = this.startDate;
            peroidData.endDate = this.endDate;
            peroidData.periodName = this.periodName;
            axios
              .post("/createPeroid", peroidData)
              .then(response => {
                if (response.status == 200 && response.data.status == true) {
                  this.$toasted.show(response.data.text, {
                    theme: "outline",
                    position: "top-center",
                    duration: 1000
                  });
                  this.getPeroidData();
                    this.startDate = null;
                  this.endDate = null;
                  this.periodName = null;
                  this.$validator.reset()
                } else {
                  this.$toasted.error(response.data.reason, {
                    position: "top-center",
                    duration: 1000
                  });
                }
              })
              .catch(e => {});
          } else {
            this.$toasted.error("Please Select Two Date ", {
              position: "top-center",
              duration: 1000
            });
          }
        } else {
          this.$toasted.error("Enter correct details", {
            position: "top-center",
            duration: 1000
          });
        }
      });
    },
    getPeroidData() {
      axios
        .post("/getPeroidData")
        .then(response => {
          if (response.status == 200 && response.data.status == true) {
            this.peroidDetails = response.data.result;
          } else {
            this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
          }
        })
        .catch(e => {});
    }
  }
};
</script>

<style>
</style>
