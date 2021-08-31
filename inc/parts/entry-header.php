<?php defined('ABSPATH') || exit;

$customHeading = '';

if (class_exists('ACF') && !is_archive()) :
    // Make custom heading available for posts page
    if (is_home()) :
        $customHeading = get_field('page_head', get_option('page_for_posts'))['custom_heading'];
    else :
        $customHeading = get_field('page_head')['custom_heading'];
    endif;
endif;

if ($customHeading) :
    // Custom title
    $heading = $customHeading;
else :
    // Archive title
    if (is_archive()) :
        $heading = get_the_archive_title();
    // Posts page title
    elseif (!is_front_page() && is_home()) :
        $heading = single_post_title('', false);
    // Search page title
    elseif (is_search()) :
        $heading = __('Search Results For', 'rasande') . ': ' . get_search_query();
    // Title for pages and posts
    else :
        $heading = get_the_title();
    endif;
endif; ?>

<header class="entry-header">
    <div class="container">
        <h1 class="entry-header-title"><?php echo $heading; ?></h1>
    </div>
</header>

<?php if (function_exists('yoast_breadcrumb')) : ?>
    <div class="breadcrumbs">
        <div class="container">
            <?php yoast_breadcrumb('<p class="breadcrumbs">', '</p>'); ?>
        </div>
    </div>
<?php endif; ?>
