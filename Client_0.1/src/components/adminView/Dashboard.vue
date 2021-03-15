<template>
    <div>
       <v-container grid-list-md >
         <v-layout row wrap>
          <v-flex xs12>
            <v-card color="grey lighten-2" class="black--text">
              <v-card-title primary-title>
                <div class="headline" text-xs-center><v-icon large color="black darken-2">{{"today"}}</v-icon> {{currentDate|formatDate}} </div>
                <div> </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card color="cyan darken-1" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                    <div>
                    <div><h3><v-icon x-large color="white darken-2">{{"wb_sunny"}}</v-icon> Morning </h3> </div>
                    <h3><v-icon large color="white darken-2">{{"local_shipping"}}</v-icon>  10</h3>
                    <h3><v-icon large color="white darken-2">{{"local_drink"}}</v-icon>  100.00L </h3>
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
                      <div> <h3> <v-icon x-large color="white darken-2">{{"brightness_3"}}</v-icon> Evening </h3> </div>
                    <h3><v-icon large color="white darken-2">{{"local_shipping"}}</v-icon>   10</h3>
                    <h3><v-icon large color="white darken-2">{{"local_drink"}}</v-icon>  50.5L </h3>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12>
              <donut-chart
  id="donut"
  :data="donutData"
  colors='[ "#AB47BC","#00ACC1"]'
  resize="true">
</donut-chart>
          </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>
<script>
import moment from 'moment'
import { DonutChart } from 'vue-morris'
export default {
    name: 'Dashboard',
    data () {
        return {
            currentDate: '',
            donutData: [
      { label: 'Evening', value: 50.5 },
      { label: 'Morning', value: 100 }
    ]
        }
    },
    components: {
        DonutChart
    },
    methods: {
     getCurentDate () {
         this.currentDate = new Date()
     }
    },
    mounted () {
     this.getCurentDate()
    },
     filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('DD-MMM-YYYY')
      }
    }
  }
}
</script>
<style>
</style>
