/* 
 * Copyright 2019 Ki11er_wolf.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A script for each wiki page that allows it
 * to show/hide elements depending on screen size (e.g.
 * mobile vs desktop).
 */

/**
 * Toggles the table of content visibility
 * and updates the toggle button.
 * 
 * @returns {undefined}
 */
function toggleTOC(){
    if($("#toc-pages").is(":hidden")){
        showTOC();
    } else {
        hideTOC();
    }
}

/**
 * Hides the table of content
 * and updates the toggle button.
 * 
 * @returns {undefined}
 */
function hideTOC(){
    $("#toc-pages").hide();
    $("#toc-toggle").html("Show table of content");
}

/**
 * Shows the table of content
 * and updates the toggle button.
 * 
 * @returns {undefined}
 */
function showTOC(){
    $("#toc-pages").show();
    $("#toc-toggle").html("Hide table of content");
}

/**
 * Shows or hides the table of content
 * depending on the screen size.
 * 
 * @returns {undefined}
 */
function responsiveTOC(){
    if($(window).width() < 1200){
        hideTOC();
    } else {
        showTOC();
    }
}

/**
 * Hides all elements with class "dsktop" on screens
 * smaller than 1200px. Called on both "WindowReady" and
 * "Window Resize".
 * 
 * @returns {undefined}
 */
function checkDesktopElements(){
    if($(window).width() < 1200){
        $(".dsktop").hide();
    } else {
        $(".dsktop").show();
    }
}

/**
 * Makes images smaller on desktop screens.
 */
function resizeImages(){
    if($(window).width() < 1200){
        $(".wiki-image").css("max-width", "100%");
    } else {
        $(".wiki-image").css("max-width", "65%");
    }
}

/**
 * onWindowResize. Updates the
 * table of content and .dsktop elements.
 */
$(window).resize(function(){
    responsiveTOC();
    checkDesktopElements();
    resizeImages();
});

/**
 * onWindowReady. Updates the
 * table of content and .dsktop elements.
 */
$(document).ready(function(){
    responsiveTOC();
    checkDesktopElements();
    resizeImages();
});

/**
 * On table of content toggle button pressed.
 */
$("#toc-toggle").click(function(){
    toggleTOC();
});
