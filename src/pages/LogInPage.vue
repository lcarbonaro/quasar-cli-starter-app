<template>
  <q-page class="flex flex-center">
    <p>Log-in page
      <br><br>
      <button @click="doLogIn">OK</button>
    </p>
    
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'LogInPage'
});
import { useRouter } from 'vue-router';
const router = useRouter();

import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();

function doLogIn() {
  authStore.doLogIn();
  //console.log( router.currentRoute.value.query.next );
  router.push( router.currentRoute.value.query.next );  
}
</script>
