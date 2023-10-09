typedef ListOfInts = List<int>;


ListOfInts reverseListOfNumbers(ListOfInts list) {
  var reversed = list.reversed;
  return reversed.toList();
}


void main () {
  reverseListOfNumbers([1, 2, 3, 4,]);
}