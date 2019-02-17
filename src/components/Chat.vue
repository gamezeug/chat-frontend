<template>
  <div id="home" class="container-fluid border rounded">
    <div class="row">
        <div class="col chat-column">
        {{msg}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  min-height: 300px;
  height: 100%;
}
</style>
