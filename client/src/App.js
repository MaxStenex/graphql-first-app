import "./styles/App.css";
import { ApolloClient, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello world</h1>
    </ApolloProvider>
  );
};

export default App;
