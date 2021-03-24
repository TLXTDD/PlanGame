function animation(dom,target,time,callBack) {
    var start = {};//存放dom初始值
    var speed = {};//存放dom速度
    for (var key in target){
        start[key] = parseFloat(getStyle(dom,key));
        speed[key] = (target[key] - start[key])/(time*1000);
    }
    var oldTime = new Date();//获取初始时间
    var timer = setInterval(function () {
        var newTime = new Date();//获取最新时间
        var delta_T = newTime - oldTime; //存放dom的时间差
        var newStart = {};
        for (var key in target) {
            newStart[key] = getStyle(dom,key);
            if (newStart[key].substr(-2,2)==="px") {
                dom.style[key] = start[key] + speed[key] * delta_T + 'px';
            }else {
                dom.style[key] = start[key] + speed[key] * delta_T;
            }

        }
        if (delta_T>=time*1000){
            for (var key in target) {
                if (newStart[key].substr(-2,2)==="px") {
                    clearInterval(timer);
                    dom.style[key] = target[key] + 'px';
                }else {
                    clearInterval(timer);
                    dom.style[key] = target[key];
                }
            }
            callBack&&callBack.call(dom,start,time)
        }
     },100);
}

//封装兼容计算样式表
function getStyle(dom,attr) {
    if (dom.currentStyle){
        return dom.currentStyle[attr]
    }else{
        return window.getComputedStyle(dom,null)[attr]
    }
}