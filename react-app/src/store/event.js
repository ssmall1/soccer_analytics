// const GET_EVENTS = "event/GET_EVENTS";

// const getEvents = () => ({
//     type: GET_EVENTS,
// });

// const initialState = { events: null };

// export const events = () => async (dispatch) => {
//     const response = await fetch('/api/events',{
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const data = await response.json();
//     if (data.errors) {
//         return;
//     }
    
//     dispatch(setEvents(data))
// }

// export default function reducer(state=initialState, action) {
//     switch (action.type) {
//         case GET_EVENTS:
//             return {events: action.payload}
//         default:
//             return state;
//     }
// }