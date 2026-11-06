import { MenuItem } from '../types';

export const CATEGORIES = [
  { id: 'bosh-taomlar', label: 'Bosh taomlar', desc: "Qo'y go'shti, qozon va olovda pishgan milliy taomlar" },
  { id: 'tandir-non', label: 'Tandir & Pishiriqlar', desc: "O'tin hidi ufurib turgan tandir somsa va Samarqand nonlari" },
  { id: 'choylar', label: 'Choylar & Damlamalar', desc: "Paxta gulli choynakda tog' giyohlari va an'anaviy choylar" },
  { id: 'shirinliklar', label: 'Shirinliklar & Gazaklar', desc: "Asalli chak-chak, Samarqand halvosi va quruq mevalar" },
  { id: 'salatlar', label: 'Salatlar & Achchiq-chuchuk', desc: "Yangi sabzavotlar, rayhon va Samarqand shakarobi" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Bosh taomlar
  {
    id: 'samarqand-plov',
    name: 'Samarqandcha To\'y Palovi',
    category: 'bosh-taomlar',
    price: 48000,
    description: 'Devzira guruchi, sara qo\'y go\'shti, sariq sabzi, no\'xat, zirk va butun pishgan sarimsoqpiyoz bilan an\'anaviy laganda tortiladi.',
    image: '/src/assets/images/dish_samarkand_plov_1793963460626.jpg',
    isPopular: true,
    portion: '450 g (1 porsiya)',
    ingredients: ['Devzira guruchi', 'Qo\'y go\'shti', 'Sariq sabzi', 'Zira', 'No\'xat', 'Zirk', 'Sarimsoq'],
    preparationTime: '20 daqiqa'
  },
  {
    id: 'lagmon-chozma',
    name: 'Qo\'lda Cho\'zilgan Lag\'mon',
    category: 'bosh-taomlar',
    price: 38000,
    description: 'Qo\'lda cho\'zilgan yupqa elastik xamir, mayin mol go\'shti, shirin bulg\'or qalampiri, rayhon va o\'tli maxsus say qaylasi.',
    isPopular: true,
    portion: '500 g',
    ingredients: ['Cho\'zma xamir', 'Lahm mol go\'shti', 'Shirin qalampir', 'Rayhon', 'Jusay', 'Pomidor'],
    preparationTime: '15 daqiqa'
  },
  {
    id: 'qozon-kabob',
    name: 'Tillarang Qozon Kabob',
    category: 'bosh-taomlar',
    price: 58000,
    description: 'Qozonda dumba yog\'i va maxsus ziravorlar bilan qovurilgan mayin qo\'y go\'shti qovurg\'alari hamda qarsildoq tilla kartoshka.',
    isPopular: true,
    portion: '400 g',
    ingredients: ['Qo\'y qovurg\'asi', 'Kichik dumaloq kartoshka', 'Zira', 'Kashnich urug\'i', 'Dumba yog\'i'],
    preparationTime: '25 daqiqa'
  },
  {
    id: 'gijduvon-shashlik',
    name: 'G\'ijduvoncha Mayin Shashlik',
    category: 'bosh-taomlar',
    price: 18000,
    description: 'Qo\'ra cho\'g\'ida pishgan mayin qiyma shashlik. Yupqa to\'g\'ralgan piyoz, uzum sirkasi va yalpiz bilan dasturxonga tortiladi.',
    portion: '1 dona siq (120 g)',
    ingredients: ['Maydalangan qo\'y go\'shti', 'Dumba', 'Piyoz', 'Zira', 'Rayhon'],
    preparationTime: '15 daqiqa'
  },
  {
    id: 'manti-toshkent',
    name: 'Qo\'y Go\'shtli Manti',
    category: 'bosh-taomlar',
    price: 10000,
    description: 'Yupqa xamir ichida mayda to\'g\'ralgan qo\'y go\'shti, shirin piyoz va dumba bo\'laklari. Qatiq va mayin kashnich bilan.',
    portion: '1 dona',
    ingredients: ['Yupqa bug\' xamiri', 'Qo\'y go\'shti', 'Dumba', 'Piyoz', 'Qora murch'],
    preparationTime: '12 daqiqa'
  },

  // Tandir & Non
  {
    id: 'tandir-somsa',
    name: 'Haqiqiy Tandir Somsa',
    category: 'tandir-non',
    price: 14000,
    description: 'Qat-qat xamirli, o\'tin tandirida qizartirib pishirilgan to\'yimli somsa. Qora sedana sepilgan, ichi sershira qo\'y go\'shtli.',
    image: '/src/assets/images/dish_tandir_somsa_1793963461888.jpg',
    isPopular: true,
    portion: '1 dona (160 g)',
    ingredients: ['Qatlama xamir', 'Lahm go\'shti', 'Dumba', 'Piyoz', 'Sedana urug\'i'],
    preparationTime: 'Har 20 daqiqada yangi chiqadi'
  },
  {
    id: 'samarqand-noni',
    name: 'Samarqand Non (Galaosiyo)',
    category: 'tandir-non',
    price: 15000,
    description: 'Afsonaviy Galaosiyo patiri — og\'ir, sersuv va bir necha hafta qotmaydigan noyob Samarqand siri bilan tandirda yopilgan.',
    isPopular: true,
    portion: '1 dona (800 g)',
    ingredients: ['Bug\'doy uni', 'Sut', 'Sariyog\'', 'Kunjut', 'Sedana'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'tandir-patir',
    name: 'Sariyog\'li Tandir Patir',
    category: 'tandir-non',
    price: 12000,
    description: 'O\'rtasi chakkichlangan, qaymoq va sariyog\' qorilgan, chetlari qarsildoq tandir patiri. Choy bilan ajoyib ketadi.',
    portion: '1 dona (500 g)',
    ingredients: ['Sara un', 'Qaymoq', 'Sariyog\'', 'Tuxum sarig\'i', 'Kunjut'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'jizzax-somsa',
    name: 'Katta Jizzaxcha Somsa',
    category: 'tandir-non',
    price: 24000,
    description: 'Katta hajmdagi qarsildoq go\'shtli somsa, ichida butun dumba va sershira go\'sht sharbati saqlanadi.',
    portion: '1 dona (280 g)',
    ingredients: ['Yupqa qattiq xamir', 'Yirik to\'g\'ralgan go\'sht', 'Piyoz', 'Ziravorlar'],
    preparationTime: '15 daqiqa'
  },

  // Choylar & Damlamalar
  {
    id: 'samarqand-zafaron-choy',
    name: 'Samarqand Za\'faronli Shifobaxsh Choy',
    category: 'choylar',
    price: 18000,
    description: 'Oliy navli ko\'k choy, tabiiy za\'faron gultojibarglari, yalpiz va quritilgan limon bilan samovarda qaynagan suvda damlanadi.',
    image: '/src/assets/images/dish_uzbek_tea_set_1793963462039.jpg',
    isPopular: true,
    portion: '1 choynak (800 ml)',
    ingredients: ['Ko\'k choy', 'Tabiiy za\'faron', 'Tog\' yalpizi', 'Limon tilimi', 'Navat'],
    preparationTime: '5 daqiqa'
  },
  {
    id: 'kok-choy-95',
    name: 'Ko\'k Choy №95 (An\'anaviy Ko\'k Choynak)',
    category: 'choylar',
    price: 9000,
    description: 'Choyxona klassikasi — Samarqand paxta gulli choynagida tortiladi. Ovqat hazmini yaxshilaydi va chanqoqni bosadi.',
    portion: '1 choynak (800 ml)',
    ingredients: ['Oliy navli Samarqand ko\'k choyi', 'Qaynoq samovar suvi'],
    preparationTime: '5 daqiqa'
  },
  {
    id: 'qora-choy-limon',
    name: 'Qora Choy Limon & Tog\' Yalpizi Bilan',
    category: 'choylar',
    price: 10000,
    description: 'To\'yingan qora choy, yangi limon bo\'lagi va Zarafshon tog\'lari yalpizi bilan. Qand va navat bilan xushbo\'y ichiladi.',
    portion: '1 choynak (800 ml)',
    ingredients: ['Qora choy', 'Yangi limon', 'Tog\' yalpizi'],
    preparationTime: '5 daqiqa'
  },
  {
    id: 'namatak-damlama',
    name: 'Tog\' Na\'matagi va Zirk Damlamasi',
    category: 'choylar',
    price: 15000,
    description: 'C vitaminiga boy tog\' qizil na\'matagi va Samarqand qora zirki damlamasi. Asal bilan ajoyib uyg\'unlik hosil qiladi.',
    portion: '1 choynak (800 ml)',
    ingredients: ['Tog\' na\'matagi', 'Qora zirk', 'Tog\' asali'],
    preparationTime: '7 daqiqa'
  },
  {
    id: 'mevali-kompot',
    name: 'Mavsumiy Mevali Kompot',
    category: 'choylar',
    price: 12000,
    description: 'Behi, olma va o\'rik qoqilaridan tayyorlangan xushxo\'r, tabiiy shirin sovuq ichimlik.',
    portion: '1 litr grafin',
    ingredients: ['Quritilgan mevalar', 'Tabiiy shakar', 'Toza buloq suvi'],
    preparationTime: 'Tayyor'
  },

  // Shirinliklar & Gazaklar
  {
    id: 'asalli-chak-chak',
    name: 'Asalli Qarsildoq Chak-chak',
    category: 'shirinliklar',
    price: 16000,
    description: 'Tillarang qovurilgan xamircha iplari, toza tog\' asali va mayda yong\'oq bo\'laklari bilan bezatilgan milliy shirinlik.',
    isPopular: true,
    portion: '200 g',
    ingredients: ['Qo\'lbola tuxumli xamir', 'Tog\' asali', 'Yong\'oq', 'Kunjut'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'samarqand-halvasi',
    name: 'Samarqand Yong\'oqli Halvasi',
    category: 'shirinliklar',
    price: 18000,
    description: 'Sut, qaymoq, pista va yong\'oq mag\'zi bilan tayyorlangan mayin, eruvchan Samarqand halvosi.',
    portion: '200 g',
    ingredients: ['Qaymoq', 'Kondensirlangan sut', 'Pista mag\'zi', 'Bodom'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'quruq-mevalar',
    name: 'Choyxona Quruq Mevalar Lagani',
    category: 'shirinliklar',
    price: 24000,
    description: 'Samarqand mayizi (sohibi), qora turshak, bodom mag\'zi, tozalangan yong\'oq va parvarishta jamlanmasi.',
    portion: '250 g',
    ingredients: ['Qora mayiz', 'Oq mayiz', 'Bodom', 'Tog\' yong\'og\'i', 'Parvarishta'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'kristall-navat',
    name: 'Tabiiy Kristall Navat (Choy uchun)',
    category: 'shirinliklar',
    price: 8000,
    description: 'Uzum sharbati va za\'faron asosida tayyorlangan an\'anaviy kristall shakarchalar.',
    portion: '100 g',
    ingredients: ['Uzum sharbati shakari', 'Za\'faron'],
    preparationTime: 'Tayyor'
  },

  // Salatlar & Qo'shimchalar
  {
    id: 'achchiq-chuchuk',
    name: 'Samarqandcha Achchiq-Chuchuk (Shakarob)',
    category: 'salatlar',
    price: 14000,
    description: 'Yupqa qilib parrak qilingan qizil shirin pomidor, piyoz, mayda to\'g\'ralgan rayhon va ozgina qalampir. Palovning ajralmas do\'sti.',
    isPopular: true,
    portion: '250 g',
    ingredients: ['Pomidor', 'Piyoz', 'Yangi rayhon', 'Tuz', 'Achchiq qalampir'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'suzma-kokat',
    name: 'Yalpizli Suzma & Ko\'katlar',
    category: 'salatlar',
    price: 12000,
    description: 'Quyuq tabiiy suzma, tog\' yalpizi, shivit, kashnich va bir chimdim sarimsoq bilan.',
    portion: '180 g',
    ingredients: ['Tabiiy suzma', 'Tog\' yalpizi', 'Shivit', 'Kashnich', 'Zaytun yog\'i'],
    preparationTime: 'Tayyor'
  },
  {
    id: 'tuzlamalar-lagani',
    name: 'Choyxona Usulidagi Uy Tuzlamalari',
    category: 'salatlar',
    price: 16000,
    description: 'Xushbo\'y sarimsoq, gilos pomidor, qarsildoq bodring va marinadlangan qalampir.',
    portion: '300 g',
    ingredients: ['Tuzlangan bodring', 'Pomidor', 'Sarimsoq', 'Marinad qalampir'],
    preparationTime: 'Tayyor'
  }
];

export const FORMAT_SUM = (sum: number) => {
  return sum.toLocaleString('uz-UZ') + " so'm";
};

export const REVIEWS = [
  {
    author: "Alisher Qodirov",
    city: "Toshkent",
    role: "Doimiy mehmon",
    text: "Samarqand palovi va tandir somsasini aytmaysizmi! Ayniqsa hovlidagi tapchanda o'tirib, issiq ko'k choy ichish odamga xotirjamlik bag'ishlaydi. Choyxonaning muhiti haqiqiy qadimiy Samarqandni eslatadi.",
    rating: 5,
    date: "Aprel, 2026"
  },
  {
    author: "Zarina Usmonova",
    city: "Samarqand",
    role: "Oila bilan tashrif",
    text: "Oila a'zolarimiz bilan VIP xonada mehmondorchilik qildik. Xizmat ko'rsatish tez, taomlar qaynoq va toza. Za'faronli choy va yong'oqli halva shunchaki lazzat!",
    rating: 5,
    date: "Mart, 2026"
  },
  {
    author: "Dr. Sherzod Rahimov",
    city: "Buxoro",
    role: "Sayyoh",
    text: "Choy qaytarish marosimi — 1-loy, 2-moy, 3-choy an'anasi juda chiroyli tushuntirilgan. Samarqand nonining ta'mi bolaligimdagi esdaliklarni yodga soldi.",
    rating: 5,
    date: "Fevral, 2026"
  }
];

export const TEA_CEREMONY_STEPS = [
  {
    step: 1,
    name: "Loy",
    summary: "Choy barglarini uyg'otish",
    desc: "Yangi damlangan choynakdan birinchi piyolaga choy quyiladi va darhol choynakka qaytariladi. Bu paytda choy barglari uyg'onadi, tagidagi mayda zarrachalar aralashib, dastlabki 'loy' holatidan tiniqlashishga tayyorlanadi.",
    tip: "Birinchi quyilgan choy ichilmaydi — u choynakka qaytarilib, choyning to'liq ochilishini ta'minlaydi."
  },
  {
    step: 2,
    name: "Moy",
    summary: "Xushbo'y efir moylarini taratish",
    desc: "Ikkinchi bor piyolaga quyilib, yana choynakka qaytariladi. Choyning rangi yorqinlanib, uning tabiiy shifobaxsh efir moylari, za'faron va yalpiz hidi butun xonaga taraladi.",
    tip: "Ikkinchi qaytarishda choyning tilla rang jilosi ko'rinadi."
  },
  {
    step: 3,
    name: "Choy!",
    summary: "Nihoyat, mehmon uchun tayyor lazzat",
    desc: "Uchinchi qaytarishdan so'ng, xushbo'y va yetilgan choy piyolaning yarmigacha quyilib mehmonga uzatiladi. O'zbek odobida piyolani to'ldirib quyish — mehmonni tezroq ketishiga ishora; yarim qilib quyish esa doimiy hurmat va suhbat bardavomligini bildiradi!",
    tip: "Yarim piyola choy tez sovimaydi, mezbon esa doim mehmonga yangilab turadi."
  }
];
