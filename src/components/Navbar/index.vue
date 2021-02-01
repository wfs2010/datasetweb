<template>
  <nav class="navbar navbar-expand-lg  sticky-top mobileistop" :class="{'istop': oldScrollTop,}">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/home" ><img src="dataimg/logo11.png" width="210" height="30" alt="" loading="lazy"></router-link>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list-ul"></i>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <div class="d-flex  container-fluid flow">
            <div class="flow">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dispp1">
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn  mx-2" type="submit"><i class="bi bi-search"></i>
                    </button>
                  </form>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  aria-current="page" ><router-link to="/home" >Home</router-link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" ><router-link to="/dataset" >Dataset</router-link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" ><router-link to="/login" >Login</router-link></a>
                </li>
<!--                <li class="nav-item">-->
<!--                  <a class="nav-link" href="/login"><i class="bi bi-person-circle"></i> Login</a>-->
<!--                </li>-->
                <li class="nav-item dispp2">
                  <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn  mx-2" type="submit"><i class="bi bi-search"></i>
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </nav>

</template>


<script>
import { defineComponent, ref, watch} from 'vue'
import useScroll from "@/hooks/useScroll";
export default defineComponent({
  name: "Navbar",
  setup() {
    let oldScrollTop = ref(false)
    const isScroll =useScroll()
    watch(isScroll,()=>{
      oldScrollTop.value=!oldScrollTop.value
    })

    return {
      oldScrollTop,
    }
  }
})
</script>

<style scoped>
@media (max-width: 992px){
  .mobileistop{
    background: #EEE;
    border-bottom: 1px solid #EEE;
    z-index: 299;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .dispp1{
    display: none;
  }
}
@media (min-width: 992px){
  .istop{
    background: #EEE;
    border-bottom: 1px solid #EEE;
    z-index: 299;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .flow{
    flex-direction: row-reverse !important;
  }

  .dispp2{
    display: none;
  }
}

.nav-item .nav-link,a{
  text-align: left;
  color: #000000;
  text-decoration: none;
}
</style>
