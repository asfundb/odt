import macaroniAndCheese from "../../../public/lean-cuisine/Desktop/macaroni-and-cheese.svg";
import classicMacaroniBeef from "../../../public/lean-cuisine/Desktop/classic-macaroni-beef.svg";
import cheeseRavioli from "../../../public/lean-cuisine/Desktop/cheese-ravioli.svg";
import fiveCheeseRigatoni from "../../../public/lean-cuisine/Desktop/five-cheese-rigatoni.svg";
import butterChicken from "../../../public/lean-cuisine/Desktop/butter-chicken.svg";
import chickenBiryani from "../../../public/lean-cuisine/Desktop/chicken-biryani.svg";
import chickenMandi from "../../../public/lean-cuisine/Desktop/chicken-mandi.svg";
import kibbehLaban from "../../../public/lean-cuisine/Desktop/kibbeh-laban.svg";
import koftaTahina from "../../../public/lean-cuisine/Desktop/kofta-tahina.svg";
import lambKabsa from "../../../public/lean-cuisine/Desktop/lamb-kabsa.svg";
import lambMandi from "../../../public/lean-cuisine/Desktop/lamb-mandi.svg";
import macaronaBechamel from "../../../public/lean-cuisine/Desktop/macarona-bechamel.svg";
import matazeez from "../../../public/lean-cuisine/Desktop/matazeez.svg";
import shishBarak from "../../../public/lean-cuisine/Desktop/shish-barak.svg";
import tharid from "../../../public/lean-cuisine/Desktop/tharid.svg";

import macaroniAndCheeseMobile from "../../../public/lean-cuisine/Mobile/macaroni-and-cheese.jpg";
import classicMacaroniBeefMobile from "../../../public/lean-cuisine/Mobile/classic-macaroni-beef.jpg";
import cheeseRavioliMobile from "../../../public/lean-cuisine/Mobile/cheese-ravioli.jpg";
import fiveCheeseRigatoniMobile from "../../../public/lean-cuisine/Mobile/five-cheese-rigatoni.jpg";
import butterChickenMobile from "../../../public/lean-cuisine/Mobile/butter-chicken.jpg";
import chickenBiryaniMobile from "../../../public/lean-cuisine/Mobile/chicken-biryani.jpg";
import chickenMandiMobile from "../../../public/lean-cuisine/Mobile/chicken-mandi.jpg";
import kibbehLabanMobile from "../../../public/lean-cuisine/Mobile/kibbeh-laban.jpg";
import koftaTahinaMobile from "../../../public/lean-cuisine/Mobile/kofta-tahina.jpg";
import lambKabsaMobile from "../../../public/lean-cuisine/Mobile/lamb-kabsa.jpg";
import lambMandiMobile from "../../../public/lean-cuisine/Mobile/lamb-mandi.jpg";
import macaronaBechamelMobile from "../../../public/lean-cuisine/Mobile/macarona-bechamel.jpg";
import matazeezMobile from "../../../public/lean-cuisine/Mobile/matazeez.jpg";
import shishBarakMobile from "../../../public/lean-cuisine/Mobile/shish-barak.jpg";
import tharidMobile from "../../../public/lean-cuisine/Mobile/tharid.jpg";

const leanCuisine = [
  {
    brand: "Lean Cuisine",
    name: "Macaroni and Cheese",
    product_description:
      "A classic comfort dish, featuring creamy, rich cheese sauce generously coating tender macaroni. Perfect for a quick, satisfying meal.",
    price_a: 25,
    price_b: 35,
    img: macaroniAndCheese,
    mob_img: macaroniAndCheeseMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Classic Macaroni Beef",
    product_description:
      "Savory ground beef mixed with macaroni in a hearty tomato sauce, offering a delicious twist on the traditional pasta dish.",
    price_a: 25,
    price_b: 35,
    img: classicMacaroniBeef,
    mob_img: classicMacaroniBeefMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Cheese Ravioli",
    product_description:
      "Soft pillows of ravioli filled with a blend of cheeses, smothered in a rich tomato sauce. A delightful vegetarian option.",
    price_a: 25,
    price_b: 35,
    img: cheeseRavioli,
    mob_img: cheeseRavioliMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Five Cheese Rigatoni",
    product_description:
      "Indulge in rigatoni bursting with a blend of five cheeses, covered in a savory tomato sauce. A cheese lover's dream.",
    price_a: 25,
    price_b: 35,
    img: fiveCheeseRigatoni,
    mob_img: fiveCheeseRigatoniMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Butter Chicken",
    product_description:
      "Tender pieces of chicken bathed in a creamy, spiced butter sauce. A flavorful twist on the Indian classic.",
    price_a: 25,
    price_b: 35,
    img: butterChicken,
    mob_img: butterChickenMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Chicken Biryani",
    product_description:
      "Aromatic basmati rice paired with spiced chicken, infused with traditional Indian herbs and spices for an authentic taste.",
    price_a: 25,
    price_b: 35,
    img: chickenBiryani,
    mob_img: chickenBiryaniMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Chicken Mandi",
    product_description:
      "Juicy chicken with fragrant rice, seasoned with a unique blend of spices. A Middle Eastern delicacy.",
    price_a: 25,
    price_b: 35,
    img: chickenMandi,
    mob_img: chickenMandiMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Kibbeh Laban",
    product_description:
      "A comforting dish of ground meat kibbeh balls in a tangy yogurt sauce. A taste of traditional Middle Eastern cuisine.",
    price_a: 25,
    price_b: 35,
    img: kibbehLaban,
    mob_img: kibbehLabanMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Kofta Tahina",
    product_description:
      "Savory meatballs (kofta) in a smooth, sesame-based tahina sauce. Rich in flavors of the Middle East.",
    price_a: 25,
    price_b: 35,
    img: koftaTahina,
    mob_img: koftaTahinaMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Lamb Kabsa",
    product_description:
      "Aromatic and spiced lamb served with kabsa rice, embodying the essence of Middle Eastern flavors.",
    price_a: 25,
    price_b: 35,
    img: lambKabsa,
    mob_img: lambKabsaMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Lamb Mandi",
    product_description:
      "Succulent lamb paired with spiced mandi rice, offering a mouth-watering Middle Eastern culinary experience.",
    price_a: 25,
    price_b: 35,
    img: lambMandi,
    mob_img: lambMandiMobile,
  },
  // Note: The "Lamb Kabsa" entry is duplicated in your list. I've provided the description for the first occurrence.
  {
    brand: "Lean Cuisine",
    name: "Macarona Bechamel",
    product_description:
      "A creamy, comforting pasta bake with a smooth bechamel sauce, marrying Italian inspiration with Middle Eastern flair.",
    price_a: 25,
    price_b: 35,
    img: macaronaBechamel,
    mob_img: macaronaBechamelMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Matazeez",
    product_description:
      "Hearty wheat dumplings in a tomato-based stew, seasoned with a blend of spices. A traditional Middle Eastern comfort food.",
    price_a: 25,
    price_b: 35,
    img: matazeez,
    mob_img: matazeezMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Shish Barak",
    product_description:
      "Delicate dumplings filled with seasoned meat, simmered in a tangy yogurt stew. A unique Middle Eastern dish.",
    price_a: 25,
    price_b: 35,
    img: shishBarak,
    mob_img: shishBarakMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "Tharid",
    product_description:
      "A traditional Arabian stew with tender meat and vegetables, served over thin bread. A culturally rich and satisfying meal.",
    price_a: 25,
    price_b: 35,
    img: tharid,
    mob_img: tharidMobile,
  },
];
export default leanCuisine;
