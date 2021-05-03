<template>
    <div>   
        <v-flex sm12>
        <br>
           <v-card color="blue-grey darken-2" class="white--text">
              
                  <v-card-title primary-title>
                    <div>
                        <h2>Date : 27 jun 2020 </h2>
                     </div>
                  </v-card-title>
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
                  v-model="coustomer.id"
                  label="Customer Id"
                  :error-messages="errors.collect('C_Id')"
                  v-validate="'required|numeric'"
                  data-vv-name="C_Id"
                  required
                ></v-text-field>

              </v-card-actions>
            </v-flex>
          </v-card>
            </v-flex>
       
    </div>
</template>
<script>
export default {
    name:"collection",
    data(){
        return{
            coustomer: {},
            dictionary: {
              custom: {
                      C_Id:{
                           required:"Coustomer id is required",
                          numeric:"Coustomer ID Contain only Number"
                       },
                     }
                 }
        }
    }
}
</script>