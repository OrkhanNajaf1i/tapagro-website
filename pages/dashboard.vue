<!-- <template></template>
<script setup lang="ts">
const { $authentication }: any = useNuxtApp();
async function login() {
  const redirectUri = useRuntimeConfig().public.socialLoginGoogleRedirectUri;
  await $authentication.auth
    .getAuth({
      query: {
        redirectUri: redirectUri,
      },
    })
    .then((result: any) => {
      // if (process) {
      window.location.assign(result.data.value.uri);
      // }
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
login();
</script> -->
<template></template>
