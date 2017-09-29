<template>
<div id="workSpaceListModal">
  <v-app>
    <form>
    </form>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'workSpaceListModal',
  data() {
    return {
      selectedWorkSpace: {},
    };
  },
  methods: {
    submitWorkSpace(workSpace) {
      this.$store.commit('setWorkSpaceList', response.workspaces);
    }
  },
};
</script>
