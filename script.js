"use strict";

const sliderValue = document.querySelector("#slider");
const textValueDesktop = document.querySelector("#price-span-desktop");
const textValueMobile = document.querySelector("#price-span-mobile");
const pageViews = document.querySelector(".pageviews-p");
textValueDesktop.textContent = sliderValue.value;
textValueMobile.textContent = sliderValue.value;

if (sliderValue.value == 8) {
  pageViews.textContent = "10K pageviews";
} else if (sliderValue.value == 12) {
  pageViews.textContent = "50K pageviews";
} else if (sliderValue.value == 16) {
  pageViews.textContent = "100K pageviews";
} else if (sliderValue.value == 20) {
  pageViews.textContent = "250K pageviews";
} else if (sliderValue.value == 24) {
  pageViews.textContent = "500K pageviews";
} else if (sliderValue.value == 28) {
  pageViews.textContent = "700K pageviews";
} else if (sliderValue.value == 32) {
  pageViews.textContent = "800K pageviews";
} else if (sliderValue.value == 36) {
  pageViews.textContent = "1M pageviews";
}

sliderValue.addEventListener("input", function () {
  textValueDesktop.textContent = sliderValue.value;
  textValueMobile.textContent = sliderValue.value;
  if (sliderValue.value == 8) {
    pageViews.textContent = "10K pageviews";
  } else if (sliderValue.value == 12) {
    pageViews.textContent = "50K pageviews";
  } else if (sliderValue.value == 16) {
    pageViews.textContent = "100K pageviews";
  } else if (sliderValue.value == 20) {
    pageViews.textContent = "250K pageviews";
  } else if (sliderValue.value == 24) {
    pageViews.textContent = "500K pageviews";
  } else if (sliderValue.value == 28) {
    pageViews.textContent = "700K pageviews";
  } else if (sliderValue.value == 32) {
    pageViews.textContent = "800K pageviews";
  } else if (sliderValue.value == 36) {
    pageViews.textContent = "1M pageviews";
  }
});
