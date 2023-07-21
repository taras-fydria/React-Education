import classes from './Counter.module.css';
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import {counterActions} from "../../store/counter";

export const Counter = () => {
    const counter = useAppSelector(state => state.counter.counter)
    const showCounter = useAppSelector(state => state.counter.showCounter)
    const dispatcher = useAppDispatch()


    const incrementButtonClickHandler = () =>
        dispatcher(counterActions.increment())
    const decrementButtonClickHandler = () =>
        dispatcher(counterActions.decrement())

    const increaseBtnClickHAndler = (number: number) => dispatcher(counterActions.increase(number))

    const toggleHandler = () => dispatcher(counterActions.toggleCounter())

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && (
                <div className={classes.value}>{counter}</div>
            )}
            <div className={classes.counter}>
                <button onClick={incrementButtonClickHandler}>
                    Increment
                </button>
                <button onClick={increaseBtnClickHAndler.bind(null, 5)}>
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