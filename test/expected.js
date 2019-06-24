var search;



search = function(keyword, cb) {
  var __iced_it, __iced_passed_deferral, host, json, url;
  __iced_passed_deferral = iced.findDeferral(arguments);
  __iced_it = (function*() {
    var __iced_deferrals;
    host = "http://search.twitter.com/";
    url = host + "/search.json?q=" + keyword + "&callback=?";
    __iced_deferrals = new iced.Deferrals(__iced_it, {
      parent: __iced_passed_deferral,
      funcname: "search"
    });
    $.getJSON(url, __iced_deferrals.defer({
      assign_fn: (function() {
        return function() {
          return json = arguments[0];
        };
      })(),
      lineno: 3
    }));
    if (__iced_deferrals.await_exit()) {
      yield;
    }
    return cb(json.results);
  })();
  __iced_it.next();
  return null;
};
