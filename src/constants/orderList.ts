export interface IOrderItem {
  id: string;
  label: string;
  children?: IOrderItem[];
}

export const orderList: IOrderItem[] = [
  {
    id: "64f",
    label: "好喝黑糖",
    children: [
      {
        id: "445",
        label: "黑糖鮮奶",
        children: [
          { id: "37a", label: "黑糖珍珠鮮奶" },
          { id: "feb", label: "黑糖芋圓鮮奶" },
          { id: "59c", label: "黑糖蒟蒻鮮奶" },
        ],
      },
      {
        id: "29e",
        label: "黑糖冬瓜",
        children: [
          { id: "ac3", label: "黑糖冬瓜牛奶" },
          { id: "ca0", label: "黑糖冬瓜珍珠" },
        ],
      },
    ],
  },
  {
    id: "6c3",
    label: "茶",
    children: [
      { id: "5dc", label: "烏龍綠" },
      { id: "b5f", label: "綠茶" },
      { id: "b09", label: "紅茶" },
      { id: "887", label: "青茶" },
    ],
  },
  {
    id: "c81",
    label: "咖啡",
    children: [
      {
        id: "e02",
        label: "黑咖啡",
        children: [
          { id: "d20", label: "濃縮咖啡" },
          { id: "1f8", label: "美式咖啡" },
        ],
      },
      {
        id: "d7a",
        label: "牛奶咖啡",
        children: [
          {
            id: "c09",
            label: "拿鐵",
            children: [
              { id: "db2", label: "黑糖拿鐵" },
              { id: "9f6", label: "榛果拿鐵" },
              { id: "b61", label: "香草拿鐵" },
            ],
          },
          { id: "9ac", label: "卡布奇諾" },
          { id: "ce8", label: "摩卡" },
        ],
      },
    ],
  },
];
