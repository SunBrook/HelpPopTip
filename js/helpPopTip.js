//初始化帮助提示框
function initHelpPopTip(tipArray){
    //初始化组件
    var help_wrapper = document.getElementById("help_wrapper");
    var help_wrapper_innerHTML = '<a id="tip_link">?</a>\n' +
        '    <div id="pop_tip">\n' +
        '        <div id="pop_tip_content">\n' +
        '            <ol id="tip_list">\n' +
        '            </ol>\n' +
        '        </div>\n' +
        '        <div class="pop_tip_arrow"></div>\n' +
        '        <div id="pop_transparent_mask"></div>\n' +
        '    </div>'
    help_wrapper.innerHTML = help_wrapper_innerHTML;

    var tip_list = document.getElementById("tip_list");
    var tip_list_html = '';
    for (let i = 0; i < tipArray.length; i++) {
        tip_list_html += '<li>' + tipArray[i] +'</li>';
    }
    tip_list.innerHTML = tip_list_html;

    var pop = document.getElementById("pop_tip");
    var tip = document.getElementById("tip_link");

    //获取提示框的高度，设置透明遮罩高度等于提示框高度
    pop.style.display = 'block';
    pop.style.opacity = 1;
    var tipHeight = document.getElementById("pop_tip_content").offsetHeight;
    console.log(tipHeight);
    document.getElementById("pop_transparent_mask").style.height = (tipHeight - 20) + "px";
    pop.style.display = 'none';
    pop.style.opacity = 0;

    var is_hover = false;

    //鼠标移入提示，显示提示框
    tip.onmouseover = function () {
        fadeIn();
    }

    //鼠标移出提示，隐藏提示框
    tip.onmouseout = function () {
        fadeOut();
    }

    //鼠标移入提示框，显示提示框
    pop.onmouseover = function () {
        is_hover = true;
        pop.style.display = 'block';
        pop.style.opacity = 1;
    }

    //鼠标移出提示框，隐藏提示框
    pop.onmouseout = function () {
        is_hover = false;
        fadeOut();
    }


    //淡入
    function fadeIn() {
        if (pop.style.opacity !== 1) {
            pop.style.display = 'block';
            var num = 0;
            var in_interval = setInterval(function () {
                num++;
                var opacity = num / 10;
                pop.style.opacity = opacity;
                if (opacity >= 1) {
                    pop.style.display = 'block';
                    pop.style.opacity = 1;
                    clearInterval(in_interval);
                }
            }, 30);
        }
    }

    //淡出
    function fadeOut() {
        if (pop.style.opacity !== 0) {
            var num = 10;
            var out_interval = setInterval(function () {
                num--;
                var opacity = num / 50;
                pop.style.opacity = opacity;
                if (is_hover) {
                    pop.style.opacity = 1;
                    pop.style.display = 'black';
                    clearInterval(out_interval);
                } else if (opacity <= 0) {
                    pop.style.opacity = 0;
                    pop.style.display = 'none';
                    clearInterval(out_interval);
                }
            }, 30);
        }
    }
}