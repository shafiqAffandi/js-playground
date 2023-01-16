// this data should be in db
// and processed in BE

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

const chancePrct = [51, 32, 11, 5, 1];

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

  totalPower: 0,
};

for (let i = 1; i <= 12; i++) {
  setTimeout(() => {
    catchNow();
  }, 1000 * i);
}
totalPower(loadout);

function catchNow() {
  if (loadout.ammoObj.ammoQty === 0) {
    console.log(`
=========================================
|\t\tout of ammo!\t\t|
=========================================
  `);
    return;
  }
  const [isCatch, dragonCatched] = catchDragon();
  updateLoadoutQty();
  if (isCatch) {
    console.log(`
=========================================
You Caught a ${dragonCatched.name}!
=========================================
  `)
  }
  else {
    console.log(`
=========================================
Ouch! A ${dragonCatched.name} dodged your bullet.
=========================================
  `)
  }
}

function totalPower() {
  const weaponPower = weapon[loadout.weaponCode].power;
  const ammoPower = ammo[loadout.ammoObj.ammoCode].power;
  loadout.totalPower = weaponPower + ammoPower;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function coreMultiply() {
  if (loadout.coreObj.coreQty === 0) return 0;
  const coreMult = core[loadout.coreObj.coreCode].coreMultiplier;
  const chances = Math.random();
  return coreMult + chances;
}

function catchDragon() {
  const catchPower = loadout.totalPower * (1 + coreMultiply());
  console.log(catchPower);
  const dragon = dragons[getRandom(dragons.length)];
  if (dragon.power > catchPower) return [false, dragon];
  return [true, dragon];
}

function updateLoadoutQty() {
  loadout.ammoObj.ammoQty -= loadout.ammoObj.ammoQty > 0 ? 1 : 0;
  loadout.coreObj.coreQty -= loadout.coreObj.coreQty > 0 ? 1 : 0;
}