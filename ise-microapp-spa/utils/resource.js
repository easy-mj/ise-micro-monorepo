export const fetchResource = (url) => {
  // 获取请求的方式：ajax、fetch、axios，这里采用 fetch 方式
  if (url) {
    return fetch(url).then(async (res) => {
      return await res.text()
    })
  }
}
