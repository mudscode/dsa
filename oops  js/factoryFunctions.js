function factoryObject(objectType) {
  return {
    objectType,
    type: function () {
      console.log(`I'm a ${objectType} function.`);
    },
  };
}

const one = factoryObject("Factory");
console.log(one.objectType);
console.log(one.type());
