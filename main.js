

    let list1Ticker = 1
    let list2Ticker = 1
    let previousItem1 = 0
    let previousItem2 = 0


$(document).ready(()=>{
    $('.variableText1').append('<div class="starterText">'+list1[0]+'</div>')
    $('.variableText2').append('<div class="starterText">'+list2[0]+'</div>')
    setTimeout(() => {
        $('.variableText1').empty()
        $('.variableText2').empty()
    }, 3000);
   const timer = setInterval(getNewText, 3000, list1, list2)
});

function getNewText(list1, list2){
    
    if (list1.length <= list1Ticker) {
        list1Ticker = 0
    }
    if (list2.length <= list2Ticker) {
        list2Ticker = 0
    }

    let list1Option = $('<div>', {
        text: list1[list1Ticker],
        class: "animatedText",
        id: list1Ticker
    })

    let list2Option = $('<div>', {
        text: list2[list2Ticker],
        class: "animatedText",
        id: list2Ticker
    })
    
    removePreviousItem()

    $('.variableText1').append(list1Option)
    $('.variableText2').append(list2Option)

    previousItem1 = list1Ticker
    previousItem2 = list2Ticker
    list1Ticker++
    list2Ticker++


}
    
    
function removePreviousItem() {

$('#' +previousItem1).remove()
$('#' +previousItem2).remove()


}
