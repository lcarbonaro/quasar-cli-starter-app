<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar CLI Starter App
        </q-toolbar-title>

        <div v-if="authStore.isLoggedIn"><button @click="doLogOut">Log Out</button></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"      
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          App Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout'
});

import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

function doLogOut() {
  //console.log('will log out');
  authStore.doLogOut();
  router.push( '/' );
}


const linksList = [
  {
    title: 'Home',
    caption: 'home page',
    icon: 'school',
    link: '/'
  },
  {
    title: 'About',
    caption: 'about page',
    icon: 'school',
    link: '/about'
  },
  {
    title: 'Secret',
    caption: 'secret page',
    icon: 'school',
    link: '/secret'
  },
  {
    title: 'Another Secret',
    caption: 'another secret page',
    icon: 'school',
    link: '/secret2'
  },
  
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
