
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
                                    result = "정효진";
                                    break;
                            }
                            break;
                        case '02':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "조현아";
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
                                    result = "정효진";
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
                                    result = "윤일영";
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
                                    result = "정효진";
                                    break;
                            }
                            break;
                        case '02':
                            switch (cookies[0][1]) {
                                case '01':
                                    result = "한해정";
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
        $('#res_img').click(function() {
            window.location.href = "hyuna_CommentPage.html";
        });
        $('#result_name').text('조현아');
        $('#result_hobby').text('노래부르기, 책읽기, 게임하기');
        $('#mbti').text('INFP');
        $('#good').text('순간 집중력, 추진력');
        $('#bad').text('게으름, 귀차니즘');
        $('#nickname').text('조리조리');
        document.getElementById('res_img').src="../images/조현아.jpg";
    }
    if(result=="한해정"){
        $('#res_img').click(function() {
            window.location.href = "haejung_CommentPage.html";
        });
        $('#result_name').text('한해정');
        $('#result_hobby').text('스쿼시');
        $('#mbti').text('INFJ');
        $('#good').text('책임감이 강함, 계획적');
        $('#bad').text('집요함,예민함');
        $('#nickname').text('면봉');
        document.getElementById('res_img').src='../images/한해정.png';
    }
    if(result=="이나영"){
        $('#res_img').click(function() {
            window.location.href = "nayoung_Comment.html";
        });
        $('#result_name').text('이나영');
        $('#result_hobby').text('웹툰, 강아지 산책');
        $('#mbti').text('ENFP');
        $('#good').text('밤새 고민할 수 있는 끈기');
        $('#bad').text('수동적인 성격, 감정에 지배적');
        $('#nickname').text('영나이');
        document.getElementById('res_img').src='../images/이나영.jpg';
    }
    if(result=="윤일영"){
        $('#res_img').click(function() {
            window.location.href = "ilyoung_CommentPage.html";
        });
        $('#result_name').text('윤일영');
        $('#result_hobby').text('음악감상');
        $('#mbti').text('INFP');
        $('#good').text('집중력, 꼼꼼함');
        $('#bad').text('게으름, 부정적');
        $('#nickname').text('씹프피, 찐따');
        document.getElementById('res_img').src='../images/윤일영.jpeg';
    }
    if(result=="정효진"){
        $('#res_img').click(function() {
            window.location.href = "hyojin_CommentPage.html";
        });
        $('#result_name').text('정효진');
        $('#result_hobby').text('게임, 웹툰');
        $('#mbti').text('INFP');
        $('#good').text('밝음, 긍정적임');
        $('#bad').text('귀차니즘');
        $('#nickname').text('피글렛, 햄스터');
        document.getElementById('res_img').src='../images/정효진.jpg';
    }
})
