import { Reducer } from 'redux';
import { Label, LabelState, LabelTypes } from './types';

const INITIAL_STATE: LabelState = {
  allLabels: [],
  labels: [],
  lanes: [],
};

const reducer: Reducer<LabelState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LabelTypes.GET_LABELS_REQUEST:
      return state;
    case LabelTypes.GET_LABELS_SUCCESS:
      return {
        ...state,
        allLabels: action.payload,
        labels: action.payload.filter((label: Label) => {
          if (!label.name.match(/^(_lane):[\d]+:.+/g)) return label;
        }),
        lanes: action.payload
          .filter((label: Label) => {
            if (label.name.match(/^(_lane):[\d]+:.+/g)) return label;
          })
          .map((label: Label) => label.name),
      };
    case LabelTypes.GET_LABELS_FAILURE:
      return {
        ...state,
        labels: [],
      };
    default:
      return state;
  }
};

export default reducer;
