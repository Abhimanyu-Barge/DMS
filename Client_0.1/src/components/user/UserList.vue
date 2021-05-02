<template>
<div>
    <v-list two-line>
          <template v-for="(item, index) in responseData">
            <!-- <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
            <v-divider :key="index"></v-divider>
            <v-list-tile avatar  @click="redirectToUser(item)" :key="item.title">
              <!-- image section -->
              <v-list-tile-avatar>
                <img src="/static/doc-images/lists/1.png">
              </v-list-tile-avatar>
               <!-- content section -->
              <v-list-tile-content>
                <v-list-tile-title v-html="item.customerNameEn"></v-list-tile-title>
                <v-list-tile-sub-title v-html="id+item.customerId"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list> 

        <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field v-model="seletedCustomer.customerNameEn" label=" Full Name" :error-messages="errors.collect('name')" v-validate="'required'" data-vv-name="name" required></v-text-field>
                    <v-text-field v-model="seletedCustomer.mobileNumber" label=" Mobile Number" :error-messages="errors.collect('mobile')" v-validate="'max:10|numeric'" data-vv-name="mobile" :counter="10" required></v-text-field>
                    <v-text-field v-model="seletedCustomer.coustomerAddress" label="Coustomer Address" :error-messages="errors.collect('coustomerAddress')" v-validate="'required'" data-vv-name="coustomerAddress" required></v-text-field>
                    <v-text-field v-model="seletedCustomer.acountNo" label=" Account Number" :error-messages="errors.collect('accountno')" v-validate="'required|max:16|min:11|numeric'" data-vv-name="accountno" :counter="16" required></v-text-field>
                    <v-text-field v-model="seletedCustomer.ifc" label=" IFSC Code" :error-messages="errors.collect('ifsc')" v-validate="{required:true,regex: '^[A-Za-z]{4}0[A-Z0-9a-z]{6}$'}" data-vv-name="ifsc" required></v-text-field>
                    <v-text-field v-model="seletedCustomer.branch" label=" Branch Name" :error-messages="errors.collect('branch')" v-validate="'required'" data-vv-name="branch" required></v-text-field>
                    <v-text-field v-model="seletedCustomer.aadhaarNO" label=" Aadhar Number " :error-messages="errors.collect('aadhar')" v-validate="'numeric'" data-vv-name="aadhar" :counter="12" v-on:blur="validateAdhar()" required></v-text-field>
                    <!-- <v-text-field v-model="customer.email" label="E-mail" :error-messages="errors.collect('email')" v-validate="'email'" data-vv-name="email"></v-text-field> -->
                    <!-- <v-btn block large color="info" @click="submit" >Create New  User</v-btn> -->
                </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text  @click="closeDialog"> Close  </v-btn>
          <v-btn color="blue darken-1" text @click="updateCoustomerDetails "> Update  </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>   
</div>

</template>

<script>
  import axios from 'axios'
export default {
    name:'userList',
    data () {
    return {
      id:"Coustomer Id :",
       customer: {},
       seletedCustomer:{},
       responseData:[],
       dialog: false,
       dictionary: {
        attributes: {
          email: "E-mail Address"
        },
        custom: {
          name: {
            required: () => "Name can not be empty"
          },
          select: {
            required: "Select field is required "
          },
          mobile: {
            required: "mobile number field is required",
            max: "The mobile number field may not be greater than 10 digit",
            numeric: "Please enter Number only."
          },
          accountno: {
            numeric: "Please enter Number only.",
            required: "Account number field is required",
            max: "The Account number field may not be greater than 16 digit",
            min: "The Account number field may not be less than 11 digit"
          },
          ifsc: {
            required: "IFSC Code is required",
            regex: "Invalid IFSC Code"
          },
          aadhar: {
            required: "Please Enter Valid Aadhar number ",
            max: "The Aadhar number field may not be greater than 12 digit"
          },
          branch: {
            required: "Branch name required "
          },
           coustomerAddress: {
            required: "Coustomer Address  required "
          }
        }
      }
    }
    },
    created(){
      this.$validator.localize("en", this.dictionary);
      this.getAllUserList()
    },
    methods: {
      closeDialog(){
        this.dialog = false
        this.seletedCustomer = {}
        this.getAllUserList()
      },
      updateCoustomerDetails(){
        this.$validator.validateAll().then((result) => {
        if(result == true){
          axios.post('/updateCoustomer', this.seletedCustomer) .then(response => {
           if(response.status == 200  && response.data.status == true){
                this.seletedCustomer = {}
                this.dialog = false
                this.getAllUserList()
            }else{
              this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
          }
        })
        .catch(e => {
           this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
        })       
          }
        })
      },
  getAllUserList(){
    axios.post('/getTotalCoustomer') .then(response => {
           if(response.status == 200  && response.data.status == true){
                this.responseData = response.data.coustomers
            }else{
              this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
          }
        })
        .catch(e => {
           this.$toasted.error(response.data.reason, {
              position: "top-center",
              duration: 1000
            });
        })
        
        },
        redirectToUser (data) {
          this.seletedCustomer = data
          this.dialog = true
        }
    }
}
</script>

<style>

</style>
