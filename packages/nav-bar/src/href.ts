/**
 * href filter combines a menu item's id and params into the item's href
 * @param item the MenuItem containing id and params
 * @returns {string} the href
 */
import { MenuItem } from './types'

export const href = (item: MenuItem) => item.params ? `${item.id}?${item.params}` : item.id

export default href
