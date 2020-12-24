import { Issue } from '../store/modules/issue/types';

const findIssueByNumber = (
  issues: Issue[],
  number: string
): Issue | undefined => {
  const findedIssue = issues.find(
    (target) => target.number.toString() === number
  );
  return findedIssue;
};

export default findIssueByNumber;
