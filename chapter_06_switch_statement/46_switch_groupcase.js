let browser = 'Edge';
switch (browser) {
    case 'Edge':
    case 'Chrome':
    case 'Brave':
    case 'Opera':
        console.log("You are using a Chromium-based browser.");
        break;
    case 'Firefox':
        console.log("You are using Mozilla broswer.");
        break;
    case 'Safari':
        console.log("You are using Safari browser.");
        break;
    default:
        console.log("Unknown browser.");
    }