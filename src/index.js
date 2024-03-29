import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
export default registerBlockType( 'tw2113/blogroll-block', {
	edit,
	save: () => {
		return null;
	},
} );
