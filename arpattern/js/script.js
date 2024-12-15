    // Función para manejar el envío del formulario
    function submitForm() {
        alert("entro");
    
        // Obtener los valores del formulario
        var name = document.getElementById("my-name").value; alert(name);
        var pokemon = document.getElementById("pokemon-select").value; alert(pokemon);

        // Verificar si el campo del nombre está vacío
        if (name === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        // Mostrar los resultados
        var result = document.getElementById("result");
        result.innerHTML = `¡Hola, ${name}! Has seleccionado a ${pokemon} como tu Pokémon favorito.`;
    }