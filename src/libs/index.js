export function saveData(input, date) {
    const body = JSON.stringify({ task: input, date: date })
    return fetch('http://127.0.0.1:8000/upload/', {
        method: 'post',
        // headers: {
        //     'Accept': 'application/json, text/plain, */*',
        //     'Content-Type': 'application/json'
        // },
        body: body
    })
        .then(response =>
            response.json()
        ).then(data => data)

}


export function getTodo() {
    const response = fetch('http://127.0.0.1:8000/upload/', {
        method: 'get'
    })
        .then(response =>
            response.json()
        ).then(data => data)
    return response
}

