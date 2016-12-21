function SmartComparer(){"use strict";function r(r,n){if(r===n)return!0;if(null==r||null==n)return r==n||u("One value is undefined or null",r,n);if(e(r)&&e(n))return!0;var a=t(r,n);if(void 0!==a)return a;if(r.equals)return!!r.equals(n)||u("Comparison with .equals method returned false");var o=i(r,n);return void 0!==o?o:u("Values differ",r,n)}function e(r){var e=n(r)?Object.prototype.toString.call(r):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function n(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function t(e,n){var t=Array.isArray(e),i=Array.isArray(n);if(t!==i)return u("Values are not both arrays");if(t){var o=e.length,f=n.length;if(o!==n.length)return u("Array length differs",o,f);for(var l=0;l<o;l++){var s=r(e[l],n[l]);if(!s)return a('array index "'+l+'"')}return!0}}function i(e,t){var i=n(e),o=n(t);if(i!==o)return u("Values are not both objects");if(i){for(var f=Object.keys(e),l=Object.keys(t),s=0,c=f.length;s<c;s++)if(l.indexOf(f[s])<0)return u('Property "'+f[s]+'" is unexpected.');for(var s=0,c=l.length;s<c;s++)if(f.indexOf(l[s])<0)return u('Property "'+l[s]+'" is missing.');for(var v=!1,s=0,c=f.length;s<c;s++){var d=f[s];if("uuid"!==d&&"id"!==d){var y=e[d],g=t[d],h=r(y,g);h||(a('property "'+d+'"'),v=!0)}}return!v}}function u(r,e,n){return o=r,arguments.length>1&&(o+=" ("+e+" vs "+n+")"),!1}function a(r){return o=o||"Error",o+=", at "+r,!1}var o;return{areEqual:r,getDiagnostic:function(){return o}}}