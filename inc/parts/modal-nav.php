<?php defined('ABSPATH') || exit; ?>

<nav class="modal-nav" data-name="modal">
    <?php wp_nav_menu(array(
        'theme_location' => 'modal',
        'container' => '',
        'menu_class' => 'modal-nav-menu',
        'menu_id' => 'modal-nav-menu',
        'walker' => new Rasande_WP_Navwalker(),
        'fallback_cb' => '',
        'depth' => '3'
    ));
    ?>
</nav>
