$(function () {
    console.log("my-plugin doing.");
    $("button[name='ajax-load']").click(function () {
        /*
        <button name="ajax-load" data-url="http://www.baidu.com" data-target="#ajax-data-show">Ajax加载数据</button>
        <div id="ajax-data-show"></div>
         */
        let dataUrl = $("button[name='ajax-load']").data('url');
        let target = $("button[name='ajax-load']").data('target');
        //发送ajax请求
        $.getJSON(dataUrl,"",function (data) {
            console.log(data);
            $(target).text(data);
        });
    });
});