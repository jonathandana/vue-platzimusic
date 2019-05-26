<template lang="pug">
#app
  img(src='./assets/logo.png')
  select(v-model="selectedCountry")
    option(v-for="country in countries" v-bind:value="country.value") {{country.name}}
  h1 {{ msg }}
  ul
    artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")

</template>

<script>

import {getArtist} from "./api";
import artist from "./components/Artist";
export default {
  name: 'app',
  data () {
    return {
      msg: 'PlatziMusic',
      artists:[],
      countries:[
          {name:"Argentina",value:"argentina"},
          {name:"Colombia",value:"colombia"},
          {name:"Spain",value:"spain"}
      ],
        selectedCountry:"argentina"
    }
  },
    components:{
      artist
    },
    methods:{
      refreshArtist(){
          const self = this;
          getArtist(this.selectedCountry).then(function(artists){
              self.artists = artists;
          });
      }
    },
    mounted(){
        this.refreshArtist();
    },
    watch:{
        selectedCountry(){
            this.refreshArtist();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
