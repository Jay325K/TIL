void main() {
  var oldFriends = ['nico', 'lynn'];
  var newFriends = [
    'lewis',
    'ralph',
    'james',
    for(var friend in oldFriends) "💖 $friend",
  ];
  print(newFriends);
}
