<template>
    <DynamicComponent>{{ setting }}</DynamicComponent>
</template>
<script>
// TODO: https://css-tricks.com/creating-vue-js-component-instances-programmatically/
export default {
    name:'DynamicComponent',
    props: {
        connection: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {
            setting: null
        };
    },
    watch: {
        connection: {
            immediate: true,
            handler(newValue, prevValue = '') {
                this.setting = newValue.setting;
            },
        },
    }
};
</script>