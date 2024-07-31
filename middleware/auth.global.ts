export default defineNuxtRouteMiddleware((to, from) => {
  //   const authUserStore: any = useAuthUserStore();
  //   const { $authentication }: any = useNuxtApp();
  //   authUserStore.loadSetToken();
  //   const router = useRouter();
  //   if (
  //     useCookie("accessToken").value == undefined &&
  //     useCookie("refreshToken").value != undefined
  //   ) {
  //     $authentication.auth
  //       .setRefreshToken({ refreshToken: authUserStore.getRefreshToken })
  //       .then((result: any) => {
  //         useCookie("accessToken").value = result.data.value.accessToken;
  //         useCookie("refreshToken").value = result.data.value.refreshToken;
  //         authUserStore.loadSetToken();
  //       })
  //       .catch((err: Error) => {
  //         useCookie("accessToken").value = undefined;
  //         useCookie("refreshToken").value = undefined;
  //         authUserStore.loadSetToken();
  //         let callbackUri: any = useCookie("callbackUri").value;
  //         let event = callbackUri?.event;
  //         let query = callbackUri?.query;
  //         router.push({ path: `/events/${event}`, query: query });
  //         // return navigateTo("/dashboard");
  //       })
  //       .finally(() => {
  //         let callbackUri: any = useCookie("callbackUri").value;
  //         let event = callbackUri?.event;
  //         let query = callbackUri?.query;
  //         router.push({ path: `/events/${event}`, query: query });
  //       });
  //   }
});
