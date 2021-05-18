var scale = -1;
function swapDefinition() {
    var def1 = document.getElementById("choiceBlueOne");
    var def2 = document.getElementById("choiceBlueTwo");
    
    //If D2 is hidden and D1 is visible
    if (def2.classList.contains('hidden')) 
    {
        //D1 hiding
        def1.classList.add('visuallyhidden');
        def1.classList.add('hidden');
        
        //D2 revealing
        def2.classList.add('visuallyhidden');
        def2.classList.remove('hidden');
        
        setTimeout(function() {
            def2.classList.remove('visuallyhidden');
        }, 20)
    }
    else //If D2 is visible and D1 is hidden
    {
        //D2 hiding
        def2.classList.add('visuallyhidden');
        def2.classList.add('hidden');
            
        //D1 revealing
        def1.classList.add('visuallyhidden');
        def1.classList.remove('hidden');
        
        setTimeout(function() {
            def1.classList.remove('visuallyhidden');
        }, 20)
        
    }
}
function flip(image) {
    if (scale === -1) {
        image.style.transition = ".25s transform ease-in-out";
        image.style.transform = "scaleX(-1)";
        scale = 1;
    }
    else {
        image.style.transition = ".25s transform ease-in-out";
        image.style.transform = "scaleX(1)";
        scale = -1;
    }
}