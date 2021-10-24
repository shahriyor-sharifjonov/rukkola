"use strict";function openQuickView(){var a=document.querySelector(".quick-view"),b=document.querySelector("body");a.classList.add("active"),b.style.overflow="hidden"}function closeQuickView(){var a=document.querySelector(".quick-view"),b=document.querySelector("body");a.classList.remove("active"),b.style.overflow="auto"}window.addEventListener("click",function(a){a.target.classList.contains("quick-view")&&a.target.classList.remove("active")});var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__mob-menu"),body=document.querySelector("body"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open"),checkMenu()};function checkMenu(){menuOpened?body.classList.add("overflow-hidden"):body.classList.remove("overflow-hidden")}headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},[].map.call(document.querySelectorAll("[anim=\"ripple\"]"),function(a){a.addEventListener("click",function(b){b=b.touches?b.touches[0]:b;var c=a.getBoundingClientRect(),f=2*Math.sqrt(Math.pow(c.width,2)+Math.pow(c.height,2));a.style.cssText="--s: 0; --o: 1;",a.offsetTop,a.style.cssText="--t: 1; --o: 0; --d: ".concat(f,"; --x:").concat(b.clientX-c.left,"; --y:").concat(b.clientY-c.top,";")})});function openDrop(a){a.classList.toggle("active")}window.addEventListener("click",function(a){a.target.classList.contains("header__location-li")&&this.document.querySelector(".header__location-btn").classList.remove("active")});var swiper=new Swiper(".header-carousel",{slidesPerView:"auto",spaceBetween:0,freeMode:"true",pagination:{clickable:!0}}),swiper4=new Swiper(".cart-carousel",{slidesPerView:"auto",spaceBetween:0,pagination:{clickable:!0}}),stickyOffset=$(".sticky").offset().top;$(window).scroll(function(){var a=$(".sticky"),b=$(window).scrollTop();b>=stickyOffset?a.addClass("fixed"):a.removeClass("fixed")});var swiper2=new Swiper(".carousel__main",{spaceBetween:0,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0}),swiper3=new Swiper(".carousel__thumb",{spaceBetween:4,grabCursor:!0,pagination:{el:".carousel__thumb-pagination",clickable:!0},thumbs:{swiper:swiper2}}),swiper5=new Swiper(".main-carousel",{slidesPerView:1,grabCursor:!0,pagination:{el:".main-carousel__pagination",clickable:!0},navigation:{nextEl:".main-carousel-btn-next",prevEl:".main-carousel-btn-prev"}}),swiper6=new Swiper(".reviews-carousel",{slidesPerView:"auto",spaceBetween:30,grabCursor:!0,breakpoints:{1400:{slidesPerView:3}}}),swiper6=new Swiper(".news__carousel",{slidesPerView:"auto",spaceBetween:30,grabCursor:!0,breakpoints:{1400:{slidesPerView:3}}});$(document).ready(function(){$(".accordeon__item > button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".accordeon__content ").slideUp(200)):($(".accordeon__item > button").removeClass("active"),$(this).addClass("active"),$(".accordeon__content ").slideUp(200),$(this).siblings(".accordeon__content ").slideDown(200))})}),$(document).ready(function(){$(".orders-item > .orders-item__header").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".orders-item__content").slideUp(200)):($(".orders-item > .orders-item__header").removeClass("active"),$(this).addClass("active"),$(".orders-item__content").slideUp(200),$(this).siblings(".orders-item__content").slideDown(200))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbIm9wZW5RdWlja1ZpZXciLCJxdWlja1ZpZXciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlUXVpY2tWaWV3IiwicmVtb3ZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImhlYWRlckJ1dHRvbiIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsInRvZ2dsZSIsImNoZWNrTWVudSIsIm9uY2xpY2siLCJjb21wb3NlZFBhdGgiLCJpbmNsdWRlcyIsIm1hcCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJ0b3VjaGVzIiwiciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImQiLCJNYXRoIiwic3FydCIsInBvdyIsIndpZHRoIiwiaGVpZ2h0IiwiY3NzVGV4dCIsIm9mZnNldFRvcCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIm9wZW5Ecm9wIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImZyZWVNb2RlIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsInN3aXBlcjQiLCJzdGlja3lPZmZzZXQiLCIkIiwib2Zmc2V0Iiwic2Nyb2xsIiwic3RpY2t5Iiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInN3aXBlcjIiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwic3dpcGVyMyIsImdyYWJDdXJzb3IiLCJ0aHVtYnMiLCJzd2lwZXI1IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlcjYiLCJicmVha3BvaW50cyIsInJlYWR5Iiwib24iLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlRG93biJdLCJtYXBwaW5ncyI6ImFBRUEsUUFB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U0FBekMsQ0FBbUQsR0FBbkQsQ0FSdUMsQ0FVMUMsQ0FWRCxDQVdELENBWkQsQyxDQWNBdkIsQ0FBQyxDQUFDcEQsUUFBRCxDQUFELENBQVlzRSxLQUFaLENBQWtCLFVBQUEsQ0FDaEJsQixDQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q21CLEVBQXpDLENBQTRDLE9BQTVDLENBQXFELFVBQUEsQ0FDL0NuQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQixRQUFSLENBQWlCLFFBQWpCLENBRCtDLEVBRWpEcEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxXQUFSLENBQW9CLFFBQXBCLENBRmlELENBR2pETixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixRQUFSLENBQWlCLHVCQUFqQixFQUEwQ0MsT0FBMUMsQ0FBa0QsR0FBbEQsQ0FIaUQsR0FLakR0QixDQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5Q00sV0FBekMsQ0FBcUQsUUFBckQsQ0FMaUQsQ0FNakROLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssUUFBUixDQUFpQixRQUFqQixDQU5pRCxDQU9qREwsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJzQixPQUEzQixDQUFtQyxHQUFuQyxDQVBpRCxDQVFqRHRCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLFFBQVIsQ0FBaUIsdUJBQWpCLEVBQTBDRSxTQUExQyxDQUFvRCxHQUFwRCxDQVJpRCxDQVVwRCxDQVZELENBV0QsQ0FaRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVpY2sgVmlldyBQb3B1cFxyXG4vLyBPcGVuXHJcbmZ1bmN0aW9uIG9wZW5RdWlja1ZpZXcoKSB7XHJcbiAgICBjb25zdCBxdWlja1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1aWNrLXZpZXdcIik7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBxdWlja1ZpZXcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXHJcbn1cclxuLy8gQ2xvc2VcclxuZnVuY3Rpb24gY2xvc2VRdWlja1ZpZXcoKXtcclxuICAgIGNvbnN0IHF1aWNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVpY2stdmlld1wiKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIHF1aWNrVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZTogYW55KXtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncXVpY2stdmlldycpKXsgIFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gSGVhZGVyIE1lbnVcclxuY29uc3QgaGVhZGVyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuY29uc3QgaGVhZGVyTWVudTogSFRNTFVMaXN0RWxlbWVudCA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21vYi1tZW51XCIpO1xyXG5jb25zdCBib2R5OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5sZXQgbWVudU9wZW5lZCA9IGZhbHNlO1xyXG5jb25zdCBtZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gIG1lbnVPcGVuZWQgPSAhbWVudU9wZW5lZDtcclxuICBoZWFkZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBjaGVja01lbnUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrTWVudSgpIHtcclxuICBpZiAobWVudU9wZW5lZCkgYm9keS5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gIGVsc2UgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG59XHJcbmhlYWRlckJ1dHRvbi5vbmNsaWNrID0gbWVudVRvZ2dsZTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICBpZiAoXHJcbiAgICBtZW51T3BlbmVkICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJCdXR0b24pICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KVxyXG4gIClcclxuICAgIG1lbnVUb2dnbGUoKTtcclxufTtcclxuXHJcbltdLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thbmltPVwicmlwcGxlXCJdJyksIChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICBjb25zdCByID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgIGQgPSBNYXRoLnNxcnQoTWF0aC5wb3coci53aWR0aCwgMikgKyBNYXRoLnBvdyhyLmhlaWdodCwgMikpICogMjtcclxuICAgIGVsLnN0eWxlLmNzc1RleHQgPSBgLS1zOiAwOyAtLW86IDE7YDtcclxuICAgIGVsLm9mZnNldFRvcDtcclxuICAgIGVsLnN0eWxlLmNzc1RleHQgPSBgLS10OiAxOyAtLW86IDA7IC0tZDogJHtkfTsgLS14OiR7XHJcbiAgICAgIGUuY2xpZW50WCAtIHIubGVmdFxyXG4gICAgfTsgLS15OiR7ZS5jbGllbnRZIC0gci50b3B9O2A7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb3BlbkRyb3AoZWwpIHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGVyX19sb2NhdGlvbi1saVwiKSkge1xyXG4gICAgdGhpcy5kb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xvY2F0aW9uLWJ0blwiKVxyXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuaGVhZGVyLWNhcm91c2VsXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICBzcGFjZUJldHdlZW46IDAsXHJcbiAgZnJlZU1vZGU6IFwidHJ1ZVwiLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbnZhciBzd2lwZXI0ID0gbmV3IFN3aXBlcihcIi5jYXJ0LWNhcm91c2VsXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICBzcGFjZUJldHdlZW46IDAsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudmFyIHN0aWNreU9mZnNldCA9ICQoXCIuc3RpY2t5XCIpLm9mZnNldCgpLnRvcDtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzdGlja3kgPSAkKFwiLnN0aWNreVwiKSxcclxuICAgIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgaWYgKHNjcm9sbCA+PSBzdGlja3lPZmZzZXQpIHN0aWNreS5hZGRDbGFzcyhcImZpeGVkXCIpO1xyXG4gIGVsc2Ugc3RpY2t5LnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbn0pO1xyXG5cclxudmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmNhcm91c2VsX19tYWluXCIsIHtcclxuICBzcGFjZUJldHdlZW46IDAsXHJcbiAgc2xpZGVzUGVyVmlldzogNCxcclxuICBmcmVlTW9kZTogdHJ1ZSxcclxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG59KTtcclxudmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKFwiLmNhcm91c2VsX190aHVtYlwiLCB7XHJcbiAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLmNhcm91c2VsX190aHVtYi1wYWdpbmF0aW9uXCIsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfSxcclxuICB0aHVtYnM6IHtcclxuICAgIHN3aXBlcjogc3dpcGVyMixcclxuICB9LFxyXG59KTtcclxuXHJcbnZhciBzd2lwZXI1ID0gbmV3IFN3aXBlcihcIi5tYWluLWNhcm91c2VsXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLm1haW4tY2Fyb3VzZWxfX3BhZ2luYXRpb25cIixcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIubWFpbi1jYXJvdXNlbC1idG4tbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5tYWluLWNhcm91c2VsLWJ0bi1wcmV2XCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG52YXIgc3dpcGVyNiA9IG5ldyBTd2lwZXIoXCIucmV2aWV3cy1jYXJvdXNlbFwiLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBncmFiQ3Vyc29yOiB0cnVlLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxNDAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxudmFyIHN3aXBlcjYgPSBuZXcgU3dpcGVyKFwiLm5ld3NfX2Nhcm91c2VsXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDE0MDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5hY2NvcmRlb25fX2l0ZW0gPiBidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKFwiLmFjY29yZGVvbl9fY29udGVudCBcIikuc2xpZGVVcCgyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5hY2NvcmRlb25fX2l0ZW0gPiBidXR0b25cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoXCIuYWNjb3JkZW9uX19jb250ZW50IFwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoXCIuYWNjb3JkZW9uX19jb250ZW50IFwiKS5zbGlkZURvd24oMjAwKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5vcmRlcnMtaXRlbSA+IC5vcmRlcnMtaXRlbV9faGVhZGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5zaWJsaW5ncyhcIi5vcmRlcnMtaXRlbV9fY29udGVudFwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLm9yZGVycy1pdGVtID4gLm9yZGVycy1pdGVtX19oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoXCIub3JkZXJzLWl0ZW1fX2NvbnRlbnRcIikuc2xpZGVVcCgyMDApO1xyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKFwiLm9yZGVycy1pdGVtX19jb250ZW50XCIpLnNsaWRlRG93bigyMDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl19
