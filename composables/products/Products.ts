export default function () {
  const products: any = ref([]);
  // console.log("in composable: ", products.value);
  // const { data: discounts, status } = await useAsyncData('cart-discount', async () => {
  //   const [products] = await Promise.all([
  //     $fetch('/cart/coupons'),
  //     // $fetch('/cart/offers')
  //   ])

  //   return { coupons, offers }
  // })
  return useState("products", () => products);
}
