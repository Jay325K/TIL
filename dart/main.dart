class Player {
  late final String name, team;
  late int xp, age;

  Player(
      {required this.name,
      required this.xp,
      required this.team,
      required this.age});
 
  Player.createBluePlayer({
    required String name,
    required int age,
  })  : this.age = age,
        this.name = name,
        this.team = 'blue',
        this.xp = 0;

  void sayHello() {
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player.createBluePlayer(
    name: "nico",
    age: 20,
  );
  var redPlayer = Player.createBluePlayer(
    name: "nico",
    age: 20,
  );
}
