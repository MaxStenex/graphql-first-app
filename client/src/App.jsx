import "./styles/App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Books from "./components/Books.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  );
};

export default App;
