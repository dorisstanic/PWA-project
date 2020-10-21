<template>
  <form class="form">
    <b-input
      class="text"
      v-model="name"
      placeholder="Upišite ime TO-DO itema"
    ></b-input>
    <b-button>Novi TO-DO</b-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #efefef;
}

.text {
  flex: 1;
  margin-top: 20px;
}

button {
  margin-top: auto;
}
</style>
