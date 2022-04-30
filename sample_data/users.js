const users = [
  {
    email: "tyrone.stamaria35@gmail.com",
    firstName: "Tyrone",
    lastName: "Sta. Maria",
    password: "$2b$08$UOcRNA0jxfsR0qYLwyDGZudmp8HwAHCOioWJt6X4fgDvL7wVXcx9G",
    favorites: [
      {
        title: "Supporting Novice Programmer DevOps Integration",
        abstract:
          "DevOps is usually an industry approach that is practiced by seasoned and experienced programmers and developers. In most university settings especially in the Philippine context, DevOps is not usually part of the curriculum and in some cases are only introduced to learner programmers as an elective as bonus material.",
        authors: [
          {
            name: "Tyrone Justin R. Sta. Maria",
            affiliations: ["DLSU"],
          },
          {
            name: "Gavin Raine Dizon",
            affiliations: ["DLSU"],
          },
          {
            name: "Vince Anthony Esquivel",
            affiliations: ["DLSU"],
          },
          {
            name: "Jordan Aiko Deja",
            affiliations: ["DLSU"],
          },
          {
            name: "Unisse Chua",
            affiliations: ["DLSU"],
          },
        ],
        publicationDate: {
          $date: "2020-04-25T00:00:00Z",
        },
        topics: ["HCI", "DevOps"],
        keywords: ["Programming", "Novice"],
        featured: true,
        approved: true,
      },
    ],
  },
];

module.exports = users;
