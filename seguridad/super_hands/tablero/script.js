alert("Entro a eliminar");
  var esferaRoja = "";

  function eliminarEsferasVertical(){
        // Obtener todas las esferas en la escena
        const spheres = document.querySelectorAll('a-sphere');

        for (let i = 1; i < spheres.length -1; i++) {

          // Obtener el atributo 'position' y 'color'
          const position1 = spheres[i].getAttribute('position'); //alert("x:" + position1.x + "y" + position1.y);
          const color1 = spheres[i].getAttribute('color');       //alert(color1);

          const position2 = spheres[i+1].getAttribute('position');
          const color2 = spheres[i+1].getAttribute('color');
          
          const position3 = spheres[i + 2].getAttribute('position');
          const color3 = spheres[i + 2].getAttribute('color');
/*
          const position4 = spheres[i + 3].getAttribute('position');
          const color4 = spheres[i + 3].getAttribute('color');*/


          // Acceder a las coordenadas X, Y, Z de cada posición
          const { x: x1, y: y1, z: z1 } = position1; //alert(x1)
          const { x: x2, y: y2, z: z2 } = position2;
          const { x: x3, y: y3, z: z3 } = position3;
          //const { x: x4, y: y4, z: z4 } = position4;

          // Quiero las de una fila ---> La 0 y les saco el color
          // Imprimir las coordenadas de cada esfera
          //alert(`Posición en la esfera ${i-1}: x=${x1}, y=${y1}, z=${z1}, color=${color1}`);
          //alert(`Posición en la esfera ${i}: x=${x2}, y=${y2}, z=${z2}, color=${color2}`);
          //alert(`Posición en la esfera ${i + 1}: x=${x3}, y=${y3}, color=${color3}`);
          //alert(`Posición en la esfera ${i + 2}: x=${x4}, y=${y4}, color=${color4}`);

          // Si las tres esferas consecutivas tienen el mismo color, las eliminamos
          if (color1 === color2 && color2 === color3 /*&& color3 === color4*/) {
            alert(color1 + ", " +color2 + ", " + color3 /*+ ", " + color4*/ );
            //spheres[i - 1].remove();
            spheres[i].remove();
            spheres[i + 1].remove();
            spheres[i + 2].remove();

                    esferaRoja = document.getElementById("esfera_roja_superior");
                          // esferaRoja.removeAttribute('position');
                          esferaRoja.setAttribute('position', { x: 0, y: 0, z: 0 });
                          //esferaRoja.setAttribute('color', 'orange');

            var cilindroInferior = document.getElementById("cilindro_rojo_superior"); cilindroInferior.remove();
            var cilindroSuperior = document.getElementById("cilindro_amarillo_inferior"); cilindroSuperior.remove();
          } 
        }
  }


// Función para eliminar esferas consecutivas con el mismo color
  function eliminarEsferasConsecutivas() {

    const elementos = document.querySelectorAll('a-sphere');      // Seleccionamos todas las esferas de la escena
    
    // Recorrer todas las esferas en orden inverso
    for (let i = elementos.length - 1; i >= 2; i--) {
      const color1 = elementos[i].getAttribute('color');
      const color2 = elementos[i - 1].getAttribute('color');
      const color3 = elementos[i - 2].getAttribute('color');

      // Si las tres esferas consecutivas tienen el mismo color, las eliminamos
      if (color1 === color2 && color2 === color3) {
        elementos[i].remove();
        elementos[i - 1].remove();
        elementos[i - 2].remove();
      }
    }
  }

// Establecer intervalos para llamar a las funciones cada cierto tiempo
setInterval(eliminarEsferasVertical, 15000);  // Llamará a eliminarEsferasVertical cada 3000 milisegundos (3 segundos)
setInterval(eliminarEsferasConsecutivas, 15000);  // Llamará a eliminarEsferasConsecutivas cada 5000 milisegundos (5 segundos)




