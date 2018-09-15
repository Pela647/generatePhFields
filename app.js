//@ts-check

document.querySelector("#phones").addEventListener('click', generatePhones);

document.querySelector("#fields").addEventListener('click', generateFields);

document.querySelector("#copy-data").addEventListener('click', copyData);

let id = document.querySelector('#sheets-url').value.split('/')[5];
let outputArea = document.querySelector("#output");

function generatePhones(e) {
  let textarea1 = document.querySelector("#textarea1").value,
    aggregator = document.querySelector('input[name=group1]:checked').value,
    enabled = document.querySelector('input[name=group2]:checked').value,
    output = '';

  textarea1 = textarea1.replace(/\n/g, " ");
  let newField = textarea1.split(" ");
  for (let i = 0; i < newField.length; i++) {
    output += `
- phone: ${newField[i]}
  enabled: ${enabled}
  aggregator: ${aggregator}`

  }
  outputArea.value = output;
  e.preventDefault();
}

function generateFields(e) {

  //   let textarea1 = document.querySelector("#sheets-url").value,
  //     output = '';

  //   textarea1 = textarea1.replace(/\n\t\t+\s\s+/g, " ");
  //   let newField = textarea1.split(" ");
  //   newField = Array.from(newField);
  //   console.log(newField);
  //   for (let i = 0; i < newField.length; i++) {
  //     output += `
  //   - name: ${newField[i].toLocaleLowerCase()} 
  //     type: String
  //     default: ''`
  //   };
  //   outputArea.value = output;
  location.reload();
  e.preventDefault();


}

function copyData() {
  let outputArea = document.querySelector("#output");
  outputArea.select();
  document.execCommand("copy");
}