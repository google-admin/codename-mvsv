function FreeTile() {
}
FreeTile.prototype.draw = function(container, x, y) {
  Tile.draw(this, container, x, y, "empty.png");
}
