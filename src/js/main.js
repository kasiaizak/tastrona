"use strict";

// hamburger menu
const buttonMenu = document.querySelector('.button__menu--js');
const searchBar = document.querySelector('.navbar__search--js');
const content = document.querySelector('.content--js');

const contentSwitcher = (e) => {
  const main = document.querySelector('.main--js');
  const navbar = document.querySelector('.navbar--js');
  const logo = document.querySelector('.navbar__item--logo-js');
  const header = document.querySelector('.header--js');

  main.classList.toggle('main--change-color');
  navbar.classList.toggle('navbar--add-background');
  logo.classList.toggle('navbar__item--logo-change-color');
  header.classList.toggle('header--hide');
  content.classList.toggle('content--visible');

  if (content.classList.contains('content--visible')) {
    buttonMenu.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    buttonMenu.innerHTML = '<i class="fas fa-bars"></i>';
    searchBar.classList.toggle('navbar__search--visible');
  }
}

buttonMenu.addEventListener('click', (e) => {
  contentSwitcher();
});


// back to homepage from menu

const showHomepage = document.querySelector('.menu__item--homepage-js');

showHomepage.addEventListener('click', (e) => {
  contentSwitcher();
});


// show content essence

const showOffer = document.querySelector('.menu__item--offer-js');
const showArticles = document.querySelector('.menu__item--articles-js');
const showContact = document.querySelector('.menu__item--contact-js');
const offer = document.querySelector('.offer--js');
const articles = document.querySelector('.articles--js');
const contact = document.querySelector('.contact--js');

showOffer.addEventListener('click', (e) => {
  showOffer.classList.toggle('menu__item--open');
  offer.classList.toggle('offer--visible');
  if (articles.classList.contains('articles--visible')) {
    articles.classList.remove('articles--visible');
    showArticles.classList.remove('menu__item--open');
  }
  if (contact.classList.contains('contact--visible')) {
    contact.classList.remove('contact--visible');
    showContact.classList.remove('menu__item--open');
  }
});

showArticles.addEventListener('click', (e) => {
  showArticles.classList.toggle('menu__item--open');
  articles.classList.toggle('articles--visible');
  if (offer.classList.contains('offer--visible')) {
    offer.classList.remove('offer--visible');
    showOffer.classList.remove('menu__item--open');
  }
  if (contact.classList.contains('contact--visible')) {
    contact.classList.remove('contact--visible');
    showContact.classList.remove('menu__item--open');
  }
});

showContact.addEventListener('click', (e) => {
  showContact.classList.toggle('menu__item--open');
  contact.classList.toggle('contact--visible');
  if (offer.classList.contains('offer--visible')) {
    offer.classList.remove('offer--visible');
    showOffer.classList.remove('menu__item--open');
  }
  if (articles.classList.contains('articles--visible')) {
    articles.classList.remove('articles--visible');
    showArticles.classList.remove('menu__item--open');
  }
});


// search

const buttonSearch = document.querySelector('.button__search--js');

buttonSearch.addEventListener('click', (e) => {
  if (content.classList.contains('content--visible')) {
    searchBar.classList.toggle('navbar__search--visible');
  } else {
    contentSwitcher();
    searchBar.classList.toggle('navbar__search--visible');
  }
});


$(function() {
  $(".navbar__search--js").on("input.highlight", function() {
    // Determine specified search term
    const searchTerm = $(this).val();
    // Highlight search term inside a specific context
    $(".content--js").unmark().mark(searchTerm);
  }).trigger("input.highlight").focus();
});