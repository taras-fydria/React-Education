const redux = require('redux')


interface IState {
    counter: number
}

enum Action {
    INCREMENT,
    DECRIMENT
}

type StateAction = | {
    type: Action.INCREMENT
} | { type: Action.DECRIMENT }

const defaultState: IState = {
    counter: 0
}

const counterReducer: redux.Reducer<IState, StateAction> = (state = defaultState, action) => {
    if (action.type === Action.INCREMENT) {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === Action.DECRIMENT) {
        return {
            counter: state.counter - 1
        }
    }
    return state
}

const store = redux.createStore(counterReducer)

console.log(store.getState())

const counterSubscriber = () => {
    const storeSnap = store.getState()
    console.log(storeSnap)
}

store.subscribe(counterSubscriber)

store.dispatch({type: Action.INCREMENT})
store.dispatch({type: Action.DECRIMENT})