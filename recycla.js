

function addItem() {
    const data1 = document.getElementById('select1').value;
    const data2 = document.getElementById('select2').value;
    const data3 = document.getElementById('select3').value;
  
    const itemList = document.getElementById('itemList');
  
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${data1}, ${data2}, ${data3}`;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        itemList.removeChild(listItem);
    };
  
    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);
  }
  
  
  
  /*
  document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById('showSelectedButton');
    const select = document.getElementById('mySelect');
    const dropdown = document.getElementById('mydropdown');
    const quantity = document.getElementById('selectQuantity');
  
    const selectedValueParagraph = document.getElementById('selectedValue');
    const selectedValueDropdown = document.getElementById('selecteddropdown');
    const selectedValueQuantity = document.getElementById('selectednumber');
  
    showButton.addEventListener('click', function () {
      const selectedValue = select.value;
      const selecteddropdown = dropdown.value;
      const selectedQuantity = quantity.value;
  
      selectedValueParagraph.textContent = `${selectedValue}`;
      selectedValueDropdown.textContent = `${selecteddropdown}`;
      selectedValueQuantity.textContent = `${selectedQuantity}`;
    });
  });
  */
  
  
  