
let products = ["Gelas", "Botol", "Lampu", "Sendok"];
const productList = document.getElementById('product-list');
const productNameInput = document.getElementById('product-name');
const addProductButton = document.getElementById('add-product');
const updateProductButton = document.getElementById('update-product');
let editingIndex = -1;

function displayProducts() {
    productList.innerHTML = '';

    products.forEach(function (product, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          ${product}
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Hapus</button>
        `;
        productList.appendChild(listItem);
    });
}

function addProduct(newProduct) {
    products.push(newProduct);
    displayProducts();
}

function editProduct(index) {
    productNameInput.value = products[index];
    addProductButton.disabled = true;
    updateProductButton.disabled = false;
    editingIndex = index;
}

function updateProduct(index, updatedProduct) {
    products[index] = updatedProduct;
    displayProducts();
    clearForm();
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function clearForm() {
    productNameInput.value = '';
    addProductButton.disabled = false;
    updateProductButton.disabled = true;
    editingIndex = -1;
}

addProductButton.addEventListener('click', function () {
    const newProduct = productNameInput.value;
    if (newProduct) {
        addProduct(newProduct);
        clearForm();
    }
});

updateProductButton.addEventListener('click', function () {
    const updatedProduct = productNameInput.value;
    if (editingIndex !== -1 && updatedProduct) {
        updateProduct(editingIndex, updatedProduct);
    }
});

displayProducts();