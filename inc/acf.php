<?php

defined('ABSPATH') || exit;

/* ---------------------------------------------------------------------------------------------------
	Register ACF blocks
--------------------------------------------------------------------------------------------------- */
if (class_exists('ACF')) {
	function my_acf_init_block_types()
	{
		// Check function exists.
		if (function_exists('acf_register_block_type')) {

			// register a testimonial block.
			acf_register_block_type(array(
				'name'              => 'testimonial',
				'title'             => __('Testimonial'),
				'description'       => __('A custom testimonial block.'),
				'render_template'   => 'template-parts/blocks/testimonial/testimonial.php',
				'category'          => 'formatting',
				'icon'              => 'admin-comments',
				'keywords'          => array('testimonial', 'quote'),
			));
		}
	}
	add_action('acf/init', 'my_acf_init_block_types');
}

/* ---------------------------------------------------------------------------------------------------
		Register ACF options page
--------------------------------------------------------------------------------------------------- */
if (class_exists('ACF')) {
	acf_add_options_page(array(
		'page_title' 	=> __('Theme settings', 'rasande'),
		'menu_title'	=> __('Theme settings', 'rasande'),
		'menu_slug' 	=> 'global-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'icon_url'		=> 'dashicons-welcome-view-site'
	));
}

/* ---------------------------------------------------------------------------------------------------
	ACF Json save and load folders
--------------------------------------------------------------------------------------------------- */
if (class_exists('ACF')) {
	// Save point
	function acf_json_save_point($path)
	{
		$path = get_stylesheet_directory() . '/inc/acf-json';
		return $path;
	}
	add_filter('acf/settings/save_json', 'acf_json_save_point');

	// Load point
	function acf_json_load_point($paths)
	{
		unset($paths[0]);
		$paths[] = get_stylesheet_directory() . '/inc/acf-json';
		return $paths;
	}
	add_filter('acf/settings/load_json', 'acf_json_load_point');
}
