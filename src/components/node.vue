<template>
<div>
    <div v-if="isleaf" id="leaf">
        {{ label }}: {{ value }}
    </div>
    <div v-else class="node">
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
    .node{
        padding: 1em;
        letter-spacing:1px;
        font-family: 'Courier New', Courier, monospace;
        margin: 1em 0.5em;
        box-shadow: -3px 3px 8px 1px #181818;
        background-color: rgb(43, 43, 43);
        padding: 0.5em;
        color:#adadad;		/* I'm not sure what "rgb(241, 237, 231)" is, but I'm not using it ( too much contrast ) . */
        font-weight: bold;
    }
    #leaf{
        padding: 1em;
        text-align:center;
        letter-spacing:1px;
        font-family: 'Courier New', Courier, monospace;
        margin: 1em 0.5em;
        box-shadow: -3px 3px 8px 1px #181818;
        background-color: rgb(43, 43, 43);
        padding: 0.5em;
        color:#adadad;		/* I'm not sure what "rgb(241, 237, 231)" is, but I'm not using it ( too much contrast ) . */
        font-weight: bold;
    }
</style>