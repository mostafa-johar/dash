<template>
  <section class="wrapper">

    <SideBar />

    <section class="contentPage">
      <Header />
      <router-view />
    </section>

  </section>

</template>
<script setup>
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';



</script>
<style lang="scss">

#app{
background-color: #f1f5f9;
min-height: 100vh;
.wrapper{
  display: flex;
  .contentPage{
    flex: 1;
  }

}
}

</style>