/**
 * JavaScript30
 */

const checkboxes = document.querySelectorAll('.inbox .item input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked)
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in b/w');
      }
      if (inBetween)
        checkbox.checked = true;
      console.log(checkbox);
    });
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
