const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

export const karlyFetch = async (options={}) => {

  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {}) }
  }

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json(); 
  }

  return response;
}

karlyFetch.get = (url, options) => {
  return karlyFetch({ url, ...options })
}

karlyFetch.post = (url, body, options) => {
  return karlyFetch({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

karlyFetch.put = (url, body, options) => {
  return karlyFetch({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

karlyFetch.delete = (url, options) => {
  return karlyFetch({
    method: 'DELETE',
    url,
    ...options
  })
}