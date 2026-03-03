let status = 0;

switch (status) {
  case 0:
    console.log("Status is zero");
    break;
  case false:
    console.log("Status is false");
    break;
  default:
    console.log("Status is unknown");
}

//Output: "0 matched" (0 === 0, NOT 0 === false)