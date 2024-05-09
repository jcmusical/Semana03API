// Version anterior para consumo de API XMLHttpRequest
// new para instanciar un Objeto de la clase XMLHttpRequest
// Retorna los datos como respuesta
//let results = data['results'] Datos por llave results

var request = new XMLHttpRequest()
request.open('GET', 'https://rickandmortyapi.com/api/character', true)
request.onload = function () {

    // Toda la informacion
    let data = JSON.parse(this.response)
    // La informacion del resultado de los personajes
    let results = data.results
    // La informacion de la llave info
    let info = data.info
    // Tamaño de los personajes
    let length_result = results.length
    
    //console.log(results)
    for (let i = 0; i < length_result; i++) {
        //console.log(results[i].name)

        // Codigo mas largo para concatenar usando +
        // document.write('<b>' + results[i].name + '</b> <br>')

        // Codigo experto para concatenar
        document.write(`<b> ${results[i].name} </b> <br>`)


    }
    
}

request.send()