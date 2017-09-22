<template>
<div id="appHeader">
  <v-app id="inspire">
    <v-toolbar fixed>
      <v-toolbar-title>Watson Conversation Dialog Tester</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon v-if="$store.state.isLogin" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items v-if="$store.state.isLogin" class="hidden-sm-and-down">
        <v-select :items="$store.state.workSpaceList" v-model="selectedWorkSpace" label="Select" item-value="ddd">
        </v-select>
        <v-btn flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
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
