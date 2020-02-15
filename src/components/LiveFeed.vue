<template>
  <LiveFeed endpoint="endpoint">
      {{ value }}
  </LiveFeed>
</template>

<script>
import ws from 'ws';

export default {
    name: 'LiveFeed',
    props: {
        endpoint: {
        required: true,
        type: String,
        },
    },
    data() {
        return {
            value: {},
        };
    },
    created() {
        ws.onmessage = ({ data }) => {
            const message = JSON.parse(data);
            this.update(message.data);
        };
    },
    methods: {
        update(data) {
            this.value = data
        }
    }
};
</script>