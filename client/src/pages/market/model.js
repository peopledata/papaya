import modelExtend from "dva-model-extend";
import { pathToRegexp } from "path-to-regexp";
import { pageModel } from "../../utils/models";
import api from "../../services";

const { queryMarketList } = api;

export default modelExtend(pageModel, {
  namespace: "market",

  state: {},

  // 订阅：一开始就会被执行
  subscriptions: {
    // setupHistory({ dispatch, history }) {
    //   // 监听 history 变化，当进入 `/market` 时触发 `queryList` action
    //   history.listen(({ location }) => {
    //     if (pathToRegexp("/market").exec(location.pathname)) {
    //       const payload = location.query || { page: 1, pageSize: 10 };
    //       dispatch({
    //         type: "queryList",
    //         payload,
    //       });
    //     }
    //   });
    // },
  },

  effects: {
    *queryList({ payload = {} }, { call, put }) {
      // console.log("payload=", payload);
      const response = yield call(queryMarketList, payload);
      const { success, demands, total } = response;
      yield put({
        type: "querySuccess",
        payload: {
          list: demands,
          current: Number(payload.page) || 1,
          pageSize: Number(payload.pageSize) || 10,
          total: total,
        },
      });
    },
  },

  reducers: {},
});
