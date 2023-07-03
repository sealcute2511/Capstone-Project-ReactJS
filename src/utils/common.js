const Common = {
  hostApi: 'https://shop.cyberlearn.vn/api/',
  getApiUrl(uri) {
    uri = uri.replace(/^\/?|\/?$/g, "")
    return this.hostApi + uri;
  },
  parseJson(data, _default = null) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return _default;
    }
  },
  async callApiAsync(url, options = {}) {
    const response = await fetch(url, options);
    return await response.json();
  }
}

export default Common;
