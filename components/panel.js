;(function($){
    $.fn.extend({
        panel:function(opn){
            var option=$.extend($.fn.panel.defaults,opn);

            var $this = this;
            var rotate = option.rotate;
            var init = function(){
                $($this)//初始化init  //禁用拖动   //插入DOM   //设置位置   //旋转角度
                    .attr({'ondragstart':'return false','ondrag':'return false','onselectstart':'return false'})
                    .prepend(option.panlehtml)
                    .css({'top':option.y+'px','left':option.x+'px'})
                        .children('img.JHSeal_A_img').css('transform','rotate('+rotate+'deg)');
                if(option.state == 0){
                    $($this).find('.JHSeal_A_mask').css('display','block');
                }
            };
            var even = function(){
                //        panel 旋转
                $($this).find('.JHSeal_A_panel_rotate').on('click',function(){
                    rotate +=30;
                    $($this).children('.JHSeal_A_img').css('transform','rotate('+rotate+'deg)');
                });
                //        panel 删除
                $($this).find('.JHSeal_A_panel_del').on('click',function(){
                    $($this).empty();
                });
                //        panel 查看信息
                $($this).find('.JHSeal_A_panel_info').on('click',function(){
                    $('.JHSeal_A_panel_info').css('display','block');
                });
                //        鼠标悬停印章显示panel
                $($this).on('mouseenter',function(){
                    if($(this).children('.JHSeal_A_cont').children('.JHSeal_A_panel').css('display')=='none'){
                        $(this).children('.JHSeal_A_cont').children('.JHSeal_A_panel').css('display','block');
                        $(this).addClass('selected');
                    }
                }).on('mouseleave',function(){
                    if($(this).children('.JHSeal_A_cont').children('.JHSeal_A_panel').css('display')=='block'){
                        $(this).children('.JHSeal_A_cont').children('.JHSeal_A_panel').css('display','none');
                        $(this).removeClass('selected');
                    }
                });
                //        panel拖拽
                var dragstate = 0;//判断的拖拽状态
                $($this).on('mousedown',function (e) {
                    var xx = e.pageX-$($this).offset().left;
                    var yy = e.pageY-$($this).offset().top;
                    dragstate = 1;

                    $(document).on('mousemove',function(e){
                        if(dragstate == 1){
                            var x = e.pageX;
                            var y = e.pageY;
                            $($this).css({'left':x-xx+'px','top':y-yy+'px'});
                        }
                    }).on('mouseup',function(){
                        dragstate = 0;
                    });

                });
            };
            init();
            even();
        }
    });

    $.fn.panel.defaults={
        x:$(document).height()-300,
        y:600,
        rotate:0,
        state:0,
        img:'./img/1496908510117963.png',
        panlehtml:'<div class="JHSeal_A_cont">'+
        '<div class="JHSeal_A_panel">'+
        '<div class="JHSeal_A_panel_menu JHSeal_A_panel_rotate"><img src="img/ro.png" alt="" /></div>'+
        '<div class="JHSeal_A_panel_menu"><img src="img/sf.png" alt="" /></div>'+
        '<div class="JHSeal_A_panel_menu JHSeal_A_panel_info"><img src="img/info.png" alt="" /></div>'+
        '<div class="JHSeal_A_panel_menu"><img src="img/sel.png" alt="" /></div>'+
        '<div class="JHSeal_A_panel_menu JHSeal_A_panel_move"><img src="img/move.png" alt="" /></div>'+
        '<div class="JHSeal_A_panel_menu JHSeal_A_panel_del" ><img src="img/del.png" alt="" /></div>'+
        '</div>'+
        '<div class="JHSeal_A_panel_info">'+
        '<div class="JHSeal_A_panel_info_mask"></div>'+
        '<div class="panel_info_cont">'+
        '这里是信息...'+
        '</div>'+
        '</div>'
    }
})(jQuery);
