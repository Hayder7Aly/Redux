
const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREME = "BUY_ICECREME"


function buyCake(){
    return {
        type : "BUY_CAKE"
    }
}

function buyIceCreame(){
    return{
        type : "BUY_ICECREME"
    }
}

const initialIceState = {
    numOfIceCreams : 50
}

const initialCakeState = {
    numOfCakes : 10,
}

function iceReducer(state = initialIceState , action){
    switch(action.type){
        case BUY_ICECREME: return {...state, numOfIceCreams : state.numOfIceCreams - 1}
        default: return state
    }
}

function cakeReducer(state = initialCakeState , action){
    switch(action.type){
        case BUY_CAKE: return {...state, numOfCakes : state.numOfCakes - 1}
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame : iceReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initial State", store.getState())
const unsubscribe = store.subscribe(() => store.getState() )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreame())
unsubscribe()