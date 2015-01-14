(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"about\">\n  <img src=\"styles/images/bob.jpg\">\n  <h1>About</h1>\n  <p>Robert Bob Bagler was born in Boston in 1951; after years of working in his father`s restaurant, Arthur`s, he struck out on his own in 1979 and started Bob`s Bagels right where it sits today, at XYZ Ave in Boston. For the last forty years, Bob`s Bagels has strived to proved the best bagels in town, at the best prices, made with love from only the freshest ingredients. Bob still works the counter, just like the old days, so stop in sometime and say hello!</p>\n</div>\n";
  },"useData":true});
templates['home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n    <img class=\"carousel-img\" src=\"styles/images/main_bg.jpg\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h1>Welcome to Bob's Bagels!</h1>\n          <p>BEST BAGELS. BEST PRICES. FRESHEST INGREDIENTS. ALL MADE WITH LOVE.</p>\n        </div>\n      </div>\n    </div>\n\n\n";
},"useData":true});
})();
