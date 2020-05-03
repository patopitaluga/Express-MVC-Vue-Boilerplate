/**
 *
 */
<template>
  <div class="a">
    {{ vdExample }}
  </div>
</template>

<script>
export default {
  data: function() { // eslint-disable-line require-jsdoc
    return {
      vdExample: 'Hello',
    };
  },
};
</script>

<style lang="scss">
.a {
  border: 1px #666 solid;
}
</style>
