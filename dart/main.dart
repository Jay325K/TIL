// ??
// ?=

String capitalizeName(String? name) =>
    name?.toUpperCase() ?? 'Anono';



void main() {
  capitalizeName('james');
  capitalizeName(null);
}
