import {createStore} from 'redux';

const reset =()=>({type:'RESET'})

const set =({setCount=1}={})=>({
    type:'SET',
    setCount:setCount
})

const incrementCount =({ incrementBy =1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy:incrementBy
    }
}

const decrement =({decrementBy=1}={})=>{
    return {
        type:'DECREMENT',
        decrementBy:decrementBy
    }
}

const store = createStore((state = { count :0}, action)=>{
   switch (action.type){
       case 'SET':
           return{
               count:action.setCount
           }
       case 'INCREMENT':
           return{
               count:state.count+action.incrementBy
           };
        case 'DECREMENT':
            return{
                count:state.count-action.decrementBy
            }
        case 'RESET':
            return{
                count:0
            }
        default:
            return state;
   }
});

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
})

//increment
store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy:100}))

store.dispatch(decrement({decrementBy:5}))
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(set({setCount:5}))


