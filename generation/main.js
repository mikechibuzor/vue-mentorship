
const greatPrefix = (times) => {
    let prefixGreat = '';
    const greatCount = (times - 3) + 1;
    for(let i = 0; i < greatCount; i++){
        prefixGreat += 'great '
    }
    let finalResult = prefixGreat + 'grand '
    return finalResult;
}

const resultChecker = (obj1, obj2) =>{
    let concantResultHelperKey = '';
    for (const [key, value] of Object.entries(obj1)) {
      if(value !== null){
          concantResultHelperKey = key+value;
      }
    }
    return obj2[concantResultHelperKey];
}

const generation = (number, gender) => {
  const determineGender = gender === "m" ? "male" : "female"
  const relatedAncestorOrDescendant = number.toString().startsWith("-")
    ? "ancestor"
    : "descendant"
  const pickRelated = {
    ancestor: null,
    descendant: null,
  }
  const resultHelper = {
    ancestormale: "father",
    ancestorfemale: "mother",
    descendantmale: "son",
    descendantfemale: "daughter",
  }
  pickRelated[relatedAncestorOrDescendant] = determineGender

  let result = ""

  switch (Math.abs(number)) {
    case 0:
      result = "me!"
      break
    case 1:
      result = resultChecker(pickRelated, resultHelper)
      break
    case 2:
        result = "grand " + resultChecker(pickRelated, resultHelper)
      break
    default:
     result = resultChecker(pickRelated, resultHelper)
     result = greatPrefix(Math.abs(number)) + result
  }

  return result;
}

console.log(generation(-6, 'm'));