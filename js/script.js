let array1 = [300,20,60,100,400,130,270,290,30,450,50];

function sort(toSortList) {
    if (toSortList.length == 1){
        console.log(toSortList)
        return toSortList;
    }
    else{
        //console.log(toSortList)
        savedNumber= toSortList.pop()
        //console.log(savedNumber)
        toSortList = sort(toSortList)
        console.log(toSortList,savedNumber)
        if (savedNumber<toSortList[toSortList.length-1]) {
            toSortList.push(savedNumber)
        }
        else{
            toSortList.unshift(savedNumber)
            toSortList = sort(toSortList)
        }
        return toSortList
    }
}

console.log(sort(array1))