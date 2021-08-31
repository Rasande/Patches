<?php defined('ABSPATH') || exit;

/**
 * Two column Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'custom-block-image-column-' . $block['id'];
if (!empty($block['anchor'])) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'custom-block-image-column';
if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
    $className .= ' align' . $block['align'];
}

$image = get_field('image') ?: 'Your image here...';
$align = get_field('image_alignment');

if ($align == 'left') :
    $alignClass = 'image-align-left';
elseif ($align == 'right') :
    $alignClass = 'image-align-right';
endif;

$allowed_blocks = array('core/paragraph', 'core/buttons', 'core/heading'); ?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> <?php echo $alignClass; ?>">
    <div class="custom-block-image-column-text">
        <?php echo '<InnerBlocks allowedBlocks="' . esc_attr(wp_json_encode($allowed_blocks)) . '" />'; ?>
    </div>
    <div class="custom-block-image-column-img" style="background-image:url('<?php echo $image['url']; ?>')"></div>
</div>
