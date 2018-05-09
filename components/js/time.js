//闭包			
(function($) {
	$.extend({
		myTime: {
			/**
			 * 当前时间戳
			 * @return <int>        unix时间戳(秒)
			 */
			CurTime: function() {
				return Date.parse(new Date()) / 1000;
			},
			/**
			 * 日期 转换为 Unix时间戳
			 * @param <string> 2014-01-01 20:20:20  日期格式
			 * @return <int>        unix时间戳(秒)
			 */
			DateToUnix: function(string) {
				var f = string.split(' ', 2);
				//							console.log(f);
				var d = (f[0] ? f[0] : '').split('-', 3);
				//							console.log(d);
				var t = (f[1] ? f[1] : '').split(':', 3);
				//							console.log(t);
				return(new Date(
					parseInt(d[0], 10) || null,
					(parseInt(d[1], 10) || 1) - 1,
					parseInt(d[2], 10) || null,
					parseInt(t[0], 10) || null,
					parseInt(t[1], 10) || null,
					parseInt(t[2], 10) || null
				)).getTime();
			},
			/**
			 * 时间戳转换日期
			 * @param <int> unixTime    待时间戳(秒)
			 * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
			 * @param <int>  timeZone   时区
			 */
			UnixToDate: function(unixTime) {

				var time = new Date(unixTime);
				var ymdhis = "";
				ymdhis += time.getFullYear() + "-";
				ymdhis += (time.getMonth() + 1) + "-";
				ymdhis += time.getDate();
				return ymdhis;
			}
		}

	});
	;$.fn.extend({
		max: function() {
			var max = 1;
//			this.each(function() {
//				max = Math.max(max, $(this).height());
//			});
			return max;
		}
	});
})(jQuery);
//console.log($.myTime.DateToUnix('2014-5-15 20:20:20'));
//console.log($.myTime.UnixToDate(1325347200));
//时间戳end
// eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[4-9a-ceg-k]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9($){$.fn.extend({myTime:{CurTime:9(){c a.parse(e a())/1000},DateToUnix:9(j){6 f=j.g(\' \',2);h.i(f);6 d=(f[0]?f[0]:\'\').g(\'-\',3);h.i(d);6 t=(f[1]?f[1]:\'\').g(\':\',3);h.i(t);c(e a(4(d[0],5)||7,(4(d[1],5)||1)-1,4(d[2],5)||7,4(t[0],5)||7,4(t[1],5)||7,4(t[2],5)||7)).getTime()},UnixToDate:9(k){6 b=e a(k);6 8="";8+=b.getFullYear()+"-";8+=(b.getMonth()+1)+"-";8+=b.getDate();c 8}}})})(jQuery);',[],21,'||||parseInt|10|var|null|ymdhis|function|Date|time|return||new||split|console|log|string|unixTime'.split('|'),0,{}))
//			console.log($.myTime.CurTime('2014-5-15 20:20:20'));
console.log($.myTime.DateToUnix('2014-5-15 20:20:20'));
//			console.log($.myTime1.UnixToDate(1325347200));
console.log($('#calendar').max())
//			$.ajax({
//				type: 'get',
//				url: "http://192.168.0.73:8080/mServer/StudentInq",
//				//http://localhost:8080/mServer/StudentInq
//				//				    contentType:"application/json; charset=UTF-8",
//				success: function(res) {
//					console.log(res);
//				},
//				error: function(XMLHttpRequest, res, errorThrown) {
//					console.error(XMLHttpRequest.status);
//					console.error(XMLHttpRequest.readyState);
//					console.error(errorThrown);
//					console.error(res);
//				}
//			
//			function aaa(){
//				
//			}==>aaa: function() {}