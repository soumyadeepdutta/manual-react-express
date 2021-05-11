import React, { useEffect, useState } from "react";
import axios from "axios";

export function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        function getUsers(){
            axios.get("/api/users").then(res => setUsers(res.data)).catch(ex => console.log(ex))
        }
        getUsers();
    }, [])
    
    return <div>
        <h3>{users.username}</h3>
        <span>{users.email}</span>
    </div>
}