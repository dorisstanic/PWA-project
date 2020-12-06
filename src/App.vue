<template>
  <div id="app">
    <Header />
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  font-family: "freight-sans-pro", sans-serif;
  font-style: normal;
  line-height: 1.4;
}
</style>
