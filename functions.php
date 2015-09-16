<?php 
    
/* Settings java script for minor changes */
wp_enqueue_script( 'js-lander-changes', get_stylesheet_directory_uri().'/js/changes.js' , array('jquery'));

remove_action('wp_head', 'wp_generator');

function kill_em_all(){
    remove_action( 'wp_enqueue_scripts', 'et_divi_load_fonts' );
    remove_action( 'wp_head', 'et_add_viewport_meta' );
    remove_action( 'wp_head', 'minileven_fonts' );
}
add_action( 'init', 'kill_em_all' );

remove_action( 'init', 'minileven_fonts' );

// Add Google Fonts as we need
function google_fonts(){
    wp_enqueue_style( 'google-font', 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,700&subset=latin-ext' );
}
add_action( 'wp_enqueue_scripts', 'google_fonts' );

?>