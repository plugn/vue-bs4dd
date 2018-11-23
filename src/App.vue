<template>
  <div id="app"><BsMenu /></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import BsMenu from "./components/BsMenu"

export default {
  name: "App",
  components: {
    BsMenu
  }
};
</script>

<style>
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 6px;
  top: 0.8em;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
</style>
