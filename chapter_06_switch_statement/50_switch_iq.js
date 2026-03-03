let value = "5";

switch (value) {
    case 5:
        console.log("The value is the number 5.");
        break;
    case "5":
        console.log("The value is the string '5'.");
        break;
    default:
        console.log("The value is something else.");
}

//switch uses === strict match