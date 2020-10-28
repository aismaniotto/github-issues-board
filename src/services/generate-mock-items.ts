import { Issue } from '../store/modules/board/types';

const genereateMockIssues = (
  prefix: string,
  lane: string,
  qtd: number,
  initId: number,
): Issue[] => {
  const items: Issue[] = [];
  for (let i = initId; i < initId + qtd; i++) {
    items.push({
      id: i,
      title: `${prefix}-${i}`,
      lane,
    });
  }

  return items;
};

export default genereateMockIssues;
