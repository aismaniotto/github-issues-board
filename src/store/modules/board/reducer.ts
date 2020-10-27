import { Reducer } from 'redux';
import { BoardState, BoardTypes, Issue, Lane } from './types';

const INITIAL_STATE: BoardState = {
  repository: '',
  lanes: [],
  loading: false,
  error: false,
};

const organizeIssues = (issues: Issue[]) => {
  const lanes: Lane[] = [];

  issues.forEach((issue) => {
    const laneIndex = lanes.findIndex((lane) => lane.name === issue.lane);
    if (laneIndex === -1) {
      lanes.push({
        name: issue.lane,
        issues: [issue],
      });
    } else {
      lanes[laneIndex].issues.push(issue);
    }
  });

  return lanes;
};

const addNewIssue = (issue: Issue, lanes: Lane[]) => {
  const laneIndex = lanes.findIndex((lane) => lane.name === issue.lane);

  if (laneIndex === -1) {
    lanes.push({
      name: issue.lane,
      issues: [issue],
    });
  } else {
    lanes[laneIndex].issues.push(issue);
  }

  return lanes;
};

const updateIssue = (issue: Issue, lanes: Lane[]) => {
  let laneIndex = -1;
  let issueIndex = 1;
  let oldIssue: Issue | undefined;
  const localLanes = lanes;
  localLanes.forEach((lane) => {
    lane.issues.forEach((laneIssue) => {
      if (laneIssue.id === issue.id) {
        laneIndex = localLanes.indexOf(lane);
        issueIndex = lane.issues.indexOf(laneIssue);
        oldIssue = laneIssue;
      }
    });
  });

  if (laneIndex !== -1 && issueIndex !== -1 && oldIssue) {
    if (oldIssue.lane === issue.lane) {
      localLanes[laneIndex].issues[issueIndex] = issue;
    }
  }

  return localLanes;
};

const reducer: Reducer<BoardState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BoardTypes.GET_ISSUES_REQUEST:
      return { ...state, loading: true };
    case BoardTypes.GET_ISSUES_SUCCESS:
      return {
        ...state,
        lanes: organizeIssues(action.payload),
        loading: false,
        error: false,
      };
    case BoardTypes.GET_ISSUES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case BoardTypes.CREATE_ISSUE:
      return {
        ...state,
        lanes: addNewIssue(action.payload, state.lanes),
      };
    case BoardTypes.UPDATE_ISSUE:
      return {
        ...state,
        lanes: updateIssue(action.payload, state.lanes),
      };
    default:
      return state;
  }
};

export default reducer;