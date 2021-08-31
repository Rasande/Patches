<?php defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<main id="site-content">

    <!-- Hero -->
    <?php
    $customHeading = '';

    if (class_exists('ACF') && !is_archive()) :
        // Make custom heading available for posts page
        $customHeading = get_field('page_head')['custom_heading'];
    endif;

    if ($customHeading) :

        $heading = $customHeading;
    else :
        $heading = get_the_title();
    endif;

    if (class_exists('ACF')) {
        $hero = get_field('hero');
    } ?>

    <div class="hero" style="background-image:url('<?php echo $hero['bg_img']; ?>');">
        <div class="hero-inner">
            <div class="container-wide"></div>
            <h1 class="hero-title"><?php echo $heading; ?></h1>
        </div>
    </div>

    <?php if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <div class="entry-content">
                <?php the_content(); ?>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
