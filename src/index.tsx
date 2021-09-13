import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/ProductForm/form/form';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import App from './App';

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});

// const INSERT_DATA = gql`
//     mutation InsertCoffee($data: CoffeeModel) {
//         insertCoffee(coffee: [$data]) {
//           returning {
//                 coffeeName
//                 coffeePrice
//                 description
//                 coffeeIMG
//           }
//         }
//     }
// `;

// const UPDATE_DATA = gql`
// mutation UpdateData($data: CoffeModel!) {
//   updateCoffe(coffee: $data) {
//     coffeeName
//     coffeePrice
//     description
//     coffeeIMG
//   }
// }`;

// const GET_DATA = gql`
//   query GetCoffee {
//     coffees {
//       coffeeName
//       coffeePrice
//       description
//       coffeeIMG
//     }
//   }
// `;

// const DELETE_DATA = gql`
//   mutation deleteCoffee($data: CoffeModel) {
//       deleteCoffee(coffee: $data) {
//         id
//       }
//   }
// `;

const Routing = () => {
  return (
    <Router>
    <Switch>
      <Route path="/form" component={Form}></Route>
      <Route path="/" component={App}></Route>
      <Redirect to='/' />
    </Switch>
  </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
      <Routing />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
