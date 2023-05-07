import { randomId } from "./utils";

const getCard = (
  content,
  priority,
  tag,
  executor,
  deadline,
  comment,
  attachment,
) => ({
  id: randomId(),
  content,
  priority,
  tag,
  executor,
  deadline,
  comment,
  attachment,
  todoLists: [],
});

const getTodoList = (content, cardID, status, ...listprops) => ({
  id: randomId(),
  content,
  cardID,
  status,
  listprops: listprops || [],
});

const getListProps = (seq, status) => ({
  id: randomId(),
  seq,
  status,
});

export default [
  {
    id: randomId(),
    name: "To do",
    cards: [
      {
        ...getCard(
          "Integrate frontend with backend",
          "trung bình",
          "3",
          "Le Hoang Long",
          new Date().toISOString(),
          "Đi mua cháo",
          "abc.file",
        ),
        todoLists: [
          getTodoList(
            "đi mua cháo",
            1,
            true,
            getListProps(1, true),
            getListProps(2, false),
          ),
          getTodoList("đi mua cháo2", 2, false),
        ],
      },
      getCard("Create integration tests", ""),
      getCard("Setup production environment", ""),
      getCard("Deploy to production", ""),
    ],
  },
  {
    id: randomId(),
    name: "In progress",
    cards: [
      getCard("Create unit tests", ""),
      getCard("Implement API services", ""),
      getCard("Mock frontend", ""),
    ],
  },
  {
    id: randomId(),
    name: "Ready for test",
    cards: [getCard("Implement use cases", ""), getCard("Design API", "")],
  },
  {
    id: randomId(),
    name: "Done",
    cards: [getCard("Design database model", ""), getCard("Create models", "")],
  },
];
