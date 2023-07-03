import { getApiUrl } from './common';

export const ProductUtil = {
  async getById(id) {
    const ApiUrl = getApiUrl('Product/getbyid');
    const product = await $.get(ApiUrl, { id });
    if (typeof product.statusCode == 'undefined') return null;
    if (product.statusCode !== 200) return null;
    return product.content;
  }
}
