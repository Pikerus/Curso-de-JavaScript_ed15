function play() {
  //Bienvenida
  alert("Bienvenidos al cuento de Ricitos de Oro");
  alert(
    "Comencemos..... La bella Ricitos de Oro se encuentra con una cabaña en el bosque...."
  );

  const enterCabin = confirm("¿Quieres entrar en la cabaña?");
  const selectDishes = ["caliente", "frío"];
  const selectChairs = ["grande", "pequeña", "extraña"];
  const selectBeds = ["grande", "pequeña", "pinchos"];
  const selectFinal = ["gritar", "escapar", "Llorar"];

  //Entrar en cabaña
  if (enterCabin) {
    alert("Estás dentro de la bonita cabaña del bosque...");
  } else {
    alert("No entras....así que... este cuento se ha acabado cenizo!!!!");
  }

  //Seleccionar platos
  alert(
    "Echas un vistazo alrededor y ves dos platos sobre la mesa, los tocas, uno está caliente y otro está frío..."
  );
  const questionDishes = prompt(
    "¿Qué plato quieres probar? Frío o caliente..."
  );

  if (selectDishes[0].toLowerCase()) {
    alert(
      "Mmmmm, has probado el plato caliente y te encanta... con el frío que hace fuera!!"
    );
  } else {
    alert(
      "El plato está muy frío, gritas, te caen los dientes y caes redondo.... este cuento se ha acabado!!!"
    );
  }

  //Seleccionar sillas
  alert(
    "Una vez que ya te has comido todo el plato sigues observando... y ves al fondo, en una esquina, tres sillas.... una es grande, otra pequeña y otra... un tanto extraña..."
  );
  const questionChairs = prompt(
    "¿Qué silla eliges? grande, pequeña, extraña..."
  );

  if (selectChairs[0].toLowerCase()) {
    alert(
      "Aaahhh, te intentas subir a una silla demasiado grande y te caes rompiéndote la cabeza contra el suelo... Tu tiempo en esta cabaña se ha terminado"
    );
  } else if (selectChairs[1].toLowerCase()) {
    alert(
      "Aaahhh, te intentas sentar en una silla demasiado pequeña y ésta se rompe...Te caes y te rompes la espalda... Tu tiempo en esta cabaña se ha terminado"
    );
  } else {
    alert(
      "Te sientas en la silla y es comodísima.... te quedas relajada observando toda la cabaña...."
    );
  }

  //Seleccionar camas
  alert(
    "Subes por las escaleras.. y ves una habitación enorme con tres camas.... Una es grande, otra pequeña y otra parece de pinchos..."
  );
  const questionBeds = prompt("¿Qué cama eliges? grande, pequeña, pinchos...");

  if (selectBeds[0].toLowerCase()) {
    alert(
      "Aaayy, es una cama demasiado grande y te hundes hasta el suelo clavándote un cuchillo que había en el suelo.... tu historia en esta cabaña se ha terminado...."
    );
  } else if (selectBeds[1].toLowerCase()) {
    alert(
      "Aaayy, es una cama demasiado pequeña y se rompe rompiéndote la crisma contra el suelo... tu historia en esta cabaña se ha terminado...."
    );
  } else {
    alert(
      "Te tumbas y te sientes en el paraíso de lo cómoda que es... te quedas profundamente dormida..."
    );
  }

  //Final
  alert(
    "De repente escuchas un ruido... alguien está entrando en la casa!!!!..."
  );
  alert(
    "Escuchas somo suben por las escaleras... se abre la puerta de la habitación y aparecen 3 osos... qué horror!!!"
  );

  const questionFinal = prompt("¿Qué quieres hacer? gritar, escapar, llorar");
  if (selectFinal[0].toLowerCase()) {
    alert(
      "Te pones a gritar y los osos se alteran, van a por ti y acaban contigo.... Sayonara baby!! te dice papá oso"
    );
  } else if (selectFinal[1].toLowerCase()) {
    alert(
      "Corres hacia la ventana, saltas y logras escapar sana y salvas... Te vas corriendo sin mirar atrás y estás viva!!!"
    );
  } else {
    alert(
      "Te pones a llorar y de la lástima que das los osos se apiadan de ti y terminan con tu vida...Este cuento se ha terminado para ti aquí, en esta confortable cama"
    );
  }
  const playAgain = confirm("¿Quieres jugar de nuevo?");
  if (playAgain) {
    play();
  }
}

play();
