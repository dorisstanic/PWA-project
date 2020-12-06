<template>
  <div class="whole">
    <b-navbar id="nav" class="nav">
      <template slot="start">
        <router-link to="/"
          ><b-navbar-item class="item">My books</b-navbar-item></router-link
        >
        <router-link to="/buy"
          ><b-navbar-item class="item">Want to buy</b-navbar-item></router-link
        >
        <div></div>
      </template>
      <template slot="end">
        <router-link to="/about"
          ><b-navbar-item class="item">About</b-navbar-item></router-link
        >
        <div></div>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["book"],
};
</script>

<style scoped>
.nav {
  margin: 20px 0px;
}

.whole {
  all: unset;
  display: block;
  margin: 0 auto;
  width: 75%;
}

.item {
  font-size: 17px;
}
.item:hover {
  color: black;
  background-color: #eedcdc;
  border-radius: 2.5px;
  font-size: 110%;
}
</style>