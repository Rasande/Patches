<?php defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<main id="main" class="site-main">

    <?php if (have_posts()) :
        while (have_posts()) : the_post(); ?>

            <article id="post-<?php the_ID(); ?>" <?php post_class('entry'); ?>>

                <!-- Page header -->
                <?php get_template_part('inc/parts/entry-header'); ?>

                <!-- Breadcrumbs -->
                <?php get_template_part('inc/parts/breadcrumbs'); ?>
                
                <!-- Page content -->
                <div class="block-content">
                    <?php the_content(); ?>
                </div>

            </article>

        <?php endwhile; ?>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
