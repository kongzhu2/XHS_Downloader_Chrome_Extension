function downloadXHSvideo(){
console.log('下载视频按钮被点击了');

// 获取具有指定属性的所有标签页，active: true 标签页在窗口中是否为活动标签页；currentWindow 标签页是否在当前窗口中。
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {



        // 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
        chrome.tabs.sendMessage(tabs[0].id, { action: "downloadXHSvideo" }, function (response) {
            // 回调函数(传回的信息)


          var title = tabs[0].title;

            if (response.result) {

                chrome.downloads.download({
                    url: response.note,
                    filename: title+".MP4"
                });
                //alert(response.note)
                // 关闭 popup.html 页面
                window.close();
            } else {
                alert(response.note)
            }
        });
    });



}

document.querySelector('#download-btn').addEventListener('click',downloadXHSvideo);