<?php defined('ABSPATH') || exit; ?>

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
	<a class="skip-to-content-link" href="#site-content">
		<?php _e('Skip to content', 'rasande') ?>
	</a>
	<div id="site">
		<!-- Site header -->
		<header class="site-header is-fixed">
			<div class="site-header-inner container-fluid">

				<!-- Logotype-->
				<?php if (!has_custom_logo()) : ?>
					<a class="custom-logo-link" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a>
				<?php else :
					the_custom_logo();
				endif; ?>

				<!-- Primary navigation-->
				<?php get_template_part('inc/parts/primary-nav'); ?>

				<!-- Toggles -->
				<div class="toggles">

					<button class="modal-search-toggle btn-clean" aria-expanded="false"></button>

					<!-- Hamburger -->
					<button data-toggle="modal" class="modal-navigation-toggle hamburger hamburger--squeeze" type="button" aria-label="<?php esc_attr_e('Toggle navigation', 'rasande'); ?>" aria-expanded="false">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>

				</div>

			</div>

			<!-- Modal search -->
			<?php get_template_part('inc/parts/modal-search'); ?>

			<!-- Modal navigation -->
			<?php get_template_part('inc/parts/modal-nav'); ?>

		</header>
