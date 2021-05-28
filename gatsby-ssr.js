const React = require('react');

exports.onRenderBody = function({ setPreBodyComponents }) {
  let scriptHTML = '!function(){function e(e){e?(document.body.classList.add("has-background-black"),document.body.classList.add("has-text-white")):(document.body.classList.remove("has-background-black"),document.body.classList.remove("has-text-white")),document.documentElement.style.overflow="hidden",document.documentElement.setAttribute("data-color-scheme",e?"dark":"light"),document.documentElement.style.overflow=""}var t=window.matchMedia("(prefers-color-scheme: dark)"),o="(prefers-color-scheme: dark)"===t.media,a=null;try{a=localStorage.getItem("darkMode")}catch(e){}var c=null!==a;c&&(a=JSON.parse(a)),c?e(a):o&&(e(t.matches),localStorage.setItem("darkMode",t.matches))}();';

  setPreBodyComponents([
    <script key="dark-mode" dangerouslySetInnerHTML={{ __html: scriptHTML }}></script>
  ]);
};
