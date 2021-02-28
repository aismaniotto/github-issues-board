import { Issue } from '../store/modules/issue/types';

const findClosedIssues = (issues: Issue[]): Issue[] =>
  issues.filter((issue) => issue.state === 'closed');

export default findClosedIssues;
