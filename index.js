const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
  console.log(this.value);
}

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
})
