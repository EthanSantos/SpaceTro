import { useState } from 'react';
import Login from './pages/Login'

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Login user={user} setUser={setUser} />
    </div>
  )
}

export default App