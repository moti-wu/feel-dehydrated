import { IOrderItem } from "../constants/orderList";

export function getOrderListPath(
  targetId: string,
  children: IOrderItem[],
  ancestors: string[] = []
): string[] {
  for (let node of children) {
    if (node.id === targetId) {
      return ancestors.concat(node.id);
    }
    if (node.children) {
      const found = getOrderListPath(
        targetId,
        node.children,
        ancestors.concat(node.id)
      );
      if (found.length) {
        return found;
      }
    }
  }
  return [];
}
