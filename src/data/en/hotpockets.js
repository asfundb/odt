import fourCheese from "../../../public/Hotpocket/Desktop/four-cheese.svg";
import buffalo from "../../../public/Hotpocket/Desktop/buffalo.svg";
import greenChile from "../../../public/Hotpocket/Desktop/Green-chile.svg";
import phillySteak from "../../../public/Hotpocket/Desktop/Philly-steak.svg";
import steakCheddar from "../../../public/Hotpocket/Desktop/steak-and-cheddar.svg";
import steakNacho from "../../../public/Hotpocket/Desktop/steak-and-nachos.svg";

import fourCheeseMobile from "../../../public/Hotpocket/Mobile/four-cheese.jpg";
import buffaloMobile from "../../../public/Hotpocket/Mobile/buffalo.jpg";
import greenChileMobile from "../../../public/Hotpocket/Mobile/Green-chile.jpg";
import phillySteakMobile from "../../../public/Hotpocket/Mobile/Philly-steak.jpg";
import steakCheddarMobile from "../../../public/Hotpocket/Mobile/steak-and-cheddar.jpg";
import steakNachoMobile from "../../../public/Hotpocket/Mobile/steak-and-nachos.jpg";

const hotpockets = [
  {
    brand: "Hot Pockets",
    name: "Four Cheese Pizza (5pcs)",
    product_description:
      "Melty parmesan, cheddar, reduced-fat provolone, & mozzarella cheeses all wrapped up in one delicious pocket. A hearty snack made with loads of real cheese that's ready in minutes. 5 Hot Pockets® sandwiches per box",
    price_a: 50,
    price_b: 56,
    img: fourCheese,
    mob_img: fourCheeseMobile,
  },
  {
    brand: "Hot Pockets",
    name: "Steak & Cheddar (5pcs)",
    product_description:
      "Tender, sliced steak with cheddar cheese and sauce all wrapped up in one delicious pocket. A hearty snack made with loads of premium meat and cheese that's ready in minutes. 5 Hot Pockets® sandwiches per box",
    price_a: 50,
    price_b: 56,
    img: steakCheddar,
    mob_img: steakCheddarMobile,
  },
  {
    brand: "Hot Pockets",
    name: "Philly Steak & Cheese (5pcs)",
    product_description:
      "Savory beef, reduced-fat mozzarella cheese, peppers, onions, and sauce all wrapped up in one delicious pocket. A hearty snack made with loads of premium meat and cheese that's ready in minutes. 5 Hot Pockets® sandwiches per box",
    price_a: 50,
    price_b: 56,
    img: phillySteak,
    mob_img: phillySteakMobile,
  },
  {
    brand: "Hot Pockets",
    name: "Steak Nacho (4pcs)",
    product_description:
      "Unapologetically spicy steak, jalapeños and cheese sauce all wrapped up in one delicious pocket. 50% Larger* as compared to a traditional 4.5oz HOT POCKETS sandwich. 4 Hot Pockets® frozen sandwiches per box",
    price_a: 30,
    price_b: 20,
    img: steakNacho,
    mob_img: steakNachoMobile,
  },
  {
    brand: "Hot Pockets",
    name: "Buffalo Style Chicken (4pcs)",
    product_description:
      "Loads of white meat chicken and melty cheddar cheese wrapped in a buffalo blasted crust with a spicy buffalo sauce 50% Larger* as compared to a traditional 4.5oz Hot Pockets® sandwich. 4 Hot Pockets® frozen sandwiches per box",
    price_a: 30,
    price_b: 20,
    img: buffalo,
    mob_img: buffaloMobile,
  },
  {
    brand: "Hot Pockets",
    name: "Green Chile Cheesesteak (2pcs)",
    product_description:
      "Spicy & juicy cheesesteak, jalapeno peppers, cilantro and real reduced fat mozzarella cheese in a crispy seasoned crust Made with Hot Ones™ Los Calientes™ Verde hot sauce Experience the thrill of the Hot Ones™ challenge right from your home",
    price_a: 22,
    price_b: 28,
    img: greenChile,
    mob_img: greenChileMobile,
  },
];
export default hotpockets;
