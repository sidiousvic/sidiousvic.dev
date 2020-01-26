// assign canvas to variable and get gontext
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// define canvas size
canvas.width = innerWidth;
canvas.height = innerHeight;

// create mouse object
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

// create score variable
let score = 0;

//// EVENT LISTENERS
// map mouse movement to mouse object
addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// resize canvas on window resize
addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  // reset the game on resize
  init();
});

//// UTILITY FUNCTIONS
// calculate distance
function distance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// get random integer from min max range
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//// OBJECT PROTOTYPE METHODS
// draw image canvas 2D API
Object.prototype.draw = function() {
  c.drawImage(this.img, this.x, this.y, this.width, this.height);
};

// update the drawing
Object.prototype.update = function() {
  this.draw();
};

//// GAME OBJECTS
function Player(x, y, img, width, height) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.width = width;
  this.height = height;

  // this.update = function() {};
}

function Coin(x, y, img, width, height) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.width = width;
  this.height = height;
}

function Enemy(x, y, img, width, height) {
  // assign this to a variable to always refer to this object
  // through closure regardless of execution context
  let _this = this;

  this.x = x;
  this.y = y;
  this.img = img;
  this.width = width;
  this.height = height;
  this.velocity = {
    x: -2,
    y: -2
  };

  this.update = function(enemies) {
    _this.draw();

    for (let i = 0; i < enemies.length; i++) {
      if (_this === enemies[i]) continue;
      if (distance(_this.x, _this.y, enemies[i].x, enemies[i].y) - 20 < 0) {
        // HITBOX ^^^
        _this.velocity.x = -_this.velocity.x;
        _this.velocity.y = -_this.velocity.y;
        if (_this.img === document.getElementById('enemy')) {
          _this.img = document.getElementById('enemyR');
        } else {
          _this.img = document.getElementById('enemy');
        }
      }

      // collision event
      if (distance(player.x, player.y, enemies[i].x, enemies[i].y) - 20 < 0) {
        enemies.length = 0; // hitbox ^^^

        // update score
        document.getElementById('score').innerHTML =
          String(score - 1) + ' POINTS';
        score = 0;

        // relocate coin
        coin.x = randomIntFromRange(
          window.innerWidth + 50 - window.innerWidth,
          window.innerWidth - 50
        );
        coin.y = randomIntFromRange(
          window.innerHeight + 50 - window.innerHeight,
          window.innerHeight - 50
        );
      }
    }

    // max number of enemies to win
    if (enemies.length > 99) {
      enemies.length = 0;
      document.getElementById('score').innerHTML = 'INSERT WIN MESSAGE HERE';
      score = 0;
    }

    // bounce enemy off walls
    if (_this.x <= 0 || _this.x >= innerWidth) {
      _this.velocity.x = -_this.velocity.x;
      if (_this.img === document.getElementById('enemy')) {
        _this.img = document.getElementById('enemyR');
      } else {
        _this.img = document.getElementById('enemy');
      }
    }

    if (_this.y <= 0 || _this.y >= innerHeight) {
      _this.velocity.y = -_this.velocity.y;
    }

    // move the enemy
    _this.x += _this.velocity.x;
    _this.y += _this.velocity.y;
  };
}

// Implementation
let player;
let enemies;
let coin;

function init() {
  // create enemies array
  enemies = [];

  // instantiate player
  player = new Player(
    mouse.x,
    mouse.y,
    document.getElementById('blackdog'),
    50,
    50
  );

  // init coin xy coordinates within canvas boundaries
  let sx = randomIntFromRange(
    window.innerWidth + 50 - window.innerWidth,
    window.innerWidth - 50
  );
  let sy = randomIntFromRange(
    window.innerHeight + 50 - window.innerHeight,
    window.innerHeight - 50
  );

  // instantiate coin
  coin = new Coin(sx, sy, document.getElementById('coin'), 50, 50);

  // push initial enemies
  for (var i = 0; i < 3; i++) {
    // number of enemies^^^

    // avoid collision with player on init
    let radius = 50;
    let _x = randomIntFromRange(radius, window.innerWidth - radius);
    let _y = randomIntFromRange(radius, window.innerHeight - radius);

    if (i !== 0) {
      for (var j = 0; j < enemies.length; j++) {
        if (distance(_x, _y, enemies[j].x, enemies[j].y) - 50 < 0) {
          // hitbox ^^^
          _x = randomIntFromRange(radius, window.innerWidth - radius);
          _y = randomIntFromRange(radius, window.innerHeight - radius);

          j = -1;
        }
      }
    }
    // push initial enemies
    enemies.push(new Enemy(_x, _y, document.getElementById('enemy'), 30, 30));
  }
}

//// ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
  // clear canvas on new frame
  c.clearRect(0, 0, canvas.width, canvas.height);

  // map player to mouse and update/draw on new frame
  player.x = mouse.x;
  player.y = mouse.y;
  player.update();

  // update every enemy in enemies array on new frame
  enemies.forEach(function(enemy) {
    enemy.update(enemies);
  });

  // listen for collision with coin and avoid collision on new frame
  if (distance(player.x, player.y, coin.x, coin.y) < 25) {
    var x = randomIntFromRange(
      window.innerWidth + 50 - window.innerWidth,
      window.innerWidth - 50
    );
    var y = randomIntFromRange(
      window.innerHeight + 50 - window.innerHeight,
      window.innerHeight - 50
    );
    coin.x = randomIntFromRange(
      window.innerWidth + 50 - window.innerWidth,
      window.innerWidth - 50
    );
    coin.y = randomIntFromRange(
      window.innerHeight + 50 - window.innerHeight,
      window.innerHeight - 50
    );

    var radius = 50;
    for (var j = 0; j < enemies.length; j++) {
      if (distance(x, y, enemies[j].x, enemies[j].y) - 50 < 0) {
        //hitbox ^^^
        x = randomIntFromRange(radius, window.innerWidth - radius);
        y = randomIntFromRange(radius, window.innerHeight - radius);

        j = -1;
      }
    }

    enemies.push(new Enemy(x, y, document.getElementById('enemy'), 30, 30));
    document.getElementById('score').innerHTML = String(score);
    score++;
  }

  coin.update();
  // console.log(`x: ${mouse.x} y: ${mouse.y}`);
}

init();
animate();

let vicToppings = [
  { name: 'cilantro', grams: 4 },
  {
    name: 'picoDeGallo',
    grams: 4
  }
];

function addSalsa(toppings, type) {
  toppings.push({
    name: 'salsa',
    type: 'verde'
  });
  return toppings;
}

function makeTaco(tortilla, carne, toppings, salsa) {
  toppings.map(topping => {
    if (topping.name === 'cilantro') {
      if (topping.grams > 3) {
        topping.grams = 3;
      }
    }
  });

  if (!salsa) toppings = addSalsa(toppings);

  tortilla.push(carne, toppings, salsa);

  return tortilla;
}

console.log(makeTaco([], 'barbacoa', vicToppings, false));
