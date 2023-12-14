import dark70 from "../../public/recettes/dark-70.svg";
import darkCrunchyAlmonds from "../../public/recettes/dark-crunchy-almonds.svg";
import darkCaramelSalt from "../../public/recettes/dark-caramel-salt.svg";
import darkWholeAlmonds from "../../public/recettes/dark-whole-almonds-new.svg";
import darkWholeHazelnuts from "../../public/recettes/dark-whole-hazelnut.svg";
// new
import darkPralineAmande from "../../public/recettes/dark-praline-amande.svg";
import darkCrunchyHazelnut from "../../public/recettes/dark-roasted-hazelnut-new.svg";
import milkCaramelGanache from "../../public/recettes/milk-caramel-ganache.svg";
import milkMuesli from "../../public/recettes/milk-museli.svg";
import milkPraline from "../../public/recettes/milk-praline.svg";
import milkCrunchyAlmond from "../../public/recettes/milk-crunchy-almond.svg";
import milkWholeHazelnut from "../../public/recettes/milk-whole-hazelnut-new.svg";
import milkCaramelAlmondsAndHazelnut from "../../public/recettes/milk-caramel-almonds-hazelnut.svg";
// MOBILE
import dark70Mobile from "../../public/recettes/Mobile/dark-70-mobile.png";
import darkCrunchyAlmondsMobile from "../../public/recettes/Mobile/dark-crunchy-almonds-mobile.png";
import darkCaramelSaltMobile from "../../public/recettes/Mobile/dark-caramel-salt-mobile.png";
import darkWholeAlmondsMobile from "../../public/recettes/Mobile/dark-whole-almonds-new-mobile.png";
import darkWholeHazelnutsMobile from "../../public/recettes/Mobile/dark-whole-hazelnut-mobile.png";
import milkMuesliMobile from "../../public/recettes/Mobile/milk-museli-mobile.png";
import milkPralineMobile from "../../public/recettes/Mobile/milk-praline-mobile.png";
import milkCrunchyAlmondMobile from "../../public/recettes/Mobile/milk-crunchy-almond-mobile.png";
import milkWholeHazelnutMobile from "../../public/recettes/Mobile/milk-whole-hazelnut-new-mobile.png";
import milkCaramelAlmondsAndHazelnutMobile from "../../public/recettes/Mobile/milk-caramel-almonds-hazelnut-mobile.png";
// new
import darkPralineAmandeMobile from "../../public/recettes/Mobile/dark-praline-amande.png";
import darkCrunchyHazelnutMobile from "../../public/recettes/Mobile/dark-roasted-hazelnut-new.png";
import milkCaramelGanacheMobile from "../../public/recettes/Mobile/milk-caramel-ganache.png";

const lesRecettesDeLAtelier = [
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Muesli & Caramel",
    product_description:
      "Let yourself be tempted by a bar of milk chocolate as fine as it is delicious and enhanced by fine, crispy pieces of caramel with a hint of salt. A delicious pure cocoa butter chocolate with no artificial flavors.",
    price_a: 12,
    price_b: 18,
    img: milkMuesli,
    mob_img: milkMuesliMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Praline",
    product_description:
      "Praline is a traditional filling in chocolate confectionery. Discover our unique recipe with notes of hazelnuts and vanilla delicately coated with an extra-fine milk chocolate that is pure cocoa butter.",
    price_a: 12,
    price_b: 18,
    img: milkPraline,
    mob_img: milkPralineMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Crunchy Almond",
    product_description:
      "Discover our new recipe, even more intense in almonds! Let yourself be tempted by a bar of milk chocolate as fine as it is delicious and enhanced by slivers of toasted and crunchy almonds. A delicious pure cocoa butter chocolate with no artificial flavors.",
    price_a: 12,
    price_b: 18,
    img: milkCrunchyAlmond,
    mob_img: milkCrunchyAlmondMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Caramel, Almonds & Hazelnuts",
    product_description:
      "Let yourself be tempted by a melting milk chocolate enhanced by a delicious almond caramel as well as whole almonds and hazelnuts. A pure cocoa butter chocolate with no artificial flavors.",
    price_a: 12,
    price_b: 18,
    img: milkCaramelAlmondsAndHazelnut,
    mob_img: milkCaramelAlmondsAndHazelnutMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Milk Caramel Ganache",
    product_description:
      "Let yourself be tempted by a delicious bar of milk chocolate combined with a delicate caramel ganache filling. A pure cocoa butter chocolate with no artificial flavors.",
    price_a: 12,
    price_b: 18,
    img: milkCaramelGanache,
    mob_img: milkCaramelGanache,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Crunchy Hazelnut",
    product_description:
      "Let yourself be tempted by a delicious bar of extra-fine dark chocolate combined with a delicate roasted crunchy hazelnut pieces. A pure cocoa butter chocolate with no artificial flavors.",
    price_a: 12,
    price_b: 18,
    img: darkCrunchyHazelnut,
    mob_img: darkCrunchyHazelnutMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Praline Amande",
    product_description:
      "Let yourself be tempted by a delicious bar of extra-fine dark chocolate combined with a delicate almond praline filling and caramelized almond pieces. A pure cocoa butter chocolate with no artificial flavors.",
    price_a: 12,
    price_b: 18,
    img: darkPralineAmande,
    mob_img: darkPralineAmandeMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Crunchy Almonds",
    product_description:
      "Discover our new recipe, even more intense in almonds! Let yourself be tempted by a bar of dark chocolate as fine as it is delicious enhanced by slivers of toasted and crunchy almonds. .",
    price_a: 12,
    price_b: 18,
    img: darkCrunchyAlmonds,
    mob_img: darkCrunchyAlmondsMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark Caramel Salt",
    product_description:
      "Let yourself be tempted by a bar of dark chocolate as fine as it is delicious and enhanced by fine, crispy pieces of caramel with a hint of salt.",
    price_a: 12,
    price_b: 18,
    img: darkCaramelSalt,
    mob_img: darkCaramelSaltMobile,
  },
  {
    brand: "LES RECETTES DE L'ATELIER",
    name: "Dark 70% Cacao",
    product_description:
      "Let yourself be tempted by a 70% cocoa dark chocolate bar that reveals all the flavor and richness of cocoa, with just the 3 essential ingredients to make delicious chocolate: cocoa mass, cocoa butter, sugar , and that's all.",
    price_a: 12,
    price_b: 18,
    img: dark70,
    mob_img: dark70Mobile,
  },
];

export default lesRecettesDeLAtelier;

// {
//   brand: "LES RECETTES DE L'ATELIER",
//   name: "Dark Whole Almonds",
//   product_description:
//     "Let yourself be tempted by a melting dark chocolate enhanced by delicious, delicately roasted whole almonds. A pure cocoa butter chocolate with no artificial flavors.",
//   price_a: 12,
//   price_b: 18,
//   img: darkWholeAlmonds,
//   mob_img: darkWholeAlmondsMobile,
// },
// {
//   brand: "LES RECETTES DE L'ATELIER",
//   name: "Dark Whole Hazelnuts",
//   product_description:
//     "Let yourself be tempted by a melting dark chocolate enhanced by delicious, delicately roasted whole hazelnuts. A pure cocoa butter chocolate with no artificial flavors.",
//   price_a: 12,
//   price_b: 18,
//   img: darkWholeHazelnuts,
//   mob_img: darkWholeHazelnutsMobile,
// },

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
//     name: "Milk Crunchy Almond",
//     product_description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat velit in suscipit mattis. Donec rhoncus risus in facilisis ullamcorper. Sed tortor diam, commodo quis nibh id, egestas elementum nulla. Sed purus ante, malesuada ac rutrum a, rutrum vel lacus. Suspendisse blandit felis et purus lobortis ullamcorper",
//     price_a: 30,
//     price_b: 20,
//     img: milkCrunchyAlmond,
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
//     img: milkWholeHazelnut,
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
