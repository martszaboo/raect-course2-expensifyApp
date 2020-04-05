

//Set text filter

export const setTextFilter=(text="")=>({
    type:'SET_TEXT',
    text
});


//Set Start Date
export const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})
//Set End Date
export const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})
//SetSortByDate
export const setSortByDate =()=>({
    type:'SET_SORT_BY_DATE'
})
//SetSortByAmount
export const setSortByAmount=()=>({
    type:'SET_SORT_BY_AMOUNT'
})