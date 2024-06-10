//To use an external dependancy, we always have to download it first

const _ = require("lodash")

items = [1,[2,[3,[4,[5]]]]]
newItems = _.flattenDeep(items)

console.log(newItems)