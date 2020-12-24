import { Issue } from '../store/modules/issue/types';

const removeAllLanes = (issue: Issue, lanes: string[]): Issue => {
  const issueWithouLanes = {
    ...issue,
    labels: issue?.labels?.filter((label) => !lanes.includes(label.name)),
  };

  return issueWithouLanes;
};

export default removeAllLanes;
