<?php


$info = array(
    'title' => 'Selectize Image Tags',
    'author' => 'Macrura',
    'version' => '008',
    'summary' => 'Admin helper for enabling selectize.js on images tags field.',
    'href' => '',
    'icon' => 'tags',
    'singular' => true,
    'autoload' => 'template=admin',
    'requires'  => array(
        'ProcessWire>=3.0.61'
    )
);

if($this->wire('config') && $this->wire('config')->version < '3.0.67') {
	$info['requires'][] = "JquerySelectize";
}
