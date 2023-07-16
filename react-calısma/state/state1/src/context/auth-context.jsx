import React from "react";

const authContext = React.createContext({ satus: null, login: () => {} });
export default authContext;
