import React, { useState } from "react"
import DropDown from "../common/DropDown"
import axios from "axios"

const getUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.setUsers(res.data)
}

const LeftColumn = () => {
    const [users, setUsers] = useState(0);
    return (
        <DropDown values={users} />
    )
}

export default LeftColumn