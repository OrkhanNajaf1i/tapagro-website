import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";
import FetchWrapper from "../fetch-wrapper";
import urls from "@/static/urls.json";
interface Photo {
  id: number;
  url: string;
}

class PhotosModule extends FetchWrapper<Photo[]> {
  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getEventDetail(asyncDataOptions?: any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "az",
          Authorization: useCookie("accessToken").value
            ? `Bearer ${useCookie("accessToken").value}`
            : "",
          Accept: "application/json",
        },
        query: asyncDataOptions.query,
      };
      return this.call(
        "GET",
        `${urls.events_slug}/${asyncDataOptions.slug}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
  async getPhotos(asyncDataOptions?: any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Accept: "application/json",
        },
        query: asyncDataOptions.query,
      };
      return this.call(
        "GET",
        `${urls.products.replace("${id}", asyncDataOptions.id)}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
  async upload(asyncDataOptions?: AsyncDataOptions<any[]> | any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "az",
          Accept: "*/*",
          Authorization: `Bearer ${useCookie("accessToken").value}`,
          "Content-Disposition": asyncDataOptions.body,
        },
        body: asyncDataOptions.body,
      };
      return this.call("POST", `${urls.upload_file}`, undefined, fetchOptions);
    }, asyncDataOptions);
  }
  async download(asyncDataOptions?: AsyncDataOptions<any[]> | any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "az",
          Accept: "*/*",
          Authorization: `Bearer ${useCookie("accessToken").value}`,
          "Content-Disposition": asyncDataOptions.body,
        },
        query: asyncDataOptions.query,
      };
      return this.call("GET", `${urls.download_file}`, undefined, fetchOptions);
    }, asyncDataOptions);
  }
}

export default PhotosModule;
