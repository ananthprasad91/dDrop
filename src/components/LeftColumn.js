import React, { useState, useEffect } from "react"
import DropDown from "../common/DropDown"
import axios from "axios"

const LeftColumn = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data);
        }
        fetchData();
    }, []);

    const handleDropDownSelect = (currentUser) => {
        setCurrentUser(currentUser)
    }

    return (
        <DropDown data={users} value={currentUser} onChange={handleDropDownSelect} />
    )
}

export default LeftColumn