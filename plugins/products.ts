import { $fetch, type FetchOptions } from "ofetch";

// locals
import ProductsModule from "~/repository/modules/products";

interface IApiInstance {
  products: ProductsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: `${config.public.apiBaseUrl}`,
  };

  const apiFecther = $fetch.create(fetchOptions);
  const modules: IApiInstance = {
    products: new ProductsModule(apiFecther),
  };

  return {
    provide: {
      products: modules as IApiInstance,
    },
  };
});
