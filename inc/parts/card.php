<?php defined('ABSPATH') || exit; ?>

<article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?>>

    <div class="card-thumbnail">
        <?php if (has_post_thumbnail()) :
            the_post_thumbnail('card-thumbnail');
        else : ?>
            <img src="<?php echo get_template_directory_uri() . '/assets/img/card-thumbnail-default.jpg' ?>">
        <?php endif; ?>
    </div>

    <div class="card-content">
        <h2>
            <a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a>
        </h2>
    </div>

</article>
