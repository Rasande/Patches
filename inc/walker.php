<?php

/**
 * WP Bootstrap Navwalker
 *
 */

defined('ABSPATH') || exit;

if (!class_exists('Rasande_WP_Navwalker')) {
    class Rasande_WP_Navwalker extends Walker_Nav_Menu
    {
        static $count = 0;

        public function start_lvl(&$output, $depth = 0, $args = array())
        {
            // Depth-dependent classes.
            $indent = ($depth > 0  ? str_repeat("\t", $depth) : ''); // code indent
            $classes = array(
                'submenu',
            );
            $class_names = implode(' ', $classes);

            // Build HTML for output.
            $output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
        }

        public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
        {
            global $wp_query;
            $title = $item->title;
            $permalink = $item->url;

            // Item classes
            $item_classes = array(
                'item'                      => $depth == 0 ? $item_class = 'nav__item' . " " . 'menu-item-' . $item->ID : '',
                'depth_class'               => $depth >= 1 ? $item_class = 'nav__item' . " " . 'menu-item-' . $item->ID : '',
                'parent_class'              => $args->has_children ? $parent_class = 'has-submenu' : '',
                'active_class'              => in_array("current-menu-item", $item->classes) ? 'is-active' : '',
                'active_parent_class'       => in_array("current-menu-parent", $item->classes) ? '' : '',
                'active_ancestor_class'     => in_array("current-menu-ancestor", $item->classes) && !in_array("current-menu-parent", $item->classes) ? '' : '',
                'user_class'                => $item->classes[0] !== '' ? $item->classes[0] : '',
            );

            $class_string = implode(" ", array_filter($item_classes));

            // Check if item has title, target or rel attribute.    
            $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
            $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
            $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
            $attributes .= in_array("current-menu-item", $item->classes) ? ' aria-current="page"' : '';

            if (self::$count === 0) {
                $tabIndex = 'tabindex="0"';
            } else {
                $tabIndex = 'tabindex="-1"';
            }

              // Aria-label text for submenu-btn
              $labelName = sprintf(__('Show submenu for %s', 'rasande'), $title);

            if($permalink === '#' && in_array("has-submenu",$item_classes   )) {
                $link_output_pre = '<a class="nav__item--link has-no-link" href="' . $permalink . '" aria-label="' . $labelName . '" aria-expanded="false" aria-haspopup="true">';
            } else {
                $link_output_pre = '<a class="nav__item--link" href="' . $permalink . '"' . $attributes . '>';
            }
            
            $link_output_end = '</a>';

            // Item output 
            $output .= '<li class="' . $class_string . '">';
            $output .= $link_output_pre;
            $output .= $title;
            $output .= $link_output_end;
            if ($this->has_children) {
                $output .= '<button aria-label="' . $labelName . '" aria-expanded="false" aria-haspopup="true" class="submenu-btn " type="button"><span class="btn__content"><i class="icon-arrow"></i></span></button>';
            }

            self::$count++;
        }
        public function display_element($element, &$children_elements, $max_depth, $depth, $args, &$output)
        {
            $id_field = $this->db_fields['id'];

            if (is_object($args[0])) {
                $args[0]->has_children = !empty($children_elements[$element->$id_field]);
            }

            return parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output);
        }

    }
}
