"use strict";

import axios from "axios";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => spinner(), 4000);
});

const spinner = () => {
  // Create an opacity element
  const opacity = document.createElement("div");
  opacity.classList.add("opacity");
  document.body.appendChild(opacity);

  // create the container
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper", "move-towards-left");
  document.body.appendChild(wrapper);

  // create the row
  const row = document.createElement("div");
  row.classList.add("row");
  wrapper.appendChild(row);

  // create the closing button
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.classList.add("close-spinner", "material-icons");

  // create the closing icon
  const closeIcon = document.createTextNode("close");
  closeBtn.appendChild(closeIcon);

  // close the spinner on button click
  closeBtn.addEventListener("click", event => {
    document.body.removeChild(opacity);
    wrapper.classList.remove("move-towards-left");
    wrapper.classList.add("move-outwards-left");
    setTimeout(() => {
      document.body.removeChild(wrapper);
    }, 500);
  });

  wrapper.appendChild(closeBtn);

  // create first column
  const colFirst = document.createElement("div");
  colFirst.classList.add("col-12", "order-last", "order-sm-first", "col-sm-6");
  colFirst.style.minHeight = "90vh";
  row.appendChild(colFirst);

  // create the second column
  const colSecond = document.createElement("div");
  colSecond.classList.add("col-12", "order-first", "order-sm-last", "col-sm-6");
  row.appendChild(colSecond);

  // first column content
  const spinnerContainer = document.createElement("div");
  spinnerContainer.classList.add("spinner-container");
  colFirst.appendChild(spinnerContainer);

  const wheel = document.createElement("div");
  wheel.classList.add("wheel");
  spinnerContainer.appendChild(wheel);

  const wheelImg = document.createElement("img");
  wheelImg.classList.add("img-fluid", "img-outline", "z-index-3");
  wheelImg.src = "./img/wheel8.png";
  wheelImg.alt = "wheel coloured image";

  wheel.appendChild(wheelImg);

  const wheelOutlineImg = document.createElement("img");
  wheelOutlineImg.classList.add("img-fluid", "img", "z-index-4");
  wheelOutlineImg.src = "./img/outline.png";
  wheelOutlineImg.alt = "outlined image";

  wheel.appendChild(wheelOutlineImg);

  const marker = document.createElement("img");
  marker.src = "./img/marker.png";
  marker.alt = "marker";
  marker.classList.add("marker");

  spinnerContainer.appendChild(marker);

  // second column content
  const form = document.createElement("form");
  form.classList.add("mt-3", "d-flex", "flex-column", "justify-content-center");
  form.style.height = "100%";

  colSecond.appendChild(form);

  const content = document.createElement("div");
  content.classList.add("content");
  form.appendChild(content);

  const h3 = document.createElement("h3");
  h3.classList.add(
    "text-left",
    "text-light",
    "text-uppercase",
    "font-weight-bold",
    "text-justify"
  );
  content.appendChild(h3);

  const h3Text = document.createTextNode(
    "WE HAVE A BONUS FOR EACH ONE OF YOU!"
  );
  h3.appendChild(h3Text);

  const br1 = document.createElement("br");
  content.appendChild(br1);

  const h6 = document.createElement("h6");
  h6.classList.add("text-left", "text-light", "text-justify");
  content.appendChild(h6);

  const h6Text = document.createTextNode(
    "Try your luck on our coupon wheel for some exciting offers!"
  );
  h6.appendChild(h6Text);

  const br2 = document.createElement("br");
  content.appendChild(br2);

  const formGroup1 = document.createElement("div");
  formGroup1.classList.add("form-group");

  content.appendChild(formGroup1);

  const email = document.createElement("input");
  email.type = "email";
  email.classList.add("form-control");
  email.placeholder = "Enter your E-mail";
  email.required = true;

  formGroup1.appendChild(email);

  const formGroup2 = document.createElement("div");
  formGroup2.classList.add("form-group");

  content.appendChild(formGroup2);

  const name = document.createElement("input");
  name.type = "text";
  name.classList.add("form-control");
  name.placeholder = "Enter your Name";
  name.required = true;

  formGroup2.appendChild(name);

  const formGroup3 = document.createElement("div");
  formGroup3.classList.add("form-group");

  content.appendChild(formGroup3);

  const contact = document.createElement("input");
  contact.type = "tel";
  contact.classList.add("form-control");
  contact.placeholder = "Enter your Contact Number";
  contact.required = true;

  formGroup3.appendChild(contact);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add(
    "btn",
    "btn-light",
    "text-uppercase",
    "text-center",
    "btn-lg"
  );
  submitButton.style.width = "100%";

  const submitBtnText = document.createTextNode("SPIN THE WHEEL");
  submitButton.appendChild(submitBtnText);

  content.appendChild(submitButton);

  const progress = document.createElement("div");
  progress.classList.add("progress", "mt-4");
  progress.style.border = "1px solid #fff";

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar", "bg-light-green");
  progressBar.style.width = "70%";

  progress.appendChild(progressBar);

  content.appendChild(progress);

  const footer1 = document.createElement("p");
  const footerText1 = document.createTextNode(
    "70% offers have been claimed, spin the wheel now to claim yours!"
  );
  footer1.appendChild(footerText1);
  footer1.classList.add("text-light", "mt-4");
  content.appendChild(footer1);

  const footer2 = document.createElement("p");
  footer2.classList.add("text-light", "m-0", "mt-5", "font-weight-bold");

  const footer2Text = document.createTextNode("Rules");
  footer2.appendChild(footer2Text);

  content.appendChild(footer2);

  const footer3 = document.createElement("p");
  footer3.classList.add("mb-0", "mt-0", "text-light");
  footer3.style.lineHeight = 1;

  const footer3Text1 = document.createTextNode("- One spin per customer");
  const footer3Text2 = document.createTextNode("- No cheating allowed");

  const br3 = document.createElement("br");

  footer3.appendChild(footer3Text1);
  footer3.appendChild(br3);
  footer3.appendChild(footer3Text2);

  content.appendChild(footer3);

  form.addEventListener("submit", event => {
    event.preventDefault();
    wheelImg.classList.add("rotate");
    // if (window.screen.width <= 9050) {
    //   window.scrollTo(0, document.body);
    //   console.log("hello");
    // }
    axios
      .post(
        `http://127.0.0.1:8000/spinner/${name.value}/${email.value}/${contact.value}`
      )
      .then(response => {
        if (response.data.generated) {
          wheelImg.style.transform = "scale(1.09)";
          wheelImg.style.transform = "scale(1.09) rotateZ(-20deg)";
          wheelImg.style.transition = "2s ease";
          setTimeout(() => {
            wheelImg.classList.remove("rotate");
          }, 3050);
        } else {
          wheelImg.style.transition = "2s ease";
          wheelImg.style.transform = "scale(1.09) rotateZ(20deg)";
          setTimeout(() => {
            wheelImg.classList.remove("rotate");
          }, 3050);
        }
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.request);
      });
  });
};
