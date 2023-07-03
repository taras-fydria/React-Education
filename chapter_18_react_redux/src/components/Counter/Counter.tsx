import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions, useAppDispatch} from "../../store";
import {ActionType, IState} from "../../store/counter";

export const Counter = () => {
    const counter = useSelector<IState>(state => state.counter)
    const showCounter = useSelector<IState>(state => state.showCounter)
    const dispatcher = useAppDispatch()


    const incrementButtonClickHandler= (amount: number = 1) =>
        dispatcher(counterActions.)
    const decrementButtonClickHandler = () =>
        dispatcher({type: Actions.DECREMENT})

    const toggleHandler = () => dispatcher({type: Actions.TOGGLE})

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && (
                <div className={classes.value}>{counter}</div>
            )}
            <div className={classes.counter}>
                <button onClick={incrementButtonClickHandler.bind(null, 1)}>
                    Increment
                </button>
                <button onClick={incrementButtonClickHandler.bind(null, 5)}>
                    Increase By 5
                </button>
                <button onClick={decrementButtonClickHandler}>
                    Decrement
                </button>
            </div>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </main>
    );
};


// class CounterClassComponent extends Component<{ counter: number, increment(): void, decrement(): void }, null>{
//     increment() {
//         this.props.increment()
//     }
//
//     decrement() {
//         this.props.decrement()
//     }
//
//     toggleCounterHandler() {
//
//     }
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div className={classes.counter}>
//                     <button onClick={this.increment.bind(this)}>
//                         Increment
//                     </button>
//                     <button onClick={this.decrement.bind(this)}>
//                         Decrement
//                     </button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         )
//     }
// }
//
// const mapStateToProps = (state: IState): { counter: number } => {
//     return {
//         counter: state.counter
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//     return {
//         increment: () => dispatch({type: Actions.INCREMENT}),
//         decrement: () => dispatch({type: Actions.DECREMENT})
//     }
// }
//
//
// connect(mapStateToProps, mapDispatchToProps)(CounterClassComponent)