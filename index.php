<?php defined('ABSPATH') || exit;

get_header(); ?>

<!-- Site content -->
<main id="site-content" rolse="main">

    <!-- Page header -->
    <?php get_template_part('inc/parts/entry-header'); ?>

    <div class="container-wide">
        <div class="grid">

            <?php if (have_posts()) :
                while (have_posts()) : the_post(); ?>

                    <div class="col-12 col-sm-6 col-md-4">
                        <?php get_template_part('inc/parts/card'); ?>
                    </div>

                <?php endwhile; ?>
            <?php endif; ?>

        </div>

        <!-- Pagination -->
        <?php get_template_part('inc/parts/pagination'); ?>

    </div>
</main>

<?php get_footer(); ?>
