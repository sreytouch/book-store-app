import { images } from '../constants';

export const profileData = {
  name: 'Sreytouch Lang(Jessica)',
  point: 200
}

export const bookReactJS = {
  id: 1,
  bookName: "ReactJS",
  bookCover: images.reactjs,
  rating: 4.5,
  language: "Eng",
  pageNo: 341,
  author: "Jasmine Warga",
  genre: [
      "Romance", "Adventure", "Drama"
  ],
  readed: "12k",
  description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  backgroundColor: "rgba(240,240,232,0.9)",
  navTintColor: "#000"
}

export const bookFullStack = {
  id: 2,
  bookName: "Full-Stack React",
  bookCover: images.fullstack,
  rating: 4.1,
  language: "Eng",
  pageNo: 272,
  author: "Seith Fried",
  genre: [
      "Adventure", "Drama"
  ],
  readed: "13k",
  description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  backgroundColor: "rgba(247,239,219,0.9)",
  navTintColor: "#000"
}

export const bookRichDad = {
  id: 3,
  bookName: "Rich Dad Poor Dad",
  bookCover: images.richdad,
  rating: 3.5,
  language: "Eng",
  pageNo: 110,
  author: "Ana C Bouvier",
  genre: [
      "Drama", "Adventure", "Romance"
  ],
  readed: "13k",
  description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  backgroundColor: "rgba(119,77,143,0.9)",
  navTintColor: "#FFF"
}



export const bookReactNative = {
  id: 3,
  bookName: "React Native",
  bookCover: images.reactnative,
  rating: 3.5,
  language: "Eng",
  pageNo: 110,
  author: "Ana C Bouvier",
  genre: [
      "Drama", "Adventure", "Romance"
  ],
  readed: "13k",
  description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  backgroundColor: "rgba(119,77,143,0.9)",
  navTintColor: "#FFF"
}

export const categoriesDatas = [
  {
      id: 1,
      categoryName: "Best Seller",
      books: [
          bookReactJS, bookFullStack, bookRichDad
      ]
  },
  {
      id: 2,
      categoryName: "The Latest",
      books: [
          bookFullStack, bookReactNative
      ]
  },
  {
      id: 3,
      categoryName: "Coming Soon",
      books: [
          bookRichDad
      ]
  },
];

const Books = { profileData, bookReactJS, bookFullStack, bookRichDad, bookReactNative, categoriesDatas, categoriesDatas };

export default Books;