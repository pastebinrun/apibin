import { h } from 'preact';
import style from './style.css';

const Contents = ({ children }) => (<div class={style.contents}>
	{children}
</div>);

export default Contents;
