function Magician() {
  this.actor = new Actor();
  this.animTime = 0;
}

Magician.prototype.accelerate = function(x) {
  this.actor.accelerate(x);
};

Magician.prototype.tick = function(delta) {
  this.actor.tick(delta);
  this.node.style.top = this.actor.y * C.size + 'px';
  this.node.style.left = this.actor.x * C.size + 'px';
  this.animTime += delta;
  if (this.actor.speed != 0) {
    var src = 'gfx/magician_';
    if (this.actor.direction > 0) {
      src += 'ltor';
    } else {
      src += 'rtol';
    }
    src += Math.floor(this.actor.animTime % (C.animStep * 2) / C.animStep) + 1;
    src += '.png';
    this.node.src = src;
  }
};

Magician.prototype.draw = function(container) {
  this.node = document.createElement('img');
  this.node.src = 'gfx/magician_ltor1.png';
  this.node.className = 'magician';
  container.appendChild(this.node);
}
