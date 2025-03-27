export const menu = [
  { url: "/", name: "SI"},
  { url: "/about", name: "SIについて" },
  { url: "/resource", name: "リソース" },
  { url: "/ministries", name: "ミニストリー", 
    children: [
    {
      url: "/si",
      name: "大学生ミニストリー",
      icon: "bi bi-laptop",
      description: "若者向け",
    },
    {
      url: "/articles/2021-09-02",
      name: "2021年9月2日",
      icon: "bi bi-vector-pen",
      description: "若者向け",

    },
    {
      url: "/articles/2021-09-03",
      name: "2021年9月3日",
      icon: "bi bi-vector-pen",
      description: "若者向け",

    },
    {
      url: "/articles/2021-09-04",
      name: "2021年9月4日",
      icon: "bi bi-vector-pen",
      description: "若者向け",

    },
  ],
 },
  { url: "/reference", name: "参考資料" },
];
