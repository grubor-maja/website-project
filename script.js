

function toggleMenu() {
    var navbar = document.querySelector('.nav-bar__list');
    navbar.classList.toggle('mobile-active')
}

const collapsibles = document.querySelectorAll(".collapsible");

if(window.innerWidth<=768) {
collapsibles.forEach((item) =>{
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
})
}

// Food menu


const foodMenuData  = [
    {
        category: 'pizza',
        name: 'Pizza Margarita',
        price: '600 RSD',
        image: '/images/margarita.png',
        description: 'Savršena kombinacija paradajza, mozzarelle i bosiljka.'
    },
    {
        category: 'pizza',
        name: 'Pizza Capricciosa',
        price: '700 RSD',
        image: '/images/kapricoza.png',
        description: 'Bogata pizza sa šunkom, pečurkama i maslinama.'
    },
    {
        category: 'pizza',
        name: 'Pizza Quattro Formaggi',
        price: '750 RSD',
        image: '/images/quatro.png',
        description: 'Četiri vrste sira na savršeno hrskavoj kori.'
    },
    {
        category: 'pizza',
        name: 'Pizza Diavola',
        price: '690 RSD',
        image: '/images/pizza1.png',
        description: 'Pikantna pizza sa ljutim salamama i peperoncinima.'
    },
    {
        category: 'pizza',
        name: 'Pizza Funghi',
        price: '680 RSD',
        image: '/images/fungi.png',
        description: 'Pizza sa bogatim slojem pečuraka i belog luka.'
    },
    {
        category: 'pizza',
        name: 'Pizza Vegetariana',
        price: '660 RSD',
        image: '/images/vege.png',
        description: 'Zdrava pizza sa sezonskim povrćem.'
    },
    {
        category: 'burgeri',
        name: 'Klasik Burger',
        price: '550 RSD',
        image: '/images/burger1.webp',
        description: 'Najbolji klasik burger sa hrskavim krompirom.'
    },
    {
        category: 'burgeri',
        name: 'Burger sa Sirom',
        price: '600 RSD',
        image: '/images/burger gorgonzola.webp',
        description: 'Burger sa topljenim sirom i karamelizovanim crnim lukom.'
    },
    {
        category: 'burgeri',
        name: 'Burger sa Avokadom',
        price: '620 RSD',
        image: '/images/burger piletina 2.webp',
        description: 'Sveži burger sa kriškom avokada.'
    },
    {
        category: 'burgeri',
        name: 'Dupli Burger',
        price: '700 RSD',
        image: '/images/burger smrt.webp',
        description: 'Dvostruki burger sa duplom porcijom mesa.'
    },
    {
        category: 'burgeri',
        name: 'Burger sa Piletinom',
        price: '580 RSD',
        image: '/images/burger piletina.webp',
        description: 'Sočan burger sa piletinom i laganim dresingom.'
    },
    {
        category: 'sendvici',
        name: 'Sendvič sa Pilećim Filetima',
        price: '530 RSD',
        image: '/images/sendvic avocado.jpg',
        description: 'Klasični sendvič sa hrskavim pilećim filetima.'
    },
    {
        category: 'sendvici',
        name: 'Sendvič sa Tunjevinom',
        price: '560 RSD',
        image: '/images/sendvic tuna.jpg',
        description: 'Osvežavajući sendvič sa tunjevinom i povrćem.'
    },
    {
        category: 'sendvici',
        name: 'Sendvič sa Pršutom',
        price: '580 RSD',
        image: '/images/sendvic curetina.jpg',
        description: 'Sendvič sa pršutom i rukolom.'
    },
    {
        category: 'sendvici',
        name: 'Sendvič sa Piletinom i Avokadom',
        price: '620 RSD',
        image: '/images/sendvic avocado.jpg',
        description: 'Sendvič sa pilećim filetima i kriškom avokada.'
    },
    {
        category: 'sendvici',
        name: 'Sendvič sa junetinom',
        price: '540 RSD',
        image: '/images/sendvic biftek.jpg',
        description: 'Sendvič sa tostiranim hlebom i seckanom junetinom.'
    },
    {
        category: 'sendvici',
        name: 'Sendvič sa Lososom',
        price: '650 RSD',
        image: '/images/sendvic tuna.jpg',
        description: 'Elegantan sendvič sa lososom i krem sirom.'
    }
];



const foodMenuGrid = document.getElementById('menu');
const foodButtons = document.querySelectorAll('.menu-buttons button');
const defaultButton = document.querySelector('.menu__button-defeault');
const defaultButton2 = document.querySelector('.menu__button-defeault2');

document.addEventListener('DOMContentLoaded', function() {
    defaultButton.classList.add("menu__button-clicked");
    displayFoodMenu('all');
})
document.addEventListener('DOMContentLoaded', function() {
    defaultButton2.classList.add("menu__button-clicked");
    displayDrinkMenu('sva');
})


foodButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = this.id;
        displayFoodMenu(category);
    });
});

function displayFoodMenu(category) {
    foodMenuGrid.innerHTML='';

    foodMenuData .filter(item => category === 'all' || item.category === category).forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        menuItem.appendChild(img);

        const info = document.createElement('div');
        info.classList.add('menu-item-info');

        const heading = document.createElement('h3');
        heading.classList.add('menu-flex');
        heading.textContent = item.name;
        
        info.appendChild(heading);

        const price = document.createElement('p');
        price.textContent = item.price;
        price.classList.add('p1', 'menu-flex');
        info.appendChild(price);

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('p2');
        info.appendChild(description);

        menuItem.appendChild(info);
        foodMenuGrid.appendChild(menuItem);
    });
}

// Drink menu

const drinkMenuData = [
    {
        category: 'sva',
        name: 'Helles',
        price: '350 RSD',
        image: '/images/sva1.png',
        description: 'Svilenkasto glatko pivo s bogatim ukusom.'
    },
    {
        category: 'sva',
        name: 'Edelstoff',
        price: '380 RSD',
        image: '/images/sva2.png',
        description: 'Svijetlo i osvježavajuće pivo za vrele dane.'
    },
    {
        category: 'sva',
        name: 'Longboard',
        price: '420 RSD',
        image: '/images/sva3.png',
        description: 'Klasičan izbor za sve ljubitelje piva.'
    },
    {
        category: 'sva',
        name: 'Tegernseer',
        price: '370 RSD',
        image: '/images/sva4.png',
        description: 'Balans između gorčine i slatkoće.'
    },
    {
        category: 'sva',
        name: 'Chemisser',
        price: '450 RSD',
        image: '/images/sva5.png',
        description: 'Pun ukus i bogata aroma, idealno za veče uživanje.',

    },
    {
        category: 'svetla',
        name: 'Averbode',
        price: '350 RSD',
        image: '/images/svetlo1.png',
        description: 'Pšenično pivo s blagom notom citrusa'
    },
    {
        category: 'svetla',
        name: 'Barbar Blond',
        price: '380 RSD',
        image: '/images/svetlo2.png',
        description: 'Lagano pilsner pivo s blagim gorčim naglaskom'
    },
    {
        category: 'svetla',
        name: 'De la Senne',
        price: '420 RSD',
        image: '/images/svetlo3.png',
        description: 'Svetli IPA s cvetnim notama'
    },
    {
        category: 'svetla',
        name: 'Zinne Bir',
        price: '370 RSD',
        image: '/images/svetlo4.png',
        description: 'Svetlo pivo sa svežim notama limuna'
    },
    {
        category: 'svetla',
        name: 'Sportzot',
        price: '450 RSD',
        image: '/images/svetlo5.png',
        description: 'Klasično sveto pivo uravnoteženog ukusa',

    },
    {
        category: 'tamna',
        name: 'De Koninck',
        price: '350 RSD',
        image: '/images/tamno1.png',
        description: 'Bogat i kremast stout s notama kafe'
    },
    {
        category: 'tamna',
        name: 'Kwak',
        price: '380 RSD',
        image: '/images/tamno2.png',
        description: 'Tamni porter sa karamelnim tonovima'
    },
    {
        category: 'tamna',
        name: 'St Bernardus',
        price: '420 RSD',
        image: '/images/tamno3.png',
        description: 'Duboki tamni bitter ale'
    },
    {
        category: 'tamna',
        name: 'Bush',
        price: '370 RSD',
        image: '/images/tamno4.png',
        description: 'Tamno pivo s voćnim tonovima'
    },
    {
        category: 'tamna',
        name: 'Celebrator',
        price: '450 RSD',
        image: '/images/tamno5.png',
        description: 'Stout sa intenzivnim čokoladnim ukusom',

    },
    {
        category: 'vocna',
        name: 'Paradise Pale Ale',
        price: '350 RSD',
        image: '/images/vocno10.png',
        description: 'Tropsko osveženje s primamljivom notom strastvenog voća'
    },
    {
        category: 'vocna',
        name: 'Mango Tango',
        price: '380 RSD',
        image: '/images/vocno9.png',
        description: 'Odlično se slaže sa začinjenim jelima i tropskim voćem'
    },
    {
        category: 'vocna',
        name: 'Coconut Oasis',
        price: '420 RSD',
        image: '/images/vocno8.png',
        description: 'Pivo s izraženim kokosovim ukusom'
    },
    {
        category: 'vocna',
        name: 'Delirium Red',
        price: '600 RSD',
        image: '/images/vocno4.png',
        description: 'Dubok i bogat ukus crvenih plodova'
    },
    {
        category: 'vocna',
        name: 'Apple Haven',
        price: '450 RSD',
        image: '/images/vocno3.png',
        description: 'Pun ukus jabuke sa dodatkom cieta',

    }
];

const drinkMenuGrid = document.getElementById('drink-menu');
const drinkButtons = document.querySelectorAll('.drink-menu-buttons button');


drinkButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category2 = this.id;
        displayDrinkMenu(category2);
    });
});

function displayDrinkMenu(category2) {
    drinkMenuGrid.innerHTML = '';

    drinkMenuData.filter(item => category2 === 'sva' || item.category === category2).forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        menuItem.appendChild(img);

        const info = document.createElement('div');
        info.classList.add('menu-item-info');

        const heading = document.createElement('h3');
        heading.classList.add('menu-flex');
        heading.textContent = item.name;

        info.appendChild(heading);

        const price = document.createElement('p');
        price.textContent = item.price;
        price.classList.add('p1', 'menu-flex');
        info.appendChild(price);

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('p2');
        info.appendChild(description);

        menuItem.appendChild(info);
        drinkMenuGrid.appendChild(menuItem);
    });
}


document.addEventListener("DOMContentLoaded", function () {
   
  
   
    if (window.location.pathname.includes("hrana.html")) {
   
      displayFoodMenu("all");
    }
  
   
    if (window.location.pathname.includes("piva.html")) {
    
      displayDrinkMenu("sva");
    }
  });


//   Merch

// const products = document.querySelectorAll('.merch__product');

// products.forEach(product => {
//     const content = product.querySelector('.merch__product-content')
//     const img = product.querySelector('.merch__img');

//   product.addEventListener('mouseenter', () => {
//     content.style.opacity = 1;
//     img.style.filter = 'grayscale(100%)';
//   });

//   product.addEventListener('mouseleave', () => {
//     img.style.filter = 'grayscale(0%)';
//     content.style.opacity = 0;
//   });
// });

const menuButtons = document.querySelectorAll('.menu__button');

menuButtons.forEach(button => {
    button.addEventListener('click', function() {
        menuButtons.forEach(btn => {
            btn.classList.remove('menu__button-clicked');
        });

        button.classList.add('menu__button-clicked');
    });
});

const contactBtn = document.querySelector('.contact-button');

contactBtn.addEventListener('click', function() {
    alert('Uspešno poslata poruka');
})


