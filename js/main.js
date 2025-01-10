// ページ内スクロール
$('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });


  // スクロール出現アニメーション
function scr_ani(scr, offs_max) {
	var window_h = $(window).height(),
	  offs_length = $(".offs").length,
	  ons_length = $(".ons").length;
	if (offs_length) {
	  var first_item = offs_max - offs_length;
	  for (var i = 0; i < offs_length; i++) {
		var data_scr = first_item + i;
		var offs = $('.offs[data-scr="' + data_scr + '"]');
		var target = offs.offset().top;
		var trigger = target - (window_h + scr - window_h * 0.2);
		if (trigger < 0) {
		  offs.removeClass("offs").addClass("ons");
		} else {
		  return;
		}
	  }
	}
	if (ons_length) {
	  var last_item = ons_length - 1;
	  for (var i = 0; i < ons_length; i++) {
		var data_scr = last_item - i;
		var ons = $('.ons[data-scr="' + data_scr + '"]');
		var target = ons.offset().top;
		var trigger = target - (window_h + scr);
		if (trigger > 0) {
		  ons.removeClass("ons").addClass("offs");
		} else {
		  return;
		}
	  }
	}
}

$(function () {
	var scr = $(window).scrollTop();
	var offs_max = $(".offs").length;
	$(".offs").each(function(index) {
		$(this).attr("data-scr", index);
	});
	scr_ani(scr, offs_max);
	$(window).on("scroll", function () {
		scr_ani($(window).scrollTop(), offs_max);
	});
});