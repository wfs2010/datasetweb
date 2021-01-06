<template>
      <el-menu
          class="el-menu-demo"
          mode="horizontal"
          router="true"
          background-color="#000000"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="" ><a><img src="../../assets/img/logo.png" style="width: 50px"></a></el-menu-item>
        <el-menu-item index="/home" >GAWSDATA</el-menu-item>
        <el-menu-item index="/introduce">Introduce</el-menu-item>
        <el-menu-item index="/dataset">Dataset</el-menu-item>
        <el-menu-item index="/help">Help</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
</template>

<script>
export default {
  name: "Navbar",
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.el-menu--horizontal>.el-menu-item{
  border-bottom: #1f2d3d;
  font-size: 19px;
}

</style>
