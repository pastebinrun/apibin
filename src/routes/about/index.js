import { h } from 'preact';
import style from './style';

const About = () => (<div class={style.about}>
	<p>
        This is a demonstration of <a href="https://pastebin.run">pastebin.run</a>'s API. Every API used by apibin is
        public and can be used by both JavaScript applications
        running in a web browser as well as applications running
        outside of web browser (such as Discord bots).
	</p>
	<p>
        If you are looking for a pastebin, please visit our main web site, <a href="https://pastebin.run/">pastebin.run</a>.
        While this demo can be used as a pastebin, it requires
        JavaScript (unlike the main pastebin), and it's much more
        prone to breaking. And it's not because of APIs changing &mdash;
        those are intended to remain stable, but rather because we
        can change the routes at any time &mdash; this isn't a production
        application.
	</p>
	<p>
        Why does this exist? <a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food">Dogfooding</a>, essentially.
	</p>
</div>);

export default About;
