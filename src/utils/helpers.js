const helpers = {
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

export const newActivityList = helpers.activityList.map((exercise) => {
  return {
    content: exercise,
  };
});

export default helpers;