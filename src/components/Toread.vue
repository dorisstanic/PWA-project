<template>
  <form>
    <Navbar />
    <div v-bind:key="read.id" v-for="read in toread">
      <ToReadList v-bind:read="read" />
    </div>

    <b-button class="idk" type="is-dark"><span>+ </span> Add a book</b-button>
  </form>
</template>
    
<script>
import ToReadList from "./ToReadList.vue";
import Navbar from "./Navbar";

export default {
  name: "Toread",
  components: {
    ToReadList,
    Navbar,
  },
  props: ["toread"],
};
</script>

<style scoped>
span {
  font-size: 120%;
  font-weight: 700;
}
.idk {
  float: right;
  margin: 20px 0px;
}
</style>