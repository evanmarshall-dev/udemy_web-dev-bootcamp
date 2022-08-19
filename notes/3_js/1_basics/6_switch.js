const day = 6;
/*
LOGIC
*****
  For 1 we want Monday
  2 we want Tuesday
  3 = Wednesday
  4 = Thursday
  5 = Friday
  6 = Weekend
  7 = Weekend
*/
// The above logic could be accomplished with if and else if statements.
// Switch statement example.
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("The Weekend");
    break;
  default:
    console.log("Uh-oh, something broke...");
}
