<template>
       <v-app id="inspire">
          <Navigationdrawer></Navigationdrawer>
             <Toolbar></Toolbar>
               <v-content fluid>
                  <router-view ></router-view>
          </v-content>  
       </v-app>
</template>
<script>
import Toolbar  from '../common/Toolbar'
import Navigationdrawer from '../common/Navigation-drawer'
export default {
    name: 'layout',
    components: {
      Toolbar,
    Navigationdrawer
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
