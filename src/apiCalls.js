

const fetchUser = (username) => {
    return fetch(`http://localhost:3001/api/v1/users/${username}`)
    .then(response => response.json())
}

export default { fetchUser }