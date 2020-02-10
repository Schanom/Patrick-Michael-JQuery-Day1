$("a").attr("href","www.codefactory.wien");
$("code").css("color","red");
$("ol:has(li)").css("background-color", "#2a7b90");
$("textarea").attr("placeholder","Express your opinion");
$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
$("blockquote").css(
   {
       "background-color":"orange",
       "font-style":  "italic"
   }
);
$("#logo").css("color","black");
$("h1 > span").css("color","white");
$(".date").remove();
$(".sidemenu").append("<li><a href=\"#NewTemplates\"><span>New Templates</span></a></li>");
$(".sidemenu").append("<li><a href=\"#Order Template\"><span>Order Template</span></a></li>");
$(".sidemenu").append("<li><a href=\"#Contact Us\"><span>Contact Us</span></a></li>");
$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");





