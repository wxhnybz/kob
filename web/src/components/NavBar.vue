<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <router-link class = "navbar-brand" :to="{name: 'home'}">King of Bots</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :class = "currentRouteName=='Pk_Index'?'nav-link active':'nav-link' " :to="{name: 'Pk_Index'}">对战PK</router-link>
        </li>
        <li class="nav-item">
            <router-link :class="currentRouteName=='Record_Index' ? 'nav-link active':'nav-link'" :to="{name: 'Record_Index'}">对局记录</router-link>
        </li>
        <li class="nav-item">
            <router-link :class= "currentRouteName=='Ranklist_Index' ? 'nav-link active' : 'nav-link'" :to="{name: 'Ranklist_Index'}">排行榜</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            wangzhiyi
          </a>
          <ul class="dropdown-menu">
            <li>
                <router-link class="dropdown-item" :to="{name: 'User_Bot_Index'}">我的Bot</router-link></li> 
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">退出</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
export default{
    setup() {
        const route = useRoute();
        let currentRouteName = computed(() => route.name);
        return {
            currentRouteName
        }
    }
}
</script>

<style scoped>

</style>