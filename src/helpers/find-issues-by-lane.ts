import { Issue } from '../store/modules/issue/types';

const findIssuesByLane = (issues: Issue[], lane: string): Issue[] => {
  const issuesFromNoLane = issues.filter(
    (issue) =>
      issue.labels?.findIndex((label) => lane === label.name) !== -1 &&
      issue.closed_at === null
  );
  return issuesFromNoLane;
};

export default findIssuesByLane;
