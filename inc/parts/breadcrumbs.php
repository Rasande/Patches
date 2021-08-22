<?php defined('ABSPATH') || exit; ?>

<div class="breadcrumbs">
    <div class="container">
        <?php if ( function_exists('yoast_breadcrumb') ) :
             yoast_breadcrumb('<p id="breadcrumbs">', '</p>'); 
        endif; ?>
    </div>
</div>
