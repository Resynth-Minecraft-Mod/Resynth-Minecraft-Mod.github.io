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

/*
 * Removes the curse forge project iframe on smaller
 * screens and makes sure sizes are correct on mobile as well 
 */

$(window).resize(function () {

    if ($(window).width() < 1000) {
        $("#forge-frame").hide();
    } else {
        $("#forge-frame").show();
    }

    if ($(window).width() < 800) {
        $("#introduction").removeClass("it");
        $("#introduction").addClass("it-mobile");
        $("#img-0").addClass("image-mobile");
        $("#img-1").addClass("image-mobile");
        $("#img-2").addClass("image-mobile");
    } else {
        $("#introduction").removeClass("it-mobile");
        $("#introduction").addClass("it");
        $("#img-0").removeClass("image-mobile");
        $("#img-1").removeClass("image-mobile");
        $("#img-2").removeClass("image-mobile");
    }
});

$(document).ready(function () {
    if ($(window).width() < 1000) {
        $("#forge-frame").hide();
    }

    if ($(window).width() < 800) {
        $("#introduction").removeClass("it");
        $("#introduction").addClass("it-mobile");
        $("#img-0").addClass("image-mobile");
        $("#img-1").addClass("image-mobile");
        $("#img-2").addClass("image-mobile");
    } else {
        $("#introduction").removeClass("it-mobile");
        $("#introduction").addClass("it");
        $("#img-0").removeClass("image-mobile");
        $("#img-1").removeClass("image-mobile");
        $("#img-2").removeClass("image-mobile");
    }
});