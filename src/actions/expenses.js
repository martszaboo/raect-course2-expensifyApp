import uuid from 'uuid';


//Add expense



export const addExpense=({description='', note='',amount='',createAt=0}={})=>({
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
export const editExpense=(id,update)=>({
    type:'EDIT_EXPENSE',
    id,
    update
});
//Remove expense
export const removeExpense=(id)=>({
    type:'REMOVE_EXPENSE',
    id
});