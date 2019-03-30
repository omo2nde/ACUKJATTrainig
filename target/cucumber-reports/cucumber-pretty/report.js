$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "As a google search user\r\nI want to search for information I need\r\nSo that Iam better informed",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for an item",
  "description": "",
  "id": "google-search;search-for-an-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Google Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i enter a search term \"Ahmid\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be shown a list of results relating to my search term",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.i_am_on_Google_Search_Page()"
});
formatter.result({
  "duration": 22390130275,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 299 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027wale-pc\u0027, ip: \u0027192.168.15.223\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{message\u003dsession not created: This version of ChromeDriver only supports Chrome version 74\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64), platform\u003dANY}]\nSession ID: b01212e70359ce2f9156883c08a7ff0b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat stepdefinition.Search.i_am_on_Google_Search_Page(Search.java:16)\r\n\tat ✽.Given I am on Google Search Page(search.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmid",
      "offset": 23
    }
  ],
  "location": "Search.i_enter_a_search_term(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_click_on_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_should_be_shown_a_list_of_results_relating_to_my_search_term()"
});
formatter.result({
  "status": "skipped"
});
});