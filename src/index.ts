/*
4) Ahora se ha decidido ofrecer la posibilidad de 
reservar un pasaje
Cuando una persona quiere hacer una reserva se 
muestra los lugares libres, el pasajero selecciona 
su asiento y se marca con un 2. Luego, se le informa
 al pasajero la ubicación de su asiento
Cuando la persona va a comprar un pasaje se 
verifica que ese asiento no esté vendido. Si es 
así se le informa al pasajero.
Cuando se va a comprar un pasaje con reserva, se 
verifica que efectivamente ese asiento esté 
reservado y se informa.
 Modifique el programa anterior para ofrecer esta 
 nueva funcionalidad
 */

let asientos = new Array(60);

let inicializarAsientos = function (asientos: string[]) {
  for (let asiento = 0; asiento < 60; asiento++) {
    asientos[asiento] = "0";
  }
};

let venderAsiento = function (asientos: string[]) {
  for (let asiento = 0; asiento < 60; asiento++) {
    if (asientos[asiento] === "0") {
      console.log("Asiento " + asientos[asiento] + " libre");
    }
  }
  let vender = prompt("Asiento?");
  asientos[vender] = "1";
  console.log(asientos[vender]);
};
inicializarAsientos(asientos);
venderAsiento(asientos);