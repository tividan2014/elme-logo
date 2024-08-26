import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import type { AppDispatch, RootState } from './store'

export const useDispatch = () => useReduxDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = (state) => useReduxSelector(state, shallowEqual)
