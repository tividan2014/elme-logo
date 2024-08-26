import imageReducer from '../features/image/store/imageSlice'

const rootReducer = {
  reducer: {
    image: imageReducer,
  },
}

export default rootReducer
