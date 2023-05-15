import { randomId } from "./utils";

const getCard = (
  content,
  priority,
  tag,
  executor,
  deadline,
  comment,
  attachment,
  seq,
) => ({
  id: randomId(),
  content,
  priority,
  tag,
  executor,
  deadline,
  comment,
  attachment,
  seq,
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
    name: "Cơ hội",
    cards: [
      {
        ...getCard(
          "Cơ hội",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua cháo",
          "abc.file",
          1,
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
      {
        ...getCard(
          "Mua máy chiếu",
          "Khẩn cấp",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua máy chiếu",
          "abc.file",
          2,
        ),
        todoLists: [
          getTodoList(
            "Hoàn thành trước 23/04",
            1,
            true,
            getListProps(1, true),
            getListProps(2, false),
          ),
          getTodoList("Báo giá", 2, false),
        ],
      },
    ],
  },
  {
    id: randomId(),
    name: "Báo giá",
    cards: [
      {
        ...getCard(
          "Cơ hội abcdef",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua cháo",
          "abc.file",
          4,
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
      {
        ...getCard(
          "Mua  tivi",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua máy chiếu",
          "abc.file",
          5,
        ),
        todoLists: [
          getTodoList(
            "Hoàn thành trước 23/04",
            1,
            true,
            getListProps(1, true),
            getListProps(2, false),
          ),
          getTodoList("Báo giá", 2, false),
        ],
      },
      {
        ...getCard(
          "Mua  tủ lạnh",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua máy chiếu",
          "abc.file",
          6,
        ),
        todoLists: [
          getTodoList(
            "Hoàn thành trước 23/04",
            1,
            true,
            getListProps(1, true),
            getListProps(2, false),
          ),
          getTodoList("Báo giá", 2, false),
        ],
      },
    ],
  },
  {
    id: randomId(),
    name: "Đơn hàng",
    cards: [
      {
        ...getCard(
          "Đi mua vật tư",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Mua đồ dùng văn phòng",
          "abc.file",
          7,
        ),
        todoLists: [
          getTodoList(
            "Mua bút lông",
            1,
            true,
            getListProps(1, true),
            getListProps(2, false),
          ),
          getTodoList("Mua thước", 2, false),
        ],
      },
      {
        ...getCard(
          "Cơ hội 456",
          "Trung bình",
          "2",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua máy chiếu",
          "abc.file",
          8,
        ),
        todoLists: [
          getTodoList(
            "Thực hiện ngay",
            1,
            true,
            getListProps(1, true),
            getListProps(2, false),
          ),
          getTodoList("Báo giá", 2, false),
        ],
      },
      {
        ...getCard(
          "Kế hoạch 567",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Lên kế hoạch companytrip",
          "abc.file",
          9,
        ),
        todoLists: [
          getTodoList(
            "triển khai",
            1,
            true,
            getListProps(1, false),
            getListProps(2, false),
          ),
          getTodoList("Báo giá", 2, false),
        ],
      },
    ],
  },
  {
    id: randomId(),
    name: "Hoàn Thành",
    cards: [
      {
        ...getCard(
          "Ký hợp đồng ABC",
          "Trung bình",
          "3",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Mua đồ dùng văn phòng",
          "abc.file",
          10,
        ),
        todoLists: [
          getTodoList(
            "Mua bút lông",
            1,
            true,
            getListProps(1, true),
            getListProps(2, true),
          ),
          getTodoList("Mua thước", 2, false),
        ],
      },
      {
        ...getCard(
          "Tổ chức họp công ty",
          "Trung bình",
          "2",
          "Lê Hoàng Long",
          new Date().toISOString(),
          "Đi mua máy chiếu",
          "abc.file",
          11,
        ),
        todoLists: [
          getTodoList(
            "Thực hiện ngay",
            1,
            true,
            getListProps(1, true),
            getListProps(2, true),
          ),
          getTodoList("Báo giá", 2, false),
        ],
      },
    ],
  },
];
