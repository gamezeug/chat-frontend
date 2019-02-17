<template>
  <div id="home" class="container-fluid border rounded">
    <div class="row">
        <div class="col messages">
          <ul class="border border-primary rounded">
            <li v-for="m in messages" :key="m">
              {{ m }}
            </li>
          </ul>
        </div>
    </div>
    <div class="row">
        <div class="col">
          <form class="form-inline">
            <div class="form-group mr-2">
              <input type="text" class="form-control border border-primary" v-model="input" placeholder="Send a message"/>
            </div>
            <button type="button" class="btn btn-primary" v-on:click="sendMessage">Send</button>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data: function () {
    return {
      input: '',
      messages: []
    }
  },
  methods: {
    sendMessage: function () {
      this.$data.messages.push(this.$data.input)
    }
  }
}
</script>

<style scoped>
.messages {
  min-height: 100px;
  height: 300px;
}
ul {
  height: 90%;
  overflow: auto;
}
</style>
