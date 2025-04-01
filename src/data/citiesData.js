// src/data/citiesData.js

export const cities = [
  {
    id: "tokyo",
    name: "東京",
    image: "@/assets/images/cities/placeholder.jpg",
    description:
      "東京拠点では、都内の複数の大学でミーティングやイベントを開催しています。留学生も多く参加する国際的な雰囲気の中で、様々な交流の機会があります。",
    meetingInfo: "毎週金曜日 18:30〜20:30・早稲田大学キャンパス内",
    address: "東京都新宿区西早稲田1-6-1",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6480.199226641845!2d139.5581265775438!3d35.69916622898567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018efecce9f086b%3A0xae4bac471180f247!2sJapan%20Campus%20Crusade%20for%20Christ!5e0!3m2!1sen!2sjp!4v1743489275187!5m2!1sen!2sjp",
    contactInfo: "tokyo@studentimpact.jp",
    instagramHandle: "studentimpacttokyo",
    mapCoordinates: { lat: 35.7089, lng: 139.7216 },
  },
  {
    id: "yokohama",
    name: "横浜",
    description:
      "横浜拠点は、神奈川県内の大学生が集まる活気あるコミュニティです。港町横浜の国際的な雰囲気の中で、多様な背景を持つ学生との交流の場を提供しています。",
    meetingInfo: "毎週木曜日 18:00〜20:00・横浜国立大学常盤台キャンパス",
    address: "神奈川県横浜市保土ケ谷区常盤台79-1",
    contactInfo: "yokohama@studentimpact.jp",
    instagramHandle: "studentimpactyokohama",
    mapCoordinates: { lat: 35.4739, lng: 139.5917 },
  },
  {
    id: "kyoto",
    name: "京都",
    description:
      "京都拠点では、伝統と現代が共存する街で、学生たちが集い、深い対話と交流を楽しんでいます。国際色豊かなメンバーが集まり、日本文化とキリスト教について学ぶ機会を提供しています。",
    meetingInfo: "毎週水曜日 19:00〜21:00・京都大学吉田キャンパス",
    address: "京都府京都市左京区吉田本町",
    contactInfo: "kyoto@studentimpact.jp",
    instagramHandle: "studentimpactkyoto",
    mapCoordinates: { lat: 35.0262, lng: 135.7811 },
  },
  {
    id: "osaka",
    name: "大阪",
    description:
      "大阪拠点は関西の大学生が集まる活気あふれるコミュニティです。週に一度のミーティングに加え、さまざまなアクティビティを通して深い友情を育んでいます。",
    meetingInfo: "毎週水曜日 19:00〜21:00・大阪大学豊中キャンパス",
    address: "大阪府豊中市待兼山町1-1",
    contactInfo: "osaka@studentimpact.jp",
    instagramHandle: "studentimpactosaka",
    mapCoordinates: { lat: 34.8034, lng: 135.4555 },
  },
  {
    id: "kobe",
    name: "神戸",
    description:
      "港町神戸の拠点では、神戸大学を中心に活動しています。海と山に囲まれた美しい環境の中、国際的な交流の場を提供しています。",
    meetingInfo: "毎週火曜日 18:30〜20:30・神戸大学六甲台キャンパス",
    address: "兵庫県神戸市灘区六甲台町1-1",
    contactInfo: "kobe@studentimpact.jp",
    instagramHandle: "studentimpactkobe",
    mapCoordinates: { lat: 34.7259, lng: 135.2343 },
  },
  {
    id: "nagoya",
    name: "名古屋",
    description:
      "中部地方の中心都市、名古屋での活動は2015年に始まりました。名古屋大学を拠点に、アットホームな雰囲気でのミーティングを行っています。",
    meetingInfo: "毎週水曜日 18:00〜20:00・名古屋大学東山キャンパス",
    address: "愛知県名古屋市千種区不老町",
    contactInfo: "nagoya@studentimpact.jp",
    instagramHandle: "studentimpactnagoya",
    mapCoordinates: { lat: 35.1544, lng: 136.9679 },
  },
  {
    id: "fukuoka",
    name: "福岡",
    description:
      "九州の玄関口、福岡での活動は活気に満ちています。国際色豊かな環境で、日本人学生と留学生が共に成長できる場を提供しています。",
    meetingInfo: "毎週金曜日 19:00〜21:00・福岡大学七隈キャンパス",
    address: "福岡県福岡市城南区七隈8-19-1",
    contactInfo: "fukuoka@studentimpact.jp",
    instagramHandle: "goodfriendfukuoka",
    mapCoordinates: { lat: 33.5496, lng: 130.3518 },
  },
  {
    id: "sapporo",
    name: "札幌",
    description:
      "日本最北の拠点、札幌では北海道の大自然を活かした活動を展開しています。北海道大学の学生を中心に、温かいコミュニティを形成しています。",
    meetingInfo: "毎週金曜日 18:30〜20:30・北海道大学札幌キャンパス",
    address: "北海道札幌市北区北8条西5丁目",
    contactInfo: "sapporo@studentimpact.jp",
    instagramHandle: "studentimpact_sapporo",
    mapCoordinates: { lat: 43.0756, lng: 141.3407 },
  },
];

// Helper function to get a city by ID
export function getCityById(id) {
  return cities.find((city) => city.id === id);
}

// Helper function to get all cities
export function getAllCities() {
  return cities;
}

// Helper function to get related cities (excluding the current one)
export function getRelatedCities(currentId, limit = 3) {
  return cities.filter((city) => city.id !== currentId).slice(0, limit);
}
