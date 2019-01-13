/**
 * 作者: 郭天琦
 * 创建时间: 2018/01/04
 * 版本: [1.0, 2018/01/04 ]
 * 版权: 江苏国泰新点软件有限公司
 * 描述: 对二维码的生成解析
 */

(function (win, Util) {
    'use strict';

    var QRCode = win.QRCode,
        qrcode = null;

    if (QRCode && typeof QRCode === 'function') {

        var defaultSettings = {
            width: 128,
            height: 128,
            colorDark: "#000",
            colorLight: "#fff",
            correctLevel: QRCode.CorrectLevel.H
        };

        var getElement = function(el) {
            if (el) {
                if (el.nodeType && el.nodeType === 1) {
                    return el;
                }
                else {
                    return document.querySelector(el);
                }
            }
        };

        var extend = function () {
            var args = [].slice.call(arguments),
                result = args[0];

            for (var i = 1, len = args.length; i < len; i++) {
                var item = args[i];

                for (var key in item) {
                    if (result[key] === undefined) {
                        result[key] = item[key];
                    }
                }
            }

            return result;
        };

        qrcode = function (el, options) {
            el = getElement(el);
            options = extend(options, defaultSettings);

            return new QRCode(el, options);
        }

    }

    Util.qrcode = qrcode;
}(window, window.Util));