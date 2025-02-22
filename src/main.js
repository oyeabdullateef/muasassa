const tabs = document.querySelectorAll(".blog_year");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

const yearOne = document.querySelector(".year1");
const yearTwo = document.querySelector(".year2");
const yearThree = document.querySelector(".year3");
const yearFour = document.querySelector(".year4");
const yearFive = document.querySelector(".year5");
const blogYear1 = document.getElementById("blog_year1");
const blogYear2 = document.getElementById("blog_year2");
const blogYear3 = document.getElementById("blog_year3");
const blogYear4 = document.getElementById("blog_year4");
const blogYear5 = document.getElementById("blog_year5");

blogYear1.addEventListener("click", () => {
  yearOne.classList.remove("hidden");
});

blogYear2.addEventListener("click", () => {
  yearTwo.classList.remove("hidden");
  yearOne.classList.add("hidden");
});

blogYear3.addEventListener("click", () => {
  yearThree.classList.remove("hidden");
  yearOne.classList.add("hidden");
});
blogYear4.addEventListener("click", () => {
  yearFour.classList.remove("hidden");
  yearOne.classList.add("hidden");
});
blogYear5.addEventListener("click", () => {
  yearFive.classList.remove("hidden");
  yearOne.classList.add("hidden");
});

const scrollContainer = document.querySelector(".service");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
forwardBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft += 1400;
});
backwardBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft -= 1400;
});

const projectScrollContainer = document.querySelector(".gallery");
const projectBtn = document.getElementById("backBtn");
const projectBtnOne = document.getElementById("nextBtn");

projectBtn.addEventListener("click", () => {
  projectScrollContainer.style.scrollBehaviour = "smooth";
  projectScrollContainer.scrollLeft += 1150;
});
projectBtnOne.addEventListener("click", () => {
  projectScrollContainer.style.scrollBehaviour = "smooth";
  projectScrollContainer.scrollLeft -= 1150;
});

const openModal = document.getElementById("open-moder-btn");
const modalWrapper = document.getElementById("modal-wrapper");
const body = document.getElementById("body");

openModal.addEventListener("click", () => {
  modalWrapper.classList.remove("hidden");
  // body.classList.add("grid", "place-items-center", "h-screen");
});

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// const hamburger = document.getElementById("hamburger");
// const navMenu = document.getElementById("nav-menu");
// const closeMenu = document.getElementById("close-menu");
// const navLink = document.querySelectorAll(".nav__link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     navMenu.classList.add("hidden");
//   })
// );

// hamburger.addEventListener("click", () => {
//   navMenu.classList.remove("hidden");
// });
// closeMenu.addEventListener("click", () => {
//   navMenu.classList.add("hidden");
// });

// const viewAll = document.querySelectorAll(".viewAllBtn a");

// viewAll.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     viewAll.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tab.classList.add("active");
//   });
// });
// const hiddeBrance = document.querySelectorAll(".hidden-brance");
// const hide = document.getElementById("hidden");
// const showMore = document.getElementById("show_more");
// const showLess = document.getElementById("show_less");

// hiddeBrance.forEach((div) =>
//   div.addEventListener("click", () => {
//     hide.classList.add("hidden");
//   })
// );

// showMore.addEventListener("click", () => {
//   hide.classList.remove("hidden");
// });
// showLess.addEventListener("click", () => {
//   hide.classList.add("hidden");
// });

// // document.addEventListener('DOMContentLoaded', () => {
//   const branchBtn = document.getElementById('branchBtn');
//   const chapterBtn = document.getElementById('chapterBtn');
//   const viewAllBtn = document.getElementById('viewAllBtn');

//   // Toggle active state for Branch/Chapter buttons
//   branchBtn.addEventListener('click', () => {
//     branchBtn.classList.add('bg-green-600', 'text-white');
//     // chapterBtn.classList.remove('bg-green-600', 'text-white');
//     // chapterBtn.classList.add('bg-gray-200', 'text-gray-800');
//     // Logic to show branches
//     // console.log('Show Branches');
//   });

//   chapterBtn.addEventListener('click', () => {
//     chapterBtn.classList.add('bg-green-600', 'text-white');
//     // branchBtn.classList.remove('bg-green-600', 'text-white');
//     // branchBtn.classList.add('bg-gray-200', 'text-gray-800');
//     // Logic to show chapters
//     // console.log('Show Chapters');
//   });

//   // Sort dropdown
//   document.getElementById('sortLocation').addEventListener('change', (e) => {
//     const sortValue = e.target.value;
//     console.log(Sorting by: ${sortValue});
//     // Add sorting logic here
//   });

//   // View All Branches button
//   viewAllBtn.addEventListener('click', () => {
//     console.log('Load more branches');
//     // Logic to load more branches
//   });
// });
