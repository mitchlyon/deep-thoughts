import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, createHttpLink, HttpLink } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const createHttpLink = createHttpLink({
  uri: '/graphql',

});

const client = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache(),
}),

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
