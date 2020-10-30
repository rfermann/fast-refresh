import { action, createStore } from "easy-peasy";

export const store = createStore({
  counter: {
    counter: 0,
    increment: action((state) => {
      state.counter += 2;
    }),
  },
});
