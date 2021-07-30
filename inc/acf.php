<?php

/**
 * ACF settings and blocks
 */

defined('ABSPATH') || exit;

if (class_exists('ACF')) {
	
	acf_add_options_page(array(
		'page_title' 	=> __('Theme settings', 'rasande'),
		'menu_title'	=> __('Theme settings', 'rasande'),
		'menu_slug' 	=> 'global-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'icon_url'		=> 'dashicons-welcome-view-site'
	));

	
	function acf_json_save_point( $path ) {
		
		$path = get_stylesheet_directory() . '/inc/acf-json';
		return $path;
		
	}
	add_filter('acf/settings/save_json', 'acf_json_save_point');
	
	
	function acf_json_load_point( $paths ) {
		
		unset($paths[0]);
		$paths[] = get_stylesheet_directory() . '/inc/acf-json';
		return $paths;
		
	}
	add_filter('acf/settings/load_json', 'acf_json_load_point');

}
