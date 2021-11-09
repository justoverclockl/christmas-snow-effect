import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import PostStream from 'flarum/forum/components/PostStream';
import Page from 'flarum/common/components/Page'
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary'

app.initializers.add('justoverclock/christmas-snow-effect', () => {
  extend(HeaderSecondary.prototype, 'oninit', function (){
    const baseUrl = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-christmas-snow-effect/jquery.snow.js';
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = baseUrl;
    $("head").append(s);

    var snowEffectInterval = jQuery.fn.snow({
      // min size of element (default: 20)
      minSize: 4,

      // max size of element (default: 50)
      maxSize: 10,

      // flake fall time multiplier (default: 20)
      fallTimeMultiplier: 20,

      // flake fall time difference (default: 10000)
      fallTimeDifference: 30000,

      // interval (miliseconds) between new element spawns (default: 500)
      spawnInterval: 800,

      // jQuery element to apply snow effect on (should work on any block element) (default: body)
      target: jQuery(".container"),

      //elements to use in generating snow effect
      elements	: [

        {
          // html element to be spawned for this element
          html: '<i class="fas fa-snowflake" aria-hidden="true"></i>',
          // hex color for this element - works only for font based icons
          color: '#cc2037'
        },
        {
          // html element to be spawned for this element
          html: '<i class="fas fa-snowflake" aria-hidden="true"></i>',
          // hex color for this element - works only for font based icons
          color: '#ffffff'
        },
      ]
    });
  })
});
