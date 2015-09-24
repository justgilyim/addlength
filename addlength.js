/**
 * Created by Gilbert on 9/24/2015.
 */
var temparray = ["apple", "pear"];

function addLength(words){
    return _.mapObject(words, function(words){
        return words + " " +  words.length;
    })
}
console.log(addLength(temparray));
