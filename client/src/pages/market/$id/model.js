import { pathToRegexp } from "path-to-regexp";
import api from "../../../services";
import modelExtend from "dva-model-extend";
import { pageModel } from "../../../utils/models";
const { queryMarket } = api;

export default {
  namespace: "marketDetail",

  state: {
    data: {},
  },

  subscriptions: {
    // setupHistory({ dispatch, history }) {
    //   history.listen(({ location }) => {
    //     const match = pathToRegexp("/market/:id").exec(location.pathname);
    //     if (match) {
    //       dispatch({ type: "query", payload: { id: match[1] } });
    //     }
    //   });
    // },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(queryMarket, payload);
      const { success, message, statusCode, ...other } = data;
      if (success && statusCode === 200) {
        yield put({
          type: "querySuccess",
          payload: {
            data: other,
          },
        });
      } else {
        throw data;
      }
    },
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { data } = payload;
      return {
        ...state,
        data: data,
      };
    },
  },
};
