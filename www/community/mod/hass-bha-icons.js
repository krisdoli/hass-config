const iconset = document.createElement("ha-iconset-svg");
iconset.name = "bha";
iconset.size = "24";
iconset.innerHTML = `<svg><defs>
<g id="hue-bulb"><path d="M4.19,17h0c2.48-.23,5.09-.36,7.81-.36s5.33.13,7.81.36h0a3,3,0,0,0,.66-.84C22.1,12,22,10.62,22,10.25c-.11-3.2-6.09-3.57-8.74-3.58h-2.5c-2.65,0-8.63.38-8.74,3.58,0,.37-.11,1.79,1.52,5.9A3,3,0,0,0,4.19,17Z" transform="translate(-2 -6.67)"/></g>
<g id="skrivbord"><path d="M11.7,4.3c-1.5,0-4.6,0.2-5.5,0.3c-0.4,0.1-1.1,0-1.5,1.2C4.4,7,3.3,11.1,2.4,15.7c-0.1,0.4-0.3,1.2-0.3,1.4S1.9,18,2.7,18c0.5,0,4.3,0.2,9.3,0.2c5,0,8.9-0.2,9.3-0.2c0.8-0.1,0.5-0.8,0.5-1s-0.2-1-0.3-1.4c-0.9-4.6-2-8.7-2.4-9.9c-0.4-1.2-1.1-1.2-1.5-1.2c-0.9-0.1-4.1-0.3-5.5-0.3"/></g>
<g id="sovrum"><path d="M21.9,18.6c0,0-1.6-10.8-1.8-12.3c-0.2-1.5-0.3-1.3-0.5-1.5c-0.7-0.5-1.8-0.5-1.8-0.5h-5.6h-0.2H6.1c0,0-1.1,0-1.8,0.5C4.2,5,4.1,4.9,3.9,6.3C3.7,7.8,2.1,18.6,2.1,18.6s4.4,0.2,10.2,0.3v0C17.8,18.8,21.9,18.6,21.9,18.6z"/></g>
<g id="spot"><path d="M12.41,22s.8.28,6.1-4.57c.3-.23,3.71-3.49,3.48-3.94S11.62,2,11.62,2s-.35-.52-5,3.55c-.32.28-5.07,4.44-4.55,5S12.41,22,12.41,22Z" transform="translate(-2 -2)"/></g>
<g id="roborock"><path d="M13.3,5.3c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.2,0-0.4-0.1C12.5,5.1,12.3,5,12,5c-0.3,0-0.5,0.2-0.6,0.4c-0.1,0-0.2,0-0.3,0.1c-0.1-0.1-0.2-0.1-0.3-0.1c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,0.4-0.1,0.4-0.3c0.1,0,0.1,0,0.2,0c0.1,0.2,0.3,0.3,0.6,0.3c0.2,0,0.5-0.1,0.6-0.4c0.1,0,0.1,0,0.2,0c0.1,0.2,0.2,0.3,0.4,0.3c0.3,0,0.5-0.2,0.5-0.5S13.5,5.3,13.3,5.3z"/><circle cx="12" cy="10.2" r="3.3"/><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M19.4,15.1c-0.4,1-1,1.8-1.7,2.6c-0.7,0.7-1.6,1.3-2.6,1.7c-1,0.4-2.1,0.6-3.1,0.6s-2.1-0.2-3.1-0.6c-1-0.4-1.8-1-2.6-1.7C5.5,17,5,16.1,4.6,15.1c-0.4-1-0.6-2.1-0.6-3.1c0-0.4,0-0.8,0.1-1.1h4.3c0-0.2-0.1-0.4-0.1-0.6s0-0.4,0.1-0.6h-4c0.1-0.3,0.2-0.5,0.3-0.8c0.4-1,1-1.8,1.7-2.6C7,5.5,7.9,5,8.9,4.6c1-0.4,2.1-0.6,3.1-0.6s2.1,0.2,3.1,0.6c1,0.4,1.8,1,2.6,1.7C18.5,7,19,7.9,19.4,8.9c0.1,0.2,0.2,0.5,0.3,0.8h-4c0,0.2,0.1,0.4,0.1,0.6s0,0.4-0.1,0.6H20c0.1,0.4,0.1,0.8,0.1,1.1C20.1,13.1,19.9,14.1,19.4,15.1z"/></g>
<g id="virus"><path d="M22.5 10.7h-1c-2.3 0-3.5-2.8-1.9-4.5l.7-.7c.5-.5.5-1.4-.1-1.9-.5-.5-1.3-.5-1.8 0l-.7.7c-1.7 1.7-4.5.5-4.5-1.9v-1c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v1c0 2.3-2.8 3.5-4.5 1.9l-.6-.7c-.5-.4-1.4-.4-1.9.1-.4.5-.4 1.3 0 1.8l.7.7c1.7 1.7.5 4.5-1.9 4.5h-1c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h1c2.3 0 3.5 2.8 1.9 4.5l-.7.7c-.5.5-.5 1.4.1 1.9.5.5 1.3.5 1.8 0l.7-.7c1.7-1.7 4.5-.5 4.5 1.9v1c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3v-1c0-2.3 2.8-3.5 4.5-1.9l.7.7c.5.5 1.4.5 1.9-.1.5-.5.5-1.3 0-1.8l-.7-.7c-1.7-1.7-.5-4.5 1.9-4.5h1c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.4-1.3h0zm-12 2a2.22 2.22 0 0 1-2.2-2.2 2.22 2.22 0 0 1 2.2-2.2 2.22 2.22 0 0 1 2.2 2.2 2.22 2.22 0 0 1-2.2 2.2zm3.7 2.6a1.11 1.11 0 0 1-1.1-1.1 1.11 1.11 0 0 1 1.1-1.1 1.11 1.11 0 0 1 1.1 1.1 1.11 1.11 0 0 1-1.1 1.1z"/></g>
</defs></svg>`;
document.body.appendChild(iconset);