 /*
Forma mas larga
fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        
    });
*/


function getInfo() {
    let charId = document.getElementById("charCapture").value
    //let url = 'https://rickandmortyapi.com/api/character/' + charId

//https://jsonplaceholder.typicode.com/comments 

    let url = `https://jsonplaceholder.typicode.com/comments/${charId}`

    console.log(charId)
    console.log(url)
    // Forma experto
    fetch(url)
        // Le da formato a la informacion de la API
        .then(res => res.json())
        // Procesar los datos
        .then( data => {

            console.log(data)
            
            let html = ` <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> 
                                            <b>Identificador:<b>
                                            ${data.postId}
                                        </h5>
                                        <p class="card-text">
                                            <h2><b>Código:<b></h2>
                                            ${data.id}
                                        </p>

                                        <p class="card-text">
                                            <b>email:<b>
                                            ${data.email}
                                        </p>

                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                <b>Datos: (Texto en Lorem Ipsum)<b>
                                                ${data.body} 
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`

            document.getElementById("charContent").innerHTML = html

        })

}

// 
/* ¿Qué hace document.getElementById("charContent").innerHTML = html?
    La línea de código document.getElementById("charContent").innerHTML = html; 
    en JavaScript hace lo siguiente:

    document.getElementById("charContent"): Este método obtiene el primer 
    elemento en el documento HTML que tiene el ID “charContent”. Los ID son 
    únicos, por lo que solo puede haber un elemento con este ID en todo el 
    documento.
    .innerHTML = html: Esta parte del código establece el contenido HTML del 
    elemento seleccionado. En este caso, está estableciendo el contenido HTML 
    del elemento con el ID “charContent” al valor de la variable html.
    Por lo tanto, este código reemplaza el contenido actual del elemento con 
    ID “charContent” con el contenido de la variable html. Si html contiene 
    etiquetas HTML, estas se renderizarán como HTML en la página.

    Es importante tener en cuenta que el uso de innerHTML puede ser un riesgo 
    de seguridad si el contenido de la variable html proviene de una fuente 
    no confiable, ya que podría permitir la inyección de scripts. Por lo tanto, 
    siempre debes asegurarte de que el contenido que estás insertando sea seguro.

*/


