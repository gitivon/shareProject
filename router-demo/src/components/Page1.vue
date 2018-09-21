<template>
  <div>
    page1
  </div>
</template>
<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Page1 extends Vue {

  @Prop(Number) page;

  
}
</script>