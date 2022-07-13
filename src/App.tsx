import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </ApolloProvider>
  );
}

export default App;
