const Query = {
  mainCards: () => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, ctx) => {
    let animalToBefound = ctx.animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animalToBefound;
    // console.log(args);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    let category = categories.find((cat) => {
      return cat.slug === args.slug;
    });
    return category;
  },
};

module.exports = Query;
