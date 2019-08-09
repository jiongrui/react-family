import { increment, decrement, reset } from "./actions/counter";
import store from "./store";

//打印初始状态
console.log(store.getState());

let unsubscibe = store.subscribe(() => {
  console.log("store.getState()", store.getState());
});

//每次state 更新时，打印日志
//注意subscribe() 返回一个函数用来注销监听器
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

//停止监听 state 更新
unsubscibe();
