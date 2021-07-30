<?php

/**
 * Hero section for the frontpage
 * 
 */

defined('ABSPATH') || exit;

$customHeading = '';

if (class_exists('ACF') && !is_archive()) :
    // Make custom heading available for posts page
    $customHeading = get_field('page_head')['custom_heading'];
endif;

if ($customHeading) :

    $heading = $customHeading;
else :
    $heading = get_the_title();
endif; ?>

?>

<div class="hero">
    <div class="hero__inner">
    <div class="container-wide"></div>
        <h1 class="hero__title display"><?php echo $heading; ?></h1>
    </div>
</div>
