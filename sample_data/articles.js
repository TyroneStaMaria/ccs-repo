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
    publicationDate: new Date("2020-4-25"),
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
    featured: false,
    approved: true,
    publicationDate: new Date("2022-4-25"),
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
    featured: false,
    approved: true,
    publicationDate: new Date("2021-4-25"),
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
    publicationDate: new Date("2020-4-25"),
  },
  {
    title: "Test Paper 4",
    abstract:
      "An Analysis of Yukon Delta Salmon Management Rita Asgeirsson, Western Washington University The broad range of Pacific Alaskan salmon has resulted in the creation of a complex and multiorganizational system of management that includes the state of Alaska, various federal departments, a Congressionally-mandated fishery council, and a number of commercial and nongovernmental fish organizations. In the Bering Sea salmon are caught by the commercial groundfish fleet as by-catch. On the Yukon River salmon are commercially and traditionally harvested for both economic and cultural sustenance by the Yup’ik residents of the Yukon Delta. Declining salmon populations has driven scientific research which considers the effects of Bering Sea salmon by-catch. My research findings indicate that Bering Sea fisheries occur where juvenile salmon mature, directly impacting Yukon River salmon populations. Further, the research reflects that although Yukon salmon populations have plummeted, a recent effort was made to open the northern Bering Sea, which includes the Yukon River coastal shelf, to deep-sea commercial fishing. By researching the relationship of policy to cultural salmon dependence, it becomes evident that Alaskan salmon-tribes are excluded from salmon management and decision-making. Legal research reflects that three basic federal Indian concepts – inherent rights, Indian Country, and tribal right of occupancy – emerge as potential foundations that may allow Alaskan salmontribes to begin sharing legal responsibility over salmon. Yukon River salmon are an international and anadromous species that require multiorganizational management. My research reflects that current management favors the Bering Sea commercial fishing industry, despite data indicating Bering Sea fisheries impact Yukon salmon populations and an overall downward trend in Yukon salmon populations. ",
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
    approved: false,
    publicationDate: new Date("2022-4-25"),
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
    featured: false,
    approved: false,
    publicationDate: new Date("2021-4-25"),
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
    approved: false,
    publicationDate: new Date("2020-4-25"),
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
    publicationDate: new Date("2019-4-25"),
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
    featured: false,
    approved: true,
    publicationDate: new Date("2021-4-25"),
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
    featured: false,
    approved: true,
    publicationDate: new Date("2021-4-25"),
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
    publicationDate: new Date("2022-4-25"),
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
    publicationDate: new Date("2021-4-25"),
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
    publicationDate: new Date("2020-9-10"),
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
    publicationDate: new Date("2020-4-22"),
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
    publicationDate: new Date("2021-3-5"),
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
    featured: false,
    approved: true,
    publicationDate: new Date("2022-10-25"),
  },
];

module.exports = articles;
