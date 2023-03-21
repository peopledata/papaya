import axios from "axios";
import { cloneDeep } from "lodash";

import { parse, compile } from "path-to-regexp";

const { CancelToken } = axios;
window.cancelRequest = new Map();

// request 拦截器
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response 拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default function request(options) {
  let { data, url } = options;
  const cloneData = cloneDeep(data);

  try {
    let domain = "";
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/);
    if (urlMatch) {
      [domain] = urlMatch;
      url = url.slice(domain.length);
    }

    const match = parse(url);
    url = compile(url)(data);

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }

    // 如果是query参数，则添加进来
    if (data && data.query) {
      url += `?${data.query}`;
    }

    url = domain + url;
  } catch (e) {
    console.log(e);
    // message.error(e.message);
  }

  options.url = url;
  options.cancelToken = new CancelToken((cancel) => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    });
  });

  return axios(options)
    .then((response) => {
      // console.log("=====", response);
      const { statusText, status, data } = response;
      let result = {};
      if (typeof data === "object") {
        result = data;
        if (Array.isArray(data)) {
          result.list = data;
        }
      } else {
        result.data = data;
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
