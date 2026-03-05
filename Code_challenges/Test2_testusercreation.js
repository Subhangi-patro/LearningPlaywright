var role = ["Admin", "Editor", "Viewer"," tester", "Manager"];


for (let i = 1; i <= 5; i++) {
  let newUniqueId = "USR-00" + i;
  let uniqueName = "TestUser"+"_" + i;
  let email = "testuser" + i + "@testingacademy.com";
  let uniquerole = role[i];
  let status = i % 3 === 0 ? "Inactive" : "Active";
  console.log("Creating ID: " + newUniqueId + " Name: " + uniqueName + " Email: " + email +"uniqerole: " + uniquerole + " Status: " + status);
}
