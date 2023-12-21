import originalDarkBag from "../../../public/baci/Original-dark-bag.svg";
import originalDarkBox from "../../../public/baci/Original-dark-box.svg";
import originalDarkBoxMaxi from "../../../public/baci/Original-dark-box-maxi.svg";
import originalDarkBijou from "../../../public/baci/Original-dark-bijou.svg";
import originalDarkTube from "../../../public/baci/Original-dark-tube.svg";
import originalMilkBag from "../../../public/baci/Original-milk-bag.svg";
import originalMilkBox from "../../../public/baci/Original-milk-box.svg";
import originalMilkBijou from "../../../public/baci/Original-milk-bijou.svg";
import originalMilkTube from "../../../public/baci/Original-milk-tube.svg";
import extraDarkBijou from "../../../public/baci/Extra-dark-bijou.svg";
import extraDarkTube from "../../../public/baci/Extra-dark-tube.svg";
// MOBILE
import originalDarkBagMobile from "../../../public/baci/Mobile/Original-dark-bag.png";
import originalDarkBoxMobile from "../../../public/baci/Mobile/Original-dark-box.png";
import originalDarkBoxMaxiMobile from "../../../public/baci/Mobile/Original-dark-box-maxi.png";
import originalDarkBijouMobile from "../../../public/baci/Mobile/Original-dark-bijou.png";
import originalDarkTubeMobile from "../../../public/baci/Mobile/Original-dark-tube.png";
import originalMilkBagMobile from "../../../public/baci/Mobile/Original-milk-bag.png";
import originalMilkBoxMobile from "../../../public/baci/Mobile/Original-milk-box.png";
import originalMilkBijouMobile from "../../../public/baci/Mobile/Original-milk-bijou.png";
import originalMilkTubeMobile from "../../../public/baci/Mobile/Original-milk-tube.png";
import extraDarkBijouMobile from "../../../public/baci/Mobile/Extra-dark-bijou.png";
import extraDarkTubeMobile from "../../../public/baci/Mobile/Extra-dark-tube.png";

// Original Dark products
const originalDark = [
  {
    brand: "Baci",
    name: "كيس الشوكولاتة الداكنة الأصلي",
    product_description:
      "إن تقديم كيس شوكولاتة باتشي بيروجينا الداكنة هو الطريقة المثلى لمشاركة لحظة حلوة من الاستمتاع مع الأصدقاء، أو الزملاء، أو أفراد العائلة. تحيط شوكولاتة الداكنة المخملية بحبة كاملة من البندق، ويغطيها من الداخل الكاكاو وحبيبات البندق! من المستحيل مقاومتها.",
    price_a: "١٦",
    price_b: "٣٠",
    img: originalDarkBag,
    mob_img: originalDarkBagMobile,
    id: 0,
  },
  {
    brand: "Baci",
    name: "علبة الشوكولاتة الداكنة الأصلية",
    product_description:
      "إن علبة شوكولاتة باتشي بيروجينا الثمينة والأنيقة هي هدية مثالية لترك بصمة جميلة لمن تقدمها له. إن علبة شوكولاتة باتشي بيروجينا الداكنة جذابة جداً لحاستي النظر والتذوق، كما أنها تثير المشاعر حتى في المناسبات الأكثر رسمية.",
    price_a: "٢٥",
    price_b: "٥٠",
    img: originalDarkBox,
    mob_img: originalDarkBoxMobile,
    id: 1,
  },
  {
    brand: "Baci",
    name: "علبة الشوكولاتة الداكنة 'ماكسي' الأصلية",
    product_description:
      "إن علبة شوكولاتة باتشي بيروجينا الثمينة والأنيقة هي هدية مثالية لترك بصمة جميلة لمن تقدمها له. إن علبة شوكولاتة باتشي بيروجينا الداكنة جذابة جداً لحاستي النظر والتذوق، كما أنها تثير المشاعر حتى في المناسبات الأكثر رسمية.",
    price_a: "٥٠",
    price_b: "٨٠",
    img: originalDarkBoxMaxi,
    mob_img: originalDarkBoxMaxiMobile,
    id: 2,
  },
  {
    brand: "Baci",
    name: "جواهر الشوكولاتة الداكنة الأصلية",
    product_description:
      "إنها مغلفة بطريقة راقية، وهي قيمة مثل الجوهرة، مناسبة لكل المناسبات. فاجئ ضيوفك في البيت بتقديم علبة شوكولاتة باتشي بيروجينا الداكنة، فسوف تكون لذيذة ولا تقاوم. إن تقديم شوكولاتة باتشي بيروجينا الداكنة هي أفضل طريقة للتعبير عن اهتمامك بضيوفك.",
    price_a: "٢٥",
    price_b: "٤٠",
    img: originalDarkBijou,
    mob_img: originalDarkBijouMobile,
    id: 3,
  },
  {
    brand: "Baci",
    name: "أنبوب الشوكولاتة الداكنة الأصلية",
    product_description:
      "إنها مغلفة بطريقة راقية، وهي قيمة مثل الجوهرة، مناسبة لكل المناسبات. فاجئ ضيوفك في البيت بتقديم علبة شوكولاتة باتشي بيروجينا الداكنة، فسوف تكون لذيذة ولا تقاوم. إن تقديم شوكولاتة باتشي بيروجينا الداكنة هي أفضل طريقة للتعبير عن اهتمامك بضيوفك.",
    price_a: "٥",
    price_b: "١٠",
    img: originalDarkTube,
    mob_img: originalDarkTubeMobile,
    id: 4,
  },
];

// Extra Dark products
const extraDark = [
  {
    brand: "Baci",
    name: "جواهر الشوكولاتة الداكنة جداً",
    product_description:
      "إن شوكولاتة باتشي بيروجينا الداكنة جداً بنسبة 70%، هي مزيج راقي لعشاق الشوكولاتة الداكنة. أما التغليف الأسود، فيزدان بنجوم ذهبية ثمينة، وبداخله يتحوي على رسالة حب حلوة.",
    price_a: "٢٥",
    price_b: "٤٠",
    img: extraDarkBijou,
    mob_img: extraDarkBijouMobile,
    id: 5,
  },
  {
    brand: "Baci",
    name: "أنبوب الشوكولاتة الداكنة جداً",
    product_description:
      "إن شوكولاتة باتشي بيروجينا الداكنة جداً بنسبة 70%، هي مزيج راقي لعشاق الشوكولاتة الداكنة. أما التغليف الأسود، فيزدان بنجوم ذهبية ثمينة، وبداخله يتحوي على رسالة حب حلوة.",
    price_a: "٥",
    price_b: "١٠",
    img: extraDarkTube,
    mob_img: extraDarkTubeMobile,
    id: 6,
  },
];
const originalMilk = [
  {
    brand: "Baci",
    name: "كيس شوكولاتة الحليب",
    product_description:
      "إن تقديم كيس شوكولاتة باتشي بيروجينا بالحليب هو الطريقة المثلى لمشاركة لحظة حلوة من الاستمتاع مع الأصدقاء، أو الزملاء، أو أفراد العائلة. تحيط شوكولاتة الحليب المخملية بحبة كاملة من البندق، ويغطيها من الداخل الكاكاو وحبيبات البندق! من المستحيل مقاومتها.",
    price_a: "١٦",
    price_b: "٣٠",
    img: originalMilkBag,
    mob_img: originalMilkBagMobile,
    id: 7,
  },
  {
    brand: "Baci",
    name: "علبة شوكولاتة الحليب",
    product_description:
      "إن علبة شوكولاتة باتشي بيروجينا الثمينة والأنيقة هي هدية مثالية لترك بصمة جميلة لمن تقدمها له. إن علبة شوكولاتة باتشي بيروجينا بالحليب جذابة جداً لحاستي النظر والتذوق، كما أنها تثير المشاعر حتى في المناسبات الأكثر رسمية.",
    price_a: "٢٥",
    price_b: "٥٠",
    img: originalMilkBox,
    mob_img: originalMilkBoxMobile,
    id: 8,
  },
  {
    brand: "Baci",
    name: "جواهر شوكولاتة الحليب",
    product_description:
      "إنها مغلفه بطريقة راقية، وهي قيمة مثل الجوهرة، مناسبة لكل المناسبات. فاجيء ضيوفك في البيت بتقديم علبة شوكولاتة باتشي بيروجينا بالحليب، فسوف تكون لذيذة ولا تقاوم. إن تقديم شوكولاتة باتشي بيروجينا بالحليب هي أفضل طريقة للتعبيرعن إهتمامك بضيوفك.",
    price_a: "٢٥",
    price_b: "٤٠",
    img: originalMilkBijou,
    mob_img: originalMilkBijouMobile,
    id: 9,
  },
  {
    brand: "Baci",
    name: "أنبوب شوكولاتة الحليب",
    product_description:
      "يمكنك أن تفاجيء أصدقائك المقربين ومشاركتهم لحظات الاستمتاع بالطعم اللذيذ الذي لا يقاوم مع القهوة، أو بعد العشاء عندما تقدم لهم شوكولاتة باتشي بيروجينا في تغليفها المخملي الرائع.",
    price_a: "٥",
    price_b: "١٠",
    img: originalMilkTube,
    mob_img: originalMilkTubeMobile,
    id: 10,
  },
];

export { originalDark, originalMilk, extraDark };
