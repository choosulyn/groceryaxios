<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id="chart">
            <covid></covid>
        
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import covid from '../covidline.js'

export default {
    components:{
        axiosExample,PSIIndex,covid
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:300px;
  width:495px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 200px;
  float:left;
}
</style>