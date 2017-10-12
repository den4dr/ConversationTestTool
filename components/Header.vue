<template>
<div id="appHeader">
  <v-toolbar fixed class="primary">
    <v-toolbar-title class="white--text">Watson Conversation Dialog Tester</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon v-if="$store.state.isLogin" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items v-if="$store.state.isLogin" class="hidden-sm-and-down">
      <v-btn flat class="white--text" @click="showWSList">Change workspace</v-btn>
      <v-btn flat class="white--text">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <modal name="workSpaceListModal">
    <p>test</p>
  </modal>
</div>
</template>

<script>
import workSpaceList from '~/components/WorkspaceListModal';

export default {
  name: 'appHeader',
  data() {
    return {
      msg: 'Welcome to sample-app',
      selectedWorkSpace: {},
      showModal: false,
    };
  },
  components: {
    workSpaceList,
  },
  methods: {
    showWSList() {
      // eslint-disable-next-line
      console.log('showList called');
      this.$modal.show('work-space-list-modal');
    },
  },
};
</script>

<style>
</style>
