import { atom } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const introductionState = atom({
  key: 'introductionState',
  default: '',
});
