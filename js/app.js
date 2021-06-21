// var entry = document.getElementById("entry").addEventListener('click', validateForm);
const taskManager = new TaskManager(0);
const newTaskForm = document.querySelector("#newTaskForm");
var row = 1;

function validateForm() {
  let returnV = true;
  var a = document.getElementById("tId").value;
  var b = document.getElementById("tDesc").value;

  var c = document.getElementById("tStatus").value;
  var d = document.getElementById("tAssTo").value;
  var e = document.getElementById("tDate").value;

  var lenA = a.length;
  var lenB = b.length;
  var lenD = d.length;
  var lenC = c.length;

  // const now = new Date();
  // currDate = now.toLocaleDateString();

  document.getElementById("tId").style.border = "";
  document.getElementById("task-error").innerHTML = "";

  document.getElementById("tDesc").style.border = "";
  (document.getElementById("desc-error").innerHTML = ""),
    (document.getElementById("tAssTo").style.border = "");
  document.getElementById("assto-error").style.border = "";

  document.getElementById("tDate").innerHTML = "";
  document.getElementById("date-error").innerHTML = "";

  document.getElementById("tStatus").style.border = "";
  document.getElementById("status-error").innerHTML = "";

  if (a == "" && b == "" && d == "" && e == "" && c == "") {
    document.getElementById("tId").focus();
    document.getElementById("tId").style.border = "3px solid red";
    document.getElementById("task-error").innerHTML =
      "Task Name to be minimum of 5 characters";

    document.getElementById("tDesc").focus();
    document.getElementById("tDesc").style.border = "3px solid red";
    document.getElementById("desc-error").innerHTML =
      "Description to be minimum of 5 characters";

    document.getElementById("tAssTo").style.border = "3px solid red";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";

    document.getElementById("tDate").focus();
    document.getElementById("tDate").style.border = "3px solid red";
    document.getElementById("date-error").innerHTML = "Due Date is mandatory ";

    document.getElementById("tStatus").focus();
    document.getElementById("tStatus").style.border = "3px solid red";
    document.getElementById("status-error").innerHTML =
      "Select a status via the dropdown menu";

    return false;
  } else if (b == "" && d == "" && e == "" && c == "") {
    document.getElementById("tDesc").focus();
    document.getElementById("tDesc").style.border = "3px solid red";
    document.getElementById("desc-error").innerHTML =
      "Description to be minimum of 5 characters";

    document.getElementById("tAssTo").style.border = "3px solid red";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";

    document.getElementById("tDate").focus();
    document.getElementById("tDate").style.border = "3px solid red";
    document.getElementById("date-error").innerHTML = "Due Date is mandatory ";

    document.getElementById("tStatus").focus();
    document.getElementById("tStatus").style.border = "3px solid red";
    document.getElementById("status-error").innerHTML =
      "Select a status via the dropdown menu";

    return false;
  } else if (d == "" && e == "" && c == "") {
    document.getElementById("tAssTo").style.border = "3px solid red";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";

    document.getElementById("tDate").focus();
    document.getElementById("tDate").style.border = "3px solid red";
    document.getElementById("date-error").innerHTML = "Due Date is mandatory ";

    document.getElementById("tStatus").focus();
    document.getElementById("tStatus").style.border = "3px solid red";
    document.getElementById("status-error").innerHTML =
      "Select a status via the dropdown menu";

    return false;
  } else if (a == "" || lenA < 6) {
    document.getElementById("tId").focus();
    document.getElementById("tId").style.border = "3px solid red";
    document.getElementById("task-error").innerHTML =
      "Task Name to be minimum of 5 characters";
    return false;
  } else if (b == "" || lenB < 6) {
    document.getElementById("tDesc").focus();
    document.getElementById("tDesc").style.border = "3px solid red";
    document.getElementById("desc-error").innerHTML =
      "Description to be minimum of 5 characters";
    return false;
  } else if (c == "") {
    document.getElementById("tStatus").focus();
    document.getElementById("tStatus").style.border = "3px solid red";
    document.getElementById("status-error").innerHTML =
      "Select a status via the dropdown menu";
    return false;
  } else if (d == "" || lenD < 6) {
    document.getElementById("tAssTo").focus();
    document.getElementById("tAssTo").style.border = "3px solid red";
    document.getElementById("assto-error").innerHTML =
      "Assigned To is mandatory ";
    return false;
  } else if (e == "") {
    document.getElementById("tDate").focus();
    document.getElementById("tDate").style.border = "3px solid red";
    document.getElementById("date-error").innerHTML = "Due Date is mandatory ";
    return false;

    // } else if (e < currDate) {
    //           document.getElementById('tDate').style.border ="3px solid red";
    //           document.getElementById('date-error').innerHTML = "Due Date cannot be in the past";

    //         //   console.log("S");
    //           return false;
  }
  // { alert ("validation successful");
  else {
    // id = 'id' + performance.now()
    // dup = 'id' + performance.now()

    // console.log(id)
    // console.log(id.replace('.','')) // sexy id
    // console.log(id === dup) // false!

    // row++;

    taskManager.addTask(a, b, c, d, e);
    event.preventDefault();
    // Render the tasks
    taskManager.render();

    // a.value = '';
    // b.value = '';
    // d.value = '';
    // e.value = '';

    document.getElementById("tId").value = "";
    document.getElementById("tDesc").value = "";
    document.getElementById("tAssTo").value = "";
    document.getElementById("tStatus").value = "";
    document.getElementById("tDate").value = "";
  }
}
