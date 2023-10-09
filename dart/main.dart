// ??=

void main () {
  String? name;
  name ??= 'nicolas';
  name = null;
  name ??= 'jauc';
  print(name);
}