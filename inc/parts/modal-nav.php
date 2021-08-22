<?php defined('ABSPATH') || exit; ?>

<nav class="modal-navigation" data-name="modal">
    <?php wp_nav_menu(array(
        'theme_location' => 'modal',
        'container' => '',
        'menu_class' => 'nav',
        'menu_id' => 'menu-modal',
        'walker' => new Rasande_WP_Navwalker(),
        'fallback_cb' => '',
        'depth' => '3'
    ));
    ?>
</nav>
