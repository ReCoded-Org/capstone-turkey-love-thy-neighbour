const constants = {
  activityList: [
    "Animals",
    "Arts",
    "Aviation",
    "Architecture",
    "Business",
    "Coding",
    "Computers",
    "Design",
    "Entrepreneurship",
    "Fashion",
    "Health",
    "Machines",
  ],
  districtList: [
    "ADALAR",
    "ARNAVUTKÖY",
    "ATAŞEHİR",
    "AVCILAR",
    "BAĞCILAR",
    "BAHÇELİEVLER",
    "BAKIRKÖY",
    "BAŞAKŞEHİR",
    "BAYRAMPAŞA",
    "BEŞİKTAŞ",
    "BEYKOZ",
    "BEYLİKDÜZÜ",
    "BEYOĞLU",
    "BÜYÜKÇEKMECE",
    "ÇATALCA",
    "ÇEKMEKÖY",
    "ESENLER",
    "ESENYURT",
    "EYÜPSULTAN",
    "FATİH",
    "GAZİOSMANPAŞA",
    "GÜNGÖREN",
    "KADIKÖY",
    "KAĞITHANE",
    "KARTAL",
    "KÜÇÜKÇEKMECE",
    "MALTEPE",
    "PENDİK",
    "SANCAKTEPE",
    "SARIYER",
    "SİLİVRİ",
    "SULTANBEYLİ",
    "SULTANGAZİ",
    "ŞİLE",
    "ŞİŞLİ",
    "TUZLA",
    "ÜMRANİYE",
    "ÜSKÜDAR",
    "ZEYTİNBURNU",
  ],
  educationList: [
    "Primary School Grad",
    "High School Grad",
    "University",
    "Higher Education",
  ],
};

export const newActivityList = constants.activityList.map((exercise) => {
  return {
    content: exercise,
  };
});

export const recommendedPlaces = {
  KADIKÖY: [
    {
      name: "Ağaç Ev",
      image:
        "https://b.zmtcdn.com/data/pictures/3/18970253/105a380e6ad9ccdf63b8c9939273ce6f.jpg",
      address:
        "Osmanağa, No: 34104, Osmancık Sk. No:13 B, 34714 Kadıköy/İstanbul",
    },
    {
      name: "Dorock XL",
      address:
        "Caferağa, Namlı Market Yanı, Neşet Ömer Sk. 3C, 34710 Kadıköy/İstanbul ",
      image:
        "https://b.zmtcdn.com/data/pictures/1/18016871/7548fd97977dd16fc4448828a36dac35.jpg",
    },
    {
      name: "Starbucks",
      address: "Caferağa Mah, Muvakkıthane Cd. No:9, 34710 Kadıköy/İstanbul",
      image:
        "https://emoji.com.tr/wp-content/uploads/2017/12/en-guzel-starbucks-subeleri-019.jpg",
    },
  ],
  BEYOĞLU: [
    {
      name: "James Joyce Irish Pub",
      image:
        "https://sorabula.com.tr/wp-content/uploads/2020/06/james-joyce-irish-pub-1200x675.jpg",
      address: "Balo Sk. No:26, 34435 Beyoğlu/İstanbul",
    },
    {
      name: "Starbucks",
      address:
        "Merkez Mah. Abide-i Hürriyet Cad. No:211 Bolkan Center A-B-C Blok, 34384 Şişli/İstanbul",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd0503peeHSqnRBynuMoUE5lK06lnsfh6gA&usqp=CAU",
    },
    {
      name: "Dorock Heavy Metal Club",
      address: "Hüseyinağa, Kameriye Sk. No 11/A, 34435 Beyoğlu/İstanbul",
      image: "https://i.ibb.co/ZXQLFg3/drck-txm-1-jpg-1564052455-2.jpg",
    },
  ],
  ŞİŞLİ: [
    {
      image: "",
      address: "",
      name: "",
    },
    {
      image: "",
      address: "",
      name: "",
    },
    {
      image: "",
      address: "",
      name: "",
    },
  ],
  FATİH: [
    {
      image: "",
      address: "",
      name: "",
    },
    {
      image: "",
      address: "",
      name: "",
    },
    {
      image: "",
      address: "",
      name: "",
    },
  ],
};

export default constants;
