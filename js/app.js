$(document).foundation()

$(document).ready(function(){$(".accBox").click(function(){$(".accContent").slideUp("fast");if($(this).next().is(":hidden")==true){$(this).next().slideDown("normal")}});$(".accContent").hide()});

$(document).ready(function(){$(".accBox2").click(function(){$(".accContent2").slideUp("fast");if($(this).next().is(":hidden")==true){$(this).next().slideDown("normal")}});$(".accContent2").hide()});
