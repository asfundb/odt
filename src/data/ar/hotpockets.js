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
    name: "بيتزا بأربعة جبن (5 قطعٍ)",
    product_description:
      "الجبن البارميزان الذائب، الشيدر، البروفولوني منخفض الدسم، والموتزاريلا ملفوفةٌ كلها في فطيرةٍ لذيذةٍ واحدةٍ. وجبةٌ خفيفةٌ غنيةٌ ومشبعةٌ مُعَدةٌ بكمياتٍ من الجبن الحقيقي تُعَد في دقائقٍ. 5 شطائر هوت بوكعتس في كل علبةٍ. الوزن الإجمالي: 602 جرام",
    price_a: "٥٠",
    price_b: "٥٦",
    img: fourCheese,
    mob_img: fourCheeseMobile,
  },
  {
    brand: "Hot Pockets",
    name: "شرائح اللحم بالجبن الشيدر (5 قطعٍ)",
    product_description:
      "هي طريةٌ، مقطعةٌ إلى شرائحٍ مع الجبن الشيدر والصوص ملفوفةٌ كلها في فطيرةٍ لذيذةٍ واحدةٍ. وجبةٌ خفيفةٌ غنيةٌ ومشبعةٌ مُعَدةٌ بكمياتٍ من اللحم والجبن المتميز تُعَد في دقائقٍ. 5 شطائر هوت بوكتس في كل علبةٍ. الوزن الإجمالي 637 جرام",
    price_a: "٥٠",
    price_b: "٥٦",
    img: steakCheddar,
    mob_img: steakCheddarMobile,
  },
  {
    brand: "Hot Pockets",
    name: "شرائح لحم فيلادلفيا بالجبن (5 قطعٍ)",
    product_description:
      "لحمٌ بقريٌ لذيذٌ، جبنة موتزاريلا منخفضة الدسم، فلفل، بصل، وصوص ملفوفةٌ كلها في فطيرةٍ لذيذةٍ واحدةٍ. وجبةٌ خفيفةٌ غنيةٌ ومشبعةٌ مُعَدةٌ بكمياتٍ من االلحم والجبن المتميز تُعَد في دقائقٍ. 5 شطائر هوت بكتس في كل علبةٍ. الوزن الإجمالي: 637 جرام",
    price_a: "٥٠",
    price_b: "٥٦",
    img: phillySteak,
    mob_img: phillySteakMobile,
  },
  {
    brand: "Hot Pockets",
    name: "شرائح لحم الناتشو (4 قطعٍ)",
    product_description:
      "بإطلالةٍ جريئةٍ، شرائح لحمٍ، فلفل الهالبينو، وصوص الجبن الحار ملفوفةٌ كلها في فطيرةٍ لذيذةٍ واحدةٍ. أكبر بنسبة 50%* مقارنةً بشطيرة هوت بوكتس تقليدية وزنها ال4.5 أونصة. 4 شطائرٍ مجمدةٍ من هوت بوكتس في كل علبةٍ. الوزن الإجمالي 765 جرام",
    price_a: "٦٠",
    price_b: "٧٥",
    img: steakNacho,
    mob_img: steakNachoMobile,
  },
  {
    brand: "Hot Pockets",
    name: "دجاجٌ بصوص البافلو (4 قطعٍ)",
    product_description:
      "كمياتٌ من الدجاج ذو اللحم الأبيض والجبن الشيدر الذائب ملفوفةٌ تحت طبقة بافلو خارجيةٍ متفجرةٍ بصوص بافلو حارٍ أكبر بنسبة 50%* مقارنةً بشطيرة هوت بوكتس تقليدية وزنها 4.5 أونصة. 4 شطائرٍ مجمدةٍ من Hot Pockets® في كل علبةٍ. الوزن الإجمالي 765 جرام",
    price_a: "٦٠",
    price_b: "٧٥",
    img: buffalo,
    mob_img: buffaloMobile,
  },
  {
    brand: "Hot Pockets",
    name: "شرائح لحمٍ بالجبن والفلفل الأخضر الحار (قطعتان)",
    product_description:
      "المثيرة من بيتك مباشرةً. الوزن الإجمالي 255 جرام. Hot Ones™ الحار. عش تجربة تحدي Hot Ones™ Los Calientes™ Verde شرائح لحمٍ بالجبن حارةٌ وغنيةٌ بالعصارة، فلفل الهالبينو، كزبرة وجبن الموتزاريلا منخفض الدسم الحقيقي تحت طبقةٍ خارجيةٍ متبلةٍ مقرمشةٍ مصنوعةٍ بصوص",
    price_a: "٢٤",
    price_b: "٣٠",
    img: greenChile,
    mob_img: greenChileMobile,
  },
];
export default hotpockets;
