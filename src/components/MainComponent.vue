<template>
    <div>
      <Header />
      <div class="section">
        <BlockExpectation />
        <BlockForSelection />
        <BlockSelection />
        <BlockComplete />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import BlockExpectation from '@/components/BlockExpectation.vue'
  import BlockForSelection from '@/components/BlockForSelection.vue'
  import BlockSelection from '@/components/BlockSelection.vue'
  import BlockComplete from '@/components/BlockComplete.vue'
  export default {
    components: {
      Header,
      BlockExpectation,
      BlockForSelection,
      BlockSelection,
      BlockComplete
    }
  }
  </script>
  
  <style scoped>
  .section{
    margin: auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
}
  </style>
  