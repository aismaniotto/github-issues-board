import { Issue } from '../store/modules/issue/types';

const findClosedIssues = (issues: Issue[]): Issue[] =>
  issues.filter((issue) => issue.closed_at !== null);

export default findClosedIssues;
