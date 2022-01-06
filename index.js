// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  let example;
  return (example = [...array, item]);
  // let a
  // return a = [...array.push(item)];
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  let example;
  return (example = [item, ...array]);
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
    let example;
    return (example = [...array.slice(0,index), item, ...array.slice(index)]
    );
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
    let example;
    return (example = [...array.slice(0,index), item, ...array.slice(index+1)]);
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  let example;
  return (example = [...array.slice(0, index), ...array.slice(index + 1)])
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
  let newObj = {...object};
  newObj.name = newName;
  return newObj;
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
  let newObj = {...object};
  if (newObj.needsACupOfTea) {
    newObj.needsACupOfTea = false;
    return newObj;
  } else if (newObj.needsACupOfTea === false) {
    newObj.needsACupOfTea = true;
    return newObj;
  }
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
  let example = [...array];
  if (example[index].completed) {
    example[index].completed = false;
    return example;
  } else if (example[index].completed === false) {
    example[index].completed = true;
    return example;
  }
}
