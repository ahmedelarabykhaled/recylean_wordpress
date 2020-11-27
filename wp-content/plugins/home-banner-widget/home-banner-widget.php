<?php
/*
Plugin Name: Home Banner Widget
Plugin URI:
Description: home banner widget
Version: 1.0.0
Author: Ahmed Khaled
Author URI: https://profiles.wordpress.org/ahmedelarabykhaled/
*/

// Creating the widget
class Home_Banner_Widget extends WP_Widget
{
    function __construct()
    {

        $widget_ops = array(
            'classname' => 'home-banner-widget',
            'description' => 'home banner widget'
        );
        parent::__construct(
        // Base ID of your widget
            'home_banner_widget',
            // Widget name will appear in UI
            __('Home Banner Widget', 'hb_widget_domain'),
            $widget_ops
        );
    }

    // Creating widget front-end
    public function widget($args, $instance)
    {
        $title = $instance['title'];
        $description = $instance['description'];
        $text_link = $instance['text_link'];
        $url_link = $instance['url_link'];
        $first_image_id = $instance['first_image_id'];
        $second_image_id = $instance['second_image_id'];
//        include(locate_template('template-parts/home_banner_widget/home_banner_widget.php', false, false));
        include "template-parts/home-banner.php";
    }

    // Widget Backend
    public function form($instance)
    {
        $title = isset($instance['title']) ? $instance['title'] : '';
        $description = isset($instance['description']) ? $instance['description'] : '';
        $text_link = isset($instance['text_link']) ? $instance['text_link'] : '';
        $url_link = isset($instance['url_link']) ? $instance['url_link'] : '';
        $first_image_url = isset($instance['first_image_url']) ? $instance['first_image_url'] : '';
        $first_image_id = isset($instance['first_image_id']) ? $instance['first_image_id'] : 0;
        $second_image_url = isset($instance['second_image_url']) ? $instance['second_image_url'] : '';
        $second_image_id = isset($instance['second_image_id']) ? $instance['second_image_id'] : 0;
        $curr_translate = "Home Banner Widget";
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>"
                   name="<?php echo $this->get_field_name('title'); ?>" type="text"
                   value="<?php echo esc_attr($title); ?>"
                   placeholder="<?php echo __($curr_translate . ' title', 'hb_widget_domain'); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('description'); ?>"><?php _e('Description:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('description'); ?>"
                   name="<?php echo $this->get_field_name('description'); ?>" type="text"
                   value="<?php echo esc_attr($description); ?>"
                   placeholder="<?php echo __($curr_translate . ' New description', 'hb_widget_domain'); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('url_link'); ?>"><?php _e('Url Link:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('url_link'); ?>"
                   name="<?php echo $this->get_field_name('url_link'); ?>" type="text"
                   value="<?php echo esc_attr($url_link); ?>"
                   placeholder="<?php echo __($curr_translate . ' New url link', 'hb_widget_domain'); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('text_link'); ?>"><?php _e('Text Link:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('text_link'); ?>"
                   name="<?php echo $this->get_field_name('text_link'); ?>" type="text"
                   value="<?php echo esc_attr($text_link); ?>"
                   placeholder="<?php echo __($curr_translate . ' New text link', 'hb_widget_domain'); ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('first_image_id'); ?>"><?php _e('First Image:'); ?></label>
            <img class="first_<?= $this->id ?>_img" src="<?= $first_image_url ?>"
                 style="margin:0;padding:0;max-width:100%;display:block"/>
            <input type="hidden" class="widefat first_<?= $this->id ?>_id" name="<?= $this->get_field_name('first_image_id'); ?>"
                   value="<?php echo esc_attr($first_image_id); ?>"/>
            <input type="hidden" class="widefat first_<?= $this->id ?>_url" name="<?= $this->get_field_name('first_image_url'); ?>"
                   value="<?php echo esc_attr($first_image_url); ?>"/>
            <input type="button" id="first_<?= $this->id ?>" class="button button-primary js_custom_upload_media"
                   value="Upload Image" style="margin-top:5px;"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('second_image_id'); ?>"><?php _e('Second Image:'); ?></label>
            <img class="second_<?= $this->id ?>_img" src="<?= $second_image_url ?>"
                 style="margin:0;padding:0;max-width:100%;display:block"/>
            <input type="hidden" class="widefat second_<?= $this->id ?>_id" name="<?= $this->get_field_name('second_image_id'); ?>"
                   value="<?php echo esc_attr($second_image_id); ?>"/>
            <input type="hidden" class="widefat second_<?= $this->id ?>_url" name="<?= $this->get_field_name('second_image_url'); ?>"
                   value="<?php echo esc_attr($second_image_url); ?>"/>
            <input type="button" id="second_<?= $this->id ?>" class="button button-primary js_custom_upload_media"
                   value="Upload Image" style="margin-top:5px;"/>
        </p>
        <?php
    }

// Updating widget replacing old instances with new
    public function update($new_instance, $old_instance)
    {
        $instance = $old_instance;
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        $instance['description'] = (!empty($new_instance['description'])) ? strip_tags($new_instance['description']) : '';
        $instance['text_link'] = (!empty($new_instance['text_link'])) ? strip_tags($new_instance['text_link']) : '';
        $instance['url_link'] = (!empty($new_instance['url_link'])) ? strip_tags($new_instance['url_link']) : '';
        $instance['first_image_id'] = (!empty($new_instance['first_image_id'])) ? strip_tags($new_instance['first_image_id']) : '';
        $instance['first_image_url'] = (!empty($new_instance['first_image_url'])) ? strip_tags($new_instance['first_image_url']) : '';
        $instance['second_image_id'] = (!empty($new_instance['second_image_id'])) ? strip_tags($new_instance['second_image_id']) : '';
        $instance['second_image_url'] = (!empty($new_instance['second_image_url'])) ? strip_tags($new_instance['second_image_url']) : '';
        return $instance;
    }
} // Class wpb_widget ends here
// Register and load the widget
function wp_home_banner_load_widget()
{
    register_widget('Home_Banner_Widget');
}

add_action('widgets_init', 'wp_home_banner_load_widget');
function home_banner_scripts()
{
    wp_enqueue_media();
    wp_enqueue_script('home_banner_script', plugin_dir_url(__FILE__) . '/js/scripts.js', true, '1.0.0', true);
}

add_action('admin_enqueue_scripts', 'home_banner_scripts');
