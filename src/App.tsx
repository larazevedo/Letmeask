import { BrowserRouter, Route, Switch } from 'react-router-dom' 

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';


import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NewRoom} path="/rooms/new" />
        <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;