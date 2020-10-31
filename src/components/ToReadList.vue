<template>
  <div class="toread-item" v-bind:class="{ 'is-complete': read.completed }">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{ read.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ToReadList",
  props: ["read"],
  methods: {
    markComplete() {
      this.read.completed = !this.read.completed;
    },
  },
};
</script>

<style scoped>
.toread-item {
  background: #f4f4f4;
  padding: 40px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}
</style>