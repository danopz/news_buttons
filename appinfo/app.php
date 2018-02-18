<?php
/**
 * News Buttons
 *
 * @link      https://github.com/danopz/news_buttons
 * @copyright Copyright (c) 2018 Daniel Opitz
 * @license   https://github.com/danopz/news_buttons/blob/master/LICENSE (MIT License)
 */
use OCA\News\Plugin\Client\Plugin;

if (OC::$server->getAppManager()->isEnabledForUser('news') && class_exists(Plugin::class)) {
    Plugin::registerScript('news_buttons', 'buttons');
    Plugin::registerStyle('news_buttons', 'buttons');
}
