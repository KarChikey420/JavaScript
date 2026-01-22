import React, { useEffect } from "react";

const App = () => {
    
    const [users, setUsers] = React.useState([]);

    const getUsers = () => {
        fetch("/api/users", {
            headers: {
                'Authorization': 'Bearer your-secret-token'
            }
        })
        .then(res => res.json())
        .then(json => setUsers(json))
        .catch(err => console.error('Error:', err));
    }

    useEffect(() => {
        getUsers();
    }, [])
  

    return (
        <div>
            {users.map((data) => {
                return (
                    <div key={data.id} style={{border:'1px solid gray',margin:'10px',padding:'10px'}}>
                        <h1>name: {data.name}</h1>
                        <h1>email: {data.email}</h1>
                        <h1>username: {data.username}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default App;