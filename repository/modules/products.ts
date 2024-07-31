import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";
import FetchWrapper from "../fetch-wrapper";
import urls from "@/static/urls.json";
interface Product {
  id: number;
  url: string;
}

class ProductsModule extends FetchWrapper<Product[]> {
  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */

  //   async getProductDetail(asyncDataOptions?: any) {
  //     return useAsyncData(() => {
  //       const fetchOptions: FetchOptions<"json"> = {
  //         headers: {
  //           "Accept-Language": "az",
  //           Authorization: useCookie("accessToken").value
  //             ? `Bearer ${useCookie("accessToken").value}`
  //             : "",
  //           Accept: "application/json",
  //         },
  //         query: asyncDataOptions.query,
  //       };
  //       return this.call(
  //         "GET",
  //         `${urls.events_slug}/${asyncDataOptions.slug}`,
  //         undefined, // body
  //         fetchOptions
  //       );
  //     }, asyncDataOptions);
  //   }

  async getProducts(asyncDataOptions?: AsyncDataOptions<Product[]>) {
    console.log("asyncDataOptions=> ", asyncDataOptions, urls.products);

    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "AZE",
          Authorization: useCookie("accessToken")
            ? `Bearer ${useCookie("accessToken")}`
            : "",
          Accept: "*/*",
        },
        query: asyncDataOptions.query,
      };
      return this.call(
        "GET",
        `${urls.products.replace("${id}", asyncDataOptions.query?.id)}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default ProductsModule;
