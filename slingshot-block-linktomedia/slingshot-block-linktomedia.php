<?php
/**
 * Plugin Name:       Slingshot link to media files
 * Description:       Adds a Media button to the RichText Toolbar in Gutenberg
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author: Slingshot Design
 * Author URI: http://www.slingshot.co.uk
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package           slingshot-block-linktomedia
 */

/**
 * Register block using the metadata loaded from the block.json file.
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_type/
 * ----------------------------------------------------------------------
 */
if ( ! function_exists( 'slingshot_addmedia_block_init' ) ) {
    function slingshot_addmedia_block_init() {
        register_block_type( __DIR__ . '/build' );
    }
}
add_action( 'init', 'slingshot_addmedia_block_init' );