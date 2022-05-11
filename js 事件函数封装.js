// 事件绑定
function addEventListener(element, eventName, fn) {
    // 判断当前浏览器是否支持addEventListener方法
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
    } else {
        // 相当于element.onclick = fn
        element['on' = eventName] = fn;
    }

}

// 事件解绑
function removeEventListener(element, eventName, fu) {
    // 判断当前浏览器是否支持removeEventListener方法
    if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);
    } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, fn);
    } else {
        element['on' + eventName] = null;
    }
}