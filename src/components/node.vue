<template>
<div>
    <div v-if="isleaf" id="leaf">
        {{ label }}: {{ value }}
    </div>
    <div v-else id="node">
        <div>{{ label }}</div>
        <node 
            v-for="node in nodes" 
            :nodes="node.nodes" 
            :label="node.label"
            :key="node.id"
        >
        </node>
    </div>
</div>
  <!-- <div v-else id="leaf">
      {{ nodes.value }}
  </div> -->
</template>
<script>
export default { 
    props: [ 'label', 'nodes' ],
    name: 'node',
    computed:{
        isleaf() {
            return (this.nodes) ? this.nodes.type : false;
        },
        value() {
            return (this.nodes) ? this.nodes.value : false;
        }
    }
}
</script>

<style scoped>
    #node{
        margin: 3px;
        padding: 3px;
        border: solid 1px red;
    }
</style>