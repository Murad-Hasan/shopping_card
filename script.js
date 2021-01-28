function handleProductChanger(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const ProductCount = parseInt(productInput.value);
    let productNewCount = ProductCount;
    if (isIncrease == false && productNewCount > 0) {
        productNewCount = ProductCount - 1;
    }
    if (isIncrease == true) {
        productNewCount = ProductCount + 1;
    }
    productInput.value = productNewCount;
    let productTotal = productNewCount;
    if (product == 'phone') {
        productTotal = productNewCount * 1219 ;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-price').innerText = productTotal;
    calculateTotal();
}


function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case')

    const totalPrize = phoneCount * 1219 + caseCount * 59 ;
    document.getElementById('total-prize').innerText = totalPrize;

    const tax = Math.round(totalPrize*.1)
    document.getElementById('tax-amount').innerText = tax;
    const grandTotal = totalPrize + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value);
    return productCount;
}

const closeOne = document.getElementById('removePhone');
closeOne.addEventListener('click', function(){
  document.getElementById('phoneCartRemove').style.display = 'none';
  const caseCount = getInputValue('case')
  const totalPrize = caseCount * 59 ;
  document.getElementById('total-prize').innerText = totalPrize;

  const tax = Math.round(totalPrize*.1)
  document.getElementById('tax-amount').innerText = tax;

  const grandTotal = totalPrize + tax;
  document.getElementById('grand-total').innerText = grandTotal;
  
})

const caseRemove = document.getElementById('case-remove');
caseRemove.addEventListener('click', function(){
  document.getElementById('case-card-remove').style.display = 'none';
  const phoneCount = getInputValue('phone');
  const totalPrize = phoneCount * 1219 + caseCount * 0;
  document.getElementById('total-prize').innerText = totalPrize;

  const tax = Math.round(totalPrize*.1)
  document.getElementById('tax-amount').innerText = tax;
  const grandTotal = totalPrize + tax;
  document.getElementById('grand-total').innerText = grandTotal;

})
