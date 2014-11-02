// Demo : http://codepen.io/anon/pen/DmleB

(function(){
	var googleJson = '//script.google.com/macros/s/AKfycbwfWGECXFMWhJ2k-gRj2MIiGkAFAw3YGHIc0Ln6NJePjWE3u7wx/exec?id=1IYPS5URoexSJtEaqSl7nWwF6Xdh8zU27FQMTV7QL87M&';

	$.ajax({
		url: googleJson,
		type: 'GET',
		dataType: 'jsonp'
	})
	.done(function(result) {
		console.log("success");

		// 定義要做的事情的func //
		var doujinNews = function(){	
			// 把 loader 取代掉
			$('.loader').remove();

			// 把商品資訊放進去 //

			$('.doujin-news').find('.date').html(result.event[0].date);
			$('.doujin-news').find('.event').html(result.event[0].event);
			$('.doujin-news').find('.number').html(result.event[0].number);
			$('.doujin-news').find('.circle').html(result.event[0].circle);
			$('.doujin-news').find('.ps').html(result.event[0].ps);

			// 列出一個個商品資訊 //
			
			// 為了方便先重新命名，指定product到array中的商品物件
			var product = result.product;
			var info;

			$(product).each(function() {
				// 判斷 url 有沒有值，以便做出適當的li
				if ( this.url.length > 0) {		
					info ='<li><a href="' + this.url + '">' + this.name + '</a></li>';
				}	else {
					info ='<li>' + this.name + '</li>';			
				}
				$('.product').append(info);
			});

		};

		// 執行func //
		// 先判斷如果沒有場次資訊，則顯示目前無參場資訊。
		if ( result.event[0].date.length === 0) {
			$('.doujin-news').html('<p>目前沒有最新參場資訊</p>');
		} else {
			doujinNews();
		}

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
})();