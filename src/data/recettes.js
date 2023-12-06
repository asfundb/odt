import darkRoastedHazelnut from "../../public/recettes/dark-roasted-hazelnut.svg";
import darkCrunchyAlmonds from "../../public/recettes/dark-crunchy-almonds.svg";
import darkCaramelSalt from "../../public/recettes/dark-caramel-salt.svg";
import darkWholeAlmonds from "../../public/recettes/dark-whole-almonds.svg";
import darkWholeHazelnuts from "../../public/recettes/dark-whole-hazelnut.svg";
import milkCaramelSalt from "../../public/recettes/milk-caramel-salt.svg";
import milkPraline from "../../public/recettes/milk-praline.svg";
import milkCaramelAlmondsAndHazelnut from "../../public/recettes/milk-caramel-almonds-hazelnut.svg";

const lesRecettesDeLAtelier = [
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Roasted Hazelnuts",
    product_description:
      "Let yourself be tempted by a melting dark chocolate enhanced by delicious, delicately roasted whole hazelnuts. A pure cocoa butter chocolate with no artificial flavors. And as there is no great chocolate without great cocoa, our cocoa beans are carefully selected and come from Rainforest Alliance certified plantations.",
    price_a: 30,
    price_b: 45,
    img: darkRoastedHazelnut,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Crunchy Almonds",
    product_description:
      "Discover our new recipe, even more intense in almonds! Let yourself be tempted by a bar of dark chocolate as fine as it is delicious enhanced by slivers of toasted and crunchy almonds. A delicious pure cocoa butter chocolate with no artificial flavors. And as there is no great chocolate without great cocoa, our cocoa beans are carefully selected and come from Rainforest Alliance certified plantations.",
    price_a: 30,
    price_b: 45,
    img: darkCrunchyAlmonds,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Caramel Salt",
    product_description:
      "Let yourself be tempted by a bar of dark chocolate as fine as it is delicious and enhanced by fine, crispy pieces of caramel with a hint of salt. A delicious pure cocoa butter chocolate with no artificial flavors. And as there is no great chocolate without great cocoa, our cocoa beans are carefully selected and come from Rainforest Alliance certified plantations. * More intense caramel flavor.",
    price_a: 30,
    price_b: 45,
    img: darkCaramelSalt,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Whole Almonds",
    product_description:
      "Let yourself be tempted by a melting dark chocolate enhanced by delicious, delicately roasted whole almonds. A pure cocoa butter chocolate with no artificial flavors. And as there is no great chocolate without great cocoa, our cocoa beans are carefully selected and come from Rainforest Alliance certified plantations.",
    price_a: 30,
    price_b: 45,
    img: darkWholeAlmonds,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Whole Hazelnuts",
    product_description:
      "Let yourself be tempted by a melting dark chocolate enhanced by delicious, delicately roasted whole hazelnuts. A pure cocoa butter chocolate with no artificial flavors. And as there is no great chocolate without great cocoa, our cocoa beans are carefully selected and come from Rainforest Alliance certified plantations.",
    price_a: 30,
    price_b: 45,
    img: darkWholeHazelnuts,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Caramel Salt",
    product_description:
      "Let yourself be tempted by a bar of milk chocolate as fine as it is delicious and enhanced by fine, crispy pieces of caramel with a hint of salt. A delicious pure cocoa butter chocolate with no artificial flavors. And as there is no great chocolate without great cocoa, our cocoa beans are carefully selected and come from Rainforest Alliance certified plantations.",
    price_a: 30,
    price_b: 45,
    img: milkCaramelSalt,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Praline",
    product_description:
      "Praline is a traditional filling in chocolate confectionery. Discover our unique recipe with notes of hazelnuts and vanilla delicately coated with an extra-fine milk chocolate that is pure cocoa butter, made from quality cocoa beans rigorously selected as part of the NESTLE Cocoa Plan and from certified plantations Rainforest Alliance. A gourmet harmony born from remarkable know-how.",
    price_a: 30,
    price_b: 45,
    img: milkPraline,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Caramel Almonds, Hazelnuts",
    product_description:
      "Let yourself be tempted by a melting milk chocolate enhanced by a delicious almond caramel as well as whole almonds and hazelnuts. A pure cocoa butter chocolate with no artificial flavors.",
    price_a: 30,
    price_b: 45,
    img: milkCaramelAlmondsAndHazelnut,
  },
];

// const lesRecettesDeLAtelier = [
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark 70%",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark 80%",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Roasted Hazelnuts",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Crunchy Almonds",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Caramel Salt",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Orange",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Almond Paste/Praline",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Caramel Almond Biscuit",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Cranberries and Almonds",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Blueberries, Almonds",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Muesli",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Whole Almonds",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Whole Hazelnuts",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Raisins, Almonds and Hazelnuts",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Dark Chocolate Tasting Squares with Cocoa Nibs",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Caramel Salt",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Crunchy Almond",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Paste/Praline",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Caramel Ganache Paste/Praline",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Hazelnut",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Cranberries Almonds Hazelnuts",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Raisins, Almonds and Hazelnuts",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Salted Caramel Muesli",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Caramel Almonds and Hazelnuts",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Hazelnut Biscuit",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
//   {
//     brand: "LES RECETTES DE L'ATELIER",
//     name: "Milk Chocolate Almond Tasting Squares",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: "kitkatt-ball-all",
//   },
// ];

export default lesRecettesDeLAtelier;
