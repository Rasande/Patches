<?php defined('ABSPATH') || exit; ?>

<nav data-name="mobile" class="navigation--mobile">
    <?php wp_nav_menu(array(
        'theme_location' => 'mobile',
        'container' => '',
        'menu_class' => 'nav__menu',
        'menu_id' => 'menu-mobile',
        'walker' => new Rasande_WP_Navwalker(),
        'fallback_cb' => '',
        'depth' => '3'
    ));
    ?>
</nav>
