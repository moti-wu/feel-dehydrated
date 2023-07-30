import { IOrderItem } from "../constants/orderList";

export function getFlattenOrderList(children: IOrderItem[]): IOrderItem[] {
  return children.reduce((acc: IOrderItem[], currentNode) => {
    const returnObject: IOrderItem = {
      id: currentNode.id,
      label: currentNode.label,
    };
    if (currentNode.children) {
      return [...acc, ...getFlattenOrderList(currentNode.children)];
    }
    return [...acc, returnObject];
  }, []);
}
