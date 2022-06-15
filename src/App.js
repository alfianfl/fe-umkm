import './App.css';
import { AuthProvider } from './context/authContext';
import Router from './router';
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
