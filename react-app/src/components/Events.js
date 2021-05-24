import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const LoginForm = () => {
//   const dispatch = useDispatch();
  const events = useSelector(state => state.session.events);

  return(
    <div>
        {events}
    </div>
  )
}
