const { includes, toLower } = require("lodash");

const fintQuestion = async (req, res) => {
  const data = [
    {
      id: 1,
      correct_answer:
        "A. Dasturlarning to`g`ri ishlashi uchun zarur bo'lgan dasturlash kompleksi",
      quiz: "Dasturiy ta'minot nima?",
    },
    {
      id: 2,
      correct_answer:
        "A. har qanday tabiat ob'ektini tizim sifatida o'rganish metodikasi",
      quiz: "Tizimli yondashuv nima?",
    },
    {
      id: 3,
      correct_answer:
        "A. ishlab chiqiladigan dasturiy ta'minot harakatining to'liq tavsifi",
      quiz: "Dasturiy ta'minot spetsifikatsiyasi nima?",
    },
    {
      id: 4,
      correct_answer: "A. barcha javoblar toʻgʻri",
      quiz: '"Kichik" dasturiy ta\'minotning xususiyatlari qanday?',
    },
    {
      id: 5,
      correct_answer: "A. barcha javoblar toʻgʻri",
      quiz: '"Katta" dasturiy ta\'minot qanday xususiyatlarga ega?',
    },
    {
      id: 6,
      correct_answer: "A. 10 kishi",
      quiz: "Kichik loyihada qancha odam ishtirok etishi kerak?",
    },
    {
      id: 7,
      correct_answer: "A. 20 dan 30 kishigacha",
      quiz: "O'rtacha loyihada qancha odam ishtirok etishi kerak?",
    },
    {
      id: 8,
      correct_answer: "A. 100 dan 300 kishigacha",
      quiz: "Katta hajmdagi loyihaga qancha odam jalb qilinishi kerak?",
    },
    {
      id: 9,
      correct_answer: "A. 1000 dan 3000 kishigacha",
      quiz: "Gigant loyihada qancha odam ishtirok etishi kerak?",
    },
    {
      id: 10,
      correct_answer: "A. 3 oydan 6 oygacha",
      quiz: "Kichik loyihani amalga oshirish muddati qancha?",
    },
    {
      id: 11,
      correct_answer: "A. 1-2 yil",
      quiz: "O'rtacha loyihaning muddati qancha?",
    },
    {
      id: 12,
      correct_answer: "A. 3-5 yil",
      quiz: "Keng miqyosli loyihani amalga oshirish muddati qancha?",
    },
    {
      id: 13,
      correct_answer: "A. 10 yilgacha",
      quiz: "Gigant loyihani amalga oshirish muddati qancha?",
    },
    {
      id: 14,
      correct_answer:
        "A. hosil boʻlgan tizimning kerakli xossalarini kafolatlaydigan amaliy yechimlarni olish",
      quiz: "Abstraksiya va takomillashtirish nima uchun ishlatiladi?",
    },
    {
      id: 15,
      correct_answer:
        "A. Dasturiy ta'minotni yaratish zarurligi to'g'risida qaror qabul qilingan paytdan boshlab toki uni foydalanishdan to'liq olib tashlangan vaqt oralig'idagi vaqt davri.",
      quiz: "Hayot sikli nima?",
    },
    {
      id: 16,
      correct_answer:
        "A. dasturiy taʼminot komponentlarini oʻz ichiga olgan dastur tuzilmasi, bu komponentlarning tashqi koʻrinadigan xossalari va ular oʻrtasidagi bogʻliqlik.",
      quiz: "Dasturiy ta'minot arxitekturasi nima?",
    },
    {
      id: 17,
      correct_answer:
        "A. modul interfeysi aynan shu modul foydalanuvchilari uchun zarur bo'lgan vazifalarni hal qilish imkonini beradi",
      quiz: "Interfeys mosligi nima?",
    },
    {
      id: 18,
      correct_answer:
        "A. interfeys modul funksionalligi doirasidagi barcha muhim bo'lgan vazifalarni hal qilishga imkon beradi",
      quiz: "Interfeys to'liqligi nima?",
    },
    {
      id: 19,
      correct_answer:
        "A. interfeys tomonidan taqdim etiladigan operatsiyalar o'z ma'nosiga ko'ra har xil bo'lgan vazifalarni hal qiladi va ularning hech biri boshqalarning yordami bilan amalga oshirilmaydi.",
      quiz: "Interfeys minimalligi nima?",
    },
    {
      id: 20,
      correct_answer:
        "A. interfeys operatsiyalari etarlicha elementar bo‘lib, ularni bir xil abstraksiya darajasidagi, shungdek, modul funksionallik darajasi bir xil bo'lgan ba’zi oddiyroq amallar kompozitsiyasi sifatida tasvirlab bo‘lmaydi.",
      quiz: "Interfeys oddiyligi nima?",
    },
    {
      id: 21,
      correct_answer: "",
      quiz: "Hayotiy siklda qanday modellar mavjud?a. kaskad, oraliq nazoratli model va spiral",
    },
    {
      id: 22,
      correct_answer:
        "A. maqsadli hisoblash tizimiga dasturiy ta'minotni joylashtirish va foydalanuvchilarni o'qitish",
      quiz: "DTni ishga tushirish nima?",
    },
    {
      id: 23,
      correct_answer:
        "A. amaliy masalalarni yechish uchun kompyuterda uning dasturlarini bajarish orqali turli dasturiy ta'minotlardan foydalanish",
      quiz: "Dasturiy ta'minotdan foydalanish nima?",
    },
    {
      id: 24,
      correct_answer:
        "A. Amaldagi dasturiy ta'minotning sifati haqida ma'lumot to'plash, unda aniqlangan xatolarni bartaraf etish, uni takomillashtirish va o'zgartirish, shuningdek, unga kiritilgan o'zgartirishlar haqida foydalanuvchilarni xabardor qilish jarayoni.",
      quiz: "Dasturiy ta'minotni kuzatib borish nima?",
    },
    {
      id: 25,
      correct_answer:
        "A. mijoz nimalarni taqdim qilishi mumkin, manbalar qanchalik yetarli va qaysi bosqichlar tugallangan, shunga qarab ish hajmi, byudjeti va muddatlari aniqlanadi.",
      quiz: "Loyihalashga tayyorgarlik ko'rilayotganda qanday tashkiliy masalalar hal qilinadi?",
    },
    {
      id: 26,
      correct_answer:
        "A. mijozning birgalikdagi ishi (mahsulotning afzalliklari, ishlashi va tashqi ko'rinishiga qo'yiladigan talablar haqida bo'ladi) va EDISON-loyihachi (texnik va algoritmik echimlarni taklif qiladi)",
      quiz: 'Loyihalash bosqichining "tasnif" bo\'limida nima qilinadi?',
    },
    {
      id: 27,
      correct_answer:
        "A. dasturlash tili, ma'lumotlar bazasi, serverlar va freymvorklar tasdiqlanadi",
      quiz: 'Loyihalash bosqichining "Arxitektura" bo\'limida nima qilinadi?',
    },
    {
      id: 28,
      correct_answer:
        "A. DT tavsifiga va buyurtmachining savollarga bergan javoblari asosida arxitektor tomonidan tuziladi, loyiha rahbari bilan kelishiladi, soʻngra mijozga ko'rsatiladi, tuzatishlar kiritiladi.",
      quiz: 'loyihalashtirish bosqichining "Texnik topshiriq" bo\'limida nimalar qilinadi?',
    },
    {
      id: 29,
      correct_answer:
        "A. Interfeyslarni, qurilmaning sxematik diagrammalarini, ma'lumotlar bazasi strukturasi sxemalarini, komponentlarning o'zaro ta'siri diagrammalarini tuziladi.",
      quiz: "Loyihalash bosqichining “Maketlar (texnik topshiriqlarga qo‘shilgan)” bo'limida nimalar amalga oshiriladi?",
    },
    {
      id: 30,
      correct_answer:
        "A. arxitektor loyiha rahbarining ko'rsatgan kamchiliklariga tuzatishlar kiritadi",
      quiz: 'Loyihalash bosqichining "Nazorat" bo\'limida nima qilinadi?',
    },
    {
      id: 31,
      correct_answer:
        "A. mijoz Texnik topshiriqni mustaqil ravishda tekshiradi va o'zgartiradi yoki kamchiliklar ro'yxatini loyiha rahbariga beradi, kamchiliklar tuzatiladi, Texnik topshiriq tasdiqlanadi va shartnomaga ilova qilinadi.",
      quiz: 'Loyihalash bosqichining "Tasdiqlash" bo\'limida nima qilinadi?',
    },
    {
      id: 32,
      correct_answer: "A. tuzilmaviy dasturlash",
      quiz: 'Qanday dasturlash yondashuvida biz odatda "yuqoridan pastga" iborasi ishlatiladi?',
    },
    {
      id: 33,
      correct_answer: "A. shartsiz sakrash",
      quiz: "Qaysi shartni tuzilmaviy dasturlash rioya qilmaydi?",
    },
    {
      id: 34,
      correct_answer:
        "A. modullarning zaif avtonom sozlanishi, stub dasturlarning (программ-заглушек) mavjudligi",
      quiz: "Tuzilmaviy dasturlashning kamchiliklari?",
    },
    {
      id: 35,
      correct_answer:
        "A. yaxshi kompleks sozlash imkoniyati ega, mijoz loyihalashda ishtirok etadi, oraliq natijalar mijozga ko'rsatilishi mumkin.",
      quiz: "Tuzilmaviy dasturlashning afzalliklari?",
    },
    {
      id: 36,
      correct_answer: "A. tuzilmaviy dasturlash",
      quiz: 'Qaysi dasturlashda "sendvich" usuli odatda oddiy loyihalar uchun qo\'llaniladi?',
    },
    {
      id: 37,
      correct_answer: "A. goto",
      quiz: "Qaysi biri shartsiz o'tish operatori?",
    },
    {
      id: 38,
      correct_answer: "A. break",
      quiz: "Qaysi biri sikldan chiqish operatori?",
    },
    {
      id: 39,
      correct_answer: "A. continue",
      quiz: "Qaysi biri siklning keyingi iteratsiyasiga o'tish operatori hisoblanadi?",
    },
    {
      id: 40,
      correct_answer: "A. return",
      quiz: "Qaysi biri funktsiyani qaytarish operatori hisoblanadi?",
    },
    {
      id: 41,
      correct_answer:
        "A. dastur yoki hisoblash tizimining eng yuqori kontseptual darajada ishlashini belgilovchi tuzilmasi, shu jumladan apparat va dasturiy ta'minot komponentlari, ushbu komponentlarning tashqi xususiyatlaridan ko'rinadigan, ular o'rtasidagi munosabatlar, shuningdek, tizimni hujjatlashtirish.",
      quiz: "Arxitektura nima?",
    },
    {
      id: 42,
      correct_answer:
        "A. butun tizimni, shuningdek, uning alohida qismlarini loyihalashtiradi",
      quiz: "Tizim arxitektori nima qiladi?",
    },
    {
      id: 43,
      correct_answer:
        "A. maʼlumotlar bazasi va uning strukturasini loyihalash bilan shugʻullanadi",
      quiz: "Ma'lumotlar bazasi arxitektori nima qiladi?",
    },
    {
      id: 44,
      correct_answer: "A. loyihalashda qatnashadi, hujjatlarni tayyorlaydi",
      quiz: "Tizim tahlilchisi nima qiladi?",
    },
    {
      id: 45,
      correct_answer: "A. tizimning apparat qismini loyihalashda qatnashadi",
      quiz: "Administratorlar kimlar?",
    },
    {
      id: 80,
      correct_answer:
        "A. algoritm chekli sonli elementar amallardan iborat boʻladi",
      quiz: "Algoritmning diskretlik xususiyati deganda nima tushuniladi?",
    },
    {
      id: 46,
      correct_answer:
        "A. Buyurtmachining arizani amalga oshirishdan tipik kutishlari: turli harakatlarni bajarish uchun sarflangan vaqtni qisqartirish; turli operatsiyalarni bajarishni tezlashtirish; jarayonlarni avtomatlashtirish; turli xil o'lchovlarni yaxshilash - tizim, tarmoq yoki jarayonning resurslar, odatda apparat qo'shilganda ish yukining ortishi (uning unumdorligini oshirish) bilan kurashish qobiliyati",
      quiz: "Jarayonlarning unumdorligini yaxshilash va oshirish deganda nima tushuniladi?",
    },
    {
      id: 47,
      correct_answer:
        "A. loyihalash maqsadlaridan biri har qanday harakatni bajarish uchun zarur bo'lgan xarajatlarni kamaytirish bo'lishi mumkin. Bu jarayonlarning unumdorligini oshirish orqali ham, operatsiyalarni bajarishni tezlashtirish orqali ham amalga oshirilishi mumkin.",
      quiz: "Xarajatlarni kamaytirish deganda nima tushuniladi?",
    },
    {
      id: 48,
      correct_answer:
        "A. Operatsion faoliyat odatda odatiy tipik operatsiyalarni bajarish bilan bog'liq (masalan, do'konda kassir bo'lib ishlash, kommunal to'lovlarni qabul qilish va hokazo). Bunday operatsion faoliyatni avtomatlashtirish (soddalashtirish, tezlashtirish) orqali siz xarajatlarni kamaytirishingiz yoki tizim ish faoliyatini oshirishingiz mumkin.",
      quiz: "Operatsion faoliyat yaxshilash deganda nima tushuniladi?",
    },
    {
      id: 49,
      correct_answer:
        "A. Arxitektura yechimi boshqaruv samaradorligini oshirishga qaratilgan bo‘lishi mumkin, masalan, korxonada ish jarayonini avtomatlashtirish (qog‘oz hujjatlardan elektron hujjatlarga o‘zgartirishlar tarixini kuzatish, bildirishnomalar va boshqalarga o‘tish).",
      quiz: "Boshqaruv samaradorligini oshirish deganda nima tushuniladi?",
    },
    {
      id: 50,
      correct_answer:
        "A. Har qanday faoliyat ma'lum xatarlar bilan bog'liq. Ilovalarni ishlab chiqish maqsadlaridan biri ularni kamaytirish bo'lishi mumkin. Masalan, moliyaviy operatsiyalar uchun ikki tomonlama imzo qoidasi (bir xodim tomonidan tuzilgan moliyaviy operatsiya boshqa xodim tomonidan tasdiqlanishi va imzolanishi kerak bo'lganda).",
      quiz: "Xatarlarni kamaytirish deganda nima tushuniladi?",
    },
    {
      id: 51,
      correct_answer:
        "A. Ko'pgina korxonalar bir nechta tizimlardan foydalanadi, ular o'rtasida ma'lumot almashish kerak. Dasturiy ta'minotni ishlab chiqish ushbu almashinuvni avtomatlashtirish va soddalashtirishga qaratilgan bo'lishi mumkin (uni \"shaffof\", oxirgi foydalanuvchilar uchun oddiyroq qilish).",
      quiz: "O'zaro munosabatlarning imkoniyati va shaffofligini oshirish?",
    },
    {
      id: 52,
      correct_answer:
        "A. DTning hayot sikli bilan bog'liq jarayonlar avtomatlashtirishning maqsadi ham bo'lishi mumkin, chunki DTning hayot siklida amalga oshiriladigan xarajatlarni kamaytirish qo'shimcha foyda keltiradi.",
      quiz: 'Hayotiy siklni "qo\'llab-quvvatlash" xarajatlarini kamaytirish nima?',
    },
    {
      id: 53,
      correct_answer:
        "A. ilovalar xavfsizligi oshirish yildan-yilga muhim ahamiyat kasb etmoqda",
      quiz: "Xavfsizlik samaradorligini oshirish nima?",
    },
    {
      id: 54,
      correct_answer:
        "A. dasturda yuzaga keladigan turli jarayonlarga ishlab chiquvchining aralashuvisiz ta'sir qilish.",
      quiz: "Boshqarish qobiliyati nima?",
    },
    {
      id: 55,
      correct_answer:
        "A. Aniq maqsadlarga ega bo'lish arxitekturaga e'tiborni qaratishga va hal qilish uchun muammolarni to'g'ri tanlashga yordam beradi. Aniq belgilangan maqsadlar har bir bosqichning chegaralarini aniqlashga yordam beradi, ya'nijoriy bosqich tugallangan va hamma narsa keyingi bosqichga o'tishga tayyor bo'lgan payt.",
      quiz: "Arxitekturaning maqsadlarini aniqlash?",
    },
    {
      id: 56,
      correct_answer:
        "A. Asosiy ssenariylardan birlamchi ahamiyatga ega bo'lgan narsaga e'tibor qaratish va ushbu stsenariylarga mos bo’lgan turlicha arxitektura variantlarni sinab ko'rishda foydalanishi lozim.",
      quiz: "Asosiy ssenariylar qanday aniqlanadi?",
    },
    {
      id: 57,
      correct_answer:
        "A. Yaratilayotgan ilovaning ishlashi loyihaning real sharoitlarga mos kelishini ta'minlash uchun dastur turini, arxitektura joylashuvini, arxitektura uslublarini va texnologiyalarini aniqlash kerak.",
      quiz: "Ilova prototipini yaratish nima?",
    },
    {
      id: 58,
      correct_answer:
        "A. Sifat parametrlari va end-to-end funksionalligi zaruriyati asosida asosiy muammoli sohalarni belgilash zarur. Ilovani loyihalashda ko'pincha xatolarga yo'l qo'yiladigan joylar shulardir.",
      quiz: "Potentsial muammolarni aniqlash?",
    },
    {
      id: 59,
      correct_answer:
        'A. Har bir iteratsiyada arxitekturaning "uchuvchisi" yoki prototipi yaratilishi kerak, bu avvalgi yechimning rivojlanishi va takomillashtirilishi hisoblanadi. Keyingi iteratsiyaga o\'tishdan oldin, ushbu prototip asosiy stsenariylarga, muammolarga va joylashtirishning cheklovlariga javob berishiga ishonch hosil qilish kerak.',
      quiz: "Yechim variantlarini aniqlash deganda nima tushuniladi?",
    },
    {
      id: 60,
      correct_answer: "A. klassik ish stoli ilovalari",
      quiz: 'Qanday ilovalar "oynali" ilovalar deb ataladi?',
    },
    {
      id: 61,
      correct_answer: "A.5A. konsol ilovalari",
      quiz: "Ilovalarning nechta turi mavjud?A.5B.3C.4D.8Qaysi dastur faqat matnli ma'lumotlarni ko'rsatadi?",
    },
    {
      id: 62,
      correct_answer:
        "A. Komponentlar odatda turli ilovalarda turli vaziyatlarda qayta foydalanish uchun mo‘ljallangan",
      quiz: "Komponentlardan qayta foydalanish nima?",
    },
    {
      id: 63,
      correct_answer:
        "A. Komponentlarni boshqa shunga o'xshash komponentlar bilan erkin almashtirish mumkin",
      quiz: "O'zgartiriladigan komponenta nima?",
    },
    {
      id: 64,
      correct_answer:
        "A. komponentlari turli muhit va sharoitlarda ishlashga moʻljallanganligi",
      quiz: "Kontekstdan mustaqil komponentlarning xususiyatlari qanday bo’ladi?",
    },
    {
      id: 65,
      correct_answer:
        "A. Yangi xatti-harakatni ta'minlash uchun komponent mavjud komponentlar orqali kengaytirilishi mumkin.",
      quiz: "Kengaytiriladigan komponent nima?",
    },
    {
      id: 66,
      correct_answer:
        "A. AA komponentiga murojat qilgan tomonga o'z funksiyalaridan foydalanish imkonini beruvchi interfeyslarni ochib beradi va ichki jarayonlar yoki har qanday ichki o'zgaruvchilar yoki holat tafsilotlarini oshkor qilmaydi.",
      quiz: "inkapulyasiyalangan komponent nima?",
    },
    {
      id: 67,
      correct_answer:
        "A. Komponentlar boshqa komponentlarga minimal bog‘liqlikka ega bo‘lishi mumkin",
      quiz: "Mustaqil komponent nima?",
    },
    {
      id: 68,
      correct_answer:
        "A. murakkab masala yoki tuzilmaning mohiyatini ahamiyatsiz tafsilotlarga qaratmasdan tavsiflovchi abstraksiya.",
      quiz: "Model nima?",
    },
    {
      id: 69,
      correct_answer:
        "A. murakkab narsalarni tushunish imkonini beruvchi insonning asosiy qobiliyatlaridan biri",
      quiz: "Abstraksiya nima?",
    },
    {
      id: 70,
      correct_answer:
        "A. bu modellashtirishning asosiy tushunchasi va ularning semantikasi",
      quiz: "Model elementlari nima?",
    },
    {
      id: 71,
      correct_answer: "A. bu modellashtirish elementlarining vizual tasviridir",
      quiz: "Notasiya nima?",
    },
    {
      id: 72,
      correct_answer:
        "A. muayyan dasturiy modellarni yaratish doirasida elementlardan foydalanish qoidalari",
      quiz: "Foydalanish bo'yicha qo'llanma nima?",
    },
    {
      id: 73,
      correct_answer: "",
      quiz: "Kontseptual ma'lumotlar modeli nima?a. ushbu ma'lumotlar modeli tizimda NIMALARNI o'z ichiga olganligini aniqlaydi. Ushbu model odatda manfaatdor tomonlar va ma'lumotlar arxitektorlari tomonidan yaratiladi.",
    },
    {
      id: 74,
      correct_answer:
        "A. tizimni MBBTdan mustaqil ravishda QANDAY amalga oshirish kerakligini belgilaydi. Ushbu model odatda ma'lumotlar arxitektorlari va biznes tahlilchilari tomonidan yaratiladi.",
      quiz: "Mantiqiy ma'lumotlar modeli nima?",
    },
    {
      id: 75,
      correct_answer:
        "A. Ushbu ma'lumotlar modeli tizimning ma'lum bir MBBT tizimi yordamida qanday amalga oshirilishini tavsiflaydi. Ushbu model odatda ma’lumotlar bazasi admini va ishlab chiquvchilar tomonidan yaratiladi",
      quiz: "Jismoniy ma'lumotlar modeli nima?",
    },
    {
      id: 76,
      correct_answer: "A. noaniqlik",
      quiz: "Qahvaga 2-3 osh qoshiq shakar qo'shing. Algoritmning qaysi xossasi buzilgan?",
    },
    {
      id: 77,
      correct_answer: "A. tushunarlilik",
      quiz: "2x2 matritsaning determinantini toping. Algoritmning qaysi xossasi buzilgan?",
    },
    {
      id: 78,
      correct_answer: "A. natijaviylik",
      quiz: "Idishlarni iflos gubka bilan yuving. Algoritmning qaysi xossasi buzilgan?",
    },
    {
      id: 79,
      correct_answer: "A. diskretlik",
      quiz: "Algoritmning qaysi xossasi buzilgan: osh pishiraymi?",
    },
    {
      id: 81,
      correct_answer: "A. harakatlarning har biri to‘liq tugallangan bo’aladi",
      quiz: "Algoritmning tushunarlilik xususiyati deganda nima tushuniladi?",
    },
    {
      id: 82,
      correct_answer:
        "A. har bir harakat qat’iy belgilangan ma’noda tushuniladi",
      quiz: "Algoritmning yagonalik xossasi deganda nima tushuniladi?",
    },
    {
      id: 83,
      correct_answer:
        "A. bu algoritmga koʻra bir emas, balki oʻxshash bo’lgan bir sinf masalalar yechilishi kerak",
      quiz: "Algoritmning ommaviylik xossasi deganda nima tushuniladi?",
    },
    {
      id: 84,
      correct_answer:
        "A. algoritm va har bir qadam muayyan natijaga olib kelishi kerak",
      quiz: "Algoritmning natijaviylik xususiyati deganda nima tushuniladi?",
    },
    {
      id: 85,
      correct_answer: "A. algoritm chekli sonli bosqichlarda boʻlishi kerak",
      quiz: "Algoritmning cheklilik xossasi deganda nima tushuniladi?",
    },
    {
      id: 86,
      correct_answer:
        "A. Loyihaning mohiyati, maqsadlari va ko‘lamini aniq bayon qilishni, shuningdek, loyihaning barcha yakuniy mahsulotini ularning xususiyatlari bilan belgilashni nazarda tutadi.",
      quiz: "Loyiha ta'rifi?",
    },
    {
      id: 87,
      correct_answer:
        "A. rejaning turli darajadagi tafsilotlari ko'rib chiqiladi va struktura elementlari darajalarining optimal soni aniqlanadi",
      quiz: "detallashtirish darajasi?",
    },
    {
      id: 88,
      correct_answer: "A. Loyihaning hayotiy sikli ishlab chiqilishi",
      quiz: "Jarayon tuzilishi nima?",
    },
    {
      id: 89,
      correct_answer:
        "A. loyihaga jalb qilingan barcha ishtirokchilar guruhlari yoki alohida ishtirokchilarni, shu jumladan loyihani amalga oshirishdan manfaatdor bo‘lgan tashqi muhitni qamrab olgan",
      quiz: "Tashkiliy tuzilma nima?",
    },
    {
      id: 90,
      correct_answer:
        "A. Yakuniy mahsulotni quyi tizimlar yoki tarkibiy qismlar bo'yicha taqsimlash diagrammasi, shu jumladan moddiy ta'minot, dasturiy ta'minot, axborot bilan ta'minlash, xizmat ko'rsatish, agar kerak bo'lsa, hududiy taqsimlash.",
      quiz: "Mahsulot tuzilmasi nima?",
    },
    {
      id: 91,
      correct_answer:
        "A. loyihani tuzishda foydalaniladigan kodlar tizimini ishlab chiqish nazarda tutiladi",
      quiz: "Tashkilotning buxgalteriya tizimi nima?",
    },
    {
      id: 92,
      correct_answer:
        "A. Tanqidiy yo'lni topish jarayonida yanada detallashtirish yo’li ko’rsatiladi.",
      quiz: "Loyihaning bosh rejasi nima?",
    },
    {
      id: 93,
      correct_answer:
        "A. Loyiha tuzilmasi elementlari va tashkiliy tuzilma o'rtasidagi munosabatlarni tahlil qilish natijasida matritsa quriladi, unda loyiha tuzilmasi elementlari qatorlarga aylanadi va kompaniyaning tashkiliy tuzilmasi elementlari ustunlarga aylanadi.",
      quiz: "Mas'uliyatni taqsimlash matritsasi?",
    },
    {
      id: 94,
      correct_answer:
        "A. algoritmning qadamlar ketma-ketligi qayta-qayta bajarilishi",
      quiz: "Sikllik algoritm nima?",
    },
    {
      id: 95,
      correct_answer:
        "A. bunda shartga koʻra u yoki boshqa harakatlar ketma-ketligi bajariladi",
      quiz: "Tarmoqlanuvchi algoritm nima?",
    },
    {
      id: 96,
      correct_answer:
        "A. uning harakatlari boshidan oxirigacha ketma-ket bajariladi",
      quiz: "Chiziqli algoritm nima?",
    },
    {
      id: 97,
      correct_answer: "A. 7",
      quiz: "Aloqadorlikning nechta turi mavjud?",
    },
    {
      id: 98,
      correct_answer:
        "A. kirishlar toʻplamini hisobga olgan holda chiqishlar toʻplami qanday hisoblanishini tavsiflovchi model",
      quiz: "Hisoblash modeli nima?",
    },
    {
      id: 99,
      correct_answer: "A. ketma-ket, funksional va parallel",
      quiz: "Hisoblash modellari qanday toifalarga bo'linadi?",
    },
    {
      id: 100,
      correct_answer:
        "A. Cheklangan avtomatlar, chiqarish avtomatlari, Tyuring mashinasi",
      quiz: "Ketma-ket modellarga nimalar kiradi:",
    },
    {
      id: 101,
      correct_answer:
        "A. Lambda hisobi, rekursiv funksiyalar, kombinator mantiq",
      quiz: "Funktsional modellarga nimalar kiradi?",
    },
    {
      id: 102,
      correct_answer:
        "A. Texnologik Kan tarmoqlari, Petri tarmoqlari, Sinxron ma’lumotlar oqimi",
      quiz: "Parallel modellarga nimalar kiradi?",
    },
    {
      id: 103,
      correct_answer: "A. algoritm",
      quiz: "Oldindan belgilangan aniq va ravshan ko'rsatma ijrochining cheklangan miqdordagi bosqichlarda muammoning echimini olish uchun ma'lum bir ketma-ketlikni bajarishi qanday nomlanadi?",
    },
    {
      id: 104,
      correct_answer:
        "A. muayyan harakatlar ketma-ketligini bajarish uchun ijrochiga aniq va ravshan ko'rsatmasi",
      quiz: "Algoritm nima?",
    },
    {
      id: 105,
      correct_answer:
        "A. muayyan harakatlar majmuasini bajarishga qodir boʻlgan shaxs yoki kompyuter",
      quiz: "Algoritm ijrochisi nima?",
    },
    {
      id: 106,
      correct_answer: "A. dastur",
      quiz: "“Tushunarli” kompyuter dasturlash tilida yozilgan algoritm nima deb ataladi?",
    },
    {
      id: 107,
      correct_answer:
        "A. algoritmni geometrik shakllar yordamida ifodalash usuli",
      quiz: "Algoritmning grafik ta'rifi (blok-sxemalar) nima?",
    },
    {
      id: 108,
      correct_answer:
        "A. algoritm o'xshash masalalarni yechish uchun uni qo'llash imkoniyatini ta'minlashi kerak",
      quiz: "Algoritmning “ommaviylik” xossasi nimani anglatadi?",
    },
    {
      id: 109,
      correct_answer:
        "A.  muhandislik inshootini yoki texnologik jarayonni modellashtirish jarayoni boʻlib, uning muhandislik modeliga maʼlum texnik gʻoyani amalga oshirish imkonini beradi.",
      quiz: "Loyihalashtirish nima?",
    },
    {
      id: 110,
      correct_answer: "A. loyiha",
      quiz: "Loyihalash jarayonining natijasi qanday?",
    },
    {
      id: 111,
      correct_answer:
        "A. loyihani amalga oshirish uchun zarur bo'lgan buyruqlar to'plami",
      quiz: "Loyihalash algoritmi nima?",
    },
    {
      id: 112,
      correct_answer:
        "A. loyihaning keyingi yo‘nalishini yoki yakunini ko‘rib chiqish va aniqlash uchun zarur va yetarli bo‘lgan loyiha ob’ektining oraliq yoki yakuniy tavsifi.",
      quiz: "Loyiha yechimi nima?",
    },
    {
      id: 113,
      correct_answer: "A. loyihalash shablonlari",
      quiz: "Dasturiy ta'minot arxitekturasini loyihalashda muayyan muammoning umumiy yechimi?",
    },
    {
      id: 114,
      correct_answer: "A. idiomalar",
      quiz: "Eng quyi darajadagi va eng oddiy shablonlar nima deb ataladi?",
    },
    {
      id: 115,
      correct_answer: "A. yaratilgan shablonlar",
      quiz: "Qanday shablonlar dasturga keraksiz bog'liqliklarni kiritmasdan ob'ektlarni moslashuvchan yaratish haqida tashvishlanadi?",
    },
    {
      id: 116,
      correct_answer: "A. tuzilmaviy shablonlar",
      quiz: "Qaysi shablonlar ob'ektlar o'rtasidagi munosabatlarni o'rnatishning turli usullarini ko'rsatadi?",
    },
    {
      id: 117,
      correct_answer: "A. xulq-atvor shablonlari",
      quiz: "Ob'ektlar o'rtasidagi samarali aloqa uchun qanday shablonlar g'amxo'rlik qiladi?",
    },
    {
      id: 118,
      correct_answer: "A. arxitekturaviy shablonlar",
      quiz: "Berilgan kontekstda dastur arxitekturasining ko’p uchraydigan muammosining umumiy va takrorlanuvchi yechimi ...",
    },
    {
      id: 119,
      correct_answer: "A. ko’pbosqichli",
      quiz: "Abstraktsiyaning ma'lum darajalarida joylashgan ba'zi bir kichik vazifalar guruhlariga ajraladigan dasturlarni tuzish uchun qanday arxitekturaviy shablon ishlatiladi?",
    },
    {
      id: 120,
      correct_answer:
        "A. Onlayn ilovalar (elektron pochta, hujjat almashish, bank xizmatlari)",
      quiz: "Mijoz-server shabloni qayerda ishlatiladi?",
    },
    {
      id: 121,
      correct_answer: "A. Kompyuter shinasiga ulangan periferik qurilmalar",
      quiz: "Etakchi-izdosh shabloni qayerda ishlatiladi?",
    },
    {
      id: 122,
      correct_answer: "A. kanallar va filtrlar",
      quiz: "Ma'lumotlar oqimini ishlab chiqaruvchi va qayta ishlaydigan tizimlar uchun qaysi shablon mos keladi?",
    },
    {
      id: 123,
      correct_answer:
        "A. uzilgan komponentlar bilan taqsimlangan tizimlarni strukturalash uchun",
      quiz: "Vositachi shabloni nima uchun foydalaniladi?",
    },
    {
      id: 124,
      correct_answer: "A. vositachi shabloni",
      quiz: "Ajratilgan komponentlar bilan taqsimlangan tizimlarni tuzish uchun qanday shablon ishlatiladi?",
    },
    {
      id: 125,
      correct_answer: "A. fayl almashish tarmoqlari",
      quiz: "“Foydalanuvchilararo shablon” i qayerda qo'llaniladi?",
    },
    {
      id: 126,
      correct_answer:
        "A. hodisa manbai, voqea tinglovchisi, kanal, voqea asosi",
      quiz: "Voqealarga asoslangan shablonining tarkibiy qismlari qanday?",
    },
    {
      id: 127,
      correct_answer: "A. doska shabloni",
      quiz: "Aniq deterministik echimlar mavjud bo'lmagan muammolar uchun qanday shablon mos keladi?",
    },
    {
      id: 128,
      correct_answer: "A. o'z taqdimotiga ega ixtisoslashtirilgan modullar",
      quiz: "Doska shablonidagi bilim manbai komponenti nima?",
    },
    {
      id: 129,
      correct_answer:
        "A. Ba'zi hollarda, ba'zi bosqichlarni o'tkazib yuborish mumkin",
      quiz: "Ko’pbosqichli shablonning kamchiliklari?",
    },
    {
      id: 130,
      correct_answer:
        "A. Resurs va hisoblash quvvati jihatidan yuqori mashtablilik",
      quiz: "“Foydalanuvchilararo shablon” shablonining afzalliklari?",
    },
    {
      id: 131,
      correct_answer: "A. yaratuvchi shablonlar",
      quiz: "Qaysi shablonlar tizimni ob'ektlarni yaratish, kompozitsiyalash va taqdim etish usullaridan mustaqil qilish imkonini beradi?",
    },
    {
      id: 132,
      correct_answer: "A. fabrika",
      quiz: "Quyidagi shablonlardan qaysi biri yaratuvchi hisoblanadi?",
    },
    {
      id: 133,
      correct_answer: "A. fabrika",
      quiz: "Hech qanday mantiqni ko'rsatmasdan mijoz uchun namuna yaratadigan asosiy shablon nima?",
    },
    {
      id: 134,
      correct_answer: "A. fabrika usuli",
      quiz: "Subklasslar sinfni yaratish uchun interfeys bilan ta'minlaydigan loyihalashning yaratuvchi shabloni qaysi biri?",
    },
    {
      id: 135,
      correct_answer:
        "A. O'ziga xos loyihalash shabloni, o'zaro bog'liq yoki o'zaro bog'liq bo'lgan ob'ektlar oilalarini ularning maxsus sinflarini ko'rsatmasdan yaratish uchun interfeysni ta'minlaydi.",
      quiz: "Abstrakt fabrika shabloni nima?",
    },
    {
      id: 136,
      correct_answer: "A. quruvchi",
      quiz: "Kompozit ob'ektni yaratish usulini ta'minlovchi loyihalashning yaratuvchi shabloni qaysi biri?",
    },
    {
      id: 137,
      correct_answer: "A. yagona ",
      quiz: "Yagona jarayonli ilovada sinfning yagona nusxasi mavjudligini ta'minlaydigan va ushbu namunaga global kirish nuqtasini ta'minlaydigan loyihalashning yaratuvchi shabloni qaysi biri?",
    },
    {
      id: 138,
      correct_answer: "A. tuzilmaviy naqshlar",
      quiz: "Sinflar va ob'ektlardan qanday qilib kattaroq tuzilmalar hosil bo'lishi haqidagi savolga javob beradigan loyihalash shabloni?",
    },
    {
      id: 139,
      correct_answer: "A. bog‘lovchi komponovshik",
      quiz: "Quyidagi shablonlardan qaysi biri tuzilmaviy hisoblanadi?",
    },
    {
      id: 140,
      correct_answer:
        "A. maxsus yaratilgan interfeys orqali oʻzgartirish uchun mavjud boʻlmagan obyekt funksiyalaridan foydalanishni tashkil etish",
      quiz: "Adapter tuzilmaviy shabloni nima uchun mo'ljallangan?",
    },
    {
      id: 141,
      correct_answer: "A. ko'prik",
      quiz: "Abstraktsiya va amalga oshirishni mustaqil ravishda o'zgartirishi uchun dasturiy ta'minotni loyihalashda foydalaniladigan strukturaviy dizayn namunasi?",
    },
    {
      id: 142,
      correct_answer:
        "A. bir vaqtning oʻzida oddiy va murakkab obʼyektlardan iborat boʻlishi mumkin boʻlgan sinflar ierarxiyasi",
      quiz: "Loyihalashning tuzilmaviy shablonlaridan komponovshik nimani belgilaydi?",
    },
    {
      id: 143,
      correct_answer: "A. o’rinbosar",
      quiz: "Barcha chaqiruvlarni ushlab turish orqali boshqa ob'ektga kirishni boshqaradigan ob'ektni ta'minlovchi tuzilmaviy shablon (konteyner vazifasini bajaradi)?",
    },
    {
      id: 144,
      correct_answer: "A. xulq-atvorli shablonlari",
      quiz: "Turli ob'ektlar va sinflarning o'zaro ta'sirini amalga oshirish algoritmlari va usullarini belgilaydigan loyihalash shablonining nomi qanday?",
    },
    {
      id: 145,
      correct_answer: "A. ma’suliyatlar zanjiri",
      quiz: "Quyidagi modellardan qaysi biri xulq-atvor shablonidir?",
    },
    {
      id: 146,
      correct_answer: "A. ma’suliyatlar zanjiri",
      quiz: "Mas'uliyat darajasida tizimni tashkil qilish uchun xulq-atvor shabloni qaysi?",
    },
    {
      id: 147,
      correct_answer: "A. vositachi",
      quiz: "Ko'pgina ob'ektlarning o'zaro ta'sirida zaif bog'lanishni yaratish va ob'ektlarning bir-biriga aniq havola qilish zaruratini yo'q qilishga imkon beruvchi xulq-atvorli shablon?",
    },
    {
      id: 148,
      correct_answer:
        "A. algoritmlar oilasini aniqlash, ularning har birini qamrab olish va ularning oʻzaro almashinishini taʼminlash.",
      quiz: "“Strategiya” xulq-atvor loyihalash shabloni nima uchun?",
    },
    {
      id: 149,
      correct_answer: "A. xotira",
      quiz: "Inkapsulatsiyani buzmasdan, ob'ektning ichki holatini keyinchalik o'sha holatga qaytarish uchun tuzatish va saqlash imkonini beruvchi xulq-atvorli loyihalash shabloni?",
    },
    {
      id: 150,
      correct_answer:
        "A. dasturni bajarish jarayonida obʼyekt oʻz holatiga qarab oʻz harakatini oʻzgartirishi kerak boʻlgan hollarda qoʻllaniladi",
      quiz: "Xolat xulq-atvori loyihalash shabloni qachon qo'llaniladi?V. algoritmlar turkumini aniqlash, ularning har birini qamrab olish va oʻzaro almashinishini taʼminlash uchun ishlatiladi.",
    },
    {
      id: 151,
      correct_answer: "A. modul",
      quiz: "Muayyan nuqtai nazardan ko'rib chiqiladigan ixtiyoriy tizim, ob'ekt yoki jarayonning ma'lum tilda yoki grafik shaklda tasvirlanishi nima?",
    },
    {
      id: 152,
      correct_answer:
        "A. Dasturiy ta'minot kontseptsiyasi ishlab chiqilgan paytdan boshlab va undan keyingi dasturiy ta'minotdan foydalanish mumkin bo'lmagan vaqtgacha tugaydigan vaqt davri",
      quiz: "Dasturning hayot sikli nima?",
    },
    {
      id: 153,
      correct_answer:
        "A. bu tizim xatti-harakatining xarakterli xususiyatlarini ishlab chiquvchining til tavsifi.",
      quiz: "Spetsifikatsiya nima?",
    },
    {
      id: 154,
      correct_answer: "A. dasturiy ta'minotning hayot sikli",
      quiz: "Dasturiy ta'minot tushunchasi paydo bo'lgan paytdan boshlab va undan keyingi dasturiy ta'minotdan foydalanish mumkin bo'lmagan vaqtgacha bo'lgan vaqt davri qanday nomlanadi:",
    },
    {
      id: 155,
      correct_answer: "A. kaskadliA. metodologiya",
      quiz: "Qaysi model loyiha davomida doimiy bo'lib qoladigan aniq belgilangan talablarni talab qiladi?D.V modeliTegishli loyihalarni amalga oshirishda modellarni qurish jarayonini belgilovchi dasturiy tizimlar va ilovalarni ishlab chiqish tamoyillari va usullari majmui qanday nomlanadi?",
    },
    {
      id: 156,
      correct_answer: "A. ma'lumotlarni qayta ishlash algoritmi",
      quiz: "Kelajakda tanlangan dasturlash muhitida amalga oshirilishi mumkin bo'lgan informatika muammosini hal qilish usulining tavsifi",
    },
    {
      id: 157,
      correct_answer:
        "A. algoritmni tahlil qilishda hisobga olinadigan elementar amallar soni",
      quiz: "Algoritmning murakkabligi nimada?",
    },
    {
      id: 158,
      correct_answer:
        "A. Bular ma’lumotlarni qayta ishlash texnikasi haqida tushunchaga ega bo‘lish uchun foydalaniladigan asosiy tamoyillar va metodologiyani belgilaydigan algoritmlardir.",
      quiz: "Ma'lumotlar tuzilmalari bilan ishlash algoritmlari qanday?",
    },
    {
      id: 159,
      correct_answer: "A. massivlar va fayllarni tartiblash algoritmlari",
      quiz: "Saralash algoritmlari nima?",
    },
    {
      id: 160,
      correct_answer: "A. satrlarni qayta ishlash algoritmlari",
      quiz: "Belgilar ketma-ketligini qayta ishlashning bir qancha usullarini o'z ichiga olgan algoritmlar qanday nomlanadi?",
    },
    {
      id: 161,
      correct_answer:
        "A. Grafik uchlari to‘plami va qirralar to‘plami (cho‘qqi juftlari orasidagi bog‘lanish) bo‘lgan mavhum matematik obyekt.",
      quiz: "Grafik nima?",
    },
    {
      id: 162,
      correct_answer: "A. halqa(petlya)",
      quiz: "Chiqib ketadigan va bir xil cho'qqiga tushadigan chiziq nima deb ataladi?",
    },
    {
      id: 163,
      correct_answer:
        "A. grafning dastlabki berilgan bir choʻqqisidan qolgan barcha choʻqqilarga eng qisqa yoʻllarni topadi",
      quiz: "Dekstra algoritmi?",
    },
    {
      id: 164,
      correct_answer: "A. kodni generasiya qilish",
      quiz: "Kompilyatorning maxsus qismi - kod generatori sintaktik jihatdan to'g'ri dasturni mashinada bajarilishi mumkin bo'lgan buyruqlar ketma-ketligiga aylantirganda kompilyatsiya jarayonining qismi qanday nomlanadi?",
    },
    {
      id: 165,
      correct_answer: "A. rejalashtirish",
      quiz: "Konveyerli protsessorlarda dasturni bajarish tezligiga sezilarli ta'sir ko'rsatadigan optimallashtirish nima deyiladi?",
    },
    {
      id: 166,
      correct_answer: "A. algoritmik modellashtirish",
      quiz: "Loyihaning murakkabligining dasturiy mahsulotning qandaydir miqdoriy ko‘rsatkichiga bog‘liqligini aniqlashda avval tugallangan loyihalar bo‘yicha statistik ma’lumotlarni tahlil qilishga asoslangan usul qanday nomlanadi?",
    },
    {
      id: 167,
      correct_answer: "A. ekspert xulosasi",
      quiz: "Yaratilgan dasturiy mahsulotni qo'llash sohasini biladigan dasturiy ta'minotni ishlab chiqish texnologiyasi bo'yicha bir necha mutaxassislardan so'rov qanday usulda o'tkaziladi?",
    },
    {
      id: 168,
      correct_answer: "A. analogiya boʻyicha baholash",
      quiz: "Rejalashtirilgan loyihani o'xshash xususiyatlarga ega oldingi loyihalar bilan solishtirishga qanday usul deyiladi?",
    },
    {
      id: 169,
      correct_answer:
        "A. Turli ishlab chiqish guruhlarida o'lchamlarni va ishlashni o'lchash usullarini solishtirish qobiliyati",
      quiz: "O'lchov birligi sifatida LOC (Lines of Code) dan foydalanishning afzalliklari?",
    },
    {
      id: 170,
      correct_answer: "A. dasturiy ta'minot ko'rsatkichi",
      quiz: "Dasturiy ta'minotning ma'lum bir xususiyati yoki uning texnik xususiyatlarining raqamli qiymatini olish imkonini beruvchi o'lchov qanday nomlanadi?",
    },
    {
      id: 171,
      correct_answer: "A. nominal shkala",
      quiz: "Dasturlarni darajalaridan qat'i nazar, ba'zi xususiyatlarning mavjudligi yoki yo'qligiga qarab turlarga ajratadigan ko'rsatkichlar qaysi shkalaga mos keladi?",
    },
    {
      id: 172,
      correct_answer: "A. tartibli shkala ",
      quiz: "Ba'zi xususiyatlarni mos yozuvlar qiymatlari bilan taqqoslash orqali tartiblash imkonini beradigan ko'rsatkichlar qaysi shkalaga mos keladi, ya'ni ushbu shkala bo'yicha o'lchov aniq dasturlarning nisbiy o'rnini aniqlaydi?",
    },
    {
      id: 173,
      correct_answer: "A. intervalli shkala",
      quiz: "Ular nafaqat dasturlarning nisbiy o'rnini, balki ular qanchalik uzoqda joylashganligini ham ko'rsatadigan ko'rsatkichlar qanday shkalaga mos keladi?",
    },
    {
      id: 174,
      correct_answer: "A. nisbiy shkala",
      quiz: "Nafaqat dasturlarni ma'lum bir tarzda tartibga solish va ularning bir-biriga nisbatan o'rnini baholash, balki tavsiflarni o'lchash mumkin bo'lgan chegaradan qanchalik uzoqligini aniqlash imkonini beradigan ko'rsatkichlar qaysi shkalaga mos keladi?",
    },
    {
      id: 175,
      correct_answer:
        "A. hayot siklining bosqichlari uchun ish jadvalini kuzatib borish va haqiqiy va rejalashtirilgan qiymatlarni solishtirish",
      quiz: "Hayotiy sikl ko'rsatkichi va calendar rejaning asosiy maqsadi nima?",
    },
    {
      id: 176,
      correct_answer: "A. loyihaning murakkablik omili",
      quiz: "Loyihaning barcha tashqi artefaktlarining umumiy hajmini har bir tashqi artefakt uchun aniqlangan murakkablik koeffitsientiga ko'paytiruvchi qiymat qanday nomlanadi?",
    },
    {
      id: 177,
      correct_answer:
        "A. loyihadagi jadvaldagi oʻzgarishlarni ularning yuzaga kelish ehtimolini hisobga olgan holda aks ettiruvchi umumiy qiymat (odam-soatlarda ifodalangan)",
      quiz: "Jadvalning umumiy xavfi nima?",
    },
    {
      id: 178,
      correct_answer: "A. loyiha zichligi",
      quiz: "Jadvaldagi barcha ishlarning ketma-ket bajarilgandagi umumiy davomiyligining uning yig'indisiga va barcha rejalashtirilgan ishlar uchun vaqtning umumiy zaxirasiga nisbati?",
    },
    {
      id: 179,
      correct_answer: "A. loyihaning mustaqilligi",
      quiz: "Loyihaning ichki faoliyatiga bog'liqliklar soni bilan bog'liqliklarning umumiy soni, shu jumladan tashqi faoliyat va sotuvchilarga bog'liqliklar o'rtasida qanday bog'liqlik bor?",
    },
    {
      id: 180,
      correct_answer: "A. Loyiha rejasining murakkabligi",
      quiz: "Har xil rejalashtirilgan ishlar o'rtasidagi munosabatlar va o'zaro bog'liqliklar soni barcha rejalashtirilgan ishlarning umumiy soniga tegishliligi nima deyiladi?",
    },
    {
      id: 181,
      correct_answer: "",
      quiz: "Umumiy byudjet xavfi nima? A. tasodifiy xarajatlar bo‘yicha byudjet rejasi asosida, ularning yuzaga kelish ehtimolini hisobga olgan holda, loyiha bo‘yicha barcha tasodifiy xarajatlar yig‘indisi.",
    },
    {
      id: 182,
      correct_answer:
        "A. har xil rejalashtirilgan ishlar o'rtasidagi munosabatlar va o'zaro bog'liqliklar soni, barcha rejalashtirilgan ishlarning umumiy soniga tegishli",
      quiz: "Loyiha rejasining murakkabligi nimada?",
    },
    {
      id: 183,
      correct_answer:
        "A. bajarilgan ish uchun haqiqiy bajarilgan ish va rejalashtirilgan ish o'rtasidagi farq",
      quiz: "Calendar rejadagi farq nima?",
    },
    {
      id: 184,
      correct_answer: "A. jadvalning bajarilishi",
      quiz: "Tugallangan ish uchun haqiqiy mehnat xarajatlarining ushbu ishlar uchun rejalashtirilgan mehnat xarajatlariga nisbati (rejalashtirilgan mehnat zichligi)?",
    },
    {
      id: 185,
      correct_answer: "A. rejadan orqada",
      quiz: "Rejadan tashqari topshiriqlar uchun kechikish vaqti?",
    },
    {
      id: 186,
      correct_answer: "A. baholashning ishonchlilik omili",
      quiz: "Loyiha qiymati mahsulotining uning davomiyligi bo'yicha o'sib borayotgan rejalashtirish xatosining umumiy qiymatiga nisbati?",
    },
    {
      id: 187,
      correct_answer: "A. statik kod tahlili",
      quiz: "Dasturlarning dastlabki kodidagi xato va nuqsonlarni aniqlash jarayoni qanday nomlanadi?",
    },
    {
      id: 188,
      correct_answer: "A. testlash",
      quiz: "Dasturiy ta'minot mahsuloti va tegishli ish natijalarini rejalashtirish, tayyorlash va baholash bilan bog'liq bo'lgan dinamik va statik hayot siklining barcha jarayonlarini o'z ichiga olgan jarayon, ular tavsiflangan talablarga javob berishini aniqlash, ularning maqsadga erishish uchun mos ekanligini ko'rsatish uchun shuningdek, kamchiliklarni topish uchun belgilangan maqsadlar nima deyiladi?",
    },
    {
      id: 189,
      correct_answer: "A. statik testlash",
      quiz: "Dasturiy ta'minot mahsuloti kodini, masalan, ko'rib chiqish yoki statik kod tahlilini bajarmasdan, spetsifikatsiya yoki amalga oshirish darajasida komponent yoki tizimni sinovdan o'tkazish qanday nomlanadi?",
    },
    {
      id: 190,
      correct_answer: "A. vizual modellashtirish",
      quiz: "Modellar yordamida real dunyoda g'oyalar va muammolarni ifodalash usuli?",
    },
    {
      id: 191,
      correct_answer: "A. dekompozisiya",
      quiz: "Muammoning strukturasidan foydalanadigan va bitta katta muammoning yechimini bir-biri bilan bog'liq bo'lsa-da, lekin soddaroq bo'lsa-da, bir qator kichikroq muammolarni hal qilish bilan almashtirishga imkon beradigan ilmiy usul?",
    },
    {
      id: 192,
      correct_answer: "A. model",
      quiz: "Murakkab muammo yoki tuzilmaning mohiyatini ahamiyatsiz tafsilotlarga qaratmasdan tasvirlaydigan va shu bilan uni yanada tushunarli qiladigan abstraksiya?",
    },
    {
      id: 193,
      correct_answer: "A. batafsil loyihalash",
      quiz: "Arxitektura va amalga oshirish mustasno bo’lgan loyihalash ishlarining to'liq hajmi,?",
    },
  ];
  const search = req.params.search;

  const result = data.filter((item) => includes(toLower(item?.quiz), search));
  res.status(200).send(result);
};

module.exports = {
  fintQuestion,
};
