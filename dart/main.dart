class Player {
  final String name = 'nico';
  int xp = 1500;

  void sayHello() {
    print('Hi my name is $name');
  }

}

void main () {
  var player = Player();
  player.sayHello();
}