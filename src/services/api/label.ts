import api from '.';
import { Label } from '../../store/modules/board/types';

export const getLabels = (owner: string, repo: string) =>
  api.get(`/repo/${owner}/${repo}/labels`);

export const newLabel = (owner: string, repo: string, label: Label) =>
  api.post(`/repo/${owner}/${repo}/labels`, label);
