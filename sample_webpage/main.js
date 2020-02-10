$(document).ready(function() {
	$("a").attr("href", "www.codefactory.wien");
	$("code").css("color", "red");
	$("ol > li").css("background-color", "#2a7b90");
	$("textarea").attr("placeholder", "Express your opinion");
	$("img").attr("src", "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
	$("blockquote").css("background-color", "orange").css("font-style","italic");
	$("#logo").css("background-color", "black");
	$("h1 > span").css("background-color", "white");
	$(".date").remove();
	$(".sidemenu").append("<li><a href=\"#NewTemplates\">New Templates</a></li>");
	$(".sidemenu").append("<li><a href=\"#OrderTemplates\">Order Template</a></li>");
	$(".sidemenu").append("<li><a href=\"#ContactUs\">Contact Us</a></li>");
	$("#wise").html("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});