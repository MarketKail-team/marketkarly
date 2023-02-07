import { bindEvent, toggleClass } from '../../lib/index.js';

bindEvent('.shopping-cart__category-outer', 'click', () => toggleClass('.shopping-cart__category-outer + ul', 'a11yHidden'));