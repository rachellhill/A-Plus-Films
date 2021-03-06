

const fetchUsers = () => {
    return fetch(`http://localhost:3001/api/v1/users`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
    })
}

const fetchMovies = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
    })
}

const fetchMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
    })
}

const fetchMovieTrailers = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
    })
}

const postUserRating = (id, rating, user) => {
    return fetch(`http://localhost:3001/api/v1/users/${user}`, {
      method: 'POST',
      body: JSON.stringify({
        "id": id,
        "userRating" : rating
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      } 
    })
}



export { fetchUsers, fetchMovies, fetchMovie, fetchMovieTrailers, postUserRating }