// this data should be in db
// and processed in BE

const chancePrct = {
  51: 1, 
  31: 2, 
  11: 3, 
  5: 4, 
  2: 5,
};

const dragons = {
  1: [
    {
      id: 1,
      name: "fishygon",
      type: "water",
      class: "common",
      power: 100,
      chance: 95,
    },
    {
      id: 2,
      name: "gtuna",
      type: "water",
      class: "common",
      power: 100,
      chance: 95,
    },
    {
      id: 3,
      name: "seagon",
      type: "water",
      class: "common",
      power: 200,
      chance: 90,
    },
  ],
  2: [
    {
      id: 4,
      name: "golphin",
      type: "water",
      class: "rare",
      power: 500,
      chance: 60,
    },
  ],
  3: [
    {
      id: 5,
      name: "goshark",
      type: "water",
      class: "special",
      power: 1000,
      chance: 30,
    },
  ]
}

const weapon = {
  classicBow: {
    id: 1,
    weaponName: "classic bow",
    type: "tactical",
    power: 50,
  },
  oldCrossbow: {
    id: 2,
    weaponName: "old crossbow",
    type: "tactical",
    power: 50,
  },
};

const ammo = {
  woorArrow: {
    id: 1,
    ammoName: "wood arrow",
    type: "tactical",
    power: 50,
  },
  steelArrow: {
    id: 2,
    ammoName: "steel arrow",
    type: "tactical",
    power: 100,
  },
};

const core = {
  shinyRock: {
    id: 1,
    coreName: "shiny rock",
    coreMultiplier: 0.1,
  },
  goldenRock: {
    id: 2,
    coreName: "golden rock",
    coreMultiplier: 0.3,
  },
  mythicalDiamond: {
    id: 3,
    coreName: "mythical diamond",
    coreMultiplier: 5,
  },
};

const gem = {
  triLeaf: {
    gemName: "Three Clover Leaf",
    gemLuckPrct: 5,
  },
  forLeaf: {
    gemName: "Four Clover Leaf",
    gemLuckPrct: 35,
  },
};

let loadout = {
  weaponCode: "classicBow",
  ammoObj: {
    ammoCode: "steelArrow",
    ammoQty: 10
  },
  coreObj: {
    coreCode: "goldenRock",
    coreQty: 5,
  },
  gemObj: {
    gemCode: "triLeaf",
    gemQty: 5
  },
  basePower: 0,
};

// catch here...
// for (let i = 1; i <= 12; i++) {
//   setTimeout(() => {
//     startCatch();
//   }, 1000 * i);
// }

function startCatch() {
  if(loadout.ammoObj.ammoQty === 0) {
    console.log('out of ammo\n========\n');
    return;
  }
  const getTier = randomizeTier();
}

function randomizeTier() {
  const prct = Math.ceil(Math.random()*100);
  return prct;
}

console.log(randomizeTier());
console.log(chancePrct);