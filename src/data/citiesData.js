// src/data/citiesData.js
import fukuokaImage from "../assets/images/cities/fukuoka.jpg";
import kobeImage from "../assets/images/cities/Kobe.jpg";
import kyotoImage from "../assets/images/cities/kyoto.jpg";
import fukuokaLogo from "../assets/images/cities/logo_fukuoka.png";
import kobeLogo from "../assets/images/cities/logo_kobe.png";
import kyotoLogo from "../assets/images/cities/logo_kyoto.png";
import nagoyaLogo from "../assets/images/cities/logo_nagoya.png";
import osakaLogo from "../assets/images/cities/logo_osaka.png";
import sapporoLogo from "../assets/images/cities/logo_sapporo.png";
import tokyoLogo from "../assets/images/cities/logo_tokyo.png";
import yokohamaLogo from "../assets/images/cities/logo_yokohama.png";
import nagoyaImage from "../assets/images/cities/nagoya.jpg";
import osakaImage from "../assets/images/cities/osaka.jpg";
import sapporoImage from "../assets/images/cities/sapporo.jpg";
import tokyoImage from "../assets/images/cities/tokyo.jpg";
import yokohamaImage from "../assets/images/cities/yokohama_1.jpg";

export const cities = [
  {
    id: "tokyo",
    name: "東京",
    image: tokyoImage,
    logo: tokyoLogo,
    description:
      "東京拠点では、都内の複数の大学でミーティングやイベントを開催しています。留学生も多く参加する国際的な雰囲気の中で、様々な交流の機会があります。",
    meetingInfo: "毎週金曜日 18:30-21:00",
    address: "三鷹CCC学生センター（JR三鷹駅徒歩5分）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6480.199585605708!2d139.55608808464967!3d35.699161811984304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018efecce9f086b%3A0xae4bac471180f247!2z5pel5pys44Kt44Oj44Oz44OR44K544O744Kv44Or44K744O844OJ44O744OV44Kp44O844O744Kv44Op44Kk44K544OI!5e0!3m2!1sja!2sjp!4v1743493158697!5m2!1sja!2sjp",
    contactInfo: "tokyo@studentimpact.jp",
    instagramHandle: "studentimpacttokyo",
    mapCoordinates: { lat: 35.7089, lng: 139.7216 },
  },
  {
    id: "yokohama",
    name: "横浜",
    image: yokohamaImage,
    logo: yokohamaLogo,
    description:
      "横浜拠点は、神奈川県内の大学生が集まる活気あるコミュニティです。港町横浜の国際的な雰囲気の中で、多様な背景を持つ学生との交流の場を提供しています。",
    meetingInfo: "毎週金曜日 19:00-21:00",
    address:
      "横浜ニューライフバプテスト教会（横浜市営ブルーライン仲町台駅徒歩8分）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.6901091804134!2d139.57418807658522!3d35.536654972634274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f628296b70f1%3A0xc3ec8442d9384fe4!2z5qiq5rWc44OL44Ol44O844Op44Kk44OV44OQ44OX44OG44K544OI5pWZ5Lya!5e0!3m2!1sja!2sjp!4v1743492731325!5m2!1sja!2sjp",
    contactInfo: "yokohama@studentimpact.jp",
    instagramHandle: "studentimpactyokohama",
    mapCoordinates: { lat: 35.4739, lng: 139.5917 },
  },
  {
    id: "kyoto",
    name: "京都",
    image: kyotoImage,
    logo: kyotoLogo,
    description:
      "京都拠点では、伝統と現代が共存する街で、学生たちが集い、深い対話と交流を楽しんでいます。国際色豊かなメンバーが集まり、日本文化とキリスト教について学ぶ機会を提供しています。",
    meetingInfo: "毎週金曜日 19:00-21:00",
    address: "MUSTARD SEED クリスチャン教会（河原町駅の9番出口すぐ）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.263071704891!2d139.70198607658978!3d35.670523872590735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b60a5d13e97%3A0x2861acddc539b2b5!2zTVVTVEFSRCBTRUVEIOOCr-ODquOCueODgeODo-ODs-aVmeS8miDmnbHkuqw!5e0!3m2!1sja!2sjp!4v1743493296529!5m2!1sja!2sjp",
    contactInfo: "kyoto@studentimpact.jp",
    instagramHandle: "studentimpactkyoto",
    mapCoordinates: { lat: 35.0262, lng: 135.7811 },
  },
  {
    id: "osaka",
    name: "大阪",
    image: osakaImage,
    logo: osakaLogo,
    description:
      "大阪拠点は関西の大学生が集まる活気あふれるコミュニティです。週に一度のミーティングに加え、さまざまなアクティビティを通して深い友情を育んでいます。",
    meetingInfo: "毎週金曜日 18:30-20:30",
    address: "VIP 関西センタービル 5F（京阪＆地下鉄北浜駅徒歩1分） ",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5648662223607!2d135.5038008765564!3d34.69093007292319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6de0007f0b5%3A0x5cc0f77334d80c93!2z44Kk44Oz44K_44O844OK44K344On44OK44OrVklQ44Kv44Op44OW6Zai6KW_IOS6i-WLmeWxgA!5e0!3m2!1sja!2sjp!4v1743493326786!5m2!1sja!2sjp",
    contactInfo: "osaka@studentimpact.jp",
    instagramHandle: "studentimpactosaka",
    mapCoordinates: { lat: 34.8034, lng: 135.4555 },
  },
  {
    id: "kobe",
    name: "神戸",
    image: kobeImage,
    logo: kobeLogo,
    description:
      "港町神戸の拠点では、神戸大学を中心に活動しています。海と山に囲まれた美しい環境の中、国際的な交流の場を提供しています。",
    meetingInfo: "毎週金曜日 18:30-21:00",
    address: "夙川聖書教会（阪急電車夙川駅徒歩2分）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5177599459707!2d135.32693017655797!3d34.742548072904825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f2e32d512611%3A0xbca94501ab2a3cd7!2z5aSZ5bed6IGW5pu45pWZ5Lya44Oq44OQ44O844K144Kk44OJ44OB44Oj44Oa44Or!5e0!3m2!1sja!2sjp!4v1743493370540!5m2!1sja!2sjp",
    contactInfo: "kobe@studentimpact.jp",
    instagramHandle: "studentimpactkobe",
    mapCoordinates: { lat: 34.7259, lng: 135.2343 },
  },
  {
    id: "nagoya",
    name: "名古屋",
    image: nagoyaImage,
    logo: nagoyaLogo,
    description:
      "中部地方の中心都市、名古屋での活動は2015年に始まりました。名古屋大学を拠点に、アットホームな雰囲気でのミーティングを行っています。",
    meetingInfo: "毎週金曜日 18:30-20:00",
    address: "MUSTARD SEED クリスチャン教会 名古屋（地下鉄今池駅徒歩4分）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5245387812993!2d136.93598417657262!3d35.16847677275714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003708b10eaaac5%3A0x5b19fe339e159187!2zTVVTVEFSRCBTRUVEIOOCr-ODquOCueODgeODo-ODs-aVmeS8mg!5e0!3m2!1sja!2sjp!4v1743493387219!5m2!1sja!2sjp",
    contactInfo: "nagoya@studentimpact.jp",
    instagramHandle: "studentimpactnagoya",
    mapCoordinates: { lat: 35.1544, lng: 136.9679 },
  },
  {
    id: "fukuoka",
    name: "福岡",
    image: fukuokaImage,
    logo: fukuokaLogo,
    description:
      "九州の玄関口、福岡での活動は活気に満ちています。国際色豊かな環境で、日本人学生と留学生が共に成長できる場を提供しています。",
    meetingInfo: "毎週木曜日 18:00-21:00",
    address: "九州東部キリスト教会（福岡市地下銑藤崎駅徒歩5分）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9136160096587!2d130.3476126765195!3d33.58159207333797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541933cd4849873%3A0x2f0731bdababb021!2z5Lmd5bee5p2x6YOo44Kt44Oq44K544OI5pWZ5Lya!5e0!3m2!1sja!2sjp!4v1743493407508!5m2!1sja!2sjp",
    contactInfo: "fukuoka@studentimpact.jp",
    instagramHandle: "goodfriendfukuoka",
    mapCoordinates: { lat: 33.5496, lng: 130.3518 },
  },
  {
    id: "sapporo",
    name: "札幌",
    image: sapporoImage,
    logo: sapporoLogo,
    description:
      "日本最北の拠点、SI札幌ではアットホームな雰囲気のなかで、あそびや交流、聖書の学びを通してお互いを知り、キリスト教について学ぶことができます。クリスチャンでもそうでなくても大歓迎です！",
    meetingInfo: "毎週金曜日 18:30-21:00",
    address: "札幌グロリアチャーチ（地下鉄南北線北24条駅徒歩4分）",
    googleMapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.7513893890696!2d141.34154619999998!3d43.0887218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b291964b25787%3A0x5110d6a8667f01a0!2z5pyt5bmM44Kw44Ot44Oq44Ki44OB44Oj44O844OB!5e0!3m2!1sja!2sjp!4v1743495688742!5m2!1sja!2sjp",
    contactInfo: "kukhyun.cho@kccc.org",
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
