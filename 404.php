<?php defined('ABSPATH') || exit;

get_header();

if (class_exists('ACF')) {
    $notFound = get_field('not_found', 'option');
} ?>

<!-- Site content -->
<main id="site-content" rolse="main">

    <div class="page-404">
        <div class="container">
            <h1>404</h1>
            <p>
                <?php if ($notFound['message']) : ?>
                    <?php echo $notFound['message']; ?>
                <?php else : ?>
                    <?php _e("The page cannot be found", "rasande") ?>
                <?php endif; ?>
            </p>
            <p><a href="<?php echo get_home_url(); ?>" class="wp-block-button__link"><?php _e('Back to homepage', 'rasande') ?></a></p>
        </div>
    </div>

</main>

<?php get_footer(); ?>
