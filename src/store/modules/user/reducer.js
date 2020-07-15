const { fromJS } = require("immutable");
const defaultState = fromJS({});

const reducer = (state = defaultState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default reducer;
