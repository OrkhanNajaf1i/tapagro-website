import { $fetch, type FetchOptions } from "ofetch";

// locals
import AuthModule from "~/repository/modules/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: `${config.public.apiBaseUrl}`,
  };

  const apiFecther = $fetch.create(fetchOptions);
  const modules: IApiInstance = {
    auth: new AuthModule(apiFecther),
  };

  return {
    provide: {
      authentication: modules as IApiInstance,
    },
  };
});
