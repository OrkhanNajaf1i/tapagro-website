<template>
  <div class="bg-indigo-400 flex w-full">Tapagro</div>
</template>
<script setup lang="ts">
const { $products }: any = useNuxtApp();
// onMounted(() => {
$products.products
  .getProducts({
    query: {
      page: 0,
      size: 12,
      sortBy: "createdAt",
      sortDirection: "DESC",
    },
  })
  .then((result: any) => {
    console.log(result);
  })
  .catch((err: Error) => {
    console.error(err);
  });
// });
</script>
