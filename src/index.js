import React from "react";
import ReactDOM from "react-dom";

import appRouter from "./App";
import {RouterProvider} from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";

//ReactDOM.render(<BrowserRouter>
 //   <App />
 //  </BrowserRouter>,document.getElementById("root"));


ReactDOM.render(<RouterProvider router={appRouter} />,document.getElementById("root"));



