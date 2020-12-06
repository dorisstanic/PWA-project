<template>
  <div>
    <b-navbar>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link class="btn btn-outline-primary" to="/signup"
              ><b-button type="is-dark">Sign up</b-button></router-link
            >

            <router-link class="nav-link pr-3" to="/login"
              ><b-button type="is-light">Log in</b-button></router-link
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="logo">
      <img alt="Book" src="../assets/book2.png" />
      <h5>Libri<span>X</span></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.logo {
  height: 500px;
  background-image: url("../assets/header2.png");
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
}

h5 {
  all: unset;
  font-size: 70px;
  display: block;
  padding: 10px;
  text-align: center;
}

@supports (-webkit-text-stroke: 1px #ba7575) {
  span {
    -webkit-text-stroke: 3px #ba7575;
    -webkit-text-fill-color: white;
  }
}

img {
  all: unset;
  width: 100px;
  display: block;
  margin: 0 auto;
}
</style>