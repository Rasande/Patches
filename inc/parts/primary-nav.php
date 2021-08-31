<?php defined('ABSPATH') || exit; ?>

<nav class="navigation primary-nav">
    <?php wp_nav_menu(array(
        'theme_location' => 'primary',
        'container' => '',
        'menu_class' => 'primary-nav-menu',
        'menu_id' => 'primary-nav-menu',
        'walker' => new Rasande_WP_Navwalker(),
        'fallback_cb' => '',
        'depth' => '3'
    ));
    ?>
</nav>
