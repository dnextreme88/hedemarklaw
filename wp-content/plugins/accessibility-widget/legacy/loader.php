<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class CYA11y_Widget_Accesstxt extends WP_Widget {
	/** constructor */
	function __construct() {
		parent::__construct( false, $name = 'Accessibility Widget' );
	}
	/** @see WP_Widget::widget */
	function widget( $args, $instance ) {
		extract( $args );
		$title     = apply_filters( 'widget_title', $instance['title'] );
		$tags      = str_replace( ' ', '', $instance['tags'] ); // remove whitespaces
		$fontsize  = str_replace( ' ', '', $instance['fontsize'] ); // remove whitespaces
		$afontsize = explode( ',', $fontsize ); // transform into arrays
		$controls  = explode( ',', str_replace( ' ', '', $instance['controls'] ) ); // remove whitespaces then transform into arrays
		$tips      = explode( ',', $instance['tips'] ); // transform into arrays

		echo wp_kses_post( $before_widget );
		if ( $title ) {
			echo wp_kses_post( $before_title ) . esc_html( $title ) . wp_kses_post( $after_title );
		}
		?>
	<script type="text/javascript">
		//Specify affected tags. Add or remove from list
		var tgs = <?php echo wp_json_encode( array_map( 'trim', explode( ',', $tags ) ) ); ?>;
		//Specify spectrum of different font sizes
		var szs = <?php echo wp_json_encode( array_map( 'trim', explode( ',', $fontsize ) ) ); ?>;
		var startSz = 2;
		function ts( trgt,inc ) {
			if (!document.getElementById) return
			var d = document,cEl = null,sz = startSz,i,j,cTags;
			sz = inc;
			if ( sz < 0 ) sz = 0;
			if ( sz > 6 ) sz = 6;
			startSz = sz;
			if ( !( cEl = d.getElementById( trgt ) ) ) cEl = d.getElementsByTagName( trgt )[ 0 ];
			cEl.style.fontSize = szs[ sz ];
			for ( i = 0 ; i < tgs.length ; i++ ) {
				cTags = cEl.getElementsByTagName( tgs[ i ] );
				for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = szs[ sz ];
			}
		}
		</script>
	<ul>
		<li>
		<?php
		$controlscount = count( $controls );
		foreach ( $afontsize as $key => $value ) {
			$icontrols = ( $controlscount > 1 ? $key : 0 );
			echo "<a href=\"javascript:ts('body'," . esc_js( $key ) . ')" style="font-size:' . esc_attr( $value ) . '" title="' . esc_attr( $tips[ $icontrols ] ) . '">' . esc_html( $controls[ $icontrols ] ) . '</a>&nbsp;&nbsp;';
		}
		?>
		</li>
	</ul>
		<?php echo wp_kses_post( $after_widget ); ?>
		<?php
	}
	/** @see WP_Widget::update -- do not rename this */
	function update( $new_instance, $old_instance ) {
		$instance             = $old_instance;
		$instance['title']    = wp_strip_all_tags( esc_attr( $new_instance['title'] ) );
		$instance['tags']     = wp_strip_all_tags( esc_attr( $new_instance['tags'] ) );
		$instance['fontsize'] = wp_strip_all_tags( esc_attr( $new_instance['fontsize'] ) );
		$instance['controls'] = wp_strip_all_tags( esc_attr( $new_instance['controls'] ) );
		$instance['tips']     = wp_strip_all_tags( esc_attr( $new_instance['tips'] ) );
		return $instance;
	}
	/** @see WP_Widget::form -- do not rename this */
	function form( $instance ) {
		$str_default = '90%, 100%, 110%, 120%';
		$title       = wp_strip_all_tags( esc_attr( $instance['title'] ) );
		$tags        = ( $instance['tags'] == '' ? 'body,p,li,td' : wp_strip_all_tags( esc_attr( $instance['tags'] ) ) );
		$fontsize    = ( $instance['fontsize'] == '' ? $str_default : wp_strip_all_tags( esc_attr( $instance['fontsize'] ) ) );
		$controls    = ( $instance['controls'] == '' ? $str_default : wp_strip_all_tags( esc_attr( $instance['controls'] ) ) );
		$tips        = ( $instance['tips'] == '' ? $str_default : wp_strip_all_tags( esc_attr( $instance['tips'] ) ) );
		?>
	<p>
	<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title:', 'accessibility-widget' ); ?></label>
	<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
	</p>
	<p>
	<label for="<?php echo esc_attr( $this->get_field_id( 'tags' ) ); ?>"><?php esc_html_e( 'Resize the following HTML/CSS tags (separate with a comma (,)):', 'accessibility-widget' ); ?></label>
	<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'tags' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'tags' ) ); ?>" type="text" value="<?php echo esc_attr( $tags ); ?>" /><br />
	</p>
	<p>
	<label for="<?php echo esc_attr( $this->get_field_id( 'fontsize' ) ); ?>"><?php esc_html_e( 'Set to these sizes (separate with a comma (,)):', 'accessibility-widget' ); ?></label>
	<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'fontsize' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'fontsize' ) ); ?>" type="text" value="<?php echo esc_attr( $fontsize ); ?>" /><br />
	</p>
	<p>
	<label for="<?php echo esc_attr( $this->get_field_id( 'controls' ) ); ?>"><?php esc_html_e( 'Set controller text (separate with a comma (,)):', 'accessibility-widget' ); ?></label>
	<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'controls' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'controls' ) ); ?>" type="text" value="<?php echo esc_attr( $controls ); ?>" /><br />
	</p>
	<p>
	<label for="<?php echo esc_attr( $this->get_field_id( 'tips' ) ); ?>"><?php esc_html_e( 'Set tooltip text on mouse hover (separate with a comma (,)):', 'accessibility-widget' ); ?></label>
	<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'tips' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'tips' ) ); ?>" type="text" value="<?php echo esc_attr( $tips ); ?>" /><br />
	</p>
		<?php
	}
} // end class CYA11y_Widget_Accesstxt

/**
 * Register the widget.
 *
 * @return void
 */
function cya11y_register_widget() {
	register_widget( 'CYA11y_Widget_Accesstxt' );
}
add_action( 'widgets_init', 'cya11y_register_widget' );
