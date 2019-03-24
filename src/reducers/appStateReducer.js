import ip from 'icepick'

const initialState = ip.freeze({
  token: null,
  service_advisor_id: null
});

export default function (state = initialState, action) {
  switch (action.type) {
    default: {
      state = ip.set(state, 'apiNetworkError', false);
      return state;
    }
  }
}
