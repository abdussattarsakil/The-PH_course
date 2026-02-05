const statement = 'I am a hard working person'
//'person working hard a am I'  --output
let statementArray = statement.split(" ")
console.log(statementArray)
let reverseArray=[];
for (let word of statementArray)
{
    console.log(word)
    reverseArray.unshift(word);
}
console.log(reverseArray);
console.log(reverseArray.join(" "))
