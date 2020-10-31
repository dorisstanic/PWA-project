<template>
  <div>
    <form>
      <input class="text" type="text" placeholder="Search in library" />
    </form>

    <b-navbar class="nav">
      <template slot="start">
        <b-navbar-item class="item" href="#">My books</b-navbar-item>
        <b-navbar-item class="item" href="#">Want to buy</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-navbar-item class="item" href="#">Profile</b-navbar-item>
          <b-navbar-item class="item" href="#">Settings</b-navbar-item>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav {
  margin: 20px 0px;
}

input {
  all: unset;
  padding-top: 100px;
  border: 1px solid #b9bbb6;
  width: 100%;
}

.text {
  padding: 15px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 20px;
}
.item:hover {
  color: black;
}
</style>