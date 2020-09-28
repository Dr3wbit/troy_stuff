

    let list1Ticker = 0
    let list2Ticker = 0


$(document).ready(()=>{
   const timer = setInterval(getNewText, 2000, list1, list2)
});

function getNewText(list1, list2){
    if (list1.length <= list1Ticker) {
        list1Ticker = 0
    }
    if (list2.length <= list2Ticker) {
        list2Ticker = 0
    }
    $('.variableText1').html(list1[list1Ticker])
    $('.variableText2').html(list2[list2Ticker])
    list1Ticker++
    list2Ticker++
}
    
    

