var scale = -1;
var id = null;

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
function meetingTransition(day) {
    var day1 = document.getElementById("dayOne");
    var day2 = document.getElementById("dayTwo");
    var day3 = document.getElementById("dayThree");
    var day4 = document.getElementById("dayFour");
    var pos = 0;
    
    if (day === 'one') {
        if (day1.classList.contains('meetingButton')) {
            day2.classList.add('visuallyhidden');
            day3.classList.add('visuallyhidden');
            day4.classList.add('visuallyhidden');

            setTimeout(function() {
                pos = 5;
                day1.style.marginLeft = pos + "%";
                day2.classList.add('hidden');
                day3.classList.add('hidden');
                day4.classList.add('hidden');
                day1.classList.add('oppIcons');
                day1.classList.remove('ethicalButtons');
                day1.classList.remove('meetingButton');
                clearInterval(id);
                id = setInterval(function() {
                    if (pos == 0) {
                        clearInterval(id);
                        showMeetingText('one');
                    } else {
                        pos -= 0.25; 
                        day1.style.marginLeft = pos + "%"; 
                    }
                }, 15);      
            }, 250); 
        }
        else {
            hideMeetingText('one');
            clearInterval(id);
            id = setInterval(function() {
                if (pos == 5) {
                    clearInterval(id);
                    day1.classList.remove('oppIcons');
                    day1.classList.add('ethicalButtons');
                    day1.classList.add('meetingButton');
                    day1.style.marginLeft = "0%";
                    day2.classList.remove('hidden');
                    day3.classList.remove('hidden');
                    day4.classList.remove('hidden');
                    setTimeout(function() {
                        day2.classList.remove('visuallyhidden');
                        day3.classList.remove('visuallyhidden');
                        day4.classList.remove('visuallyhidden');
                    }, 50);
                } else {
                    pos += 0.25; 
                    day1.style.marginLeft = pos + "%"; 
                }
            }, 15);
        }
    }
    if (day === 'two') {
        if (day2.classList.contains('meetingButton')) {
            day1.classList.add('visuallyhidden');
            day3.classList.add('visuallyhidden');
            day4.classList.add('visuallyhidden');

            setTimeout(function() {
                pos = 30;
                day2.style.marginLeft = pos + "%";
                day1.classList.add('hidden');
                day3.classList.add('hidden');
                day4.classList.add('hidden');
                day2.classList.add('oppIcons');
                day2.classList.remove('ethicalButtons');
                day2.classList.remove('meetingButton');
                clearInterval(id);
                id = setInterval(function() {
                    if (pos == 0) {
                        showMeetingText('two');
                        clearInterval(id);
                    } else {
                        pos -= 0.5; 
                        day2.style.marginLeft = pos + "%"; 
                    }
                }, 15);      
            }, 250);
            
            
        }
        else {
            hideMeetingText('two');
            clearInterval(id);
            id = setInterval(function() {
                if (pos == 30) {
                    clearInterval(id);
                    day2.classList.remove('oppIcons');
                    day2.classList.add('ethicalButtons');
                    day2.classList.add('meetingButton');
                    day2.style.marginLeft = "0%";
                    day1.classList.remove('hidden');
                    day3.classList.remove('hidden');
                    day4.classList.remove('hidden');
                    setTimeout(function() {
                        day1.classList.remove('visuallyhidden');
                        day3.classList.remove('visuallyhidden');
                        day4.classList.remove('visuallyhidden');
                    }, 50);
                } else {
                    pos += 0.5; 
                    day2.style.marginLeft = pos + "%"; 
                }
            }, 15);
        }
    }
    if (day === 'three') {
        if (day3.classList.contains('meetingButton')) {
            day1.classList.add('visuallyhidden');
            day2.classList.add('visuallyhidden');
            day4.classList.add('visuallyhidden');

            setTimeout(function() {
                pos = 55;
                day3.style.marginLeft = pos + "%";
                day1.classList.add('hidden');
                day2.classList.add('hidden');
                day4.classList.add('hidden');
                day3.classList.add('oppIcons');
                day3.classList.remove('ethicalButtons');
                day3.classList.remove('meetingButton');
                clearInterval(id);
                id = setInterval(function() {
                    if (pos < 0) {
                        day3.style.marginLeft = "0%";
                        showMeetingText('three');
                        clearInterval(id);
                    } else {
                        pos -= 0.75; 
                        day3.style.marginLeft = pos + "%"; 
                    }
                }, 15);      
            }, 250);
        }
        else {
            hideMeetingText('three');
            clearInterval(id);
            id = setInterval(function() {
                if (pos > 55) {
                    clearInterval(id);
                    day3.classList.remove('oppIcons');
                    day3.classList.add('ethicalButtons');
                    day3.classList.add('meetingButton');
                    day3.style.marginLeft = "0%";
                    day1.classList.remove('hidden');
                    day2.classList.remove('hidden');
                    day4.classList.remove('hidden');
                    setTimeout(function() {
                        day1.classList.remove('visuallyhidden');
                        day2.classList.remove('visuallyhidden');
                        day4.classList.remove('visuallyhidden');
                    }, 50);
                } else {
                    pos += 0.75; 
                    day3.style.marginLeft = pos + "%"; 
                }
            }, 15);
        }
    }
    if (day === 'four') {
        if (day4.classList.contains('meetingButton')) {
        day1.classList.add('visuallyhidden');
        day2.classList.add('visuallyhidden');
        day3.classList.add('visuallyhidden');
        
        setTimeout(function() {
            pos = 80;
            day4.style.marginLeft = pos + "%";
            day1.classList.add('hidden');
            day2.classList.add('hidden');
            day3.classList.add('hidden');
            day4.classList.add('oppIcons');
            day4.classList.remove('ethicalButtons');
            day4.classList.remove('meetingButton');
            clearInterval(id);
            id = setInterval(function() {
                if (pos == 0) {
                    showMeetingText('four');
                    clearInterval(id);
                } else {
                    pos--; 
                    day4.style.marginLeft = pos + "%"; 
                }
            }, 15);      
        }, 250);       
    }
    else {
        hideMeetingText('four');
        clearInterval(id);
        id = setInterval(function() {
            if (pos == 80) {
                clearInterval(id);
                day4.classList.remove('oppIcons');
                day4.classList.add('ethicalButtons');
                day4.classList.add('meetingButton');
                day4.style.marginLeft = "0%";
                day1.classList.remove('hidden');
                day2.classList.remove('hidden');
                day3.classList.remove('hidden');
                setTimeout(function() {
                    day1.classList.remove('visuallyhidden');
                    day2.classList.remove('visuallyhidden');
                    day3.classList.remove('visuallyhidden');
                }, 50);
            } else {
                pos++; 
                day4.style.marginLeft = pos + "%"; 
            }
        }, 15);
    }
}
}
function showMeetingText(day) {
    var day1text = document.getElementById("dayOneText");
    var day2text = document.getElementById("dayTwoText");
    var day3text = document.getElementById("dayThreeText");
    var day4text = document.getElementById("dayFourText");

    if (day === 'one') {
        day1text.classList.remove('hidden');
        setTimeout(function () {
            day1text.classList.remove('visuallyhidden');
        }, 50);
    }
    if (day === 'two') {
        day2text.classList.remove('hidden');
        setTimeout(function () {
            day2text.classList.remove('visuallyhidden');
        }, 50);
    }
    if (day === 'three') {
        day3text.classList.remove('hidden');
        setTimeout(function () {
            day3text.classList.remove('visuallyhidden');
        }, 50);
    }
    if (day === 'four') {
        day4text.classList.remove('hidden');
        setTimeout(function () {
            day4text.classList.remove('visuallyhidden');
        }, 50);
    }
}
function hideMeetingText(day) {
    var day1text = document.getElementById("dayOneText");
    var day2text = document.getElementById("dayTwoText");
    var day3text = document.getElementById("dayThreeText");
    var day4text = document.getElementById("dayFourText");

    if (day === 'one') {
        day1text.classList.add('visuallyhidden');
        setTimeout(function () {
            day1text.classList.add('hidden');
        }, 25);
    }
    if (day === 'two') {
        day1text.classList.add('visuallyhidden');
        setTimeout(function () {
            day2text.classList.add('hidden');
        }, 25);
    }
    if (day === 'three') {
        day1text.classList.add('visuallyhidden');
        setTimeout(function () {
            day3text.classList.add('hidden');
        }, 25);
    }
    if (day === 'four') {
        day1text.classList.add('visuallyhidden');
        setTimeout(function () {
            day4text.classList.add('hidden');
        }, 25);
    }
}