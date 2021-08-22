<?php defined('ABSPATH') || exit; ?>

    <div class="pagination">
        <div class="pagination__prev">
            <?php echo get_previous_posts_link(__('Earlier page', 'rasande')) ?>
        </div>
        <div class="pagination__next">
            <?php echo get_next_posts_link(__('Next page', 'rasande')) ?>
        </div>
    </div>
