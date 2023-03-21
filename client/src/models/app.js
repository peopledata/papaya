/* global window */
import { history } from "umi";
import { CANCEL_REQUEST_MESSAGE } from "../utils/constant";

export default {
  namespace: "app",
  state: {
    locationPathname: "",
    locationQuery: {},
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: "query" });
    },
    // setupHistory({ dispatch, history }) {
    //   history.listen((location) => {
    //     console.log("location=", location);
    //     dispatch({
    //       type: "updateState",
    //       payload: {
    //         locationPathname: location.pathname,
    //         locationQuery: location.query,
    //       },
    //     });
    //   });
    // },
  },
  effects: {
    *query({ payload }, { call, put, select }) {
      const { locationPathname } = yield select((_) => _.app);
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
