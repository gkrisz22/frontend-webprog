type Article = {
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
};

const articles: Article[] = [
  {
    title: "Tésától a Dunáig! Ahol az uszály se jár! De a tengerikajak igen!",
    content:
      "Kétnapos nomád túra az Ipoly alsó szakaszán, amíg a Dunát el nem érjük. Nekünk ez hazai pálya, ezért is szeretjük annyira! A folyócska az alsó szakaszon lassan kanyarog, mielőtt a Dunába ömlene. A túra során sok apró surrantóval, zúgóval találkozunk, ami még élvezetesebbé teszi a hétvégét. Szombat reggel találkozunk Tésán. Túránk innen indul. Bepakolás után végig evezzük az Ipoly legszebb szakaszát, apró csobogók, gyors és lassabb szakaszok váltják egymást. A táv hozzávetőlegesen 20 fkm. A délutáni órákban érkezünk Ipolytölgyes határába, ahol vadkempingezve töltjük az éjszakát. Sütés, főzés, tüzeskedés, mindenkinek kedve szerint.",
    author: "Kancsulik Ákos",
    publishedAt: new Date(2025, 6, 21),
  },
  {
    title: "Tavaszi tengerikajakozás a Bodrogzugban",
    content:
      "Szombat reggel találkozunk, gyülekezünk Tokajban, az Unió kempingben (https://tokajvizitelep.hu/) 8-9 óra között. Indulás a Zsaró-éren keresztül Zalkodra és ha már ott vagyunk eszünk egy ízletes fánkot. Ha a vízállás is engedi végig barangoljuk az elöntött réteket és ligeterdőket. A kempingbe a késő délutáni órákban érkezünk. Este tüzeskedünk, sütünk , főzünk, vagy csak hallgatjuk a lappantyúk és fülemülék éjszakai dalát.",
    author: "Kancsulik Ákos",
    publishedAt: new Date(2025, 5, 10),
  },
];

function createArticleElement(article: Article): HTMLElement {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p"); // content
  const p2 = document.createElement("p"); // author
  const p3 = document.createElement("p"); // publishedAt

  h3.innerHTML = article.title;
  p.innerHTML = article.content;
  p2.innerHTML = article.author;
  p3.innerHTML = article.publishedAt.toDateString();

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);

  return div;
}

function displayAllArticles(articles: Article[]): void {
  const container = document.createElement("div");
  container.setAttribute("id", "article-container");

  articles.forEach((article: Article) => {
    const articleElement = createArticleElement(article);
    container.appendChild(articleElement);
  });

  document.body.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
  displayAllArticles(articles);
});
