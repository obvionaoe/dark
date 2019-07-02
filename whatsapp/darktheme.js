function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}
applycss(`
/*Main color variables*/
:root {
  /*User colors*/
  --main-color: #00adee;
  --main-background: #111111;
  --second-background: #181818;
  --hover-background: #232323;
  --main-text: #eff0f1;
  --dimmer-text: #CCCCCC;
  /*DeepDark colors*/
  /*
  --main-color: #00adee;
  --main-background: #111111;
  --second-background: #181818;
  --hover-background: #232323;
  --main-text: #eff0f1;
  --dimmer-text: #CCCCCC;
  */
  /*KDE colors*/
  /*
  --main-color: #3DAEE9;
  --main-background: #232629;
  --second-background: #2a2e32;
  --hover-background: #31363b;
  --main-text: #eff0f1;
  --dimmer-text: #bdc3c7;
  */
  /*Vertex Dark colors*/
  /*
  --main-color: #4080fb;
  --main-background: #2B2B2C;
  --second-background: #353638;
  --hover-background: #515254;
  --main-text: #F3F3F5;
  --dimmer-text: #AEAFB0;
  */
  /*Arc Dark colors*/
  /*
  --main-color: #5294E2;
  --main-background: #343944;
  --second-background: #383C4A;
  --hover-background: #414A59;
  --main-text: #C1C8D1;
  --dimmer-text: #B3BAC5;
  */
  /*Firefox Dark colors*/
  /*
  --main-color: #5675B9;
  --main-background: #272B35;
  --second-background: #181D20;
  --hover-background: #353A44;
  --main-text: #E3EEF9;
  --dimmer-text: #606376;
  */
  /*Firefox57 Dark colors*/
  /*
  --main-color: #4080FB;
  --main-background: #0C0C0D;
  --second-background: #252526;
  --hover-background: #323234;
  --main-text: #F9F9FA;
  --dimmer-text: #D0D0D0;
  */
  /*Discord colors*/
  /*
  --main-color: #7289DA;
  --main-background: #1E2124;
  --second-background: #2F3136;
  --hover-background: #484B51;
  --main-text: #FFFFFF;
  --dimmer-text: #ADA8AA;
  */
  /*YouTube dark colors*/
  /*
  --main-color: #E52117;
  --main-background: #111111;
  --second-background: #232323;
  --hover-background: #343434;
  --main-text: #E1E1E1;
  --dimmer-text: #7F7F7F;
  */
  /*Mint-Y-Dark colors*/
  /*
  --main-color: #9AB87C;
  --main-background: #2F2F2F;
  --second-background: #383838;
  --hover-background: #404040;
  --main-text: #FFFFFF;
  --dimmer-text: #D5DADA;
  */
  /*9anime colors*/
  /*
  --main-color: #723f8c;
  --main-background: #0B0A0D;
  --second-background: #17151C;
  --hover-background: #1E1C25;
  --main-text: #B4B4B4;
  --dimmer-text: #747474;
  */
  /*Black and white*/
  /*
  --main-color: #ffffff;
  --main-background: #000000;
  --second-background: #0a0a0a;
  --hover-background: #0f0f0f;
  --main-text: #b4b4b4;
  --dimmer-text: #828282;
  */
  /*Yellow (colors from petrocompletions)*/
  /*
  --main-color: #FFC700;
  --main-background: #141414;
  --second-background: #202222;
  --hover-background: #353838;
  --main-text: #EFF0F1;
  --dimmer-text: #9F9999;
  */
  /*Yellow 2*/
  /*
  --main-color: #ffc700;
  --main-background: #0a0800;
  --second-background: #0c0a04;
  --hover-background: #0f0d05;
  --main-text: #fffdf5;
  --dimmer-text: #fff8e1;
  */
  /*Ubuntu grey colors*/
  /*
  --main-color: #EF7847;
  --main-background: #312D2A;
  --second-background: #3D3C38;
  --hover-background: #59564D;
  --main-text: #F2F1EF;
  --dimmer-text: #E6E5E3;
  */
  /*Ubuntu purple colors*/
  /*
  --main-color: #EF7847;
  --main-background: #2C071A;
  --second-background: #430B28;
  --hover-background: #520D30;
  --main-text: #F2F1EF;
  --dimmer-text: #E6E5E3;
  */
  /*Orange*/
  /*
  --main-color: #ff6905;
  --main-background: #0a0400;
  --second-background: #0e0702;
  --hover-background: #110903;
  --main-text: #fff9f5;
  --dimmer-text: #ffede1;
  */
  /*Jisho 夜明け colors https://userstyles.org/styles/115621/jisho*/
  /*
  --main-color: #EF7D6C;
  --main-background: #332222;
  --second-background: #2A1B1B;
  --hover-background: #863B2F;
  --main-text: #EFB26C;
  --dimmer-text: #986E3F;
  */
}
/*Changed text highlight*/
::selection {
  background: var(--main-color) !important;
  color: var(--main-text) !important;
}
::-moz-selection {
  background: var(--main-color) !important;
  color: var(--main-text) !important;
}
/*FUCK IT*/
*, *:before, *:after {
  background-color: transparent !important;
  border-color: var(--hover-background) !important;
  color: var(--main-text) !important;
  box-shadow: none !important;
}
.copyable-area, html[dir] ._3_R6X {
  background-color: var(--main-background) !important;
}
span:not([data-icon*=logo]) svg path {
  fill: var(--main-text) !important;
}
span:not([data-icon*=logo]) svg g path,
span:not([data-icon*=logo]) svg:hover path {
  fill: var(--main-color) !important;
}
button span:not([data-icon*=logo]) svg g path, button span svg:hover g path {
  fill: var(--main-background) !important;
}
/*Login QR code*/
html[dir] ._2EZ_m {
  border: 2px solid white !important;
}
._1jjYO > span:nth-child(1) > svg:nth-child(1) > path:nth-child(2),
._1jjYO > span:nth-child(1) > svg:nth-child(1) > path:nth-child(3) {
  fill: black !important;
}
li._2eNdO:nth-child(2) > span:nth-child(1) > strong:nth-child(1) > span:nth-child(1) > span:nth-child(1) > svg:nth-child(1) > path:nth-child(2),
li._2eNdO:nth-child(2) > span:nth-child(1) > strong:nth-child(2) > span:nth-child(1) > span:nth-child(1) > svg:nth-child(1) > path:nth-child(2),
._2G3cZ > span:nth-child(1) > svg:nth-child(1) > path:nth-child(1) {
  fill: black !important;
}
/*Links*/
a {
  outline-color: var(--main-color) !important;
}
a, a:visited {
  color: var(--main-color) !important;
  opacity: 0.9;
}
a:hover {
  opacity: 1;
}
/*Removing text decorations*/
* {
  text-decoration: none !important;
}
body, html, .pane-chat-footer, #startup, #initial_startup, .backdrop.backdrop-cover, .backdrop-transparent, html[dir] ._1CnF3 {
  background: var(--hover-background) !important;
  color: var(--dimmer-text) !important;
  box-shadow: var(--shadow);
}
progress {
  color: var(--main-color) !important;
  background-color: var(--main-text) !important;
}
progress[value]::-moz-progress-bar {
  background-color: var(--main-color) !important;
}
.progress .path {
  stroke: var(--main-color) !important;
}
/*Not loggin in*/
.popup {
  background-color: var(--second-background) !important;
}
.popup-title {
  color: var(--main-text) !important;
}
.popup hr {
  border-color: var(--hover-background) !important;
}
.popup .text-tip a, .popup .text-tip {
  color: var(--dimmer-text) !important;
}
.btn-plain, ._1qi0v {
  color: var(--main-color) !important;
  opacity: 0.9;
}
.btn-default, html[dir] .PNlAR {
  background-color: var(--main-color) !important;
  opacity: 0.9;
  color: var(--main-text) !important;
}
.btn-plain:hover, .btn-default:hover, ._1qi0v:hover, html[dir] .PNlAR:hover {
  opacity: 1 !important;
}
/*Notifications*/
html[dir] ._3YewW, html[dir] ._3YewW * {
  background-color: var(--hover-background) !important;
  color: var(--main-text) !important;
}
/*Intro*/
.intro, .intro::after, html[dir] ._3qlW9, html[dir] ._3qlW9::after {
  background-color: var(--second-background) !important;
  border: 1px solid var(--hover-background) !important;
}
.intro-image, [data-asset-intro-image] {
  background-image: url(https://github.com/obvionaoe/rambox-dark-themes/blob/master/whatsapp/images/intro-image.png) !important;
}
.intro .intro-title, .iHhHL {
  color: var(--main-color) !important;
}
.hint, .media-gallery-empty, .well-chat-secondary, .empty-text, .intro .intro-text, .intro .intro-secondary-text, .drawer-blocked-hint, .qr-wrapper .wifi-hint, ._1ClcF {
  color: var(--main-text) !important;
}
/*Header*/
.pane-header.pane-list-header, .pane-header, ._3AwwN, html[dir] ._3auIg {
  background-color: var(--main-background) !important;
}
.drawer-header .drawer-title {
  background-color: var(--second-background) !important;
}
.pane-chat-header {
  border-color: var(--hover-background) !important;
}
.chat-title, .header-title {
  color: var(--main-text) !important;
}
.Gd51Q._3sgkv {
  color: var(--dimmer-text) !important;
}
.pane-chat-header .chat-body {
  border: none !important;
}
/*Buttons*/
button span svg path, button, [role=button] span svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
  opacity: 1 !important;
}
button:hover span svg path, [role=button]:hover span svg path {
  fill: var(--main-color) !important;
}
.attach-menu-container g path, .attach-menu-container:hover g path,
.GK4Lv:hover span svg g path {
  fill: var(--main-background) !important;
}
/*Drowpdown menus*/
.dropdown, .dropdown-picker, html[dir] ._2uLFU, html[dir] ._1ArIP {
  background-color: var(--second-background) !important;
}
.dropdown-item-action, ._2dGjP {
  color: var(--main-text) !important;
}
.dropdown-item-text.dropdown-item-hover, .dropdown-item-text.dropdown-item-hover .dropdown-item-action, html[dir] ._28zBA._14ou2, html[dir] ._28zBA._14ou2 ._2dGjP {
  background-color: var(--hover-background) !important;
  color: var(--main-color) !important;
}
/*Sidebar*/
.chat, .chatlist-main, .chatlist-panel .chatlist-panel-body, html[dir] ._1NrpZ, html[dir] ._2EXPL {
  background-color: var(--main-background) !important;
}
.chatlist .chat:hover, .chatlist .chat.hover, .chatlist .chat.active, html[dir] ._2EXPL._1f1zm, html[dir] ._2EXPL:hover {
  background-color: var(--hover-background) !important;
  border-color: var(--hover-background) !important;
  box-shadow: none !important;
}
.chatlist .chat-body, .chatlist .header-body, .chatlist .chat:hover .chat-body, .chatlist .chat:hover .header-body, .chatlist .chat.hover .chat-body, .chatlist .chat.hover .header-body, .chatlist .chat:hover:after, .chatlist .chat.hover:after, .chatlist .chat.active:after, .chat-body, .header-body, .chat.active .chat-body, .chat.active .header-body {
  border-color: var(--hover-background) !important;
  box-shadow: none !important;
}
.chat:hover::after, .chat.hover::after, .chat.active::after {
  border: none !important;
}
.chat-meta, .chat-secondary, .header-secondary {
  color: var(--dimmer-text) !important;
}
.avatar {
  background-color: var(--hover-background) !important;
}
/*typing*/
.vdXUe {
  color: var(--main-color) !important;
}
/*notification*/
html[dir] .OUeyt {
  background-color: var(--main-color) !important;
}
.OUeyt {
  color: var(--main-text) !important;
}
/*icons near the message*/
.chat-status span svg path {
  fill: var(--main-color) !important;
}
/*Search*/
._3pkkz {
  background-color: var(--second-background) !important;
  border-color: var(--hover-background) !important;
}
.chatlist-panel-search, .cont-input-search, .list-search .input-search, html[dir] ._2MSJr,
#input-chatlist-search, html[dir] .gQzdc._3sdhb, html[dir] ._3oju3, ._1Plpp {
  background-color: var(--main-background) !important;
  border-color: var(--hover-background) !important;
}
.section-header, html[dir] ._2bXVy {
  background-color: var(--second-background) !important;
  border-color: var(--hover-background) !important;
  color: var(--main-color) !important;
}
._3WZoe {
  color: var(--main-text) !important;
}
/*For the white transitioning*/
.list-search.active {
  background-color: var(--main-background) !important;
}
/*Matching*/
.matched-text {
  color: var(--main-color) !important;
}
/*Right pane*/
/*Right search*/
.drawer-chat-search .chatlist-panel-body, .drawer-header, .pane-chat {
  background-color: var(--second-background) !important;
  border-color: var(--hover-background) !important;
}
.three .pane-chat-body, .three .pane-chat-footer, .three .pane-chat-header, html[dir] ._14oqx + ._14oqx .DcItJ {
  border-color: var(--hover-background) !important;
}
.app {
  background: var(--second-background) !important;
}
/*Contact info*/
.drawer, .drawer-section.well, .well, .well-simple, .well-chat {
  background-color: var(--second-background) !important;
  border-color: var(--hover-background) !important;
}
.well-chat-name, .drawer-header, .drawer-header-small .drawer-title {
  color: var(--main-text) !important;
}
.title {
  color: var(--dimmer-text) !important;
}
.drawer-section-title {
  color: var(--main-color) !important;
}
.row.row-drawer-item .row-body {
  border-color: var(--hover-background) !important;
}
/*Right pane documents view*/
.menu-tabs.menu-tabs-lists, .starred-msg-wrapper:hover, .starred-msg-wrapper::before {
  background-color: var(--hover-background) !important;
}
.menu-tabs.menu-tabs-lists::before {
  background-color: var(--main-color) !important;
}
.menu-tabs.menu-tabs-lists .menu-item, .link-preview-container .link-preview-source, .link-preview-container .link-preview-description {
  color: var(--dimmer-text) !important;
}
.link-preview-container .link-preview-title {
  color: var(--main-text) !important;
}
.menu-tabs.menu-tabs-lists .menu-item:hover {
  color: var(--main-color) !important;
}
.message-out .link-preview-container, .starred-msg-wrapper .link-message.message, .message-in .link-preview-container, .starred-msg-wrapper .message-chat, .starred-msg-wrapper .message-location {
  background-color: var(--main-background) !important;
}
span[data-icon=settings-blocked] svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
/*Edit picture and such*/
.text-input .textinput-controls .control-button-container .text-input-icon span svg path, .btn-context span svg path, span[data-icon=pencil] svg path, span[data-icon=emoji-input] svg path, span[data-icon=checkmark] svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
.text-input .textinput-controls .control-button-container .text-input-icon:hover span svg path, .btn-context:hover span svg path, span[data-icon=pencil]:hover svg path, span[data-icon=emoji-input]:hover svg path, span[data-icon=checkmark]:hover svg path {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
.text-input.active .input-wrapper, html[dir] ._31WRs ._1DTd4 {
  border-color: var(--main-color) !important;
}
.chatlist.list-identity .chat, .chatlist.list-icons .chat-cell, .chatlist .chat, html[dir] ._1CRb5, html[dir] ._1CkkN, .chat-identity.chat, html[dir] .ZwkQK {
  background-color: var(--second-background) !important;
}
.chatlist.list-identity .chat:hover, .chatlist.list-icons .chat-cell:hover, .chatlist .chat:hover, .chat:hover, .chat.active, html[dir] ._1CkkN:hover, .starred-msg-wrapper.hover::before, .starred-msg-wrapper.hover::after {
  background-color: var(--hover-background) !important;
}
._1sYdX {
  color: var(--main-color) !important;
}
.Cpiae, ._3LL06 {
  color: var(--dimmer-text) !important;
}
html[dir] ._1CkkN + ._1CkkN ._10xEB, html[dir] ._1CkkN:hover + ._1CkkN::before {
  border-color: var(--hover-background) !important;
}
/*Settings*/
.chat-cell div span svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
.chat-cell:hover div span svg path, .chat.contact:hover .chat-controls svg path {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
.chatlist.list-icons .chat:hover:after, .chatlist.list-icons .chat:hover .chat-body, .chatlist.list-icons .chat:hover .header-body, .chatlist.list-icons .chat:hover .chat-avatar, html[dir] ._2ZnOp:last-child {
  border-color: var(--hover-background) !important;
}
select {
  color: var(--main-text) !important;
  border-color: var(--hover-background) !important;
}
.select::before {
  color: var(--main-text) !important;
}
.drawer-blocked-button-add {
  border-color: var(--hover-background) !important;
}
/*New group*/
.new-group-button, .new-group-separator {
  background-color: var(--hover-background) !important;
  border-color: var(--hover-background) !important;
}
html[dir] ._1jJLh {
  background-color: var(--main-color) !important;
}
.new-group-search, .new-group-contacts, .drawer-section-main {
  background-color: transparent !important;
}
html[dir] ._1AKfk {
  background-color: var(--second-background) !important;
}
.input-line {
  border-color: var(--main-color) !important;
}
._1AKfk {
  color: var(--main-color) !important;
}
/*Comments*/
.pane-chat-tile-container {
  background-color: var(--second-background) !important;
  border: 1px solid var(--hover-background) !important;
}
.message-out, .message-out .document-body {
  background-color: var(--hover-background) !important;
}
.message-in, .message-in .document-body, .link-preview-container .link-preview-body, html[dir] ._2CORf ._12xX7, html[dir] ._1sGGp._2nFG1, html[dir] .IKxkY ._12xX7, html[dir] ._2lwig._2nFG1, html[dir] .Zq3Mc {
  background-color: var(--hover-background) !important;
}
.status-icon span svg path, .doc-state span svg path, .doc-state span svg path, ._3kN0h svg path, .message-in svg path, .message-out svg path, span[data-icon=star-in] svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
span[data-icon=msg-check] svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
.btn-forward-chat:hover span svg path, .doc-state:hover span svg path, ._3kN0h:hover svg path, ._38oIx:hover svg path, span[data-icon=msg-dblcheck-ack] svg path, span[data-icon=msg-dblcheck-ack-light] svg path, .message-in span:hover svg path, .message-out span:hover svg path {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
.message-in .tail-container, .message-out .tail-container {
  display: none !important;
}
.selectable-text, .document-text .ellipsify, .document-text .starred-title-main, .document-text .multi-count, html[dir] ._1Wp9N ._3zVOv, ._3zVOv {
  color: var(--main-text) !important;
}
.message-meta, .document-meta, .audio-duration, ._1DZAH, .DYGf2, .revoked-outgoing .placeholder-msg, .PyPig, ._1Wp9N ._3QqKs, ._3QqKs, html[dir] ._16y6t,
._3Ye_R._1wjpf._1OmDL {
  color: var(--dimmer-text) !important;
}
.message-out .selectable-text {
  color: var(--main-color) !important;
}
.message-text a, .media-caption a, .contents a {
  color: var(--main-color) !important;
  opacity: 0.9 !important;
}
.message-text a:hover, .media-caption a:hover, .contents a:hover {
  opacity: 1 !important;
}
/*Options for messages*/
html[dir=ltr] ._1i1U7.jZ4tp, html[dir=ltr] ._1i1U7._2DNgV, html[dir=ltr] ._2Cju4.jZ4tp, html[dir=ltr] ._2Cju4._2DNgV, html[dir] ._2flas {
  background: var(--hover-background) !important;
}
.pane-chat-color-bg {
  background: var(--second-background) !important;
}
html[dir] .Um7sh {
  background: transparent !important;
}
.message-out .audio-state-default .audio-progress, .message-out .audio-state-default .audio-track::-moz-range-thumb {
  background: var(--main-color) !important;
}
.message-out .audio-track::-moz-range-track, html[dir] ._1kZiz ._3geJ8::-moz-range-track {
  background: var(--dimmer-text) !important;
}
.QnDup > span:nth-child(1) > svg:nth-child(1) > path:nth-child(2) {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
.QnDup > span:nth-child(1) > svg:nth-child(1) > path:nth-child(1) {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
/*@ theming*/
.Uukb4 {
  background-color: var(--main-background) !important;
  border-color: var(--hover-background) !important;
}
html[dir] ._3v_lq.j5Hcb {
  background-color: var(--hover-background) !important;
}
.message-out .matched-mention .at-symbol {
  color: var(--main-text) !important;
}
/*SVGs for audio and gifs*/
span[data-icon=audio-file] svg path[fill="#FFAD1F"], span[data-icon=media-gif] svg path[fill="#263238"] {
  fill: var(--main-background) !important;
  fill-opacity: 1 !important;
}
span[data-icon=audio-file] svg path[fill="#FFF"], span[data-icon=media-gif] svg path[fill="#FFF"] {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
span[data-icon=audio-file]:hover svg path[fill="#FFF"], span[data-icon=media-gif]:hover svg path[fill="#FFF"] {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
html[dir] ._1kZiz ._3geJ8::-moz-range-thumb {
  background: var(--main-color) !important;
}
/*Select messages*/
.multi-controls, html[dir] ._2FsQ8 {
  background-color: var(--hover-background) !important;
}
._1VD7W {
  background-color: var(--main-color) !important;
  border-color: var(--main-color) !important;
}
/*Message compose*/
.block-compose, html[dir] ._3XpR2 {
  background-color: var(--main-background) !important;
  border-color: var(--hover-background) !important;
}
.block-compose .input-container {
  background-color: var(--second-background) !important;
  border: 1px solid var(--hover-background) !important;
}
/*Forward*/
html[dir] .iHLo1 {
  background-color: var(--second-background) !important;
}
/*Emoji*/
.menu-tabs-emoji {
  background-color: var(--hover-background) !important;
}
.menu-tabs-marker, html[dir] ._1qXED {
  background-color: var(--main-color) !important;
}
.menu-tabs-emoji .menu-tab span svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
.menu-tabs-emoji .menu-tab:hover span svg path {
  fill: var(--main-color) !important;
}
.compose-box-items-overlay-container, .emoji-search-row-input, .emoji-panel-body-container, .emoji-search, .dropdown-picker, .dropdown-picker .dropdown-nib, .emoji-panel-body-container, .emoji-search-row {
  background: var(--hover-background) !important;
}
.emoji-search-row, .emoji-panel-body {
  background: var(--second-background) !important;
}
.emoji-panel-title, input.input-emoji-search, ._3KEhc {
  color: var(--dimmer-text) !important;
}
.compose-box-items-overlay-container {
  border-color: var(--hover-background) !important;
}
.emojik.c0:hover, .emojik.c1:hover, .emojik.c2:hover, .emojik.c3:hover, .emojik.c4:hover, .emojik.c5:hover, .emojik.c6:hover, .emojik.c7:hover {
  filter: brightness(120%);
}
/*Tried to make the background of the emoji a bit less noticable*/
*.emojik {
  border-radius: 100% !important;
}
/*gif*/
html[dir] ._2s3PU {
  background-color: var(--hover-background) !important;
}
.dropdown-emoji.dropdown-inverse-vertical .dropdown-nib {
  background-color: var(--hover-background) !important;
}
/*Date*/
.message-system {
  background-color: var(--hover-background) !important;
  color: var(--main-text) !important;
}
/*Retry*/
html[dir] ._3dGYA {
  background-color: var(--hover-background) !important;
}
html[dir] ._3dGYA:hover span svg path {
  fill: var(--main-color) !important;
}
.Qf313 {
  stroke: var(--main-text) !important;
}
/*Not read*/
html[dir] .L89LI {
  background-color: var(--second-background) !important;
  color: var(--main-text) !important;
}
html[dir] ._1mq8g {
  background-color: var(--hover-background) !important;
  border-color: var(--hover-background) !important;
}
/*Go down*/
.incoming-msgs {
  background-color: var(--hover-background) !important;
  color: var(--main-text) !important;
}
.incoming-msgs span svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
.incoming-msgs:hover span svg path {
  fill: var(--main-color) !important;
}
/*Image view*/
.media-viewer, .media-panel-header, .header-body {
  background-color: var(--main-background) !important;
}
.media-content .media-caption, .media-chat .chat-main, .media-chat .header-main, .text-input .label-text {
  color: var(--dimmer-text) !important;
}
.drawer-header-offset, .btn-fill, .send-logs-screenshots .send-logs-screenshots-action {
  color: var(--main-text) !important;
}
.media-content .btn-round, .drawer-header-offset, .media-collection {
  background-color: var(--hover-background) !important;
}
span[title=Close] svg path, .btn-round span svg path, .media-panel-tools .menu-item span svg path, .btn-fill span svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
span[title=Close]:hover svg path, .btn-round:hover span svg path, .media-panel-tools .menu-item:hover span svg path, .btn-fill:hover span svg path, html[dir] ._3hV1n:hover span svg path {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
.media-viewer-thumbs-container, .media-thumb.active .media-thumb-body {
  border-color: var(--hover-background) !important;
}
.btn-fill, .send-logs-screenshots .send-logs-screenshots-action {
  background-color: var(--second-background) !important;
}
.btn-fill:hover {
  color: var(--main-color) !important;
}
html[dir] ._3hV1n {
  background-color: var(--main-background) !important;
}
/*Add a caption*/
._7HWvs {
  color: var(--dimmer-text) !important;
}
/*Border*/
html[dir] ._2Mg6D .CzI8E {
  border-color: var(--main-color) !important;
}
/*Send contacts*/
.drawer-header-popup, .drawer-controls-summary {
  background-color: var(--main-background) !important;
  color: var(--main-text) !important;
}
/*Starred*/
.starred-msg-wrapper.current, .starred-msg-wrapper.active, .starred-msg-wrapper.active::after, .starred-msg-wrapper.active::before {
  background-color: var(--hover-background) !important;
}
.starred-title-meta {
  color: var(--dimmer-text) !important;
}
.starred-chevron-icon span svg path {
  fill: var(--main-text) !important;
  fill-opacity: 1 !important;
}
.starred-chevron-icon:hover span svg path {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
/*Undo notification*/
.z5_OS {
  color: var(--main-color) !important;
  opacity: 0.9;
}
.z5_OS:hover {
  opacity: 1 !important;
}
/*Reply*/
.compose-popup-panel, .compose-popup-panel .quoted-msg-status, .btn-background {
  background-color: var(--hover-background) !important;
}
.quoted-msg-text, .emojitext.quoted-mention {
  color: var(--dimmer-text) !important;
}
.color-1 {
  color: var(--main-color) !important;
}
.bg-color-1 {
  background-color: var(--main-color) !important;
}
._3FwEk span svg path {
  fill: var(--main-text) !important;
}
/*Message info*/
.drawer-header-small, .drawer-info .chat-body:hover, html[dir] ._2zkF3 {
  background-color: var(--hover-background) !important;
  color: var(--main-text) !important;
}
.pane-preview, .chatlist.chatlist-group-msg, .drawer-info .chat-body, .drawer-info .chat {
  background-color: var(--second-background) !important;
}
.drawer-header-small {
  background-color: var(--main-background) !important;
}
.chatlist.chatlist-group-msg .drawer-section-title, .chatlist.chatlist-group-msg .drawer-section-footer, .chatlist.chatlist-group-msg .chat:hover {
  background-color: var(--hover-background) !important;
  color: var(--main-text) !important;
}
.group-msg-info-title-icon span svg path, .drawer-info .chat-body span[data-icon=status-dblcheck] svg path {
  fill: var(--main-text) !important;
}
.drawer-info .chat-body span[data-icon=status-dblcheck-ack] svg path {
  fill: var(--main-color) !important;
  fill-opacity: 1 !important;
}
.drawer-section-info .chat:not(:last-child), html[dir] ._3YwRO {
  border-color: var(--hover-background) !important;
}
/*Group admin*/
.contact-marker-admin {
  border-color: var(--main-color) !important;
  color: var(--main-color) !important;
}
/*Default avatar svgs*/
div span[data-icon=default-user] svg path[fill="#DFE5E7"], div span[data-icon=default-group] svg path[fill="#DFE5E7"] {
  fill: var(--second-background) !important;
}
div span[data-icon=default-user] svg g[fill="#FFF"] path, div span[data-icon=default-group] svg path[fill="#FFF"] {
  fill: var(--main-color) !important;
}
/*Loading svg*/
circle {
  stroke: var(--main-text) !important;
}
/*Message down arrow gradient */
._2Nkc4 {
  background: var(--hover-background) !important;
}
/*Pop-up box*/
._2hHc6 {
  background-color: #1f1f22 !important;
  background-opacity: 1 !important;
}

`);