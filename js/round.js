$(function(){
    $(window).scroll(function(){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth;
        console.log(scrollNull);
        console.log($windowWidth);
        if($windowWidth >= 1920){
            if(scrollNull < 950){
                $(".imgBox_sb").css({"position":"relative","top":"25%"});
            }else if(950 < scrollNull && scrollNull <1750){
                $(".imgBox_sb").css({"position":"fixed","top":"55%"});
            }else if(scrollNull > 1750){
                $(".imgBox_sb").css({"position":"relative","top":"63%"});
            }

            if(scrollNull > 1400){
                $(".img1_sb").animate({opacity:0.2},500);
            }else if(scrollNull < 1200){
                $(".img1_sb").stop(true).animate({opacity:1},300);  
            }
        }else if($windowWidth >= 1750){
            if(scrollNull < 950){
                $(".imgBox_sb").css({"position":"relative","top":"25%"});
            }else if(950 < scrollNull && scrollNull <1650){
                $(".imgBox_sb").css({"position":"fixed","top":"55%"});
            }else if(scrollNull > 1650){
                $(".imgBox_sb").css({"position":"relative","top":"63%"});
            }

            if(scrollNull > 1000){
                $(".img1_sb").animate({opacity:0.2},500);
            }else if(scrollNull < 1200){
                $(".img1_sb").stop(true).animate({opacity:1},300);  
            }
        }else if($windowWidth >= 1680){
            if(scrollNull < 900){
                $(".imgBox_sb").css({"position":"relative","top":"25%"});
            }else if(900 < scrollNull && scrollNull <1550){
                $(".imgBox_sb").css({"position":"fixed","top":"55%"});
            }else if(scrollNull > 1550){
                $(".imgBox_sb").css({"position":"relative","top":"63%"});
            }

            if(scrollNull > 1000){
                $(".img1_sb").animate({opacity:0.2},500);
            }else if(scrollNull < 1200){
                $(".img1_sb").stop(true).animate({opacity:1},300);  
            }
        }else if($windowWidth >= 1440){
            if(scrollNull < 750){
                $(".imgBox_sb").css({"position":"relative","top":"25%"});
            }else if(750 < scrollNull && scrollNull <1350){
                $(".imgBox_sb").css({"position":"fixed","top":"55%"});
            }else if(scrollNull > 1350){
                $(".imgBox_sb").css({"position":"relative","top":"63%"});
            }

            if(scrollNull > 1000){
                $(".img1_sb").animate({opacity:0.2},500);
            }else if(scrollNull < 1200){
                $(".img1_sb").stop(true).animate({opacity:1},300);  
            }
        }else if($windowWidth >= 1366){
            if(scrollNull < 750){
                $(".imgBox_sb").css({"position":"relative","top":"25%"});
            }else if(750 < scrollNull && scrollNull <1270){
                $(".imgBox_sb").css({"position":"fixed","top":"55%"});
            }else if(scrollNull > 1270){
                $(".imgBox_sb").css({"position":"relative","top":"63%"});
            }

            if(scrollNull > 1000){
                $(".img1_sb").animate({opacity:0.2},500);
            }else if(scrollNull < 1200){
                $(".img1_sb").stop(true).animate({opacity:1},300);  
            }
        }else if($windowWidth >= 1280){
            if(scrollNull < 670){
                $(".imgBox_sb").css({"position":"relative","top":"25%"});
            }else if(670 < scrollNull && scrollNull <1150){
                $(".imgBox_sb").css({"position":"fixed","top":"55%"});
            }else if(scrollNull > 1150){
                $(".imgBox_sb").css({"position":"relative","top":"63%"});
            }

            if(scrollNull > 900){
                $(".img1_sb").animate({opacity:0.2},500);
            }else if(scrollNull < 1200){
                $(".img1_sb").stop(true).animate({opacity:1},300);  
            }
        }
    })
})