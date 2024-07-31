import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";
import FetchWrapper from "../fetch-wrapper";
import urls from "@/static/urls.json";
interface Auth {
  id: number;
  url: string;
  // ... other properties as needed based on your API response
}

class AuthModule extends FetchWrapper<Auth[]> {
  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getAuth(asyncDataOptions?: AsyncDataOptions<Auth[]> | any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Accept: "application/json",
        },
        query: asyncDataOptions.query,
      };
      return this.call(
        "GET",
        `${urls.get_generated_uri}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
  async setToken(asyncDataOptions?: AsyncDataOptions<Auth[]> | any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Accept: "application/json",
        },
        query: asyncDataOptions.query,
      };
      return this.call(
        "POST",
        `${urls.exchange_code_for_token}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
  async setRefreshToken(asyncDataOptions?: AsyncDataOptions<Auth[]> | any) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${asyncDataOptions.refreshToken}`,
        },
      };
      return this.call(
        "POST",
        `${urls.refresh_token}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default AuthModule;
