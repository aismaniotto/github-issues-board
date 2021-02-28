import { Issue } from '../store/modules/issue/types';

const findIssuesWithNoLanes = (issues: Issue[], lanes: string[]): Issue[] => {
  const issuesWithNoLanes = issues.filter(
    (issue2) =>
      issue2.labels?.findIndex((label2) => lanes.includes(label2.name)) ===
        -1 && issue2.state === 'open'
  );
  return issuesWithNoLanes;
};

export default findIssuesWithNoLanes;
