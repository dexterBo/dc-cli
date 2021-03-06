
// 通过 axios 处理请求
const axios = require('axios')
const  { token } = require('./token');

axios.defaults.headers.common['Authorization'] = `token ${token}`;

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get('https://api.github.com/users/dexterBo/repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) {
  return axios.get(`https://api.github.com/repos/dexterBo/${repo}/tags`)
}

module.exports = {
  getRepoList,
  getTagList
}
