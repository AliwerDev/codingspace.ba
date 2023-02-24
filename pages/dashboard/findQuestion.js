const { includes, toLower } = require("lodash");

const fintQuestion = async (req, res) => {
  const data = [
    {
      quiz: "Assembler dasturlash tili qanday dasturlash tilllari oilasiga kiradi?",
      correct_answer: "quyi darajalik",
    },
    {
      quiz: "Fortran dasturlash tili qanday dasturlash tilllari oilasiga kiradi?",
      correct_answer: "quyi darajalik",
    },
    {
      quiz: "Fortran dasturlash tili nechanchi yilda kim tomonidan ishlab chiqilgan?",
      correct_answer: "1954 yilda Jon Bekus tomonidan",
    },
    {
      quiz: "Ilmiy-texnik sohada �Paradigma� atamasi kim tomonidan birinchi b?�lib kiritilgan?",
      correct_answer: "1962 yilda Tomas Kun tomonidan",
    },
    {
      quiz: "Dasturlash paradigmasi kim tomonidan birinchi b?�lib kiritilgan?",
      correct_answer: "1978 yilda Robert Floyd tomonidan",
    },
    {
      quiz: "Dasturlash paradigmasi � ...",
      correct_answer:
        "kompyuter dasturlarini yozish uslubini belgilaydigan g�oyalar va tushunchalar t?�plami",
    },
    {
      quiz: "Dasturlash paradigmasi � ...",
      correct_answer:
        "dasturlarni yozish uslubini belgilaydigan g�oyalar va tushunchalar t?�plami, dasturlashga yondoshish",
    },
    {
      quiz: "Tomas Kun paradigmalarni ...",
      correct_answer:
        "tadqiqotlar olib boriladigan aniq ilmiy qarashlar tizimlari deb atagan",
    },
    {
      quiz: "Paradigma s?�zi dasturlashda ...",
      correct_answer:
        "dasturlarni amalga oshirishning umumiy usulini (texnikasini) taqsimlaydigan belgilar oilasini aniqlash uchun ishlatiladi.",
    },
    {
      quiz: "Kompyuterli dasturlash hamda umumiy dasturiy paradigmalari � ...",
      correct_answer:
        "amaliy, nazariy va funksional dasturlash paradigmalaridan iborat",
    },
    {
      quiz: "Amaliy dasturlash � bu ...",
      correct_answer:
        "kompyuterlar paydo b?�lishidan ancha oldin ?�rganilgan axborotni hisoblash va raqamlarni qayta ishlashning hisoblash jarayonlarini aks ettiradigan muammoli y?�nalishlarga b?�ysunadi",
    },
    {
      quiz: "Nazariy dasturlash  � bu ...",
      correct_answer:
        "ilmiy nashrlarda taqdim etilgan dasturlash va informatika sohasidagi ilmiy tajribalar natijalarining aniqligi va taqqoslanishiga qaratilgan",
    },
    {
      quiz: "Applikativ dasturlash � bu ...",
      correct_answer:
        "deklarativ dasturlashning bir turi b?�lib, unda dastur yozish bir obyektni boshqasiga tizimli ravishda q?�llashdan iborat",
    },
    {
      quiz: "Eksperimental dasturlash �",
      correct_answer:
        "tizimli dasturlash masalalarini, sun�iy intellektni ?�rganish va informatikada yangi inovatsion texnologiyalarni rivojlantirishda shakllandi",
    },
    {
      quiz: "Dasturlash tili � ...",
      correct_answer:
        "kompyuter dasturlarini yozish uchun rasmiy til xisoblanadi",
    },
    {
      quiz: "Kompyuterda dasturlash � bu ...",
      correct_answer:
        "kompyuter mikroprotsessori uchun turli buyruqlar berish, qachon, qayerda nimani ?�zgartirish va nimalarni kiritish yoki chiqarish haqida buyruqlar berishdir",
    },
    {
      quiz: "Dasturlash tillari �",
      correct_answer: "quyi va yuqori darajali dasturlash tillariga b?�linadi",
    },
    {
      quiz: "Dasturlash tizimlariga �",
      correct_answer:
        "translyatorlar, kutubxona dasturlari, redaktorlar, kompanovshiklar, zagr?�zchiklar va otladchiklar kiradi",
    },
    {
      quiz: "Dasturlash tizimlari �",
      correct_answer:
        "til muammolarini xal qiluvchi dasturlarni birlashtiradilar va dasturiy ta�minotni ishlab chikarishga m?�ljallangan",
    },
    {
      quiz: "Dasturlarga xizmat k?�rsatuvchi tizimlar � ...",
      correct_answer:
        "maxsus servis dasturlar b?�lib, ular yordamida operatsion tizimni ?�ziga xizmat k?�rsatish mumkin",
    },
    {
      quiz: "Translyator � bu ...",
      correct_answer:
        "dastur b?�lib, berilgan dasturlash tilidagi kiruvchi dastur matnini unga ekvivalent b?�lgan chiqishdagi natijaviy tilga ?�giradi",
    },
    {
      quiz: "Kompilyator � bu ...",
      correct_answer:
        "translyator b?�lib, u berilgan dastur mantnini unga ekvivalent b?�lgan mashina komandalaridagi obyekt dasturga ?�giradi",
    },
    {
      quiz: "Interpretator � bu ...",
      correct_answer:
        "dastur b?�lib, u berilgan dastur matnini birdaniga qabul qiladi va bajaradi (natijaviy kodi b?�lmaydi)",
    },
    {
      quiz: "Kompilyator formal tillar nuqtai nazaridan qanday funksiyalarni bajaradi?",
      correct_answer:
        "kiruvchi dastur matni tili uchun anglovchi xisoblanadi va natijaviy dastur tili uchun generator xisoblanadi",
    },
    {
      quiz: "Leksik tahlil � bu ...",
      correct_answer:
        "kompilyator b?�lagi b?�lib, dastur literalarini ?�kiydi  va ular orqali kiruvchi til leksemalarini k?�radi",
    },
    {
      quiz: "Sintaktik tahlil � bu ...",
      correct_answer:
        "tahlil bosqichidagi kompilyatorning asosiy b?�lagidir. Tilning sintaktik konstruksiyalarini ajratadi",
    },
    {
      quiz: "Semantik tahlil � bu ...",
      correct_answer:
        "kompilyator b?�lagi b?�lib, kiruvchi til semantikasi nuqtai nazaridan dastur matnini tekshiradi",
    },
    {
      quiz: "Kodni generatsiyalashga tayyorgarlik �",
      correct_answer:
        "natijaviy dasturning sintezi bilan bog�lik b?�lgan xarakatlarga tayyorgarlik bajariladi",
    },
    {
      quiz: "Kodni genaratsiyalash �",
      correct_answer:
        "natijaviy kodni bevosita xosil etish � kodni optimizatsiyalashni ?�z ichiga olgan asosiy faza",
    },
    {
      quiz: "Identifikatorlar jadvali �",
      correct_answer:
        "kiruvchi dastur elementlari xaqidagi ma�lumotlarni saqlovchi berilganlar t?�plami",
    },
    {
      quiz: "?�tish � bu ...",
      correct_answer:
        "tashqi xotiradan berilganlarni oxirgi ?�kish jarayoni, ularni qayta ishlash va tashqi xotiraga joylashtirish",
    },
    {
      quiz: "Assembler � bu ...",
      correct_answer:
        "tizimli qayta ishlovchi dastur b?�lib, u biron bir mashinaga m?�ljallangan dasturlash tilida yozilgan dastur matnini obyekt kodiga aylantirish uchun m?�ljallangan",
    },
    {
      quiz: "Assembler tilidagi matn nimalardan tashkil topgan?",
      correct_answer: "direktivalar va ismlardan tashqil topadi",
    },
    {
      quiz: "Yuklovchilar ...",
      correct_answer:
        "dasturni qayta ishlovchi dasturga yuklaydilar va unga boshqaruvni uzatadilar",
    },
    {
      quiz: "Yuklovchilar ...",
      correct_answer:
        "yuklovchilarni bog�lovchi alohida modullarni birlashtiradilar",
    },
    {
      quiz: "Yuklovchilar qanday b?�lishi mumkin?",
      correct_answer: "joy ?�zgartiruvchi yoki absolyut",
    },
    {
      quiz: "Absolyut yuklovchilar �",
      correct_answer:
        "xar bir dasturni bittadan fiksirlangan adres b?�yicha yuklaydilar",
    },
    {
      quiz: "Joy ?�zgartiruvchi yuklovchilar �",
      correct_answer:
        "dasturni xotiradagi ixtiyoriy b?�sh joyga joylashtirishlari mumkin",
    },
    {
      quiz: "Mikroprotsessorlar � bu ...",
      correct_answer:
        "belgili qayta ishlashga m?�ljallangan b?�lib, bu jarayonda mikrochaqiriqlarga mikrokengaytmalar mos q?�yiladi",
    },
    {
      quiz: "Mikroprotsessorning kirishida �",
      correct_answer: "mikrochaqiriqlardan olingan matn b?�ladi",
    },
    {
      quiz: "Mikroprotsessorning chiqishida �",
      correct_answer: "mikrokengaytmalar b?�ladi",
    },
    {
      quiz: "Translyatorlar � ...",
      correct_answer: "bir tilda yozilgan matnni boshqa tilga ?�giradilar",
    },
    {
      quiz: "Translyatorlarda �",
      correct_answer:
        "obyekt kodi aloqa redaktorining kirishiga yoki yuklovchining kirishiga kelib tushadi",
    },
    {
      quiz: "Aloqa redaktorlari � bu ...",
      correct_answer:
        "tizimli qayta ishlovchi dastur b?�lib, assembler yordamida alohida olingan obyekt modullarini yagona modulga birlashtirishga m?�ljallangan",
    },
    {
      quiz: "Aloqa redaktori chegarasida .....",
      correct_answer:
        "barcha adres y?�nalishlari yagona adreslar fazosiga ?�rnatiladi",
    },
    {
      quiz: "Translyatorlarni quyidagi k?�rinishlarini ajratib k?�rsatish mumkin:",
      correct_answer:
        "kompilyatorlar, kirishida yuqori daraja tilida yozilgan dastur matni, chiqishida mashina kodlaridagi aloqa redaktoriga yoki yuklovchiga uzatiladigan dastur",
    },
    {
      quiz: "Translyatorlarni xususiyatlari:",
      correct_answer:
        "tarjima funksiyalarini aniq b?�linishi va tarjima qilingan funksiyalarini bajarilishi",
    },
    {
      quiz: "Interpretatorlar �",
      correct_answer:
        "tarjimani va bajarilishni qatorlab va kooperativ bajaradi",
    },
    {
      quiz: "Til konvertorlari � bu",
      correct_answer:
        "bir yuqori daraja dasturlash tilida yozilgan dastur matnini boshqa yukori daraja dasturlash tiliga aylantirish uchun m?�ljallangan",
    },
    {
      quiz: "Matn redaktorlari ....",
      correct_answer:
        "mantni qayta ishlash uchun keng imkoniyatlarga egaliklari bilan farqlanadilar",
    },
    {
      quiz: "Dizassembler � ...",
      correct_answer:
        "mashina kodlari ketma-ketligini assembler k?�rinishiga ?�zgartiradigan dastur",
    },
    {
      quiz: "Dizassembler � bu ...",
      correct_answer:
        "loyixalashtirilayotgan xisoblash tizimlari arxitekturasini otladka kilish uchun foydalaniladi",
    },
    {
      quiz: "Kross-tizim � bu ...",
      correct_answer:
        "dastur bir xisoblash mashinasida mashina kodlarida ifodalangan boshqa bir xisoblash mashinasining dasturlarini olish uchun q?�llaniladi",
    },
    {
      quiz: "Kutubxonalar � bu ...",
      correct_answer:
        "kiritilayotgan matn, obyekt moduli raqami b?�lishi mumkin b?�lgan kutubxona fayllarini tashkil etish va ularga xizmat k?�rsatish uchun dasturlar",
    },
    {
      quiz: "Dasturlarning hayot davri nima?",
      correct_answer:
        "dasturni yaratish zarurligi t?�g�risida qarar qabul qilingan vaqtdan boshlab, ?�z faoliyatining yakunigacha b?�lgan uzluksiz jarayon tushuniladi",
    },
    {
      quiz: "Dasturning hayot sikli bosqichlari nima?",
      correct_answer:
        "dastur bosib ?�tishi lozim b?�lgan jarayonlarni dasturning hayot sikli bosqichlari deyiladi",
    },
    {
      quiz: "Dasturning hayot davrining dasturlashdan oldingi tahlili bosqichida....",
      correct_answer:
        "dastur taqdim etish m?�ljallangan obyektning funksional va axborot modelini formatlash bajariladi",
    },
    {
      quiz: "Dasturning hayot davrining loyihalash bosqichida....",
      correct_answer:
        "texnik topshiriqni, eskiz va texnik loyihalarni ishlab chiqiladi",
    },
    {
      quiz: "Dasturning hayot davrining Dasturni ishlab chiqish bosqichida....",
      correct_answer:
        "dasturlash bosqichida ajratilgan tizimostilarning dasturviy spetsifikatsiyasi asosida dasturlash va amaliy dasturlarni sinash amalga oshiriladi",
    },
    {
      quiz: "Dasturning hayot davrining yakunlovchi (oxirgi) bosqichida qanday amallar bajariladi?",
      correct_answer: "tizimni rivojlantirish",
    },
    {
      quiz: "Model deganda...",
      correct_answer:
        "dastur hayot davri kechishi mobaynidagi jarayonlarning ?�zaro bog�liqligi va bojarilish ketma-ketligini belgilaydi",
    },
    {
      quiz: "Dasturlash tizimlari hayot davri standartlari sinfi �",
      correct_answer:
        "tizimni qanday yaratish kerakligini, amalda yaratish, amaliyotda q?�llash va faoliyatini yakunlash tartiblarini belgilab beradi",
    },
    {
      quiz: "Dasturlash tizimlari funsional standartlari sinfi �",
      correct_answer:
        "tiziga q?�yilgan talablarni bajarilishini ta�minlash maqsadida, uning faoliyati tartibini belgilaydi",
    },
    {
      quiz: "Dasturlar uchun yaratilgan standartlar qanday siniflarga ajratilgan?",
      correct_answer: "funsional va hayot davri standartlar",
    },
    {
      quiz: "Funsional standartlar bu �",
      correct_answer:
        "tizimga q?�yilgan talablarni bajarilishini ta�minlash maqsadida, uning faoliyati tartibini belgilaydi",
    },
    {
      quiz: "Dasturlar hayot davri standartlari �",
      correct_answer:
        "tizimni qanday yaratish kerakligini, amalda yaratish, amaliyotda q?�llash va faoliyatini yakunlash tartiblarini belgilab beradi",
    },
    {
      quiz: "Pog�onali (sharshar usulining mohiyati �",
      correct_answer:
        "loyihani bosqichlarga b?�lib, bir bosqichdan keyingi bosqichga ?�tish sharti avvalgi bosqichdagi barcha ishlarning  nihoyasiga yetganligi deb belgilanadi",
    },
    {
      quiz: "Spiral modelining asosiy muammosi �",
      correct_answer: "keyingi bosqichga ?�tish paytini aniqlashdan iborat",
    },
    {
      quiz: "Pog�onali (sharshar modelining ijobiy tomoni ...",
      correct_answer:
        "ishni bajarilish muddatlarini va ishni bajarishga sarflanadigan xarajatlarni rejalashtirish imkoniyatining mavjudligi hisoblanadi",
    },
    {
      quiz: "Pog�onali (sharshar modelining kamchiligi �",
      correct_answer:
        "avval qabul kilingan qarorlarni aniqlash va qayta k?�rib chiqish maqsadda oldingi pog�onalarga qaytish zarurati doimiy ravishda  paydo b?�ladi",
    },
    {
      quiz: "Spiral model �",
      correct_answer:
        "yaratilayotgan axborot tizimiga, uni yaratilish jarayonida, bevosita va doimiy ravishda ?�zgarishlar va yangiliklarni tadbiq qilishga y?�naltirilgan",
    },
    {
      quiz: "Dasturning hayot davri deganda �",
      correct_answer:
        "uni yaratish zarurligi t?�g�risida qarar qabul qilingan vaqtdan boshlab, tizim faoliyatining yakunigacha b?�lgan uzluksiz jarayon tushuniladi",
    },
    {
      quiz: "Spiral modelning maqsadi �",
      correct_answer:
        "imkon qadar tezroq foydalanuvchilarga tayyor mahsulotni taqdim etish",
    },
    {
      quiz: "Sharshara modelining mohiyati ....",
      correct_answer:
        "loyihani t?�lig�ichi bosqichlarga b?�lib, bir bosqichdan keyingi bosqichga ?�tish sharti avvalgi bosqichdagi barcha ishlarning nihoyasiga yetganligi deb belgilagadi.",
    },
    {
      quiz: "Dasturiy ta�minot - bu",
      correct_answer:
        "tizimning apparat qismiga kerakli harakatlarni bajarishga, kompyuterni �jonlantirishga� imkon beradigan dasturlar t?�plamidan tashkil topadi",
    },
    {
      quiz: "Zamonaviy kompyuterlarning dasturiy ta�minoti qanday guruhga b?�linadi?",
      correct_answer: "tizim dasturlar va amaliy dasturlar",
    },
    {
      quiz: "Kompilyator bu....",
      correct_answer:
        "dastur tuzish uchun, kodlarning qonun qoida b?�yicha terilganligini nazorat qiluvchi va dasturning natijasini chiqaruvchi amaliy dasturdir",
    },
    {
      quiz: "Funksiyaga k?�rsatkichning yozilish sintaksisi quyidagicha:",
      correct_answer: "<tur> (* <nom>) (<parametrlar ro�yxati>);",
    },
    {
      quiz: "Konstruktor parametri sifatida ?�z sinfining nomini ishlatish mumkinmi?",
      correct_answer: "Y?�q",
    },
    {
      quiz: "Konstruktorni oddiy komponenta funksiya sifatida chaqirib b?�ladimi?",
      correct_answer: "Y?�q",
    },
    {
      quiz: "Agar sinfda oshkor destruktor mavjud b?�lmasa, ...",
      correct_answer: "k?�zda tutilgan destruktor chaqiriladi",
    },
    {
      quiz: "Dastur hali obyektni yaratganicha y?�q, ammo u elementdan foydalanishi kerak. Bunday holda nima qilish kerak?",
      correct_answer:
        "elementdan foydalanish uchun dastur uni public va static sifatida e�lon qilishi kerak",
    },
    {
      quiz: "Qaysi funskiyalar sinfdan tashqarida mavjud b?�ladi va ushbu funksiya sinfning barcha sohalariga murojaat qila olishi mumkin.",
      correct_answer: "Friend funksiyalari",
    },
    {
      quiz: "Static metodlar ________ murojat qiladi. (Jumlani t?�ldiring)",
      correct_answer: "static a�zolarga",
    },
    {
      quiz: "Bir nechta konstruktor e�lon qilinganda, asosan nimaga ahamiyat berish kerak?",
      correct_answer: "parametrlar soni har xil b?�lishiga",
    },
    {
      quiz: "Biror sinfga d?�st(friend) b?�ladigan sinf _____________.",
      correct_answer:
        "mazkur sinfning a�zolaridan foydalanish imkoniyatini yaratadi",
    },
    {
      quiz: "this k?�rsatkichidan foydalanishga misollar qaysi qatorda berilgan?",
      correct_answer: "cout<<this->n; cout<<(*this).n;",
    },
    {
      quiz: "Class nomi bilan bir xil e�lon qilinadigan funksiya nima deyiladi?",
      correct_answer: "Konstruktor",
    },
    {
      quiz: "Destructor nima?",
      correct_answer:
        "Destructor - bu obyektni y?�q qiladigan yoki ?�chiradigan a�zo funksiyasi",
    },
    {
      quiz: "Constructorning vazifasi nima?",
      correct_answer: "Classning maydonlariga boshlang�ich qiymat beradi",
    },
    {
      quiz: "Bir sinfda nechtagacha konstruktor e�lon qilish mumkin?",
      correct_answer: "Ixtiyoriy",
    },
    {
      quiz: "Konstruktorlar va destruktorlar sinfning qaysi b?�limida e�lon qilinadi?",
      correct_answer: "Public",
    },
    {
      quiz: "Do�stona funksiya nima?",
      correct_answer:
        "friend sinf atributi bilan e�lon qilingan, ammo sinf a�zosi b?�lmagan funksiya",
    },
    {
      quiz: "Dectructor e�loni qanday b?�ladi?",
      correct_answer: "Descturtor()",
    },
    {
      quiz: "Obyekt a�zolariga k?�rsatkich orqali murojat qilish uchun qaysi operator ishlatilinadi?",
      correct_answer: '"- >"',
    },
    {
      quiz: "Constructor e�loni qanday?",
      correct_answer:
        " Class Shakl{ int a; int b;  Shakl(int a, int b){ this.a=a; this.b =b;}};",
    },
    {
      quiz: "this kalit s?�zi nimani anglatadi?",
      correct_answer: "joriy obyektga k?�rsatkich",
    },
    {
      quiz: "Biror sinfga do�stona b?�ladigan sinf qanday imkoniyat yaratadi?",
      correct_answer: "mazkur sinfning a�zolaridan foydalanish",
    },
    {
      quiz: "Destruktor parametri yoki qaytariluvchi qiymatga egami?",
      correct_answer: "Y?�q",
    },
    {
      quiz: "Konstruktor qanday tip qaytaradi?",
      correct_answer: "hech qanday",
    },
    {
      quiz: "Class ?�zgaruvchisini ________e�lon qilinganda kompilyator uni obyektlar uchun bitta nusxa k?�rinishida yaratadi.",
      correct_answer: "static",
    },
    {
      quiz: "Funksiya obyekt qaytarishi uchun qaytariladigan obyektning toifasi?",
      correct_answer: "Funksiyaning qaytarish tipiga k?�rsatilishi kerak.",
    },
    {
      quiz: "Agar parametrli konstruktor mavjud b?�lsa obyektlarni inisalizatsiya qilsa b?�ladimi?",
      correct_answer: "Ha",
    },
    {
      quiz: "Sinfga ta�rif bering?",
      correct_answer:
        "sinflar - bu hali mavjud b?�lmagan obyektlarning usullarini, xususiyatlarini tavsiflovchi abstraksiY.",
    },
    {
      quiz: "Polimorfm sinf -",
      correct_answer:
        "tarkibida hech b?�lmaganda bitta virtual funksiyasi b?�lgan sinfga aytiladi",
    },
    {
      quiz: "Abstrakt sinf obyektini yaratish mumkinmi?",
      correct_answer: "mumkin emas",
    },
    {
      quiz: "Abstrakt sinfga k?�rsatkich yoki adres olish amalini e�lon qilish mumkinmi?",
      correct_answer: "mumkin",
    },
    {
      quiz: "Obyekt turini oshkor ravishda abstrakt sinf turiga keltirish mumkinmi",
      correct_answer: "mumkin emas",
    },
    {
      quiz: "Tayanch sinfda ta�riflanmagan virtual funksiya nima deb ataladi?",
      correct_answer: "pure virtual function deb ataladi",
    },
    {
      quiz: "Polimorfizm bu:",
      correct_answer:
        "tegishli sinflar uchun xos b?�lgan amallarni k?�rsatish uchun bitta ismdan foydalanishga imkon beradigan vosita",
    },
    {
      quiz: "Polimorfizm quyidagi mexanizmlar orqali amalga oshiriladi:",
      correct_answer:
        "funksiyalar, virtual funksiyalar, shablonlarning haddan tashqari k?�payishi",
    },
    {
      quiz: "Obyektga y?�naltirilgan dasturlashda polimorfizm amalga oshiriladi:",
      correct_answer:
        "qayta yuklash mexanizmlari (funksiyalar va operatsiyalar), virtual funksiyalar va shablonlar orqali",
    },
    {
      quiz: "OYD qanday xossasi bir xil iyerarxiyaning turli xil obyektlariga huddi birday munosabatda b?�lishga imkon beradi?",
      correct_answer: "polimorfizm",
    },
    { quiz: "Qaysi operatorni qayta yuklab b?�lmaydi?", correct_answer: "?:" },
    {
      quiz: "127. Qaysi operatorlarni qayta yuklash mumkin?",
      correct_answer: '"+, -, *, /, %"',
    },
    {
      quiz: "Operator funksiyasi qayerda aniqlangan b?�lishi mumkin?",
      correct_answer:
        "sinf ta�rifi ichida ham, undan tashqarida ham aniqlanishi mumkin",
    },
    {
      quiz: "Operator funksiyalarining ikki turi mavjud. Ular qaysilar?",
      correct_answer: "oddiy va komponentli",
    },
    {
      quiz: "Funksional operatsiya uch y?�l bilan aniqlanishi mumkin. Ular qaysilar?",
      correct_answer: "sinf metodi, d?�stona funksiyasi va oddiy funksiya",
    },
    {
      quiz: "Operatorlarni qayta yuklash nimaga kerak?",
      correct_answer: "obyektlar ustida amallar bajarish uchun.",
    },
    {
      quiz: "Operatorlarni qayta yuklash afzalliklari nimada?",
      correct_answer: "turli xil tipdagi qiymatlar qayta ishlash imkonyati",
    },
    {
      quiz: "Operatorlarni qayta yuklashda qanday operatordan foydalaniladi?",
      correct_answer: "operator",
    },
    {
      quiz: "Qayta yuklash nima?",
      correct_answer: "turli xil vazifalarni bajarish uchun dastur kodi",
    },
    {
      quiz: "Operatorlarni qayta yuklash qaysi operatorlar uchun mumkin emas?",
      correct_answer: "�::� , �.*� , �.� , �?.� ;",
    },
    {
      quiz: "Konstruktorlar bu �",
      correct_answer:
        "sinf komponenta funksiyalari b?�lib, obyektlarni avtomatik initsializatsiya qilish uchun ishlatiladigan vosita",
    },
    {
      quiz: "Obyekt complex cc shaklida aniqlangan b?�lsa nima b?�ladi?",
      correct_answer:
        "konstruktor avtomatik chaqirilib, rreal va imag parametrlari avtomatik ravishda 0.0 qiymatlariga ega b?�ladi",
    },
    {
      quiz: "Inkapsulyatsiya � bu",
      correct_answer:
        "ma�lumotlar va ularni qayta ishlovchi kodni birlashtirish mexanizmidir",
    },
    {
      quiz: "Inkapsulyasiya .....",
      correct_answer:
        "ma�lumotlar va kodni tashqi ta�sirdan saqlash imkonini beradi",
    },
    {
      quiz: "Ma�lumot sinf obyektini yaratish qanday funksiya orqali amalga oshiriladi?",
      correct_answer:
        "konstruktor deb nomlanuvchi maxsus funksiya-a�zo orqali amalga oshiriladi",
    },
    {
      quiz: "Ma�lumot sinf obyektini ?�chirish qanday funksiya orqali amalga oshiriladi?",
      correct_answer:
        "destruktor deb nomlanuvchi maxsus funksiya�a�zo orqali amalga oshiriladi",
    },
    {
      quiz: "Sinf ichki ma�lumotlariga murojaatni cheklab q?�yishi qaday tayinlanadi",
      correct_answer:
        "cheklov ma�lumotlarni ochiq, yopiq va himoyalangan deb aniqlash bilan tayinlanadi",
    },
    {
      quiz: "Yopiq (privatma�lumotlarga yoki kodga murojaat qilish taribi qanday?",
      correct_answer: "faqat shu obyekt ichida murojaat qilish mumkin",
    },
    {
      quiz: "Ochiq (publima�lumotlarga va kodlarga murojaat qilish taribi qanday?",
      correct_answer: "dasturning ixtiyoriy joyidan murojaat qilish mumkin",
    },
    {
      quiz: "Vorislik � bu shunday jarayonki, unda",
      correct_answer:
        "bir obyekt boshqasining xossalarini ?�zlashtirishi mumkin b?�ladi",
    },
    {
      quiz: "Polimorfizm � bu",
      correct_answer:
        "kodning bajarilish paytidan yuzaga keladigan holatga bog�liq ravishda ?�zini turlicha amal qilish xususiyatidir",
    },
    {
      quiz: "Hosilaviy ma�lumotlar va funksiyalarni qayerdan oladi?",
      correct_answer:
        "?�zining ona sinfidan ma�lumotlar va funksiyalarni vorislik b?�yicha oladi",
    },
    {
      quiz: "Agar obyekt ?�z atributlarini faqat bitta ona sinfdan vorislik bilan olsa ...",
      correct_answer: "yakka vorislik deyiladi",
    },
    {
      quiz: "Agar obyekt ?�z atributlarini bir nechta ona sinflardan olsa",
      correct_answer: "t?�plamli vorislik deyiladi",
    },
    {
      quiz: "Yaratilgan obyektlarni, ularni funksiya�a�zolariga oddiygina murojaat orqali amalga oshiriluvchi ...",
      correct_answer: "xabarlar (yoki s?�rovlar) yordamida boshqarish mumkin",
    },
    {
      quiz: "Kechiktirilgan bog�lanishda chaqiriladigan funksiya-a�zolar adreslari dastur bajarilishi jarayonida qanday aniqlanadi?",
      correct_answer: "dinamik ravishda aniqlanadi",
    },
    {
      quiz: "An�anaviy dasturlash tillarida adreslar qanday aniqlanadi?",
      correct_answer: "ular statik b?�lib, kompilyatsiya paytida aniqlanadi",
    },
    {
      quiz: "Dasturlash paradigmasi nima?",
      correct_answer: "kod yaratish prinsiplari va texnikasi t?�plami",
    },
    {
      quiz: "Dasturlashning asosiy modellarini k?�rsating",
      correct_answer: "Imperativ, deklarativ, funksional, mantiqiy, OYD",
    },
    {
      quiz: "Deklorativ dasturlashga t?�g�ri keladigan qatorni aniqlang",
      correct_answer: "Funksional va mantiqiy dasturlash",
    },
    {
      quiz: "Algoritmning xossalarini toping",
      correct_answer:
        "cheklilik, aniqlilik, tushinarlilik, natijaviylik, ommaviylik, samaradorlik",
    },
    {
      quiz: "Protsedurali dasturlash paradigmasi",
      correct_answer:
        "Ananaviy Fon Neymar arxitekturasini aks ettiruvchi dasturlash paradigmasi",
    },
    {
      quiz: "�goto� ?�tish operatori:",
      correct_answer: "Protsedurali dasturlashda foydalaniladi",
    },
    {
      quiz: "Boyom-Jokopina teoremasi:",
      correct_answer:
        "Har qanday algoritmni strukturali k?�rinishda ifodalash mumkin va uning bajarilish jarayoni uchta boshqaruv tuzilmasi yordamida aniqlanadi",
    },
    {
      quiz: "Strukturali dasturlash operatorlari",
      correct_answer: " If,else, then, for, while, swich, break, continue",
    },
    {
      quiz: "Barcha obyektlar uchun mavjud b?�lgan sinf a�zolari quyidagi s?�z yordamida e�lon qilinadi:",
      correct_answer: "static",
    },
    {
      quiz: "Sinf a�zolariga faqat sinf ichidagi yoki uning avlodlari ichidagi kodlar orqali kirish imkoniyati quyidagi s?�z yordamida e�lon qilinadi:",
      correct_answer: "private",
    },
    {
      quiz: "Sturkturali dasturlashda qaysi operatordan foydalanmaymiz",
      correct_answer: "Goto",
    },
    {
      quiz: 'Dastur bajarilishi natijasida nimalar bosiladi? #include <stdio.h> void main(){ int a = 5 � 3; float b = 1.5f; b -= a/2; printf("%.2f", b);}',
      correct_answer: "-1.50",
    },
    {
      quiz: "Sikl necha marta bajariladi?: for(int i=0; i<=5; i+=3)",
      correct_answer: "2 marta",
    },
    {
      quiz: 'Qaysi biri quyidagi kodni chiqaradi?: (#include�<?ostream.h> slass A{ private: A(){sout<<"A";}}; int main(){ A a,b; return 0;}',
      correct_answer: "tuzishda xatolik yuz beradi",
    },
    {
      quiz: "Dastur nimani chiqaradi? (#?nslude<?ostream.h> vo?d pr?nt(?nt x, int y){ cout<<x<<y<<yendl;} ?nt main(){ int x=1; int u=2; print(y=5,x=6);}",
      correct_answer: "56",
    },
    {
      quiz: "Ekranda nima k?�rsatiladi? (int main(){ int= arrau = new ?nt[10]; sout<<s?zeof(array)/sizeof(array[0]);delete[] arrau;return 0;})",
      correct_answer: "platformaga bog�liq",
    },
    {
      quiz: "Dasturlashni rivojlantirishning birinchi bosqichi qaysi bosqich?",
      correct_answer: "�?�z-?�zidan� dasturlash",
    },
    {
      quiz: "Dasturlashning ikkinchi bosqichi qaysi bosqichda",
      correct_answer: "Dasturlash uchun tuzilgan yondashuv",
    },
    {
      quiz: "Dasturlashni ishlab chiqishning uchinchi bosqichi qaysi bosqich",
      correct_answer: "Dasturlashga obyektiv yondashish",
    },
    {
      quiz: "Dasturlashning t?�rtinchi bosqichi qaysi bosqichda",
      correct_answer: "Komponent yondashuvi va CASE texnologiyalari",
    },
    {
      quiz: "main() funsiyaga ta�rif bering.",
      correct_answer:
        "Bosh funksiya b?�lib barcha boshqa funksiyalar shu funksiyaga chaqiriladi, C++ da kamida bitta shunday funksiya b?�lishi kerak va zarur",
    },
    {
      quiz: "main() funsiyaga ta�rif bering.",
      correct_answer: "Rekursiv funksiya b?�lib ?�z ?�zini chaqiradi",
    },
    {
      quiz: "main() funsiyaga ta�rif bering.",
      correct_answer:
        "Qayta yuklanuvchi funksiya b?�lib parametrlariga qarab har hil qiymatlar qaytarishi bilan farq qiladi",
    },
    {
      quiz: "Funssiya prototipiga ta�rif bering.",
      correct_answer:
        "Funksiya e�lonini b?�lib bunda funksiya nomi va parametrlari, qaytaruvchi qiymatlari tariflanishi lozim b?�ladi va nuqta vergul bilan tugashi kerak",
    },
    {
      quiz: "Funssiya prototipiga ta�rif bering.",
      correct_answer:
        "Funksiya nomi tariflanishi va parametrlari tariflanishi lozim b?�ladi va nuqta vergul bilan tugashi kerak",
    },
    {
      quiz: "Funssiya prototipiga ta�rif bering.",
      correct_answer:
        "Funksiya nomi va parametrlari tariflanishi lozim b?�ladi",
    },
    {
      quiz: "Funksiya aniqlanishi�",
      correct_answer:
        "funksiya sarlavhasi va figurali qavsga (�{�,�}�) olingan qandaydir amaliy mazmunga ega tanadan iborat b?�ladi",
    },
    {
      quiz: "Funksiya aniqlanishi�",
      correct_answer:
        "funksiya tanasida bittadan ortiq return operatori b?�lishi mumkin",
    },
    {
      quiz: "Funksiya aniqlanishi�",
      correct_answer:
        "Agar funksiyaning qiymati dasturda ishlatilmaydigan b?�lsa, funksiyadan chiqish uchun parametrsiz return operatori ishlatilishi mumkin yoki umuman return ishlatilmaydi",
    },
    {
      quiz: "Funksiyani chaqirish uchun �",
      correct_answer:
        "uning nomi va undan keyin qavs ichida argumentlar r?�yxati beriladi",
    },
    {
      quiz: "Funksiyani chaqirish uchun �",
      correct_answer:
        "quidagi sintaksisi yordamida  <funksiya nomi>(<argument1>, <argument2>,�, <argumentn >) chaqiriladi",
    },
    {
      quiz: "Funksiyani chaqirish uchun �",
      correct_answer: "funksiya argumentlar r?�yxati b?�sh b?�lishi mumkin",
    },
    {
      quiz: "Rekursiv funksiyalar �",
      correct_answer:
        "?�z tanasida boshqa funksiyalarni, ?�zini ?�zi ham chaqirishi mumkin",
    },
    {
      quiz: "Rekursiv funksiyalar �",
      correct_answer: "main() funksiyalarni chaqirishi mumkin",
    },
    {
      quiz: "Rekursiv funksiyalar �",
      correct_answer:
        "qayta yuklanuvchi funksiya b?�lib parametrlariga qarab har hil qiymatlar qaytaradi",
    },
    {
      quiz: "Funksiya ichida e�lon qilingan ?�zgaruvchilarni �",
      correct_answer: "lokal ?�zgaruvchilar deyiladi",
    },
    {
      quiz: "Funksiya ichida e�lon qilingan ?�zgaruvchilarni �",
      correct_answer: "global ?�zgaruvchilar deyiladi",
    },
    {
      quiz: "C++ da ma�lumot turlari nechchi kategoriyaga bo�linadi?",
      correct_answer: "Fundamental va murakkab;",
    },
    {
      quiz: "Qiymat hosil qilmaydigan funksiyalarni e�lon qilishda va aniqlashda ma�lumotlarning qaysi turidan foydalaniladi?",
      correct_answer: "Fundamental;",
    },
    {
      quiz: "C++ da  char o�zgaruvchi turi qaysi oraliqdagi qiymatlarni qabul qiladi?",
      correct_answer: "��-128 dan 127 gacha yoki 0 dan 255 gacha;",
    },
    {
      quiz: "Dasturlashda faktlar, hodisalar, hodisalar va jarayonlarni grammatik tavsiflash vositasi hisoblanadi",
      correct_answer: "imperativ regulyator;",
    },
    {
      quiz: "Kodlashdan biroz farq qiladigan dasturlash ... deyiladi",
      correct_answer: "amaliy dasturlash;",
    },
    {
      quiz: "Fortran tili ... ga taaluqli",
      correct_answer: "amaliy dasturlash;",
    },
    {
      quiz: "Dasturlashning imperativ-protsedurali uslubi ... sohada hukmronlik qiladi",
      correct_answer: "tizimli dasturlash;",
    },
    {
      quiz: "Dasturlashning imperativ protsedurali uslubi",
      correct_answer: "modulli dasturlash imkonini beradi;",
    },
    {
      quiz: "Simvolik ishlov berish muammolarini hal qiladigan matematiklar va tilshunoslar uchun funktsional dasturlashni soddalashtirish uchun ... dan foydalaniladi",
      correct_answer: "deklarativ dasturlash;",
    },
    {
      quiz: "Deklarativ dasturlash ... uchun qo'llaniladi",
      correct_answer: "funktsional dasturlashni soddalashtirish;",
    },
    {
      quiz: "Deklarativ dasturlashda asosiy tushuncha  sifastida ... dan foydalaniladi",
      correct_answer: "nodeterminizm;",
    },
    {
      quiz: "Dasturni optimallashtirish texnikasi, makrogeneratsiya va qisman hisob-kitoblarning kombinatsiyasi ... da amalga oshiriladi",
      correct_answer: "transformatsion dasturlash;",
    },
    {
      quiz: "Transformatsion dasturlash  ... uchun ishlatiladi",
      correct_answer:
        " dasturni optimallashtirish, makrogeneratsiya va qisman hisob-kitoblar texnikasini birlashtirish;",
    },
    {
      quiz: "Transformatsion dasturlash sohasidagi asosiy tushuncha",
      correct_answer: "axborot ekvivalentligi;",
    },
    {
      quiz: "Dasturni takomillashtirishning mobil uslubi dasturlashga  .... nomi bilan yuritiladi",
      correct_answer: "evolyutsion yondashuv;",
    },
    {
      quiz: "Professional, ta'lim va havaskor dasturlashning o'yin uslubi .... yondashuv deyiladi",
      correct_answer: "tadqiqot yondashuvi;",
    },
    {
      quiz: "Shaxsiylashtirilgan axborot tizimlarini individual loyihalashning ergonomik uslubi bilan dasturlashga yondashuv deyiladi",
      correct_answer: "adabtatsiyali yondashuv;",
    },
    {
      quiz: "Interpritatorlar aslida ....",
      correct_answer: "to'liq bo'lmagan kompilyatorlar",
    },
    {
      quiz: "Dasturlashda natijalarning ishonchliligini aniqlashning o'ziga xos usuli ...  hisoblanadi",
      correct_answer: "kompyuterli eksperiment;",
    },
    {
      quiz: "Algol va Paskalga tegishli qanday �..",
      correct_answer: "nazariy dasturlash",
    },
    {
      quiz: "Funktsional dasturlashga � dasturlash tili misol bo�ladi?",
      correct_answer: "Lisp",
    },
    {
      quiz: "Dasturlash uslublariga quydagilardan qaysi biri kiradi",
      correct_answer: "barcha javoblar to'g'ri",
    },
    {
      quiz: "Dasturlash uslublari orasida quyidagilardan qaysi biri mavjud",
      correct_answer: "barcha javoblar to'g'ri",
    },
    {
      quiz: "Quydagilardan qaysi biri dasturlash uslubi deyiladi",
      correct_answer: "barcha javoblar to'g'ri",
    },
    {
      quiz: "quydagilardan qaysi biri kompyuter ishini tashkil etishning apparatli yondashuvini xarakterlaydi",
      correct_answer: "quyi darajadagi dasturlash",
    },
    {
      quiz: "Quyi darajadagi dasturlashning asosiy yo'nalishi",
      correct_answer: "barcha javoblar to'g'ri",
    },
    {
      quiz: "Quydagilardan qaysilari dasturlashning imperativ protsedurali uslubi sohada hukmronlik qiladi",
      correct_answer: "tizimli dasturlash",
    },
    {
      quiz: "Dasturlashning imperativ protsessual uslubida �",
      correct_answer: "modulli dasturlash imkonini beradi",
    },
    {
      quiz: "Yuqori darajali dasturlash maqsadi",
      correct_answer:
        "ayniqsa muhim vazifalarni hal qilishda mumkin bo'lgan maksimal xususiyatlarga erishish",
    },
    {
      quiz: "Simvolik ishlov berish masalalarini hal qiluvchi matematiklar va tilshunoslar uchun funksional dasturlashni soddalashtirish uchun quydagilardan qaysi biri tadbiq etilgan",
      correct_answer: "deklarativ dasturlash",
    },
    {
      quiz: "Deklarativ dasturlashdan nima sababdan foydalaniladi",
      correct_answer: "funktsional dasturlashni soddalashtirish maqsadida",
    },
    {
      quiz: "Qaysi funksional dasturlar tufayli xatolar kamroq bo'ladi?",
      correct_answer: "funktsional dasturlarda nojo'ya ta'sirlar mavjud emas",
    },
    {
      quiz: "Funktsional dasturlash tillarida an'anaviy ravishda qanday operatorlar mavjud emas?",
      correct_answer:
        "oldindan va keyingi shartlarga ega bo'lgan belgilash operatori va sikl operatorlari",
    },
    {
      quiz: "Funksional dasturlash tillarida takrorlanuvchi harakatlar qanday amalga oshiriladi?",
      correct_answer: "rekursiyadan foydalanish",
    },
    {
      quiz: "Funktsional dasturlarni qurish tamoyili nimadan iborat?",
      correct_answer:
        "Dastur har biri kirishni chiqishga qayta ishlaydigan funksiyalar to'plamidan qurilgan. Funktsiyalarni ma'lumotlar sifatida ham ko'rib chiqish mumkin",
    },
    {
      quiz: "Funktsional dasturlarda ishlashning murakkabligi qanday?",
      correct_answer: "funktsional abstraktsiya va funktsional parchalanish",
    },
    {
      quiz: "Funksional dasturlash asosida qanday algoritmik model yotadi?",
      correct_answer: "lyabda-hisoblash",
    },
    {
      quiz: "Funksional dasturlashning imperativ dasturlashdan farqi nimada?",
      correct_answer:
        "funktsional dasturlash funktsiyalar va ularning ma'lumotlarga qo'llanilishi, imperativ dasturlash operatorlar va ularning xotira holatini qanday o'zgartirishi bilan bog'liq.",
    },
    {
      quiz: "Nima uchun hozirda funktsional dasturlashni o'rganish katta qiziqish uyg'otmoqda?",
      correct_answer:
        "funktsional yondashuv hisob-kitoblarni parallellashtirish kabi muammolarni hal qilishga yordam beradi",
    },
    {
      quiz: "Paradigma so�zi qaysi tildan olingan?",
      correct_answer: "yunon tilidan",
    },
    {
      quiz: "Imperativ dasturlash paradigmasiga qaysi dasturlash modellari kiradi?",
      correct_answer: " obyektga yo�naltirilgan, parallel ishlov berish",
    },
    {
      quiz: "Imperativ dasturlash paradigmasi bu�.",
      correct_answer:
        "U holatni o'zgartirish orqali bosqichma-bosqich vazifani bajaradi.",
    },
    {
      quiz: "Protsessual dasturlash paradigmasi bu�.",
      correct_answer:
        "Ushbu paradigma asosiy mashina modeli nuqtai nazaridan protseduraga urg'u beradi. Protsessual va imperativ yondashuv o'rtasida farq yo'q. U kodni qayta ishlatish qobiliyatiga ega va foydalanish mumkinligi bilan farq qiladi.",
    },
    {
      quiz: "Ob'ektga yo'naltirilgan dasturlash�.",
      correct_answer:
        "Eng kichik va eng asosiy ob'ekt bo'lib, barcha turdagi hisoblar faqat ob'ektlar ustida amalga oshiriladi. Jarayondan ko'ra ma'lumotlarga ko'proq e'tibor beriladi.",
    },
    {
      quiz: "Parallel ishlov berish yondashuvi bu��.",
      correct_answer:
        "bu dastur ko'rsatmalarini bir nechta protsessorlarga bo'lish orqali qayta ishlash.",
    },
    {
      quiz: "Sof funktsiyalar bu�..",
      correct_answer:
        "bu dastur ko'rsatmalarini bir nechta protsessorlarga bo'lish orqali qayta ishlash. Faqat o'z kontekstini boshqaradigan va butun dasturning global kontekstiga (holatig ta'sir qilmaydigan kod bloklari.",
    },
    {
      quiz: "Kompozit funksiyalar bu �..",
      correct_answer:
        "Bitta blok boshqasi tomonidan qaytarilgandan so�ng natijaga ta'sir qiladi.",
    },
    {
      quiz: "Rekursiya nima?",
      correct_answer:
        "Funktsional tillarda rekursiya sikllar o�rnini bosuvchi vazifasini bajaradi. Bu o'z kontekstida o'ziga funksiya chaqiruvidir. Bunday chaqiruvlar nazorat sharti rost bo'lgunga qadar takrorlanadi.",
    },
    {
      quiz: "Assembler tilida MOV operatori qanday vazifa bajaradi?",
      correct_answer: "ma'lumotlarni bir joydan boshqasiga ko'chirish.",
    },
    {
      quiz: "Assembler tilida ADD operatori qanday vazifa bajaradi?",
      correct_answer: "ikkita qiymatni birga qo'shish.",
    },
    {
      quiz: "Assembler tilida SUB operatori qanday vazifa bajaradi?",
      correct_answer: "bitta qiymatni boshqa qiymatdan ayirish.",
    },
    {
      quiz: "Assembler tilida PUSH operatori qanday vazifa bajaradi?",
      correct_answer: "ma'lumotlarni to'plamga surish.",
    },
    {
      quiz: "Assembler tilida POP operatori qanday vazifa bajaradi?",
      correct_answer: "to'plamdan olingan ma'lumotlar.",
    },
    {
      quiz: "Assembler tilida JMP operatori qanday vazifa bajaradi?",
      correct_answer: "boshqa joyga o'tish.",
    },
    {
      quiz: "Assembler tilida INT operatori qanday vazifa bajaradi?",
      correct_answer: "jarayonni to'xtatish.",
    },
    {
      quiz: "ALGOL dasturlash tili nechinchi yilda ishlab chiqilgan?",
      correct_answer: "1958-yilda",
    },
    {
      quiz: "ALGOL dasturlash tili kimlar tomonidan ishlab chiqilgan?",
      correct_answer: " Jon Bekus, Jon Makkarti",
    },
    {
      quiz: "Muayyan muammoni hal qilish uchun aniq belgilangan operatsiyalar ketma-ketligi� deyiladi.",
      correct_answer: "Jarayon",
    },
    {
      quiz: "Protsessual dasturlashda goto operatorining maqsadi nima?",
      correct_answer: "Looplardan chiqish va istisnolarni boshqarish uchun",
    },
    {
      quiz: "Mantiqiy dasturlash tillari to�g�ri berilgan qatorni aniqlan?",
      correct_answer: " Planer, prolog, datalog, oz, mercury, picat",
    },
    {
      quiz: "Mantiqiy dasturlash bu�.",
      correct_answer:
        "matematik mantiqqa asoslangan dasturlash paradigmasi - undagi dasturlar mantiqiy bayonotlar va xulosa chiqarish qoidalari shaklida ko'rsatilgan.",
    },
    {
      quiz: "Birinchi mantiqiy dasturlash tili qaysi javobda to�g�ri berilgan?",
      correct_answer: "Planner",
    },
    {
      quiz: "Planner mantiqiy dasturlash tili nechanchi yillarda ishlab chiqilgan?",
      correct_answer: "1967-1971",
    },
    {
      quiz: "Planner mantiqiy dasturlash tili kim tomonidan ishlab chiqilgan?",
      correct_answer: "Karl Xyuitt",
    },
    {
      quiz: "Planer mantiqiy dasturlash tilining vazifasi qaysi javobda to�g�ri berilgan?",
      correct_answer:
        "ma'lumotlardan avtomatik ravishda natija olish imkoniyati va variantlarni sanab o'tish uchun berilgan qoidalar kiritilgan.",
    },
    {
      quiz: "Planner tilining soddalashtirilgan ko�rinishi berilgan javobni aniqlang?",
      correct_answer: "Pralog",
    },
    {
      quiz: "Pralog mantiqiy dasturlash tili nechanchi yillarda ishlab chiqilgan?",
      correct_answer: "1972 yilda",
    },
    {
      quiz: "Pralog mantiqiy dasturlash tili kim tomonidan ishlab chiqilgan?",
      correct_answer: "Alen Kolmiroe",
    },
    {
      quiz: "Pralog mantiqiy dasturlash tilining vazifasi qaysi javobda to�g�ri berilgan?",
      correct_answer:
        " eng qadimgi va hozirgu kunga qadar eng ommabop mantiqiy dasturlash tillaridan biri bo'lib, u tabiiy tillarni qayta ishlash tizimlarida, sun'iy intellekt tadqiqotlarida, ekspert tizimlarida, ontologiyalarda va mantiqiy paradigmadan foydalanishning  tabiiy bo'lgan boshqa mavzularda qo'llaniladi.",
    },
    {
      quiz: "Datalog qaysi tilining soddalashtirilgan ko�rinishi berilgan javobni aniqlang?",
      correct_answer: "Pralog",
    },
    {
      quiz: "Datalog mantiqiy dasturlash tili nechanchi yilda ishlab chiqilgan?",
      correct_answer: "1986 yilda",
    },
    {
      quiz: "Mercury mantiqiy dasturlash tili kimlar tomonidan ishlab chiqilgan?",
      correct_answer: " Xenderson, Tomas Konvey va Zoltan Somogilar",
    },
    {
      quiz: "Datalog mantiqiy dasturlash tilining vazifasi qaysi javobda to�g�ri berilgan?",
      correct_answer:
        " deklarativ mantiqiy dasturlash tili. Sintaktik jihatdan u Prologning kichik to'plamiga o'xshaydi. Datalog odatda yuqoridan pastga ifoda o'lchamlari modelini emas, balki pastdan yuqoriga qarab foydalanadi.",
    },
    {
      quiz: "Mercury mantiqiy dasturlash tili nechanchi yilda ishlab chiqilgan?",
      correct_answer: "1995 yilda",
    },
    {
      quiz: "Mercury mantiqiy dasturlash tilining vazifasi qaysi javobda to�g�ri berilgan?",
      correct_answer:
        "amaliy dasturlarni yaratish uchun mo'ljallangan funktsional mantiqiy dasturlash tili.",
    },
    {
      quiz: "Oz �(Mozart.) mantiqiy dasturlash tili nechanchi yilda ishlab chiqilgan?",
      correct_answer: "1991 yilda",
    },
    {
      quiz: "SNOBOL mantiqiy dasturlash tili nechanchi yillarda ishlab chiqilgan?",
      correct_answer: "1962-1967",
    },
    {
      quiz: "SNOBOL mantiqiy dasturlash tilining vazifasi qaysi javobda to�g�ri berilgan?",
      correct_answer:
        " Til belgilar qatorlari bilan ishlashda juda qulay va sun'iy intellektni o'rganishda qulay bo�lib, to'liq dinamik til, jumladan deklaratsiyalar, turlar, xotira taqsimoti, hatto protseduraga kirish va hozirgi kunga qadar eng ommabop mantiqiy dasturlash tillaridan bir.",
    },
    {
      quiz: "SNOBOL mantiqiy dasturlash tili kimlar tomonidan ishlab chiqilgan?",
      correct_answer:
        " Ralf Grisvold, Ivan Polonskiy va AT&T Bell Labsdan Devid Farberlar",
    },
    {
      quiz: "STL konteynerlari nechta kategoriyaga bo�linadi?",
      correct_answer: " 3 ta ketma-ket, assosativ,adapter",
    },
    {
      quiz: "STL ketma-ket konteynerlarini aniqlang?",
      correct_answer: " forward_list, array, list, vector, deque",
    },
    {
      quiz: "STL assosativ konteynerlarini aniqlang?",
      correct_answer: " set, map, multimap, multiset",
    },
    {
      quiz: "STL adapter konteynerlarini aniqlang?",
      correct_answer: " stack, queue,priohity_queue",
    },
    {
      quiz: "STL da iteratorlar nechta kategoriyaga bo�linadi ?",
      correct_answer: "5 ta",
    },
    {
      quiz: "Quydagi konteynerlardan capsity va reserve funksiyalari aniqlanmagan konteynerni aniqlang",
      correct_answer: "deque",
    },
    {
      quiz: "Konteynerdan ixtiyoriy elementni o�chirish funksiyasi?",
      correct_answer: "erase()",
    },
    {
      quiz: "STL konteynerlari da dastlabki elementga murojat qilish funksiyalarini aniqlang?",
      correct_answer: " begin, cbegin",
    },
    {
      quiz: "Iteratorlar nima uchun ishlatiladi",
      correct_answer:
        "Iteratorlar konteynerlarda bir elementdan ikkinchisiga o'tish uchun ishlatiladi;",
    },
    {
      quiz: "C/C++ dasturlashda dinamik xotirani taqsimlash osonlashtirish uchun�<stdlib.h>�sarlavha�faylida�belgilangan C++ tomonidan taqdim etilgan kutubxona Funksiya lari :",
      correct_answer: "malloc(), calloc(), free(), realloc();",
    },
    {
      quiz: "Ixtiyoriy kompilyator tarkibi nechta  qismdan iborat:",
      correct_answer: "3ta",
    },
    {
      quiz: "OYD qanday xossasi bir xil ierarxiyaning turli xil ob'ektlariga huddi birday munosabatda bo'lishga imkon beradi?",
      correct_answer: "polimorfizm",
    },
    {
      quiz: "Polimorfizm quyidagi mexanizmlar orqali amalga oshiriladi:",
      correct_answer:
        "funktsiyalar, virtual funktsiyalar, shablonlarning haddan tashqari ko'payishi",
    },
    {
      quiz: "Sinfga ta�rif bering?",
      correct_answer:
        "Sinflar - bu ma'lumotlar tuzilmalarining kengaytirilgan tushunchasidir: ma'lumotlar tuzilmalari singari ularda ma'lumotlar elementlari bo'lishi mumkin, ammo ular a'zolar vazifalarini ham o'z ichiga olishi mumkin. Ob'ekt - bu sinfni o'zlashtirish. O'zgaruvchilar nuqtai nazaridan, sinf bir turga, ob'ekt esa o'zgaruvchiga aylanadi.",
    },
    {
      quiz: "Polimorfm sinf -",
      correct_answer:
        "tarkibida hech bo�lmaganda bitta virtual funksiyasi bo�lgan sinfga aytiladi",
    },
    {
      quiz: "Abstrakt sinf  obyektini yaratish mumkinmi?",
      correct_answer: "mumkin emas",
    },
    {
      quiz: "obyekt turini oshkor ravishda abstrakt sinf turiga keltirish mum�kinmi",
      correct_answer: "mumkin emas",
    },
    {
      quiz: "Polimorfizm bu:",
      correct_answer:
        "tegishli sinflar uchun xos bo'lgan amallarni ko'rsatish uchun bitta ismdan foydalanishga imkon beradigan vosita",
    },
    {
      quiz: "Ob'ektga yo'naltirilgan dasturlashda polimorfizm amalga oshiriladi:",
      correct_answer:
        "qayta yuklash mexanizmlari (funktsiyalar va operatsiyalar), virtual funktsiyalar va shablonlar orqali",
    },
    {
      quiz: "OYD qanday xossasi bir xil ierarxiyaning turli xil ob'ektlariga huddi birday munosabatda bo'lishga imkon beradi?",
      correct_answer: "polimorfizm",
    },
    {
      quiz: "Polimorfizm quyidagi mexanizmlar orqali amalga oshiriladi:",
      correct_answer:
        "funktsiyalar, virtual funktsiyalar, shablonlarning haddan tashqari ko'payishi",
    },
    {
      quiz: "OOP holatida tuzilishning asosiy tamoyillari.",
      correct_answer: "abstraksiya",
    },
    {
      quiz: "Quyidagi metodologiyalardan qaysi biri OOPga tegishli?",
      correct_answer: "komponentli dasturlash",
    },
    {
      quiz: "Imperativ yondashuvning asosiy usuli hisoblanadi?",
      correct_answer: "protsessual dasturlash",
    },
    {
      quiz: "Imperativ dasturlash qaysi tillardan foydalanadi?",
      correct_answer: "past darajadagi tillar",
    },
    {
      quiz: "Quyidagi dasturlash usullaridan qaysi biri imperativ paradigma bilan bog'liq?",
      correct_answer: "funktsional",
    },
    {
      quiz: "Imperativ dasturlash paradigmasi -",
      correct_answer:
        "Ushbu paradigma dastur holatini bosqichma-bosqich o'zgartiruvchi ko'rsatmalar ko'rinishidagi hisoblashlarning tavsiflarini o'z ichiga oladi.",
    },
    {
      quiz: "Mashinalardan qaysi biri protsessual dasturlash uchun nazariy model bo'lib xizmat qiladi?",
      correct_answer: "Tyuring mashinasi",
    },
    {
      quiz: "Kompyuterli dasturlash hamda umumiy dasturiy paradigmalari � ...",
      correct_answer:
        "amaliy, nazariy va funksional dasturlash paradigmalaridan iborat",
    },
    {
      quiz: "Amaliy dasturlash � bu ...",
      correct_answer:
        "kompyuterlar paydo b?�lishidan ancha oldin ?�rganilgan axborotni hisoblash va raqamlarni qayta ishlashning hisoblash jarayonlarini aks ettiradigan muammoli y?�nalishlarga b?�ysunadi",
    },
    {
      quiz: "Assembler tilida mov operatori qanday vazifa bajaradi?",
      correct_answer: "ma'lumotlarni bir joydan boshqasiga ko'chirish.",
    },
    {
      quiz: "Assembler tilida ADD operatori qanday vazifa bajaradi?",
      correct_answer: "ikkita qiymatni birga qo'shish.",
    },
    {
      quiz: "Imperativ dasturlash paradigmasi bu�.",
      correct_answer:
        "U holatni o'zgartirish orqali bosqichma-bosqich vazifani bajaradi.",
    },
    {
      quiz: "Protsessual dasturlash paradigmasi bu�.",
      correct_answer:
        "Ushbu paradigma asosiy mashina modeli nuqtai nazaridan protseduraga urg'u beradi. Protsessual va imperativ yondashuv o'rtasida farq yo'q. U kodni qayta ishlatish qobiliyatiga ega va foydalanish mumkinligi bilan farq qiladi.",
    },
    {
      quiz: "Ob'ektga yo'naltirilgan dasturlash�.",
      correct_answer:
        "Eng kichik va eng asosiy ob'ekt bo'lib, barcha turdagi hisoblar faqat ob'ektlar ustida amalga oshiriladi. Jarayondan ko'ra ma'lumotlarga ko'proq e'tibor beriladi.",
    },
    {
      quiz: "Parallel ishlov berish yondashuvi bu��.",
      correct_answer:
        "bu dastur ko'rsatmalarini bir nechta protsessorlarga bo'lish orqali qayta ishlash.",
    },
    {
      quiz: "Sof funktsiyalar bu�..",
      correct_answer:
        "bu dastur ko'rsatmalarini bir nechta protsessorlarga bo'lish orqali qayta ishlash. Faqat o'z kontekstini boshqaradigan va butun dasturning global kontekstiga (holatig ta'sir qilmaydigan kod bloklari.",
    },
    {
      quiz: "Kompozit funksiyalar bu �..",
      correct_answer:
        "Bitta blok boshqasi tomonidan qaytarilgandan so�ng natijaga ta'sir qiladi.",
    },
  ];
  const search = req.params.search;

  const result = data.filter((item) =>
    includes(toLower(item?.quiz), toLower(search))
  );
  res.status(200).send(result);
};

module.exports = {
  fintQuestion,
};
