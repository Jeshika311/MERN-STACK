import { useState , useMemo } from 'react'
import './App.css'
import { users } from './users';

function App() {
  const [query, setQuery] = useState('');

  const filteredUsers = useMemo(() => {
    console.log("Filtering Users...");
    return users.filter(user => 
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div style={{padding: '2rem'}}>
      <h1>User List App</h1>
      <input
        type='text'
        placeholder='Search User...'
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'          
        }}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
