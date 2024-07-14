export default () => ({
  async request(url = '', option = { method: 'GET' }) {
    return await fetch(`http://localhost:3003/news/${url}`, option).then((res) => res.json());
  },
  async get(url) {
    return await this.request(url);
  },
  async delete(url) {
    return await this.request(url, { method: 'DELETE' });
  },
  async add(data) {
    return await this.request('', { method: 'POST', body: JSON.stringify(data) });
  },
});
