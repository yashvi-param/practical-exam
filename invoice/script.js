let invoiceItems = [];
const taxRate = 5; // 5% tax

// Elements
const itemName = document.getElementById('itemName');

const quantity = document.getElementById('quantity');

const price = document.getElementById('price');

const discount = document.getElementById('discount');

const addItemBtn = document.getElementById('addItem');

const invoiceTableBody = document.querySelector('#invoiceTable tbody');

const subtotalEl = document.getElementById('subtotal');

const totalDiscountEl = document.getElementById('totalDiscount');

const taxAmountEl = document.getElementById('taxAmount');

const grandTotalEl = document.getElementById('grandTotal');

const resetBtn = document.getElementById('resetBtn');

addItemBtn.addEventListener('click', () => {
    const item = {
        name: itemName.value.trim(),
        quantity: parseFloat(quantity.value),
        price: parseFloat(price.value),
        discount: parseFloat(discount.value) || 0
    };

    if (!validateItem(item)) return;

    invoiceItems.push(item);
    clearInputs();
    renderInvoice();
});

function validateItem(item) {
    if (!item.name) {
        alert("Item name is required.");
        return false;
    }
    if (item.quantity <= 0 || isNaN(item.quantity)) {
        alert("Quantity must be greater than 0.");
        return false;
    }
    if (item.price <= 0 || isNaN(item.price)) {
        alert("Price must be greater than 0.");
        return false;
    }
    if (item.discount < 0 || item.discount > 100) {
        alert("Discount must be between 0 and 100.");
        return false;
    }
    return true;
}

function clearInputs() {
    itemName.value = '';
    quantity.value = '';
    price.value = '';
    discount.value = '';
}

function renderInvoice() {
    invoiceTableBody.innerHTML = '';
    let subtotal = 0, totalDiscount = 0;

    invoiceItems.forEach((item, index) => {
        const itemTotal = item.quantity * item.price;
        const discountAmount = (item.discount / 100) * itemTotal;
        const finalTotal = itemTotal - discountAmount;

        subtotal += itemTotal;
        totalDiscount += discountAmount;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.discount}</td>
            <td>${finalTotal.toFixed(2)}</td>
        `;
        invoiceTableBody.appendChild(row);
    });

    const taxAmount = ((subtotal - totalDiscount) * taxRate) / 100;
    const grandTotal = subtotal - totalDiscount + taxAmount;

    subtotalEl.textContent = subtotal.toFixed(2);
    totalDiscountEl.textContent = totalDiscount.toFixed(2);
    taxAmountEl.textContent = taxAmount.toFixed(2);
    grandTotalEl.textContent = grandTotal.toFixed(2);
}

resetBtn.addEventListener('click', () => {
    invoiceItems = [];
    invoiceTableBody.innerHTML = '';
    subtotalEl.textContent = 0;
    totalDiscountEl.textContent = 0;
    taxAmountEl.textContent = 0;
    grandTotalEl.textContent = 0;
    clearInputs();
});