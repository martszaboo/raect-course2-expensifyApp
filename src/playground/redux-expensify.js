import {createStore, combineReducers} from 'redux'
import uuid from 'uuid';





//Get visible expenses
const getVisibleExpenses =(expenses,{text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
       
        const startDateMatch = typeof startDate !=='number' || expense.createAt >=startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createAt<=endDate;
        const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase()) 

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createAt<b.createAt ? 1:-1 
        }else if(sortBy==='amount'){
            return a.amount>b.amount ? -1:1
        }

    })

    
};

//Expenses Reducer


const expensesReducerDefaultState=[];


const expensesReducer = (state = expensesReducerDefaultState, action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>expense.id!==action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.update
                    };
                }else{
                    return expense;
                };
            });
        default:
            return state;
    }
 
};

//Set text filter

const setTextFilter=(text="")=>({
    type:'SET_TEXT',
    text
});


//Set Start Date
const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})
//Set End Date
const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})
//SetSortByDate
const setSortByDate =()=>({
    type:'SET_SORT_BY_DATE'
})
//SetSortByAmount
const setSortByAmount=()=>({
    type:'SET_SORT_BY_AMOUNT'
})

//Add expense
const addExpense=({description='', note='',amount='',createAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createAt
        }
    }
    
);
//Edit expense
const editExpense=(id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update
});
//Remove expense
const removeExpense=(id)=>({
    type:'REMOVE_EXPENSE',
    id
});



//Filters Reducer


const filtersReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer =(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case'SET_TEXT':
            return {
                ...state,
                text:action.text
            }
        case'SET_SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case'SET_SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }

        default:
            return state;
    }
};


//store creation

const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses= getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
    console.log(store.getState().filters)
})

const expense1=store.dispatch(addExpense({description:'Rent',amount:100,createAt:1000}));
const expense2=store.dispatch(addExpense({description:'coffe',amount:300,createAt:-1000}));

/*
store.dispatch(removeExpense(expense1.expense.id));
store.dispatch(editExpense(expense2.expense.id,{amount:500}))
store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter('something'))
store.dispatch(setSortByAmount())
store.dispatch(setSortByDate())
*/
/* 
 store.dispatch(setStartDate(0))
store.dispatch(setEndDate()) */

store.dispatch(setTextFilter())
store.dispatch(setSortByDate())
store.dispatch(setSortByAmount())
/*
store.dispatch(setStartDate())
store.dispatch(setEndDate());
*/
const demoState ={
    expenses:[{
        id:'posadasd',
        description:'January rent',
        note:'this was the final payment',
        amount:54500,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }
};