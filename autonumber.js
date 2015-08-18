/**
 * Auto-Number
 * Automatically Number Elements
 *
 * @author      MarQuis Knox <opensource@marquisknox.com>
 * @copyright   2015 MarQuis Knox
 * @link        http://marquisknox.com
 * @link		http://github.com/MarQuisKnox/AutoNumber
 * @license     GNU Affero General Public License v3
 *
 * @since  	    Tuesday, August 18, 2015, 10:17 AM GMT+1
 * @modified    $Date$ $Author$
 * @version     $Id$
 *
 * @category    JavaScript
 * @package     Auto-Number
*/

(function( $ ) {
	
    $.fn.autonumber = function( options ) {      
        // default options 
        var defaults = $.extend({
            target: '',
        }, options );

        // action!
        return $(this).each(function( key, value ) {
        	$( value ).find( options.target ).html( key + 1 );
        });
 
    };
 
}( jQuery ));
