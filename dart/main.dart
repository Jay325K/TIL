class Player {
  late final String name;
  late int xp;
  String team;
  int age;

  Player({required this.name, 
  required this.xp, 
  required this.team, 
  required this.age});

  void sayHello() {
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player(
    name: "nico",
    xp: 100,
    team: "team1",
    age: 20,
  );
  player.sayHello();
  var player2 = Player(
    name: "nico2",
    xp: 1002,
    team: "team2",
    age: 2202,
  );
  player2.sayHello();
}
