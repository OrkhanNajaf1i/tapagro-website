import type { $Fetch, FetchOptions } from "ofetch";

class FetchWrapper<T> {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param fetchOptions fetch options
   * @returns
   */
  protected async call(
    method: string,
    url: string,
    data?: object,
    fetchOptions?: FetchOptions<"json">
  ): Promise<T> {
    return this.$fetch<T>(url, {
      method,
      body: data,
      ...fetchOptions,
    });
  }
}

export default FetchWrapper;
