String sayHello({String name = "anon", 
                int age = 99, 
                String country = "wakanda"}) {
  return "Hello $name, you are $age, and you are $country";
}

// void main() {
// print(sayHello('nico', 19, 'cuba'));
// }

void main() {
  print(sayHello(  ));
}
