export function getProduct(productId){
    let matchingProduct;
  
      products.forEach((product) => {
        if (product.id === productId) {
          matchingProduct = product;
        }
      });
      return matchingProduct
  }

export const products = [
    {
        id: 'id1',
        image: 'assets/images/products/War-Hammer.png',
        name: 'War Hammer',
        rating: {
            stars: 4,
            count: 2018
        },
        priceCents: 2599,
        keywords: ['hammer', 'war', 'Weapon']
    },
    {
        id: 'id2',
        image: 'assets/images/products/Arrow.png',
        name: 'Arrow',
        rating: {
            stars: 5,
            count: 1279
        },
        priceCents: 299,
        keywords: ['Arrow', 'Weapon', 'bow', 'crossbow']
    },
    {
        id: 'id3',
        image: 'assets/images/products/Assassins-Cloak.png',
        name: 'Assassins Cloak',
        rating: {
            stars: 4,
            count: 879
        },
        priceCents: 1699,
        keywords: ['cloak', 'assassin', 'stealth']
    },
    {
        id: 'id4',
        image: 'assets/images/products/Assassins-Hood.png',
        name: 'Assassins Hood',
        rating: {
            stars: 3.5,
            count: 1325
        },
        priceCents: 1499,
        keywords: ['hood', 'assassin', 'stealth']
    },
    {
        id: 'id5',
        image: 'assets/images/products/Axe.png',
        name: 'Axe',
        rating: {
            stars: 5,
            count: 2211
        },
        priceCents: 2249,
        keywords: ['axe', 'Weapon', 'chop']
    },
    {
        id: 'id6',
        image: 'assets/images/products/Buckler.png',
        name: 'Buckler',
        rating: {
            stars: 4,
            count: 1337
        },
        priceCents: 1399,
        keywords: ['shield', 'buckler', 'defense']
    },
    {
        id: 'id7',
        image: 'assets/images/products/Chainmail.png',
        name: 'Chainmail',
        rating: {
            stars: 5,
            count: 1142
        },
        priceCents: 2769,
        keywords: ['armor', 'chainmail', 'defense']
    },
    {
        id: 'id8',
        image: 'assets/images/products/Chaos-Orb.png',
        name: 'Chaos Orb',
        rating: {
            stars: 5,
            count: 1759
        },
        priceCents: 1988,
        keywords: ['magic', 'orb', 'chaos']
    },
    {
        id: 'id9',
        image: 'assets/images/products/Crossbow.png',
        name: 'Crossbow',
        rating: {
            stars: 4.5,
            count: 2450
        },
        priceCents: 2390,
        keywords: ['crossbow', 'Weapon', 'arrow']
    },
    {
        id: 'id10',
        image: 'assets/images/products/Flail.png',
        name: 'Flail',
        rating: {
            stars: 4,
            count: 958
        },
        priceCents: 1755,
        keywords: ['flail', 'Weapon', 'mace']
    },
    {
        id: 'id11',
        image: 'assets/images/products/Health-Potion.png',
        name: 'Health Potion',
        rating: {
            stars: 5,
            count: 2317
        },
        priceCents: 699,
        keywords: ['potion', 'health', 'healing']
    },
    {
        id: 'id12',
        image: 'assets/images/products/Horseman-pick.png',
        name: 'Horseman Pick',
        rating: {
            stars: 3,
            count: 1203
        },
        priceCents: 1885,
        keywords: ['pick', 'Weapon', 'horse']
    },
    {
        id: 'id13',
        image: 'assets/images/products/Knife.png',
        name: 'Knife',
        rating: {
            stars: 4,
            count: 1049
        },
        priceCents: 1190,
        keywords: ['knife', 'Weapon', 'stealth']
    },
    {
        id: 'id14',
        image: 'assets/images/products/Knight-Breastplate.png',
        name: 'Knight Breastplate',
        rating: {
            stars: 4.5,
            count: 1771
        },
        priceCents: 2890,
        keywords: ['armor', 'knight', 'breastplate']
    },
    {
        id: 'id15',
        image: 'assets/images/products/Knight-Gauntlet.png',
        name: 'Knight Gauntlet',
        rating: {
            stars: 4,
            count: 832
        },
        priceCents: 1133,
        keywords: ['armor', 'knight', 'gauntlet']
    },
    {
        id: 'id16',
        image: 'assets/images/products/Knight-Helmet.png',
        name: 'Knight Helmet',
        rating: {
            stars: 4.5,
            count: 1452
        },
        priceCents: 1659,
        keywords: ['armor', 'knight', 'helmet']
    },
    {
        id: 'id17',
        image: 'assets/images/products/Longbow.png',
        name: 'Longbow',
        rating: {
            stars: 5,
            count: 2235
        },
        priceCents: 2144,
        keywords: ['bow', 'longbow', 'Weapon']
    },
    {
        id: 'id18',
        image: 'assets/images/products/Longsword.png',
        name: 'Longsword',
        rating: {
            stars: 4.5,
            count: 2014
        },
        priceCents: 2490,
        keywords: ['sword', 'longsword', 'Weapon']
    },
    {
        id: 'id19',
        image: 'assets/images/products/Luck-Potion.png',
        name: 'Luck Potion',
        rating: {
            stars: 2,
            count: 39
        },
        priceCents: 649,
        keywords: ['potion', 'luck', 'magic']
    },
    {
        id: 'id20',
        image: 'assets/images/products/Mace.png',
        name: 'Mace',
        rating: {
            stars: 4.5,
            count: 1823
        },
        priceCents: 2022,
        keywords: ['mace', 'Weapon', 'blunt']
    },
    {
        id: 'id21',
        image: 'assets/images/products/Mana-Orb.png',
        name: 'Mana Orb',
        rating: {
            stars: 5,
            count: 2117
        },
        priceCents: 3099,
        keywords: ['mana', 'orb', 'magic']
    },
    {
        id: 'id22',
        image: 'assets/images/products/Morningstar.png',
        name: 'Morningstar',
        rating: {
            stars: 4.0,
            count: 1349
        },
        priceCents: 1932,
        keywords: ['morningstar', 'Weapon', 'spike']
    },
    {
        id: 'id23',
        image: 'assets/images/products/Poleaxe.png',
        name: 'Poleaxe',
        rating: {
            stars: 4.5,
            count: 1960
        },
        priceCents: 2471,
        keywords: ['poleaxe', 'axe', 'Weapon']
    },
    {
        id: 'id24',
        image: 'assets/images/products/Quiver.png',
        name: 'Quiver',
        rating: {
            stars: 4,
            count: 1246
        },
        priceCents: 969,
        keywords: ['quiver', 'arrows', 'archery']
    },
    {
        id: 'id25',
        image: 'assets/images/products/Rum.png',
        name: 'Rum',
        rating: {
            stars: 5,
            count: 7812
        },
        priceCents: 1090,
        keywords: ['rum', 'drink', 'pirate']
    },
    {
        id: 'id26',
        image: 'assets/images/products/Spear.png',
        name: 'Spear',
        rating: {
            stars: 4.5,
            count: 1738
        },
        priceCents: 2060,
        keywords: ['spear', 'Weapon', 'thrust']
    },
    {
        id: 'id27',
        image: 'assets/images/products/Knight-Foot-Armor.png',
        name: 'Knight Foot Armor',
        rating: {
            stars: 4,
            count: 902
        },
        priceCents: 1799,
        keywords: ['Armor', 'Defense', 'Foot']
    },
    {
        id: 'id28',
        image: 'assets/images/products/Knight-Leg-Armor.png',
        name: 'Knight Leg Armor',
        rating: {
            stars: 4.5,
            count: 1020
        },
        priceCents: 2199,
        keywords: ['Armor', 'Defense', 'Leg']
    },
    {
        id: 'id29',
        image: 'assets/images/products/Poison.png',
        name: 'Poison',
        rating: {
            stars: 5,
            count: 3492
        },
        priceCents: 1099,
        keywords: ['Posion', 'Bottle']
    },
    {
        id: 'id30',
        image: 'assets/images/products/Saddle.png',
        name: 'Saddle',
        rating: {
            stars: 4.0,
            count: 2392
        },
        priceCents: 1549,
        keywords: ['Saddle', 'Seat']
    },
    {
        id: 'id31',
        image: 'assets/images/products/WizardHat.png',
        name: 'Wizard Hat',
        rating: {
            stars: 4.0,
            count: 908
        },
        priceCents: 2049,
        keywords: ['Hat', 'Wizard', 'Magic']
    },
    {
        id: 'id32',
        image: 'assets/images/products/WizardWand.png',
        name: 'Wizard Wand',
        rating: {
            stars: 4.5,
            count: 1034
        },
        priceCents: 2590,
        keywords: ['Wand', 'Weapon', 'Magic']
    }
];
