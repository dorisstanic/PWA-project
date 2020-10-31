<template>
  <div id="app">
    <Header />
    <Toread class="toread" v-bind:toread="toread" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Toread from "./components/Toread";

export default {
  name: "App",
  components: {
    Toread,
    Header,
  },
  data() {
    return {
      toread: [
        { id: 1, title: "Book One", completed: false },
        { id: 2, title: "Book Two", completed: true },
        { id: 3, title: "Book Three", completed: false },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "freight-sans-pro", sans-serif;
  font-style: normal;
  line-height: 1.4;
}

.toread {
  max-width: 70%;
  margin: 0 auto;
}
</style>
