<?php defined('ABSPATH') || exit; ?>

<div class="modal-search">
    <div class="container-wide">
        <form action="<?php echo home_url('/'); ?>" method="get" role="search">
            <input type="search" class="modal-search-input" placeholder="<?php _e('Search...', 'rasande') ?>" value="<?php the_search_query(); ?>" name="s">
        </form>
    </div>
</div>
