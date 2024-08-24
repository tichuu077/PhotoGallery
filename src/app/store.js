import {configureStore} from '@reduxjs/toolkit'

import reducers from '../featurs/uploadSlice'

const store = configureStore({
    reducer:{
        uploadPhoto:reducers
    }
})
export {store}