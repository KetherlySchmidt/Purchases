import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import compra from './reducers/compraReducer'
import compras from './reducers/comprasReducer'
import login from './reducers/loginReducer'

const rootReducer = combineReducers({
    compra, compras, login

})

const store = createStore(rootReducer, applyMiddleware (thunk))
export default store