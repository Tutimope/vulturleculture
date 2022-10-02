const Menu = [
    // CITRINE
    {
        name: 'LQ',
        uid: 'citrine0',
        price: 300,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/citrine.png',
        items: '',
        itemType: 'citrine'
    },
    {
        name: 'MQ',
        uid: 'citrine1',
        price: 400,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/citrine.png',
        items: '',
        itemType: 'citrine'
    },
    {
        name: 'HQ',
        uid: 'citrine2',
        price: 500,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/citrine.png',
        items: '',
        itemType: 'citrine'
    },    
    // JADE
    {
        name: 'LQ',
        uid: 'jade0',
        price: 50,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/jade.png',
        items: '',
        itemType: 'jade'
    },
    {
        name: 'MQ',
        uid: 'jade1',
        price: 100,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/jade.png',
        items: '',
        itemType: 'jade'
    },
    {
        name: 'HQ',
        uid: 'jade2',
        price: 150,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/jade.png',
        items: '',
        itemType: 'jade'
    },
    // AQUAMARINE
    {
        name: 'LQ',
        uid: 'aquamarine0',
        price: 125,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/aquamarine.png',
        items: '',
        itemType: 'aquamarine'
    },
    {
        name: 'MQ',
        uid: 'aquamarine1',
        price: 130,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/aquamarine.png',
        items: '',
        itemType: 'aquamarine'
    },
    {
        name: 'HQ',
        uid: 'aquamarine2',
        price: 135,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/aquamarine.png',
        items: '',
        itemType: 'aquamarine'
    },
    // RUBY
    {
        name: 'LQ',
        uid: 'ruby0',
        price: 150,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/ruby.png',
        items: '',
        itemType: 'ruby'
    },
    {
        name: 'MQ',
        uid: 'ruby1',
        price: 155,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/ruby.png',
        items: '',
        itemType: 'ruby'
    },
    {
        name: 'HQ',
        uid: 'ruby2',
        price: 160,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/ruby.png',
        items: '',
        itemType: 'ruby'
    },
    // SAPPHIRE
    {
        name: 'LQ',
        uid: 'sapphire0',
        price: 175,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/sapphire.png',
        items: '',
        itemType: 'sapphire'
    },
    {
        name: 'MQ',
        uid: 'sapphire1',
        price: 180,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/sapphire.png',
        items: '',
        itemType: 'sapphire'
    },
    {
        name: 'HQ',
        uid: 'sapphire2',
        price: 185,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/sapphire.png',
        items: '',
        itemType: 'sapphire'
    },
    // DIAMOND
    {
        name: 'LQ',
        uid: 'diamond0',
        price: 250,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/diamond.png',
        items: '',
        itemType: 'diamond'
    },
    {
        name: 'MQ',
        uid: 'diamond1',
        price: 255,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/diamond.png',
        items: '',
        itemType: 'diamond'
    },
    {
        name: 'HQ',
        uid: 'diamond2',
        price: 260,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/diamond.png',
        items: '',
        itemType: 'diamond'
    },  
    // TANZANITE
    {
        name: 'LQ',
        uid: 'tanzanite0',
        price: 325,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/tanzanite.png',
        items: '',
        itemType: 'tanzanite'
    },
    {
        name: 'MQ',
        uid: 'tanzanite1',
        price: 330,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/tanzanite.png',
        items: '',
        itemType: 'tanzanite'
    },
    {
        name: 'HQ',
        uid: 'tanzanite2',
        price: 335,
        display: true,
        image: 'https://djphaze22.github.io/evesjeweler/register/assets/images/items/tanzanite.png',
        items: '',
        itemType: 'tanzanite'
    }
];

function loadItems() {
    let itemList = document.getElementById('itemsContainer');
    let lastItemType = "";
    Menu.forEach(menuItem => {
        if (menuItem.display == true) {
            if (menuItem.itemType  !== lastItemType) {
                itemList.innerHTML += `<div class="col-md-12 col-sm-12 col-12 title">${capitalizeFirstLetter(menuItem.itemType)}</div>`;
                lastItemType = menuItem.itemType;
            }

            itemList.innerHTML += 
            `<div class="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
                <figure class="card card-product" onclick="addItem('${menuItem.uid}','${capitalizeFirstLetter(menuItem.itemType)}-${menuItem.name}',${menuItem.price},'${menuItem.image}','${menuItem.items}')">
                    <div class="img-wrap">
                        <img draggable="false" src=${menuItem.image}>
                    </div>
                    <figcaption class="info-wrap">
                        <span class="title h6">${menuItem.name}</span>
                        <div class="action-wrap">
                            <span class="btn btn-primary disabled btn-sm"> <i
                                    class="fa fa-cart-plus"></i>$${menuItem.price} </span>
                        </div> <!-- action-wrap -->
                    </figcaption>
                </figure> <!-- card // -->
            </div> <!-- col // -->`
        }
    });
}

function addItem(uid, name, price, image, items) {
    var receiptItem = 'receipt-item-' + uid;
    var priceItem = 'price-item-' + uid;
    var quantityItem = 'quantity-item-' + uid;
    if (document.getElementById(receiptItem)) {
        let orderPriceString = document.getElementById(priceItem).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById(quantityItem).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        orderPrice += 1 * price
        orderQuantity += 1
        document.getElementById(priceItem).innerText = '$' + orderPrice
        document.getElementById(quantityItem).innerText = orderQuantity
        totalPrice();
    }
    else {
        let receiptList = document.getElementById('tbody');
        let title = `<h6 class="title text-truncate menu-item">${name}</h6>`;
        if (items !== '') {
            title += `<h8 class="title text-truncate staff-help"><i>${items}</i></h8>`;
        }
        receiptList.innerHTML += 
        `<tr class="receipt-item" id="receipt-item-${uid}">
            <td>
                <figure class="media">
                    <div class="img-wrap"><img draggable="false" src="${image}"
                        class="img-thumbnail img-xs"></div>
                    <figcaption class="media-body">
                        ${title}
                    </figcaption>
                </figure>
            </td>
            <td class="text-center">
                <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                    aria-label="...">
                    <button type="button" class="m-btn btn btn-default" onclick="removeItem('${uid}',${price},1)"><i
                            class="fa fa-minus"></i></button>
                    <button type="button" class="m-btn btn btn-default quantity" id="${quantityItem}" disabled>1</button>
                    <button type="button" class="m-btn btn btn-default" onclick="addItem('${uid}','${name}',${price},'${image}')"><i
                            class="fa fa-plus"></i></button>
                </div>
            </td>
            <td>
                <div class="price-wrap">
                    <var class="price" id="${priceItem}">$${price}</var>
                </div>
            </td>
            <td class="text-right">
                <span class="btn btn-outline-danger" onclick="deleteItem('${uid}')"> <i class="fa fa-trash"></i></span>
            </td>
        </tr>`
        totalPrice();
    }
}

function removeItem(uid, price, quantity) {
    if (document.getElementById('receipt-item-' + uid)) {
        let orderPriceString = document.getElementById('price-item-' + uid).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById('quantity-item-' + uid).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        if (orderQuantity > 1) {
            orderPrice -= price
            orderQuantity -= quantity
            document.getElementById('price-item-' + uid).innerText = '$' + orderPrice
            document.getElementById('quantity-item-' + uid).innerText = orderQuantity
            totalPrice();
        }
    }  
}
function deleteItem(item) {
    document.getElementById('receipt-item-' + item).remove();
    totalPrice();
}

function resetTill(item) {
    document.getElementById('tbody').innerHTML = '';
    totalPrice();
}

function applyDiscount(discount) {
    let discountPercent = (discount / 100);
    let total = document.getElementById('totalCost').innerText.replace(/\D/g, '');
    let discountedTotal = Math.ceil(total - (total * discountPercent));
    document.getElementById('totalCost').innerText = '$' + discountedTotal;
}

function totalPrice() {
    var elements = document.getElementsByClassName('price');
    if (elements.length == 0) {
        document.getElementById('totalCost').innerText = '$' + 0
        generateComment();
    }
    else {
        prices = [];
        for (var i = 0; i < elements.length; ++i) {
            var priceElement = elements[i].innerHTML.replace(/\D/g, '');
            var price = Number(priceElement)
            prices.push(price);
            let total = prices.reduce(function (acc, val) { return acc + val; }, 0)
            document.getElementById('totalCost').innerText = '$' + total
            generateComment();
        }
    }
}

function generateComment() {
    document.getElementById('orderComment').innerText = "";
    var itemComments = []
    var itemQuantity = []
    var quantity = document.getElementsByClassName("quantity");
    for (var a = 0; a < quantity.length; a++) {
        itemQuantity.push(quantity[a].innerText);
    }
    var receiptItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < receiptItems.length; i++) {
        itemComments.push(quantity[i].innerText + "x " + receiptItems[i].innerText);
    }
    document.getElementById('orderComment').innerHTML = `<button class="btn btn-primary btn-lg" id='copyToClipBoard' data-clipboard-target="#orderComment">
    <span class="h5">Copy Order Comment</span>
  </button> <br> <div>`+  itemComments.join(' '); +"</div>" 
  let clipboard = new ClipboardJS('#copyToClipBoard');
  clipboard.on('success', function(e) {
    e.clearSelection();
});

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

loadItems();
