<?php

/**
 * The template for displaying the header
 *
 */

defined('ABSPATH') || exit; ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body itemscope itemtype="http://schema.org/WebPage" <?php body_class(); ?>>
	<?php do_action('wp_body_open'); ?>
	<a class="skip-to-content-link" href="#main">
		<?php _e('Skip to content', 'rasande') ?>
	</a>
	<div class="site">
		<!-- Site header -->
		<header class="site-header is-fixed">
			<div class="site-header__inner container-fluid">

				<!-- Site header brand -->
				<?php if (!has_custom_logo()) : ?>

					<a class="brand" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a>

				<?php else :

					the_custom_logo();

				endif; ?>


				<!-- Desktop navigation -->
				<nav class="navigation navigation--desktop">
					<?php wp_nav_menu(array(
						'theme_location' => 'desktop',
						'container' => '',
						'menu_class' => 'nav__menu',
						'menu_id' => 'menu-primary',
						'walker' => new Rasande_WP_Navwalker(),
						'fallback_cb' => '',
						'depth' => '3'
					));
					?>
				</nav>


				<!-- Site header toggles -->
				<div class="controls">
					<div class="site-header__search">

						<div class="container-wide">
							<form action="<?php echo home_url('/'); ?>" method="get" role="search" class="search__form">
								<input type="search" class="search__input" placeholder="<?php _e('Search...', 'rasande') ?>" value="<?php the_search_query(); ?>" name="s">
							</form>
						</div>

					</div>
					<button class="search__toggle btn-clean" aria-expanded="false"><i class="icon-search"></i></button>

					<!-- Hamburger -->
					<button data-toggle="mobile" class="navigation__toggle hamburger hamburger--squeeze" type="button" aria-label="<?php esc_attr_e('Toggle navigation', 'rasande'); ?>" aria-expanded="false">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>

				</div>

			</div>

			<!-- Site header mobile navigation -->
			<nav data-name="mobile" class="navigation--mobile">
				<?php wp_nav_menu(array(
					'theme_location' => 'mobile',
					'container' => '',
					'menu_class' => 'nav__menu',
					'menu_id' => 'menu-mobile',
					'walker' => new Rasande_WP_Navwalker(),
					'fallback_cb' => '',
					'depth' => '3'
				));
				?>
			</nav>

		</header>
