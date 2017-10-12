<template>
<div name="workSpaceList">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 v-for="ws in workSpaceList" :key="ws.workspace_id">
        <v-card hover>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ws.name}}</div>
              <span class="grey--text">{{ws.description}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark>Listen now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import { // eslint-disable-line import/no-extraneous-dependencies
  mapState,
  mapMutations,
} from 'vuex';

import moment from 'moment';

export default {
  name: 'workSpaceList',
  data() {
    return {
      selectedWorkSpace: {},
    };
  },
  computed: mapState([
    'workSpaceList',
  ]),
  methods: {
    ...mapMutations(['setWorkSpace']),
  },
  filters: {
    moment: date => moment(date).format('YYYY/MM/DD HH:mm:ss'),
  },
};
</script>
