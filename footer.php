<?php

/**
 * The template for displaying the footer. 
 *
 */

defined('ABSPATH') || exit; ?>

<?php if (class_exists('ACF')) {
	$footer = get_field('footer', 'option');
} ?>

<!-- Site footer -->
<footer class="site-footer">

	<div class="site-footer__center">
		<div class="container-wide">
			<div class="grid">

				<!-- Footer Column 1 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar('footer-1'); ?>
				</div>

				<!-- Footer Column 2 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar('footer-2'); ?>
				</div>

				<!-- Footer Column 3 -->
				<div class="col-12 col-sm-6 col-md-4">
					<?php dynamic_sidebar('footer-3'); ?>
				</div>

			</div>
		</div>
	</div>

	<div class="site-footer__bottom">

		<!-- Copyright Information -->
		<div class="copyright">
			<p>&copy;
				<?php if ($footer['text']) : ?>
					<?php echo $footer['text']; ?>
				<?php else : ?>
					<?php echo bloginfo('name'); ?>
				<?php endif; ?>
				<?php echo ' - ' . date("Y"); ?></p>
		</div>

	</div>

</footer>
</div>
<?php wp_footer(); ?>

</body>

</html>
