<template>
    <div>
        <v-container fluid class="px-3">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field v-model="customer.userName" label="Enter full Name" :error-messages="errors.collect('name')" v-validate="'required'" data-vv-name="name" required></v-text-field>
                    <v-text-field v-model="customer.mobileNumber" label="Enter Phone Number" :error-messages="errors.collect('mobile')" v-validate="'required|max:10|numeric'" data-vv-name="mobile" :counter="10" required></v-text-field>
                    <v-text-field v-model="customer.accountNumber" label="Enter Account Number" :error-messages="errors.collect('accountno')" v-validate="'required|max:16|min:11|numeric'" data-vv-name="accountno" :counter="16" required></v-text-field>
                    <v-text-field v-model="customer.ifscCode" label="Enter IFSC Code" :error-messages="errors.collect('ifsc')" v-validate="{required:true,regex: '^[A-Za-z]{4}0[A-Z0-9a-z]{6}$'}" data-vv-name="ifsc" required></v-text-field>
                    <v-text-field v-model="customer.aadhaarNO" label="Enter aadhar Number " :error-messages="errors.collect('aadhar')" v-validate="'required|numeric'" data-vv-name="aadhar" :counter="12" v-on:blur="validateAdhar()" required></v-text-field>
                    <v-text-field v-model="customer.email" label="E-mail" :error-messages="errors.collect('email')" v-validate="'email'" data-vv-name="email"></v-text-field>
                    <v-btn @click="submit">Create New  User</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import aadhaarValid from "aadhaar-validator";
  import axios from 'axios'
export default {
  $_veeValidate: {
    validator: "new"
  },
  name: "CrateUser",
  data() {
    return {
      userName: "",
      mobileNumber: null,
      accountNumber: null,
      ifscCode: null,
      aadhaarNO: null,
      bankName: "",
      email: "",
      customer: {},
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: null,
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
          }
        }
      }
    }
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll().then((result) => {
        if(result == true){
  axios.post(`/userRegistration`, this.customer).then(response => {
    // console.log(JSON.stringify(response.data.result.ops[0]));
    if(response.data.status === true){
      this.$toasted.show('Registration Success.',{ theme: "outline", position: "top-center", duration : 1500})
      this.customer= {}
      this.$validator.reset();
    }else{
      this.$toasted.show('Registration Fail.',{ theme: "outline", position: "top-center", duration : 1500})
    }
    }).catch(e => {
      this.errors.push(e)
    })
    }
      })
    },
    validateAdhar() {
        if(this.aadhaarNO != null){
      var valid = aadhaarValid.isValidNumber(this.aadhaarNO)
      if(!valid){
      this.aadhaarNO = null
      }
    }
    }
  }
};
</script>

<style>

</style>
