import Vue from 'vue'
import Node from './components/node.vue'

Vue.config.productionTip = false

/* This is temporary data, in reality this will be fetched */
let data = {
  relayController:{
    relays: [
      {enabled: true},
      {enabled: false},
    ]
  },
  pwmController: {
    pwmMonitorUpdateRate: 100,
    bankA: {
      frequency: 1000
    },
    bankB: {
      frequency: 1234
    },
    pwms: [
      {
        enabled: false,
        dutyCycle: 50
      },
      {
        enabled: false,
        dutyCycle: 50
      },
    ]
  }
}

function makenode(key, val, path){
    let obj = new Object();
    obj.path = path + '/' + key;
    obj.label = key;
    obj.nodes = parsetree(val, obj.path);
    return obj
}

function parsetree(item, path) {
    if (typeof item === "object" && item !== null){
        let nodes = [];
        for (let [key, val] of Object.entries(item)){
            nodes.push(makenode(key, val, path));
        }
        return nodes
    }
    else if (Array.isArray(item)) {
        return item.map((value, index) => makenode(String(index), value, path))
    }
    else{
        let obj = new Object();
        obj.label = '';
        obj.path = path;
        obj.value = item;
        obj.type = String(typeof item);
        return obj;
    }
}

let tree = new Object()
tree.label = data.controller
tree.nodes = parsetree(data, '');

new Vue({
  el: '#app',
  data: {
    tree
  },
  components: {
    Node
  }
})