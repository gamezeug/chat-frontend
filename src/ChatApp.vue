<template>
  <div id="chatApp">
    <Chat/>
  </div>
</template>

<script>
import Chat from './components/Chat.vue'

export default {
  name: 'chatApp',
  components: {
    Chat
  }
}
</script>

<style>
#chatApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
