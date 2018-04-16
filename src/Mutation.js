import React from "react";

export default ({ children }) => (
  <div>
    {children(alert, {
      loading: false,
      error: null
    })}
  </div>
);
