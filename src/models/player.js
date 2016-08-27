var Player = function (options) {
  if (options) {
    this.name = options.name || ""
  } else {
    this.name = ""
  }
}

Player.createDummyData = function () {
  return [
    new Player({
      name: "jenny"
    }),
    new Player({
      name: "amick"
    }),
    new Player({
      name: "luis"
    })
  ]
}

export default Player;
