chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == 'downloadXHSvideo') {
            let videoDownloadURL = document.querySelector("#noteContainer video")?.src;
            if(videoDownloadURL){

                sendResponse({
                    result: true,
                    note: videoDownloadURL
                });
                //下载视频
                //window.open(videoDownloadURL);


            } else {sendResponse({
                result: false,
                note: '笔记视频不存在'
            });}


        }
    }
);

console.log("content.js")
