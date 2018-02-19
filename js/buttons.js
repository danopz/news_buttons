/**
 * News Buttons
 *
 * @link      https://github.com/danopz/news_buttons
 * @copyright Copyright (c) 2018 Daniel Opitz
 * @license   https://github.com/danopz/news_buttons/blob/master/LICENSE (MIT License)
 */
(function (document) {
    document.addEventListener('DOMContentLoaded', function () {
        var makeEvent = function (key) {
            var event = new Event('keyup');
            event.key = key;
            event.keyCode = event.key.charCodeAt(0);
            event.which = event.keyCode;
            event.altKey = false;
            event.ctrlKey = false;
            event.shiftKey = false;
            event.metaKey = false;
            event.bubbles = false;

            return event;
        };

        var row = document.createElement('div');
        row.classList.add('news-buttons-buttons');

        [
            ['icon-star', makeEvent('S')],
            ['icon-toggle', makeEvent('U')],
            ['icon-link', makeEvent('O')],
            ['icon-play-previous', makeEvent('K')],
            ['icon-play-next', makeEvent('J')]
        ].forEach(function (def) {
            var b = document.createElement('button');
            b.classList.add('news-buttons-button');
            b.classList.add(def[0]);
            b.setAttribute('type', 'button');

            b.addEventListener('click', function () {
                document.dispatchEvent(def[1]);
            });

            row.appendChild(b);
        });

        document.body.appendChild(row);
    });
})(document);
