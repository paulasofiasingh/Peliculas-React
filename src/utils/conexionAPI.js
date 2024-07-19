const API = "https://api.themoviedb.org/3"

export const getUrl = (path) =>{
    return fetch (API+path,{
        headers : {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWY0ZTZjMGNmY2IxOTVmN2E0ZGRiYjgyMjIxN2U2MCIsInN1YiI6IjY2NjdhMDAyOTAyYjZlMTM3MTZjN2U5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E3q1NiknF4By49Qc5JX-rOTyzy6QOKoiuVXjQN87Ss4", 
            "Content-type": "application/json;charset=utf-8"
        }
    }).then((results)=> results.json())
}

/*     export const getUrl = async (path) =>{
        return await axios (API+path,{
            headers : {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWY0ZTZjMGNmY2IxOTVmN2E0ZGRiYjgyMjIxN2U2MCIsInN1YiI6IjY2NjdhMDAyOTAyYjZlMTM3MTZjN2U5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E3q1NiknF4By49Qc5JX-rOTyzy6QOKoiuVXjQN87Ss4", "Content-type": "application/json;charset=utf-8"
            }
        })
    } */

/* getUrl("/discover/movie").then((data)=>{ setPeliculas(data)   
})
getUrl("/discover/tv") */