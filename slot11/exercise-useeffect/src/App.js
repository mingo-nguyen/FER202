import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import UserPosts from './components/UserPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput';
const App = () => {
  const [userId, setUserId] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Fetch Data</h1>
        <UserPosts userId={userId}/>
        <button onClick={() => setUserId(userId + 1)}>Next User</button>
      </header>
      <ValidatedInput />

    </div>
  );}

  export default App;
  
