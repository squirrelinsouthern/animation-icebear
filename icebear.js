!function () {
    $('.action').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 25
                break
            case 'normal':
                duration = 10
                break
            case 'fast':
                duration = 5
                break   
        } 
    }) 

    var duration = 5
    function writeCode(prefix, code, fn) {
        let container = document.getElementById('code')
        let styleTag = document.getElementById('styleTag')
        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
   /*
    * 注意，白熊出没！
    */
    .preview {
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(249, 251, 241);
    }
    
    .wrapper {
        width:100%;
        height: 250px;
        position: relative;
    }
   /*
    * 首先，画白熊的鼻子
    */
    .nose {
        width: 50px;
        height: 27px;
        border-radius: 45% 45% 50%50%;
        position: absolute;
        background-color: black;
        top: 167px;
        left: 50%;
        margin-left: -25px;
    }
    .nosetopline {
        width: 30px;
        height: 10px;
        border: 2px solid black;
        position: absolute;
        border-radius: 50%;
        top: 155px;
        border-left: none;
        border-right: none;
        border-bottom: none;
        left: 50%;
        margin-left: -15px;
    }
   /*
    * 然后，画法令纹
    */
    .nasolabialfolds {
        width: 85px;
        height: 90px;
        border: 3px solid black;
        position: absolute;
        border-radius: 70% 50%;
        top: 165px;
        left: 50%;
        border-left: none;
        border-bottom: none;
        border-top: none;
    }
   /*
    * 擦点BB霜
    */
    .nasolabialfolds::before {
        content:'';
        width: 25px;
        height: 25px;
        background-color: rgb(249, 251, 241);
        position: absolute;
        transform: rotate(500deg);
        left: 42px;
        top: -12px
    }
   /*
    * 接下来，画白熊的嘴巴
    */
    .mouth {
        width: 22px;
        height: 10px;
        border: 3px solid black;
        position: absolute;
        border-radius: 50%;
        top: 240px;
        border-left: none;
        border-right: none;
        border-top: none;
        left: 50%;
        margin-left: -11px;
    }
   /*
    * 画右边耳朵
    */
    .earright {
        width: 40px;
        height: 55px;
        border: 3px solid black;
        border-radius: 22px 25px 15px 10px;
        background-color: rgb(223, 223, 217);
        position: absolute;
        left: 50%;
        margin-left: 70px;
        border-bottom: none;
        transform: rotate(20deg);
    }
    .earright::after {
        content: '';
        width: 28px;
        height: 70px;
        border-radius: 30px 40px 30px 25px;
        background-color: rgb(249, 251, 241);
        position: absolute;
        border-bottom: none;
    }
   /*
    * 画左边耳朵
    */
    .earleft {
        width: 40px;
        height: 55px;
        border: 3px solid black;
        border-radius: 25px 22px 10px 15px;
        background-color: rgb(223, 223, 217);
        position: absolute;
        right: 50%;
        margin-right: 70px;
        border-bottom: none;
        transform: rotate(-20deg);
    }
    .earleft::after {
        content: '';
        width: 28px;
        height: 70px;
        border-radius: 40px 30px 25px 30px;
        background-color: rgb(249, 251, 241);
        position: absolute;
        border-bottom: none;
    }
   /*
    * 画头的轮廓
    */
    .re{
        width: 500px;
        height: 68px;
        position: absolute;
        left: 50%;
        margin-left: -250px;
        top: 10px;
        overflow: hidden;
    }
   /*
    * 位置放准
    */
    .face {
        width: 400px;
        height: 300px;
        border-radius: 50%;
        border: 3px solid black;
        position: absolute;
        left: 50%;
        margin-left: -200px;
        top: 10px;
        border-bottom: none;
        border-left:none;
        border-right:none;
    }
   /*
    * 最后，画白熊的左眼
    */
    .eyeleft {
        width: 12px;
        height: 17px;
        background-color: black;
        border-radius: 45%;
        position: absolute;
        top: 139px;
        left: 50%;
        margin-left: -65px;
        -webkit-animation-name: blink;
        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
    }
   /*
    * 画白熊的右眼
    */
    .eyeright {
        width: 12px;
        height: 17px;
        background-color: black;
        border-radius: 45%;
        position: absolute;
        top: 139px;
        right: 50%;
        margin-right: -65px;
        -webkit-animation-name: blink;
        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
    }
   /*
    * 盯住，，，有彩蛋哦~
    */
    @-webkit-keyframes blink {
        0% {
           transform: scaleX(1) scaleY(1);
        }

        5% {
            transform: scaleX(1.4) scaleY(0.1);
        }

        15% {
            transform: scaleX(1) scaleY(1);
        }
    }
   /*
    * 好了，白熊画完了！
    */
    
    
    `
    writeCode('',code)

    






}.call()

