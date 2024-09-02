"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page({ params }) {

    const { id } = params

    const [users, setusers] = useState([])

    const getUser = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
        setusers(data);
    }

    useEffect(() => {
        getUser()

    }, [])

    return <div>{JSON.stringify(users)}</div>
};

export default page