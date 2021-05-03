<template>
  <v-navigation-drawer
  fixed
  :clipped="$vuetify.breakpoint.mdAndUp"
  app
  v-model="$store.state.openNevigation"
>
<v-toolbar flat>
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title">
           Menu
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-toolbar>


<v-list >
           <template v-for="(item) in manus">

           <div v-if="item.groupBtn == undefined || item.groupBtn == false">
            <v-list-tile v-if="item.icons" :key="item.title" @click="redirectTo(item)"  ripple shift>
              <v-list-tile-action>
                <v-icon>{{ item.icons }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="black--text">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              
            </v-list-tile>
          </div>

          
          <div v-if="item.groupBtn == true">
         <v-expansion-panel >
    <v-expansion-panel-content >
      <div slot="header"> 
        <v-icon>{{item.icons}}</v-icon> <span> &nbsp; &nbsp; &nbsp; &nbsp; {{item.title}}</span> 
      </div>
      <v-card>
        
        <v-card-text>
          <div v-for="(item) in item.child">
            <v-list-tile v-if="item.icons" :key="item.title" @click="redirectTo(item)"  ripple shift>
              <v-list-tile-action>
                <v-icon>{{ item.icons }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="black--text">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              
            </v-list-tile>
          </div>
          
          </v-card-text>
      
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

          </div>


          </template>

</v-list>


</v-navigation-drawer>
</template>
<script>
import { bus } from "../main";
export default {
  name: "navigation",
  data() {
    return {
      dialog: false,
      drawer: false,
      manus: [
        {
          icons: "home",
          title: "Dashboard",
          redirectTo: "dashboard"
        },
         {
           icons:"play_for_work",
           title:"Colllection",
           redirectTo:"/colllection"
         },
        {
          icons: "account_circle",
          title: "User",
          groupBtn: true,
          child: [
           {
          icons: "person_add",
          title: "Create User",
          redirectTo: "create_user"
        },
        {
          icons: "account_circle",
          title: "User List ",
          redirectTo: "UserList"
        }
        ]
        }, 
        {
          icons: "event",
          title: "Report ",
          redirectTo: "ReportView"
        },
        {
          icons: "remove_circle",
          title: "Logout  ",
          redirectTo: "logout",
        }
      ]
    };
  },
  methods: {
    redirectTo(item) {
      if (item.redirectTo == "logout") {
        this.$router.push("/");
      }
      this.$router.push(item.redirectTo);
    }
  }
};
</script>

<style>
.expansion-panel{
  box-shadow:none;
}
.expansion-panel__header {
      padding: 5px 13px;
}
</style>
