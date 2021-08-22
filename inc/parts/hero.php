<?php defined('ABSPATH') || exit;

$customHeading = '';

if (class_exists('ACF') && !is_archive()) :
    // Make custom heading available for posts page
    $customHeading = get_field('page_head')['custom_heading'];
endif;

if ($customHeading) :

    $heading = $customHeading;
else :
    $heading = get_the_title();
endif; 

if (class_exists('ACF')) {
	$hero = get_field('hero');
} ?>


<div class="hero" style="background-image:url('<?php echo $hero['bg_img']; ?>');">
    <div class="hero__inner">
    <div class="container-wide"></div>
        <h1 class="hero__title display"><?php echo $heading; ?></h1>
    </div>
</div>
