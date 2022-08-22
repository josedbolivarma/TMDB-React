const API = 'https://api.themoviedb.org/3';

export const get = ( path ) => {
  return fetch( API + path, {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDgxMGUzODg3OTY5YmU0YmQzYzEyYTIxNTA3NDJjNyIsInN1YiI6IjYyMTk3OTUwZDE0NDQzMDA2NTM4N2Y3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZMLay4igTzjHHbp7iLbpNhEbSMlUaWaBbD4j-zGZCIc',
        'Content-Type': 'Application/json;charset=utf-8'
    },
  }).then( ( result ) => result.json() );
}