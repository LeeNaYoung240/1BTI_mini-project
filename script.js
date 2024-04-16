
$('#answer01').click(async function () {
    location.href = "question2.html";
    document.cookie = 'q1=01';
})
$('#answer02').click(async function () {
    location.href = "question2.html";
    document.cookie = 'q1=02';
})

$('#answer03').click(async function () {
    location.href = "question3.html";
    document.cookie = 'q2=01';
})
$('#answer04').click(async function () {
    location.href = "question3.html";
    document.cookie = 'q2=02';
})

$('#answer05').click(async function () {
    location.href = "question4.html";
    document.cookie = 'q3=01';
})
$('#answer06').click(async function () {
    location.href = "question4.html";
    document.cookie = 'q3=02';
})

$('#answer07').click(async function () {
    location.href = "result.html";
    document.cookie = 'q4=01';
})
$('#answer08').click(async function () {
    location.href = "result.html";
    document.cookie = 'q4=02';
})
function res() {
    const cookies = document.cookie.split('; ').map((el) => el.split('='));
    console.log(cookies);

    let result = "";
    switch (cookies[3][1]) {
        case '01':
            switch (cookies[2][1]) {
                case '01':
                    switch (cookies[1][1]) {
                        case '01':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "조현아";
                                    break;
                                case '02':
                                    result = "윤일영";
                                    break;
                            }
                            break;
                        case '02':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "윤일영";
                                    break;
                                case '02':
                                    result = "윤일영";
                                    break;
                            }
                            break;
                    }
                    break;
                case '02':
                    switch (cookies[1][1]) {
                        case '01':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "한해정";
                                    break;
                                case '02':
                                    result = "한해정";
                                    break;
                            }
                            break;
                        case '02':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "조현아";
                                    break;
                                case '02':
                                    result = "한해정";
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case '02':
            switch (cookies[2][1]) {
                case '01':
                    switch (cookies[1][1]) {
                        case '01':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "조현아";
                                    break;
                                case '02':
                                    result = "윤일영";
                                    break;
                            }
                            break;
                        case '02':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "조현아";
                                    break;
                                case '02':
                                    result = "이나영";
                                    break;
                            }
                            break;
                    }
                    break;
                case '02':
                    switch (cookies[1][1]) {
                        case '01':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "이나영";
                                    break;
                                case '02':
                                    result = "한해정";
                                    break;
                            }
                            break;
                        case '02':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "이나영";
                                    break;
                                case '02':
                                    result = "이나영";
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
    }

    return result;
}


$(document).ready(function () {
    let result = res();
    if(result=="조현아"){
        $('#result_name').text('조현아');
        $('#result_description').text();
        document.getElementById('res_img').src="./조현아.jpg";
    }
    if(result=="한해정"){
        $('#result_name').text('한해정');
        document.getElementById('res_img').src='./한해정.png';
    }
    if(result=="이나영"){
        $('#result_name').text('이나영');
        document.getElementById('res_img').src='./조현아.jpg';
    }
    if(result=="윤일영"){
        $('#result_name').text('윤일영');
        document.getElementById('res_img').src='./윤일영.jpeg';
    }
})