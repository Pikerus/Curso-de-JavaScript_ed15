function testElseIf(val) {
  if (val < 5) {
    return "Menor que 5";
  } else if (val > 5 && val < 10) {
    return "Entre 5 y 10";
  } else {
    return "Mayor que 10";
  }
}
testElseIf(7);

/*------------------------*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Menor que 5";
  } else if (val < 10) {
    return "Menor que 10";
  } else {
    return "Mayor o igual a 10";
  }
}

orderMyLogic(3);

/*------------*/

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(3);

/*---------------------*/

function golfScore(par, strokes) {
  const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
  ];

  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else{
    return names[6];
  }
}

golfScore(0);
