<?php defined('ABSPATH') || exit;

/* ---------------------------------------------------------------------------------------------------
	Variables
--------------------------------------------------------------------------------------------------- */
$odd_or_even = 'odd';

/* ---------------------------------------------------------------------------------------------------
	Theme setup
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_theme_setup')) {
	function rasande_theme_setup()
	{
		// Setup for translation
		load_theme_textdomain('rasande', get_template_directory() . '/lang');
		// Add Support for WP Controlled Title Tag
		add_theme_support('title-tag');
		// Set up the WordPress Theme logo feature.
		add_theme_support('custom-logo');
		// Add WP Thumbnail Support
		add_theme_support('post-thumbnails');
		// Add support for responsive embedded content
		add_theme_support('responsive-embeds');
		// Add excerpt
		add_post_type_support('page', 'excerpt');
		// Enable blockeditor .alignwide and .alignfull support
		add_theme_support('align-wide');
		// Add RSS Support
		add_theme_support('automatic-feed-links');
		// Editor styles
		add_theme_support('editor-styles');
		add_editor_style('assets/css/editor.css');
		// Add image sizes
		add_image_size('card-thumbnail', 500, 320, array('center', 'center'));
		// Register menus
		register_nav_menus(array(
			'desktop' => __('Desktop Menu', 'rasande'),
			'mobile' => __('Mobile Menu', 'rasande')
		));
		// Add HTML5 Support
		add_theme_support('html5', array(
			'comment-list',
			'comment-form',
			'search-form',
			'gallery',
			'caption',
			'script',
			'style'
		));
		// Editor Color Palette
		add_theme_support('editor-color-palette', array(
			array(
				'name'  => __('Primary', 'rasande'),
				'slug'  => 'primary',
				'color'    => 'var(--primary)',
			),
			array(
				'name'  => __('Secondary', 'rasande'),
				'slug'  => 'secondary',
				'color' => 'var(--secondary)',
			),
			array(
				'name'  => __('Accent', 'rasande'),
				'slug'  => 'accent',
				'color' => 'var(--accent)',
			),
			array(
				'name'    => __('Light', 'rasande'),
				'slug'    => 'light',
				'color'    => 'var(--light)',
			),
			array(
				'name'    => __('Dark', 'rasande'),
				'slug'    => 'dark',
				'color'    => 'var(--dark)',
			),
			array(
				'name'    => __('Grey', 'rasande'),
				'slug'    => 'grey',
				'color'    => 'var(--grey)',
			),
		));
		// Editor font sizes
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => __('Small', 'rasande'),
					'shortName' => __('S', 'rasande'),
					'size'      => 12,
					'slug'      => 'small'
				),
				array(
					'name'      => __('Normal', 'rasande'),
					'shortName' => __('N', 'rasande'),
					'size'      => 18,
					'slug'      => 'normal'
				),
				array(
					'name'      => __('Medium', 'rasande'),
					'shortName' => __('M', 'rasande'),
					'size'      => 24,
					'slug'      => 'medium'
				),
				array(
					'name'      => __('Large', 'rasande'),
					'shortName' => __('L', 'rasande'),
					'size'      => 30,
					'slug'      => 'large'
				)
			)
		);
	}
	add_action('after_setup_theme', 'rasande_theme_setup');
}

/* ---------------------------------------------------------------------------------------------------
	Widget areas
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_widgets_init')) {
	function rasande_widgets_init()
	{
		register_sidebar(array(
			'name' => __('Footer column 1', 'rasande'),
			'id' => 'footer-1',
			'before_widget' => '<div class="footer-widget">',
			'after_widget' => '</div>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
		));
		register_sidebar(array(
			'name' => __('Footer column 2', 'rasande'),
			'id' => 'footer-2',
			'before_widget' => '<div class="footer-widget">',
			'after_widget' => '</div>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
		));
		register_sidebar(array(
			'name' => __('Footer column 3', 'rasande'),
			'id' => 'footer-3',
			'before_widget' => '<div class="footer-widget">',
			'after_widget' => '</div>',
			'before_title' => '<h3>',
			'after_title' => '</h3>',
		));
	}
	add_action('widgets_init', 'rasande_widgets_init');
}

/* ---------------------------------------------------------------------------------------------------
	Enqueue styles & scripts
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_enqueue')) {
	function rasande_enqueue()
	{
		$theme_version = wp_get_theme()->get('Version');

		// Styles
		wp_enqueue_style('style', get_stylesheet_uri(), array(), $theme_version);
		wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Archivo:500|Open+Sans:400,700', false);
		wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/main.css', array(), $theme_version);

		// Scripts
		wp_register_script('main-script', get_template_directory_uri() . '/assets/js/main.js', array(), $theme_version, true);
		wp_enqueue_script('main-script');
	}
	add_action('wp_enqueue_scripts', 'rasande_enqueue');
}

/* ---------------------------------------------------------------------------------------------------
	Clean up head section
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_cleanup')) {
	function rasande_cleanup()
	{
		// Remove extra links
		remove_action('wp_head', 'feed_links_extra', 3);
		// Remove post and comment feeds
		remove_action('wp_head', 'feed_links', 2);
		// Remove EditURI link
		remove_action('wp_head', 'rsd_link');
		// Remove Windows live writer
		remove_action('wp_head', 'wlwmanifest_link');
		// Remove index link
		remove_action('wp_head', 'index_rel_link');
		// Remove previous link
		remove_action('wp_head', 'parent_post_rel_link', 10, 0);
		// Remove start link
		remove_action('wp_head', 'start_post_rel_link', 10, 0);
		// Remove links for adjacent posts
		remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
		// Remove emjois
		remove_action('wp_head', 'print_emoji_detection_script', 7);
		remove_action('admin_print_scripts', 'print_emoji_detection_script');
		remove_action('wp_print_styles', 'print_emoji_styles');
		remove_action('admin_print_styles', 'print_emoji_styles');
	}
	add_action('after_setup_theme', 'rasande_cleanup');
}

/* ---------------------------------------------------------------------------------------------------
	Disable comments
--------------------------------------------------------------------------------------------------- */
add_action('admin_init', function () {
	// Redirect any user trying to access comments page
	global $pagenow;

	if ($pagenow === 'edit-comments.php') {
		wp_redirect(admin_url());
		exit;
	}

	// Remove comments metabox from dashboard
	remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

	// Disable support for comments and trackbacks in post types
	foreach (get_post_types() as $post_type) {
		if (post_type_supports($post_type, 'comments')) {
			remove_post_type_support($post_type, 'comments');
			remove_post_type_support($post_type, 'trackbacks');
		}
	}
});

// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

// Hide existing comments
add_filter('comments_array', '__return_empty_array', 10, 2);

// Remove comments page in menu
add_action('admin_menu', function () {
	remove_menu_page('edit-comments.php');
});

// Remove comments links from admin bar
add_action('init', function () {
	if (is_admin_bar_showing()) {
		remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
	}
});

/* ---------------------------------------------------------------------------------------------------
	Remove archive title prefix
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_archive_titles')) {
	function rasande_archive_titles($title)
	{
		if (is_category()) {
			$title = single_cat_title('', false);
		} elseif (is_tag()) {
			$title = single_tag_title('', false);
		} elseif (is_author()) {
			$title = '<span class="vcard">' . get_the_author() . '</span>';
		} elseif (is_post_type_archive()) {
			$title = post_type_archive_title('', false);
		} elseif (is_tax()) {
			$title = single_term_title('', false);
		} elseif (is_home()) {
			$title = single_post_title('', false);
		}
		return $title;
	}
	add_filter('get_the_archive_title', 'rasande_archive_titles');
}

/* ---------------------------------------------------------------------------------------------------
	Change archive post order
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_archive_order')) {
	function rasande_archive_order($query)
	{
		if (is_archive()) :
			$query->set('order', 'DESC');
			$query->set('orderby', 'date');
		endif;
	};
	add_action('pre_get_posts', 'rasande_archive_order');
}

/* ---------------------------------------------------------------------------------------------------
	Rewrite pagination slug to swedish
--------------------------------------------------------------------------------------------------- */
add_action('init', function () {
	$GLOBALS['wp_rewrite']->pagination_base = 'sida';
});

/* ---------------------------------------------------------------------------------------------------
	Admin CSS
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_admin_bar_css')) {
	function rasande_admin_bar_css()
	{
		if (is_admin_bar_showing()) : ?>
			<style>
				#wpadminbar {
					position: fixed;
				}

				.site-header.is-fixed {
					margin-top: 46px;
				}

				@media screen and (min-width: 783px) {
					.site-header.is-fixed {
						margin-top: 32px;
					}
				}
			</style>
<?php endif;
	}
	add_action('wp_head', 'rasande_admin_bar_css');
}

/* ---------------------------------------------------------------------------------------------------
	Change curstom logo markup
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_change_logo_class')) {
	function rasande_change_logo_class($html)
	{
		$html = str_replace('class="custom-logo-link"', 'class="brand"', $html);
		$html = str_replace('alt=""', 'title="Home" alt="logo"', $html);

		return $html;
	}
	add_filter('get_custom_logo', 'rasande_change_logo_class');
}

/* ---------------------------------------------------------------------------------------------------
	Fix SVG size attribute problem
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_svg_attr')) {
	function rasande_svg_attr($out, $id)
	{
		$image_url  = wp_get_attachment_url($id);
		$file_ext   = pathinfo($image_url, PATHINFO_EXTENSION);
		if (is_admin() || 'svg' !== $file_ext) {
			return false;
		}
		return array($image_url, null, null, false);
	}
	add_filter('image_downsize', 'rasande_svg_attr', 10, 2);
}

/* ---------------------------------------------------------------------------------------------------
	Change pagination markup
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_pagination_attr')) {
	function rasande_pagination_attr()
	{
		return 'class="pagination__link"';
	}
	add_filter('next_posts_link_attributes', 'rasande_pagination_attr');
	add_filter('previous_posts_link_attributes', 'rasande_pagination_attr');
}

/* ---------------------------------------------------------------------------------------------------
	HTML-block wrapper div
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_wrap_html_block')) {
	function rasande_wrap_html_block($block_content, $block)
	{
		if ('core/html' === $block['blockName']) {
			$block_content = '<div class="wp-block-html">' . $block_content . '</div>';
		}
		return $block_content;
	}
	add_filter('render_block', 'rasande_wrap_html_block', 10, 2);
}

/* ---------------------------------------------------------------------------------------------------
	Excerpt settings
--------------------------------------------------------------------------------------------------- */
// Excerpt length
if (!function_exists('rasande_excerpt_length')) {
	function rasande_excerpt_length($length)
	{
		return 30;
	}
	add_filter('excerpt_length', 'rasande_excerpt_length');
}

// Excerpt more
if (!function_exists('rasande_excerpt_more')) {
	function rasande_excerpt_more($more)
	{
		return '...';
	}
	add_filter('excerpt_more', 'rasande_excerpt_more');
}

/* ---------------------------------------------------------------------------------------------------
	Return read time
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_read_time')) {
	function rasande_read_time()
	{
		$postID = get_the_ID();
		$content = get_post_field('post_content', $postID);
		$word_count = str_word_count(strip_tags($content));
		$readingtime = ceil($word_count / 250);
		$timer = " min";
		$totalreadingtime = $readingtime . $timer;

		return $totalreadingtime;
	}
}

/* ---------------------------------------------------------------------------------------------------
	Return time sience posted
--------------------------------------------------------------------------------------------------- */
if (!function_exists('rasande_time_diff')) {
	function rasande_time_diff()
	{
		$posted = get_post_time();
		$date = $posted >= strtotime('-2 weeks') ? human_time_diff($posted) . ' ' . __('ago', 'rasande') :  get_the_date();;

		return $date;
	}
}

if (!function_exists('show_pagination')) {
	function show_pagination()
	{
		global $wp_query;

		return ($wp_query->max_num_pages > 1);
	}
}

/* ---------------------------------------------------------------------------------------------------
	Include files from /inc
--------------------------------------------------------------------------------------------------- */
$rasande_includes = array(
	'acf',
	'classes',
);

foreach ($rasande_includes as $file) {
	$filepath = locate_template('inc/' . $file . '.php');
	if (!$filepath) {
		trigger_error(sprintf('Error locating /inc%s for inclusion', $file), E_USER_ERROR);
	}
	require_once $filepath;
}
