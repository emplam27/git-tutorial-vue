<template>
  <div class="app">
    <header class="app__header">
      <nav class="app__header__navbar">
        <router-link class="app__header__home" to="/">Home</router-link> |
        <router-link class="app__header__main" to="/main">Main</router-link>
      </nav>
    </header>
    <main class="app__main">
      <router-view/>
    </main>


  </div>
</template>

<style>


/* reset css */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


body {
  height: 100vh;
}

.app {

	height: 100vh;
}

.app__header__navbar {
	background: red;
	padding: 1.3rem;
	
}

.app__header__home:active {
	text-decoration: none;
}





</style>
