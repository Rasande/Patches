<?php defined('ABSPATH') || exit; ?>

<nav class="navigation primary-navigation">
    <?php wp_nav_menu(array(
        'theme_location' => 'primary',
        'container' => '',
        'menu_class' => 'nav',
        'menu_id' => 'menu-primary',
        'walker' => new Rasande_WP_Navwalker(),
        'fallback_cb' => '',
        'depth' => '3'
    ));
    ?>
</nav>
