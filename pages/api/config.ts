import { useAppSelector } from '../../hooks';

export const token = () => useAppSelector((state) => (state.token.userInfo.token));
