

    let listTicker1 = 0
    let listTicker2 = 0
    let previousItem1 = 0
    let previousItem2 = 0


$(document).ready(()=>{
    $('.variableText1').append('<div class="starterText1">'+shopperType[shopperType.length-1]+'</div>')
    $('.variableText2').append('<div class="starterText2">'+websiteList[websiteList.length-1]+'</div>')

    const timer = setInterval(getNewText, 6000, shopperType)
   const timer2 = setInterval(getNewText, 3000, websiteList)
});

function getNewText(list){

    let listInfo = getListInfo(list)
   
    console.log("type: ", listInfo)

    

    if(list === shopperType){
        let newItem = getNewItem(list, listInfo, 1)
        $( ".variableText1").find(':first-child').remove()
        $('.variableText1').append(newItem)
        previousItem1 = listTicker1
        listTicker1++
    }
    if(list === websiteList){
        let newItem = getNewItem(list, listInfo, 2)
        $( ".variableText2").find(':first-child').remove()
        $('.variableText2').append(newItem)
        previousItem2 = listTicker2
        listTicker2++
    }

 
}

function checkListLength(list){
    if (list === shopperType && list[listTicker1] === undefined) {
        listTicker1 = 0
    }
    if (list === websiteList && list[listTicker2] === undefined) {
        listTicker2 = 0
    }
}

function getListInfo(list){
    let listLocation = null
    if (list === shopperType) {
        checkListLength(list)
        listLocation = listTicker1
    }
    if (list === websiteList) {
        checkListLength(list)
        listLocation = listTicker2
    }
    return listLocation
}

function getNewItem(list, location, animation){
    console.log(list[location])
    let item = $('<div>', {
        text: list[location],
        class: "animatedText"+animation,
        id: location
    })
    return item
}
    