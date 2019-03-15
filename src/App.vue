<template>
  <div id="app" class="layout">
      <layout>
          <basic></basic>
          <router-view/>
      </layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    .layout{
        border: 0 solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
</style>
