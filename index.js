function superbowlWin (record) { 
const found = record.find((element) => element.result == "W");
console.log (found)
if (found) {
return found.year
} 
}
