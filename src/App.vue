<template>
  <div id="app">
    <div ref="buttonbar">
      <Button></Button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Button
  },
  mounted() {
    // axios.get('/model')
    // .then(async (response) => {
    //   let model = await response.json();
    //   console.log(model);
      var model = {
        sub1:{
          prop1: "value",
          proplist: [
            {
              prop1: "value",
              prop2: "value"
            }
          ]
        },
        sub2:{
          prop1: "value",
          proplist: [
            {
              prop1: "value",
              prop2: "value"
            }
          ]
        }
      };
      console.log(this.$refs.buttonbar);
      Object.keys(model).forEach(value =>{
        var ButtonClass = Vue.extend(Button);
        var instance = new ButtonClass({
          propsData: {path: value}
        });
        instance.$slots.default = [value];
        instance.$mount();
        //this.$refs.buttonbar.appendChild(instance);
      })
    }//)
  //}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
