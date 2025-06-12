import { useEffect, useState } from 'react';
import '../App.css';
import '../styles/home.css';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const API_URL = process.env.REACT_APP_API_URL || 'https://gerenciadb.vercel.app/api/usuarios';

    useEffect(() => {
        setLoading(true);
        fetch(API_URL, {
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
        })
        .finally(() => setLoading(false));
    }, [API_URL]);

    const filteredUsers = users.filter(user =>
        user.nome.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
          {error ? (
              <div>Error: {error.message}</div>
          ) : (
              <div className="table-container">
                  <h2>USUÁRIOS NO BANCO</h2>
                  <input
                      type="text"
                      placeholder="Buscar por nome"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="search-input"
                  />
                  {loading ? (
                      <p>Carregando...</p>
                  ) : (
                      <>
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
                          {filteredUsers.map(user => (
                            <tr key={user.Id}>
                              <td>{user.Id}</td>
                              <td>{user.nome}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {filteredUsers.length === 0 && !loading && (
                          <p>Nenhum usuário encontrado.</p>
                      )}
                      </>
                  )}
              </div>
          )}
      </div>
    );
}
