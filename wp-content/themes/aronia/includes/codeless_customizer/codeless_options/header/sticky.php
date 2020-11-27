<?php

/* ----------------- Sticky -------------  */

Kirki::add_section('cl_header_sticky', array(
	'title' => esc_attr__('Sticky', 'aronia') ,
	'tooltip' => esc_attr__('Make header sticky', 'aronia') ,
	'panel' => 'cl_header',
	'type' => '',
	'priority' => 6,
	'capability' => 'edit_theme_options'
));
Kirki::add_field('cl_aronia', array(
	'settings' => 'header_sticky',
	'label' => esc_attr__('Active Sticky Header', 'aronia') ,
	'tooltip' => esc_attr__('By switch this option, your header will be sticky', 'aronia') ,
	'section' => 'cl_header_sticky',
	'type' => 'switch',
	'priority' => 10,
	'default' => 0,
	'choices' => array(
		1 => esc_attr__('On', 'aronia') ,
		0 => esc_attr__('Off', 'aronia') ,
	) ,
	'transport' => 'postMessage'
));

Kirki::add_field('cl_aronia', array(
	'settings' => 'header_sticky_mobile',
	'label' => esc_attr__('Active Mobile Header Sticky', 'aronia') ,
	'section' => 'cl_header_sticky',
	'type' => 'switch',
	'priority' => 10,
	'default' => 0,
	'choices' => array(
		1 => esc_attr__('On', 'aronia') ,
		0 => esc_attr__('Off', 'aronia') ,
	) ,
	'transport' => 'postMessage'
));

Kirki::add_field('cl_aronia', array(
	'settings' => 'header_sticky_content',
	'label' => esc_attr__('Sticky Content Color', 'aronia') ,
	'section' => 'cl_header_sticky',
	'type' => 'select',
	'default' => 'dark',
	'priority' => 10,
	'choices' => array(
		'light' => esc_attr__('Light', 'aronia') ,
		'dark' => esc_attr__('Dark', 'aronia') ,
	) ,
	'transport' => 'postMessage',
));


Kirki::add_field('cl_aronia', array(
	'type' => 'slider',
	'settings' => 'header_sticky_height',
	'label' => 'Sticky Header Height',
	'default' => 60,
	'choices' => array(
		'min' => '30',
		'max' => '600',
		'step' => '1',
	) ,
	'inline_control' => true, 
	'section' => 'cl_header_sticky',
	'transport' => 'auto',
	'output' => array(
		array(
			'element' => '.cl-header--sticky-active .cl-header__row--main',
			'units' => 'px',
			'property' => 'height',
			'media_query' => '@media (min-width: 992px)'
		),
	) ,
));


?>