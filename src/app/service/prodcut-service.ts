import { Injectable } from '@angular/core';
declare const axios: any;
declare const $: any;

@Injectable({
  providedIn: 'root',
})
export class ProdcutService {
  products_list: any[] = [];
  private apiUrl = 'https://minimartapi.phalla.lol/api/products';

  constructor() {}

  async getProducts(): Promise<any[]> {
    // Show loading before starting request
    $.LoadingOverlay('show');

    try {
      const response = await axios.get(this.apiUrl);

      this.products_list = response.data;
      return this.products_list;
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      // Hide loading after request finishes (success or error)
      $.LoadingOverlay('hide');
    }
  }
}
