var openComment, styles, time, writeStyleChar, writeStyles;

styles = "/* \n *\n * Hello Júlia. How are you?\n * \n * I decided to build this during my spare time this weekend.\n *\n * Take a sit and enjoy!\n *\n * Welcome back to Amsterdam!\n *\n * I missed you!\n *\n * +++\n *\n * This code is being injected letter by letter\n * into your browser and simultaneosly being shown\n * to you, so you can see (although you can't understand)\n * what is going on.\n * \n * The website will build itself as the code appears.\n *\n * This will show you how boring and slow programming is,\n * and how much effort and lines you have to put into the\n * development of something as simple as my feelings for you.\n *\n * But in the end, all hard work is worth it. You will see!\n * \n * Each section of the code will be explained... Starting now!\n * (no worries, it will be fast)\n *\n */\n\n/*\n *\n * First, let me change the font size and background color.\n *\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n *\n * Let's change this text a little bit...\n * I want it to be more readable and beautiful.\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n *\n * I will add some extra colors to make\n * the code look more appealing.\n *\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n *\n * Okay. Now it is time to decide what do do...\n *\n * How about programming my own heart?\n * What do you you think?\n *\n * I like the idea... Let's do it!\n *\n * But first, let's move this text to the right.\n * I need some space!\n *\n */\n\npre { left: 50%; }\n\n\n/* \n *\n * Now we can start developing, together, my own heart...\n *\n * Let's create it...\n *\n */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n/*\n * \n * Done! But, wait....\n * It needs some color and a shape...\n *\n */\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* \n *\n * Let's add some depth and shadows...\n *\n */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n/*\n *\n * It needs a new owner now...\n * ... how about you?\n *\n */\n\n#heart i::before {\n  content: 'Júlia';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/* \n *\n * It looks a little bit dead...\n * \n * I almost forgot... Hearts must beat!\n * Let's work on it! It is a little bit complex.\n *\n * Let's prepare the animation...\n *\n */\n\n@-webkit-keyframes heartbeat {\n  0%   { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50%  { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n  100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n}\n\n@keyframes heartbeat {\n  0%   { transform: scale(0.95); }\n  50%  { transform: scale(1.00); }\n  100% { transform: scale(0.95); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n *\n * Everything prepared.\n *\n * Now we must make it beat...\n *\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n *\n * Are you ready for it?\n *\n */\n\n#heart, #echo {\n\n/* \n *\n * Beating in\n * 3...\n * 2...\n * 1...\n *\n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n/* \n *\n * DONE!\n *\n */\n  \n}\n\n/* \n *\n * Perfect! We did it!\n * \n * I hope you enjoyed!\n *  \n */";

openComment =  false;

writeStyleChar = function(which) {
  if (which === '/' && openComment === false) {
    time = 50;
    openComment = true;
    styles = $('#style-text').html() + which;
  } else if (which === '/' && openComment === true) {
    time = 16;
    openComment = false;
    styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
  } else if (which === ':') {
    styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
  } else if (which === ';') {
    styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
  } else if (which === '{') {
    styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
  } else {
    styles = $('#style-text').html() + which;
  }
  $('#style-text').html(styles);
  return $('#style-tag').append(which);
};

writeStyles = function(message, index) {
  var pre;
  if (index < message.length) {
    pre = document.getElementById('style-text');
    pre.scrollTop = pre.scrollHeight;
    writeStyleChar(message[index++]);
    return setTimeout((function() {
      return writeStyles(message, index, time);
    }), time);
  }
};

$('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

// time = window.innerWidth <= 578 ? 4 : 16;
time = 4;

writeStyles(styles, 0, time);


/*
Changelog:
1.0.0: i exist!
1.0.1: heart instead of circle
1.0.2: including standard CSS3 transforms and animations
	was only using `-webkit` to be less verbose (standard transforms dont work in safari)
	now works in FF
1.0.3: crossbrowser echo
	nested `scale()` styles (scaled in scaled) only worked in chrome
	moved echo out of heart to fix
 */

// ---
// generated by coffee-script 1.9.0
