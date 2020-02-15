<template>
  <div class="node">
    <div>{{ label }}</div>
    <node 
      v-for="node in nodes" 
      :nodes="node.nodes" 
      :label="node.label"
      :key="node.id"
    >
    </node>
  </div>
</template>
<script>
  export default { 
    props: [ 'label', 'nodes' ],
    name: 'node'
  }
</script>