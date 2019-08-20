import axios from "axios";
import config from "../../../config/index";

export default store => next => action => {
  const { dispatch, getState } = store;
  /* 如果dispatch是一个函数，此处不处理，直接进入下一级 */
  if (typeof action === "function") {
    action(dispatch, getState);
    return;
  }
  /* 解析action */
  const { promise, types, afterSuccess, ...rest } = action;

  /*  没有promise，证明不想发送ajax请求，直接进入下一步 */
  if (!promise) {
    return next(action);
  }

  /***解析types */
  const [REQUEST, SUCCESS, FAILURE] = types;

  /**开始请求的时候发一个action*/
  next({ ...rest, type: REQUEST });

  /**定义请求成功的方法 */
  const onFulfilled = result => {
    next({
      ...rest,
      result,
      type: SUCCESS
    });
    if (afterSuccess) {
      afterSuccess(dispatch, getState, result);
    }
  };

  /**定义失败请求方法 */
  const onRejected = error => {
    next({
      ...rest,
      error,
      type: FAILURE
    });
  };

  const instance = axios.create({
    baseURL: config.host,
    timeout: 5000
  });

  return promise(axios)
    .then(onFulfilled, onRejected)
    .catch(error => {
      console.error("MIDDLEWARE ERROR:", error);
      onRejected(error);
    });
};
