// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const UPDATE_USER = "session/EDIT_USER";
const DELETE_USER = "session/DELETE_USER";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
});

const setUpdatedUser = (profile) => {
  return{
      type: UPDATE_USER,
      profile
  }
}

const setDeletedUser = (id) => {
  return{
    type: DELETE_USER,
    id
  }
}

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    
    dispatch(setUser(data))
  }
  
  export const login = (email, password) => async (dispatch)  => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setUser(data))
    return {};
  }
  
  export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    const data = await response.json();
    dispatch(removeUser());
    return data
  };
  
  
  export const signUp = (firstName, lastName, email, password, imgUrl) => async (dispatch)  => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        img_url: imgUrl
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setUser(data))
    return {};
  }

  export const updateUser = (profile) => async (dispatch) => {
    const { id, firstName, lastName, imgUrl, bio } = profile

    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id,
            first_name: firstName,
            last_name: lastName,
            img_url: imgUrl,
            bio
        })
    })

    if (response.ok) {
        const updatedUser = await response.json()
        dispatch(setUpdatedUser(updatedUser));
        return updatedUser;
    }
}

export const deleteUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
      dispatch(setDeletedUser(id))
      return id
  } 
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        case UPDATE_USER:
            return {user: action.profile}
        case DELETE_USER:
            return { user: null } 
        default:
            return state;
    }
}
