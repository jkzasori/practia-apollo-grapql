import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Screens from "./libs/route/Screens";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://jr-master-test.dev.elenas.la/gql/",
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Screens />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
