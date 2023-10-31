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
        image: '/images/sendvic piletina.jpg',
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
        name: 'Pivo 1',
        price: '350 RSD',
        image: '/images/pivo1.webp',
        description: 'Svilenkasto glatko pivo s bogatim ukusom.'
    },
    {
        category: 'sva',
        name: 'Pivo 2',
        price: '380 RSD',
        image: '/images/pivo1.webp',
        description: 'Svijetlo i osvježavajuće pivo za vrele dane.'
    },
    {
        category: 'sva',
        name: 'Pivo 3',
        price: '420 RSD',
        image: '/images/pivo1.webp',
        description: 'Klasičan izbor za sve ljubitelje piva.'
    },
    {
        category: 'sva',
        name: 'Pivo 4',
        price: '370 RSD',
        image: '/images/pivo1.webp',
        description: 'Balans između gorčine i slatkoće.'
    },
    {
        category: 'sva',
        name: 'Pivo 5',
        price: '450 RSD',
        image: '/images/pivo1.webp',
        description: 'Pun ukus i bogata aroma, idealno za veče uživanje.',

    },
    {
        category: 'svetla',
        name: 'Svetlo Pivo 1',
        price: '350 RSD',
        image: '/images/pivo1.webp',
        description: 'Svijetlo pivo s osvežavajućim ukusom.'
    },
    {
        category: 'svetla',
        name: 'Svetlo Pivo 2',
        price: '380 RSD',
        image: '/images/pivo1.webp',
        description: 'Lagano svetlo pivo za svaku priliku.'
    },
    {
        category: 'svetla',
        name: 'Svetlo Pivo 3',
        price: '420 RSD',
        image: '/images/pivo1.webp',
        description: 'Klasika svetlih piva s nežnom notom.'
    },
    {
        category: 'svetla',
        name: 'Svetlo Pivo 4',
        price: '370 RSD',
        image: '/images/pivo1.webp',
        description: 'Osvežavajuće i pitko svetlo pivo.'
    },
    {
        category: 'svetla',
        name: 'Svetlo Pivo 5',
        price: '450 RSD',
        image: '/images/pivo1.webp',
        description: 'Lagano svetlo pivo za uživanje na suncu.',

    },
    {
        category: 'tamna',
        name: 'Tamno Pivo 1',
        price: '350 RSD',
        image: '/images/pivo1.webp',
        description: 'Bogat ukus tamnog piva s notama kafe i čokolade.'
    },
    {
        category: 'tamna',
        name: 'Tamno Pivo 2',
        price: '380 RSD',
        image: '/images/pivo1.webp',
        description: 'Duboki i intenzivni ukus tamnog piva.'
    },
    {
        category: 'tamna',
        name: 'Tamno Pivo 3',
        price: '420 RSD',
        image: '/images/pivo1.webp',
        description: 'Tamno pivo sa slatkastim naglaskom.'
    },
    {
        category: 'tamna',
        name: 'Tamno Pivo 4',
        price: '370 RSD',
        image: '/images/pivo1.webp',
        description: 'Pun ukus tamnog piva sa notama kafe.'
    },
    {
        category: 'tamna',
        name: 'Tamno Pivo 5',
        price: '450 RSD',
        image: '/images/pivo1.webp',
        description: 'Tamno pivo s naglašenom karamel notom.',

    },
    {
        category: 'vocna',
        name: 'Vocno Pivo 1',
        price: '350 RSD',
        image: '/images/pivo1.webp',
        description: 'Osvežavajuće pivo s dodatkom citrusa.'
    },
    {
        category: 'vocna',
        name: 'Vocno Pivo 2',
        price: '380 RSD',
        image: '/images/pivo1.webp',
        description: 'Voćno pivo s harmoničnom kombinacijom voća.'
    },
    {
        category: 'vocna',
        name: 'Vocno Pivo 3',
        price: '420 RSD',
        image: '/images/pivo1.webp',
        description: 'Sveža i voćna eksplozija u svakom gutljaju.'
    },
    {
        category: 'vocna',
        name: 'Vocno Pivo 4',
        price: '370 RSD',
        image: '/images/pivo1.webp',
        description: 'Vocno pivo s naglaskom na egzotičnom voću.'
    },
    {
        category: 'vocna',
        name: 'Vocno Pivo 5',
        price: '450 RSD',
        image: '/images/pivo1.webp',
        description: 'Slatko i osvežavajuće voćno pivo.',

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


