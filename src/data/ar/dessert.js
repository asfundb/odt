import ChocolateCookieDesktop from "../../../public/dessert/Desktop/Chocolate-cookies-chips.svg";
import ChocolateCookieMobile from "../../../public/dessert/Mobile/Chocolate-cookies-chips.jpg";
import ChocolateCookieCaramelDesktop from "../../../public/dessert/Desktop/Chocolate-cookie-caramel.svg";
import ChocolateCookieCaramelMobile from "../../../public/dessert/Mobile/Chocolate-cookie-caramel.jpg";
import ChocolateBrownieDesktop from "../../../public/dessert/Desktop/Chocolate-brownie.svg";
import ChocolateBrownieMobile from "../../../public/dessert/Mobile/Chocolate-brownie.jpg";
import ChocolateFondantDesktop from "../../../public/dessert/Desktop/Chocolate-fondant.svg";
import ChocolateFondantMobile from "../../../public/dessert/Mobile/Chocolate-fondant.jpg";
import ChocolateCakeDesktop from "../../../public/dessert/Desktop/Chocolate-cake.svg";
import ChocolateCakeMobile from "../../../public/dessert/Mobile/Chocolate-cake.jpg";
import ChocolateMuffinFilledDesktop from "../../../public/dessert/Desktop/Chocolate-muffin-chocolate-filled.svg";
import ChocolateMuffinFilledMobile from "../../../public/dessert/Mobile/Chocolate-muffin-chocolate-filled.jpg";
import ChocolateMuffinChipsDesktop from "../../../public/dessert/Desktop/Chocolate-muffin-chocolate-chips.svg";
import ChocolateMuffinChipsMobile from "../../../public/dessert/Mobile/Chocolate-muffin-chocolate-chips.jpg";

const dessert = [
  {
    brand: "Nestle Dessert",
    name: "تحضير الكوكيز بالشوكولاتة",
    product_description:
      "استمتع بالبساطة المبهجة لخلطات حلوى الكعك من نستلة. تحتوي كل عبوة على شوكولاتة فاخرة مصممة لتذوب بسلاسة، وخلطة مختارة بعناية لتسهيل عملية الخبز. استمتع بالقوام المخملي الغني لشوكولاتة زبدة الكاكاو النقية 100% والمصنوعة بعناية من أفضل أنواع حبوب الكاكاو.",
    price_a: "١٨",
    price_b: "٢٥",
    img: ChocolateCookieDesktop,
    mob_img: ChocolateCookieMobile,
  },
  {
    brand: "Nestle Dessert",
    name: "كوكيز الشوكولاتة والكراميل",
    product_description:
      "استمتع بالمزيج المبهج داخل كوكيز الشوكولاتة والكراميل، حيث تمتزج الشوكولاتة الغنية مع الكراميل الناعم بسلاسة. استمتع بكل لقمة يتناغم فيها طعم الكوكيز المقرمش مع طراوة إحساس الكراميل وحلاوته، إنه مزيج من الطعم الفريد الذي لا يُنسى.",
    price_a: "١٨",
    price_b: "٢٥",
    img: ChocolateCookieCaramelDesktop,
    mob_img: ChocolateCookieCaramelMobile,
  },
  {
    brand: "Nestle Dessert",
    name: "براوني الشوكولاتة",
    product_description:
      "استمتع بروعة الطعم مع براوني الشوكولاتة، حيث يتناغم إحساس الطراوة الغني مع طعم الشوكولاتة الفاخرة. في كل لقمة، بإمكانك الاستمتاع بإحساس قرمشة الطبقة الخارجية مع طراوة الداخل الناعم الغني، إنها تجربة لطعم الشوكولاتة الفريد الذي لا يُنسى.",
    price_a: "١٦",
    price_b: "٢٠",
    img: ChocolateBrownieDesktop,
    mob_img: ChocolateBrownieMobile,
  },
  {
    brand: "Nestle Dessert",
    name: "تحضير كعكة فوندان الشوكولاتة",
    product_description:
      "استمتع بطعم الشوكولاتة الغني الفاخر في كعكة فوندان الشوكولاتة، حيث يلتقي الطعم الطري الناعم في الداخل، مع طعم الشوكولاتة الكثيفة الغنية. سوف تجد توازناً مثاليا بين الكعك الناعم الرقيق، والشوكولاتة السائلة المتدفقة في كل لقمة. إنه مزيج من الطعم الفريد الذي لا يُنسى.",
    price_a: "١٨",
    price_b: "٢٥",
    img: ChocolateFondantDesktop,
    mob_img: ChocolateFondantMobile,
  },
  {
    brand: "Nestle Dessert",
    name: "كعكة الشوكولاتة",
    product_description:
      "استمتع بطعم كعكة الشوكولاتة التقليدية الغني، حيث تقدم لك كل شريحة متعة الغوص في طعم الشوكولاتة الرائع. إن هذه الكعكة بطراوتها، وقرمشتها الخارجية، ونكهة الشوكولاتة الغنية الكثيفة، تستطيع أن تحول الحلا البسيط، إلى تجربة فريدة من نوعها. فمع كل لقمة، سوف تستمتع بالتناغم بين الحلاوة والكاكاو، مما يجعل كعكة الشوكولاتة هذه تجربة لطعم الشوكولاتة الفريد الذي لا يُنسى.",
    price_a: "١٢",
    price_b: "١٨",
    img: ChocolateCakeDesktop,
    mob_img: ChocolateCakeMobile,
  },
  {
    brand: "Nestle Dessert",
    name: "مافن الشوكولاتة مع كريمة الشوكولاتة",
    product_description:
      "استمتع بحشوة الشوكولاتة اللذيذة. إن هذه الحشوة المصنوعة من الشوكولاتة الناعمة الفاخرة بمقدورها أن تحول أي كعكة إلى حلا مميز جداً. إنها أكثر من مجرد حشوة عادية، إنها مفعمة بالشوكولاتة الغنية الكثيفة التي تجعل تجربة كل لقمة منها لا تُنسى.",
    price_a: "١٨",
    price_b: "٢٥",
    img: ChocolateMuffinFilledDesktop,
    mob_img: ChocolateMuffinFilledMobile,
  },
  {
    brand: "Nestle Dessert",
    name: "مافن قطع الشوكولاتة",
    product_description:
      "استمتع بلحظات الغوص في مافن قطع الشوكولاتة، حيث تتميز كل لقمة بمزيد من قطع الشوكولاتة الغنية. تحول تلك القطع الذائبة في كعك المافن الدافيء الهش تجربة تناول المافن العادية، إلى متعة خاصة ومبهجة. فمع كل لقمة، تتفجر نكهة الشوكولاتة الناعمة وتجعل من تجربة تناول المافن متعة فريدة لا تُنسى.",
    price_a: "١٨",
    price_b: "٢٥",
    img: ChocolateMuffinChipsDesktop,
    mob_img: ChocolateMuffinChipsMobile,
  },
];
export default dessert;
