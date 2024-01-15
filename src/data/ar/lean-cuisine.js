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
    name: "معكرونةٌ بالجبن",
    product_description:
      "أكلةٌ شتويةٌ كلاسيكيةٌ، تحتوي على صوص جبنٍ غنيٍ، كريميٍ يغطي بسخاءٍ المعكرونة الطرية. الخيار الأمثل لوجبةٍ مشبعةٍ، سريعةٍ",
    price_a: "٢٥",
    price_b: "٣٥",
    img: macaroniAndCheese,
    mob_img: macaroniAndCheeseMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "معكرونةٌ كلاسيكيةٌ باللحم البقري",
    product_description:
      "خليطٌ من اللحم البقري المفروم المالح والمعكرونة في صلصة طماطمٍ مشبعةٍ وغنيةٍ، تضفي لمسةً جديدةً على طبق الباستا التقليدي",
    price_a: "٢٥",
    price_b: "٣٥",
    img: classicMacaroniBeef,
    mob_img: classicMacaroniBeefMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "معكرونة رافيولي بالجبن",
    product_description:
      "وكأنها وسائدٌ ناعمةٌ، قطع معكرونة رافيولي محشوةٌ بمزيجٍ من أنواع الجبن، مغمورةٌ بصلصة طماطمٍ غنيةٍ. خيارٌ نباتيٌ رائعٌ",
    price_a: "٢٥",
    price_b: "٣٥",
    img: cheeseRavioli,
    mob_img: cheeseRavioliMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "معكرونة رافيولي بخمس جبنٍ",
    product_description:
      "انغمس في لذة المعكرونة الرافيولي المتدفقة بمزيجٍ من خمس أنواع جبنٍ، تغطيها صلصة طماطمٍ مالحةٍ. حلم عشاق الجبن",
    price_a: "٢٥",
    price_b: "٣٥",
    img: fiveCheeseRigatoni,
    mob_img: fiveCheeseRigatoniMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "دجاجٌ بالزبد",
    product_description:
      "قطع دجاجٍ طريةٌ مغمورةٌ في صوص زبدٍ متبلٍ، كريميٍ. لمسةٌ لذيذةٌ مختلفةُ عن الوصفة الهندية الكلاسيكية",
    price_a: "٢٥",
    price_b: "٣٥",
    img: butterChicken,
    mob_img: butterChickenMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "برياني الدجاج",
    product_description:
      "أرزٌ بسمتيٌ طيب الرائحة يصحبه دجاجٌ متبلٌ، تضاف إليه أعشابٌ وتوابلٌ هنديةٌ تقليديةٌ لطعمٍ أصليٍ",
    price_a: "٢٥",
    price_b: "٣٥",
    img: chickenBiryani,
    mob_img: chickenBiryaniMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "مندي الدجاج",
    product_description:
      "دجاجٌ مليءٌ بالعصارة مع أرزٍ زكي الرائحة، متبلٍ بخلطةٍ فريدةٍ من التوابل. من أطايب الطعام في الشرق الأوسط",
    price_a: "٢٥",
    price_b: "٣٥",
    img: chickenMandi,
    mob_img: chickenMandiMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "كبة باللبن",
    product_description:
      "أكلةٌ تبث الدفء مكونةٌ من كرات كبة اللحم المفروم في صوص اللبن الزبادي اللاذع. لمحةٌ من مطبخ الشرق الأوسط التقليدي",
    price_a: "٢٥",
    price_b: "٣٥",
    img: kibbehLaban,
    mob_img: kibbehLabanMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "كفتةٌ بالطحينة",
    product_description:
      "كرات لحمٍ (كفتةٌ) مالحةٌ في سلطةٍ طحينةٍ ناعمة القوام من السمسم. غنيةٌ بنكهات الشرق الأوسط",
    price_a: "٢٥",
    price_b: "٣٥",
    img: koftaTahina,
    mob_img: koftaTahinaMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "كبسة لحم الحمل",
    product_description:
      "لحم حملٍ متبلٌ وزكي الرائحة مقدّمٌ مع أرز الكبسة، مثالٌ على أصل نكهات الشرق الأوسط",
    price_a: "٢٥",
    price_b: "٣٥",
    img: lambKabsa,
    mob_img: lambKabsaMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "مندي لحم الحمل",
    product_description:
      "لحم حملٍ مليءٌ بالعصارة مصحوبٌ بأرز المندي المتبل، ليهبك تجربةً يسيل لها اللعاب من مطبخ الشرق الأوسط",
    price_a: "٢٥",
    price_b: "٣٥",
    img: lambMandi,
    mob_img: lambMandiMobile,
  },

  {
    brand: "Lean Cuisine",
    name: "معكرونةٌ بالبشاميل",
    product_description:
      "معكرونةٌ كريميةٌ بالفرن، تبعث على الراحة مع صوص بشاميلٍ ناعم القوام، تدمج بين الروح الإيطالية والطريقة الشرق أوسطية",
    price_a: "٢٥",
    price_b: "٣٥",
    img: macaronaBechamel,
    mob_img: macaronaBechamelMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "مطازيز",
    product_description:
      "فطائر دقيق القمح المشبعة والغنية في حساء طماطمٍ، متبلةٌ بخلطةٍ من التوابل. أكلةٌ شتويةٌ تقليديةٌ في الشرق الأوسط",
    price_a: "٢٥",
    price_b: "٣٥",
    img: matazeez,
    mob_img: matazeezMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "شيش برك",
    product_description:
      "فطائرٌ هشةٌ محشوةٌ باللحم المتبل، مطهوةٌ ببطئٍ في حساء اللبن الزبادي اللاذع. طبقٌ فريدٌ في الشرق الأوسط",
    price_a: "٢٥",
    price_b: "٣٥",
    img: shishBarak,
    mob_img: shishBarakMobile,
  },
  {
    brand: "Lean Cuisine",
    name: "ثريد",
    product_description:
      "حساءٌ عربيٌ تقليديٌ مع لحمٍ طريٍ وخضراواتٍ، مقدَمٌ على خبزٍ رقيقٍ. وجبةٌ مشبعةٌ وغنيةٌ بالحضارة",
    price_a: "٢٥",
    price_b: "٣٥",
    img: tharid,
    mob_img: tharidMobile,
  },
];
export default leanCuisine;
