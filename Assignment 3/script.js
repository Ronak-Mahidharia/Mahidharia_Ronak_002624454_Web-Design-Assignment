function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var t = new Title("CONNECT WITH ME!");

const checkboxes = document.querySelectorAll("#myTable input[type='checkbox']");
document.addEventListener("DOMContentLoaded", function () {
  const fullName = "Full Name:";
  const nuid = "NUID:";

  document.getElementById("fullName").textContent = "Name: Ronak Vishal Mahidharia";
  document.getElementById("nuid").textContent = "NUID: 002624454";

  const dropDownRows = document.querySelectorAll(".dropDownTextArea");
  dropDownRows.forEach((row) => {
    row.style.display = "none";
  });

  const submitMe = document.getElementById("button");
  submitMe.disabled = true;
  submitMe.style.backgroundColor = "gray";

  let stu = 4;
  document.getElementById("add").addEventListener("click", () => {
    const table = document.getElementById("myTable");
    const newRow = table.insertRow(-1);

    const check = newRow.insertCell(0);
    const stud = newRow.insertCell(1);
    const advi = newRow.insertCell(2);
    const awardStat = newRow.insertCell(3);
    const sem = newRow.insertCell(4);
    const type = newRow.insertCell(5);
    const budg = newRow.insertCell(6);
    const percen = newRow.insertCell(7);
    const del = newRow.insertCell(8);
    const edi = newRow.insertCell(9);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    check.appendChild(checkbox);

    const img = document.createElement("img");
    img.src = "down.png";
    img.width = "25";
    check.appendChild(document.createElement("br"));
    check.appendChild(document.createElement("br"));
    check.appendChild(img);

    stud.textContent = `Student ${stu}`;
    advi.textContent = `Teacher ${stu}`;
    awardStat.textContent = "Approved";
    sem.textContent = "Fall";
    type.textContent = "TA";
    budg.textContent = `0026${stu}`;
    percen.textContent = "100%";
    del.innerHTML = "";
    edi.innerHTML = "";

    const dropdownRow = table.insertRow(-1);
    dropdownRow.classList.add("dropDownTextArea");
    dropdownRow.style.display = "none";
    const dropdownCell = dropdownRow.insertCell(0);
    dropdownCell.colSpan = 8;
    dropdownCell.innerHTML = `
    Advisor:<br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: <br />
    Tuition Number: <br />
    Comments:<br /><br /><br />
    Award Status:<br /><br /><br />
  `;

    hideDeleteEditColumns();
    alert(`Added new record for Student ${stu}`);
    stu++;
  });

  document.getElementById("myTable").addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      const checkbox = event.target;
      const row = checkbox.parentElement.parentElement;

      if (checkbox.checked) {
        row.classList.add("yellow");
        const del = row.cells[8];
        del.innerHTML = "<button>Delete</button>";
        del.querySelector("button").addEventListener("click", () => {
          const studentName = row.cells[1].textContent;
          row.remove();
          alert(`Record for ${studentName} deleted successfully`);
          hideDeleteEditColumns();
        });

        const edit = row.cells[9];
        edit.innerHTML = "<button>Edit</button>";
        edit.querySelector("button").addEventListener("click", () => {
          const studentName = row.cells[1].textContent;
          const userInput = prompt(`Edit ${studentName} details`, "");
          if (userInput !== null) {
            alert(`Updated details for ${studentName}: ${userInput}`);
          }
        });
      } else {
        row.classList.remove("yellow");
        const del = row.cells[8];
        del.innerHTML = "";
        const edit = row.cells[9];
        edit.innerHTML = "";
      }
    }
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (![...checkboxes].some((cb) => cb.checked)) {
        submitMe.disabled = true;
        submitMe.style.backgroundColor = "gray";
      }
    });
  });

  document.getElementById("myTable").addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const icon = event.target;
      const row = icon.parentElement.parentElement.nextElementSibling;
      if (row.style.display === "none") {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    }
  });

  function hideDeleteEditColumns() {
    const checkboxes = document.querySelectorAll(
      "#myTable input[type='checkbox']"
    );
    const submitMe = document.getElementById("button");
    let isAnyCheckboxChecked = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isAnyCheckboxChecked = true;
      }
    });

    checkboxes.forEach((checkbox) => {
      const row = checkbox.parentElement.parentElement;
      const del = row.cells[8];
      const edit = row.cells[9];

      if (isAnyCheckboxChecked) {
        del.style.display = "table-cell";
        edit.style.display = "table-cell";
      } else {
        del.style.display = "none";
        edit.style.display = "none";
      }
    });

    const headerRow = document.querySelector("#myTable tr:first-child");
    const deleteHeader = headerRow.cells[8];
    const editHeader = headerRow.cells[9];

    if (isAnyCheckboxChecked) {
      deleteHeader.style.display = "table-cell";
      editHeader.style.display = "table-cell";
    } else {
      deleteHeader.style.display = "none";
      editHeader.style.display = "none";
    }

    submitMe.disabled = !isAnyCheckboxChecked;
    if (isAnyCheckboxChecked) {
      submitMe.style.backgroundColor = "orange";
    } else {
      submitMe.style.backgroundColor = "gray";
    }
  }

  document.getElementById("myTable").addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      hideDeleteEditColumns();
    }
  });

  hideDeleteEditColumns();
});