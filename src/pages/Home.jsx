import { useEffect, useState } from 'react';
import '../App.css';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://gerenciadb.vercel.app/api/usuarios', { // Verifique se esta URL está correta
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setUsers(data))
        .catch(error => {
            console.error('Error fetching users:', error);
            setError(error);
        });
    }, []);

    return (
      <div className="App">
          {error ? (
              <div>Error: {error.message}</div>
          ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.Id}>
                      <td>{user.Id}</td>
                      <td>{user.nome}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          )}
      </div>
    ); 
}