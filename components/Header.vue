<template>
<div id="appHeader">
  <v-toolbar fixed class="primary">
    <v-toolbar-title class="white--text">Watson Conversation Dialog Tester</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon v-if="$store.state.isLogin" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items v-if="$store.state.isLogin" class="hidden-sm-and-down">
      <v-btn flat class="white--text">Change workspace</v-btn>
      <v-btn flat class="white--text">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'appHeader',
  data() {
    return {
      msg: 'Welcome to sample-app',
      selectedWorkSpace: {},
    };
  },
};
</script>

<style>
</style>
