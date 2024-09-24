<script setup lang="ts">
import { onMounted } from 'vue'
import { ReactConnector } from './Connector';
import { ReactRemoteConnector } from './RemoteConnector' 

onMounted(()=>{
 const reactComponent = new ReactConnector(document.getElementById('reactContainer')!)
 reactComponent.render()

 const remoteConnector = new ReactRemoteConnector(document.getElementById('remote')!)
 remoteConnector.render()
 
})

</script>

<template>

  <div id="reactContainer">
      <!-- render react component in here -->
  </div>
  <div id="remote">
  </div>
  <div class="card">
    <button type="button">vue button</button>
  </div>
 
</template>
 
