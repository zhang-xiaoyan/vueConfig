
export default{
    setTitle(title) {
        document.title = title;
        let isIOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
        if (isIOS) {
            let iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            // iframe.src = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
            // iframe.src = '//storage.360buyimg.com/cms/lxy/jdLogo.jpg'
            document.body.appendChild(iframe);
            iframe.addEventListener('load', function () {
                setTimeout(function () {
                    document.body.removeChild(iframe)
                }, 0)
            })
        }
    }
}