$(".navItem").click(function() {
    if ($(".sidebar").hasClass("sidebar-action")) {
        $(".sidebar").removeClass("sidebar-action");
        $(".burger").removeClass("toggle");
    }
});
$(".burger").click(function() {
	if ($(".sidebar").hasClass("sidebar-action")) {
		$(".sidebar").removeClass("sidebar-action");
		$(".burger").removeClass("toggle");
	} else {
        $(".sidebar").addClass("sidebar-action");
        $(".burger").addClass("toggle");
    }
});