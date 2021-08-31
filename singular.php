<?php defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<main id="site-content">

    <?php if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

                <!-- Entry header -->
                <?php get_template_part('inc/parts/entry-header'); ?>

                <!-- Entry content -->
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>

            </article>

        <?php endwhile; ?>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
