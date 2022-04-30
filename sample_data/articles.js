const articles = [
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2020-04-25T00:00:00Z",
    },
  },
  {
    title: "Test Paper 1",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2021-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 2",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2021-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 3",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2019-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 4",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2020-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 5",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2020-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 6",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2020-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 7",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2021-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 8",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2021-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 9",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2021-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 10",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2021-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 11",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2020-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 12",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2019-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 13",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2020-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 14",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2019-10-24T16:00:00Z",
    },
  },
  {
    title: "Test Paper 15",
    abstract: "Lorem ipsum bla bla bla ",
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
    topics: ["HCI", "DevOps"],
    keywords: ["Programming", "Novice"],
    featured: true,
    approved: true,
    publicationDate: {
      $date: "2019-10-24T16:00:00Z",
    },
  },
];

module.exports = articles;
