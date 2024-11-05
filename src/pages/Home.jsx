import { useEffect, useState } from 'react';
import '../App.css';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://gerenciadb.vercel.app/api/users/api/usuarios')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
      <div className="App">
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
      </div>
    ); 
}