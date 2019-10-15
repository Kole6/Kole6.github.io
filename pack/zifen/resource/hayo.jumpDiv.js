/*
 * @author hzy
 * @version 0.2
 * @update 2014-11-22 15:24
 */
(function($) {
	// init style
	var css = [];
	css.push('<style type="text/css">');
	css.push('.tableTitle{height: 29px; line-height: 29px; padding-left: 15px; font-size: 14px; color: #666; font-weight: bold; background-color: #f8f8f8; border-bottom: 1px solid #eee;}');
	css.push('.upDiv{position: fixed; z-index: 1001; background-color: #fff; display: none; border-radius: 3px;}');
	css.push('.upDivW{position: fixed; z-index: 1000; left: 0px; top: 0px; background-color: #000; filter:alpha(opacity=3); -moz-opacity:0.3; opacity:0.3; display: none;}');
	css.push('.rCloseBtn{width:18px; height:18px; border-radius: 50%; line-height:16px; float: right; cursor: pointer; text-align:center; position: absolute; right: 5px; top: 5px; font-weight: bold; font-size: 16px; color: #666;}');
	css.push('.rCloseBtn:hover{color: #fff; background-color:#888;}');
	css.push('.alertTab{height: 55px; padding: 0 15px; font-size:14px;}');
	css.push('.jdBtn1{width:70px; height:29px; line-height:29px; text-align:center; float:right; margin-right:15px; background-color:#0170cb; color:#fff; cursor: pointer; border-radius:3px; font-size:14px;}');
	
	css.push('</style>');
	$(document).find("head").append(css.join(''));
	
	$.jumpDiv = $.jumpDiv || {};
	$.jumpDiv.showDiv = function(width, height, title, type, txt, showTitle) {
		
		// 判断是否填满父窗口
		var fillParent = false;
		if(width==0 && height==0){
			fillParent = true;
			showTitle = true
			width = $(window).width();
			height = $(window).height()-30;
		}
		
		// clear
		$.jumpDiv.removeDiv();
		
		// make div
		var s = new Date().getTime();
		var divTxt = [];
		divTxt.push("<div id=\"upDivW"+s+"\" class=\"upDivW\"></div>");
		divTxt.push("<div id=\"upDiv"+s+"\" class=\"upDiv\" style=\"width: "+width+"px; height: "+(height+(showTitle?30:0))+"px;\" >");
		
		if(showTitle){
			if(title!=""){
				divTxt.push("	<div class=\"tableTitle\">");
				divTxt.push("		<div style=\"width: auto; float: left;\">" + title + "</div>");
				divTxt.push("		<div id=\"rcb"+s+"\" class=\"rCloseBtn\">x</div>");
				divTxt.push("	</div>");
			}else{
				divTxt.push("	<div style='height:30px;'>");
				divTxt.push("		<div id=\"rcb"+s+"\" class=\"rCloseBtn\">x</div>");
				divTxt.push("	</div>");
			}
		}
		
		divTxt.push("	   <div class=\"cntWarp\" style=\"width: "+(width-2)+"px; height: "+height+"px; border-top: none;\" >");
		if(type=='iframe'){
			divTxt.push("		   <iframe id=\"rof"+s+"\" name=\"rof"+s+"\" frameborder=\"0\" style=\"width: "+width+"px; height: "+height+"px;\"></iframe>");	
		}else if(type=='txt'){
			divTxt.push(txt);
		}
		divTxt.push("    </div>");
		divTxt.push("</div>");
		
		$(document).find("body").append(divTxt.join(""));
		
		$.jumpDiv.resizeDiv(width,height,fillParent);
		
		$(window).resize(function(){
			$.jumpDiv.resizeDiv(width,height,fillParent);
		});
		
		if(type=='iframe'){
			window.frames["rof"+s].location.href=txt;
		}
		
		$(".rCloseBtn").click(function(){
			$.jumpDiv.removeDiv();
		});
	};
	
	$.jumpDiv.removeDiv = function(){
		$(".upDivW").remove();
		$(".upDiv").remove();
	};
	
	$.jumpDiv.resizeDiv = function(width,height,fillParent){
		
		// show background
		$(".upDivW").show();
		var bkw = $(window).width()>width?$(window).width():width;
		var bkh = $(window).height()>height?$(window).height():height;
		if($(document).height()>bkh){
			bkh = $(document).height();
		}
		
		$(".upDivW").css({
			"width" : bkw+"px",
			"height" : "100%"
		});
		
		
		// show operation
		$(".upDiv").show();
		if(!fillParent){
			var mleft = ($(window).width() - width) / 2;
			if (mleft < 0) {
				mleft = 0;
			}
			var mtop = ($(window).height() - height) / 2 ///+ $(document).scrollTop();
			if (mtop < 0) {
				mtop = 0;
			}
			$(".upDiv").css({
				"left" : mleft + "px",
				"top" : mtop + "px"
			});
		}else{
			$(".upDiv").css({
				"left" : "0px",
				"top" : "0px"
			});
		}
		
	};
	
	$.jumpDiv.param = function(param){
		if(param["touchBlankClose"]){
			$(".upDivW").click(function(){
				$.jumpDiv.removeDiv();
			});
		}
	};
	// $.jumpDiv.param({
	// 		"touchBlankClose":true
	// });
	
	$.jumpDiv.alert = function(msg){
		var txt = "";
		txt += "<table class='alertTab'><tr><td>"+msg+"</td></tr></table>";
		txt += "<div class='jdBtn1' onclick=\"$.jumpDiv.removeDiv();\">确定</div>";
		$.jumpDiv.showDiv(430, 100, "", "txt", txt, true); 
	};
	
})(jQuery);