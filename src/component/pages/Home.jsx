import React, { useState, useRef, useEffect } from "react";
import me from "../../assets/me.jpg";
import "../../styles/Home.scss";
import users from "../../assets/user-02.jpg";
import user from "../../assets/user-03.jpg";

function Home() {
  const nav = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function myFunction(x) {
  x.classList.toggle("change");
  setIsOpen(prev => !prev)
}


  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY > 500) {
        nav.current.style.backgroundColor = "transparent";
      } else {
        nav.current.style.backgroundColor = "#8080802c";
      }
    };
    window.addEventListener("scroll", handleNav);
  }, []);

  return (
    <>
      <header id="header">
        <nav>
          <ul>
            <li className="active" ref={nav}>
              <a href="">NCMANUS.Dev</a>
            </li>
            <li>
              <a href="#header">INTRO</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#works">WORKS</a>
            </li>
            <li>
              <a href="#hello">
                SAY<i class="ri-hand"></i>
              </a>
            </li>
          </ul>
        </nav>
        {/* responsive-nav */}
        <div className="sub-nav">
          <div className="responsive-nav">
            <a href="#" className="active">
              NCMANUS.Dev
            </a>

            <div class="hamburger-menu" onClick={(e) =>  myFunction(e.currentTarget)}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>

          {isOpen && (
            <div className="nav-res-links">
              <ul>
                <li>
                  <a href="">NCMANUS.Dev</a>
                </li>
                <li>
                  <a href="">INTRO</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">WORKS</a>
                </li>
                <li>
                  <a href="">
                    SAY<i class="ri-hand"></i>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main>
        <section>

          <div className="hero">
            <div className="container">
              <h3>
                <span className="line"></span> <span> HELLO WORLD</span>
              </h3>
              <h1>
                I am Ncmanus, a digital designer & frontend developer based in
                Somewhere.
              </h1>

              <a href="#about" className="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.0001 1.99974L11.0002 1.9996L11.0002 18.1715L7.05044 14.2218L5.63623 15.636L12.0002 22L18.3642 15.636L16.9499 14.2218L13.0002 18.1716L13.0001 1.99974Z"></path>
                </svg>
              </a>
            </div>
            
            <div className="container1">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61574116185552">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Whatsapp</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            <a href="#about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.0001 1.99974L11.0002 1.9996L11.0002 18.1715L7.05044 14.2218L5.63623 15.636L12.0002 22L18.3642 15.636L16.9499 14.2218L13.0002 18.1716L13.0001 1.99974Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about">
            <img src={me} alt="developer img" draggable="false" />
            <div className="about-write">
              <h3>
                <span className="line"></span> <span>About</span>
              </h3>
              <p>
              Hi, it's me Mcmanus a frontend  Developer who blends technical skill with creative vision.Specializing in HTML,CSS, and JavaScript,
              to create clean,interactive, and responsive user interfaces that feel smooth on every screen. As part of the IGHUB Front-End Development track, they’re constantly leveling up—learning, creating, and pushing the limits of what the browser can do.
              </p>
              <button>DOWNLOAD CV</button>
            </div>
          </div>
        </section>

        <section className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z"></path>
          </svg>
          <svg
            className="seperate"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001ZM11.4733 16.4945C11.6479 16.705 11.8239 16.908 12.001 17.103C12.178 16.908 12.3541 16.705 12.5286 16.4945C12.3538 16.4982 12.1779 16.5001 12.001 16.5001C11.824 16.5001 11.6481 16.4982 11.4733 16.4945ZM9.47837 16.3694C8.6762 16.2846 7.91035 16.1603 7.19268 16.0016C7.11832 16.3512 7.06134 16.6904 7.02243 17.0166C6.83358 18.6 7.09805 19.5617 7.50098 19.7943C7.9039 20.0269 8.86893 19.7751 10.1458 18.8199C10.4088 18.6231 10.6741 18.4042 10.9397 18.1649C10.4434 17.6228 9.95287 17.0217 9.47837 16.3694ZM16.8093 16.0016C16.0916 16.1603 15.3257 16.2846 14.5236 16.3694C14.0491 17.0217 13.5585 17.6228 13.0622 18.1649C13.3279 18.4042 13.5931 18.6231 13.8562 18.8199C15.133 19.7751 16.0981 20.0269 16.501 19.7943C16.9039 19.5617 17.1684 18.6 16.9795 17.0166C16.9406 16.6904 16.8836 16.3512 16.8093 16.0016ZM18.2598 15.6136C18.8364 18.2526 18.5328 20.3533 17.251 21.0933C15.9691 21.8334 13.9981 21.046 12.001 19.2271C10.0038 21.046 8.03282 21.8334 6.75098 21.0933C5.46913 20.3533 5.16555 18.2526 5.74217 15.6136C3.16842 14.7935 1.50098 13.4802 1.50098 12.0001C1.50098 10.5199 3.16842 9.20668 5.74217 8.38654C5.16555 5.74754 5.46913 3.64687 6.75098 2.9068C8.03282 2.16673 10.0038 2.95415 12.001 4.77302C13.9981 2.95415 15.9691 2.16673 17.251 2.9068C18.5328 3.64687 18.8364 5.74754 18.2598 8.38654C20.8335 9.20668 22.501 10.5199 22.501 12.0001C22.501 13.4802 20.8335 14.7935 18.2598 15.6136ZM10.9397 5.83521C10.6741 5.59597 10.4088 5.37703 10.1458 5.18024C8.86893 4.22499 7.9039 3.97321 7.50098 4.20584C7.09805 4.43847 6.83358 5.4001 7.02243 6.9835C7.06134 7.30969 7.11832 7.6489 7.19268 7.99857C7.91035 7.83985 8.6762 7.71556 9.47837 7.63078C9.95287 6.97848 10.4434 6.37737 10.9397 5.83521ZM14.5236 7.63078C15.3257 7.71556 16.0916 7.83985 16.8093 7.99857C16.8836 7.6489 16.9406 7.30969 16.9795 6.9835C17.1684 5.4001 16.9039 4.43847 16.501 4.20584C16.0981 3.97321 15.133 4.22499 13.8562 5.18024C13.5931 5.37703 13.3279 5.59597 13.0622 5.83521C13.5585 6.37737 14.0491 6.97848 14.5236 7.63078ZM12.5286 7.50565C12.3541 7.29515 12.178 7.09211 12.001 6.89711C11.8239 7.09211 11.6479 7.29515 11.4733 7.50565C11.6481 7.50194 11.824 7.50007 12.001 7.50007C12.1779 7.50007 12.3538 7.50194 12.5286 7.50565ZM8.37252 14.7042C8.28191 14.5547 8.19233 14.4033 8.10386 14.2501C8.01539 14.0968 7.92906 13.9435 7.84488 13.7903C7.74985 14.0467 7.66205 14.3007 7.58169 14.5515C7.83908 14.6074 8.10295 14.6583 8.37252 14.7042ZM10.3049 14.9377C10.8579 14.9788 11.4251 15.0001 12.001 15.0001C12.5769 15.0001 13.144 14.9788 13.697 14.9377C14.0091 14.4793 14.3111 13.9988 14.5991 13.5001C14.887 13.0013 15.1522 12.4995 15.393 12.0001C15.1522 11.5006 14.887 10.9988 14.5991 10.5001C14.3111 10.0013 14.0091 9.52081 13.697 9.06246C13.144 9.02133 12.5769 9.00007 12.001 9.00007C11.4251 9.00007 10.8579 9.02133 10.3049 9.06246C9.99283 9.52081 9.69086 10.0013 9.4029 10.5001C9.11494 10.9988 8.8498 11.5006 8.60892 12.0001C8.8498 12.4995 9.11494 13.0013 9.4029 13.5001C9.69086 13.9988 9.99283 14.4793 10.3049 14.9377ZM16.1571 10.2098C16.2521 9.9534 16.3399 9.6994 16.4203 9.44859C16.1629 9.39278 15.899 9.34182 15.6294 9.29591C15.72 9.44543 15.8096 9.59683 15.8981 9.75007C15.9866 9.9033 16.0729 10.0566 16.1571 10.2098ZM6.13143 9.83671C5.79142 9.94714 5.46917 10.0674 5.16723 10.1968C3.70154 10.825 3.00098 11.5348 3.00098 12.0001C3.00098 12.4653 3.70154 13.1752 5.16723 13.8033C5.46917 13.9327 5.79142 14.053 6.13143 14.1634C6.35281 13.4625 6.6281 12.7371 6.95576 12.0001C6.6281 11.263 6.35281 10.5376 6.13143 9.83671ZM7.58169 9.44859C7.66205 9.6994 7.74985 9.9534 7.84488 10.2098C7.92906 10.0566 8.01539 9.9033 8.10386 9.75007C8.19233 9.59683 8.28191 9.44543 8.37252 9.29591C8.10295 9.34182 7.83908 9.39278 7.58169 9.44859ZM17.8705 14.1634C18.2105 14.053 18.5328 13.9327 18.8347 13.8033C20.3004 13.1752 21.001 12.4653 21.001 12.0001C21.001 11.5348 20.3004 10.825 18.8347 10.1968C18.5328 10.0674 18.2105 9.94714 17.8705 9.83671C17.6491 10.5376 17.3739 11.263 17.0462 12.0001C17.3739 12.7371 17.6491 13.4625 17.8705 14.1634ZM16.4203 14.5515C16.3399 14.3007 16.2521 14.0467 16.1571 13.7903C16.0729 13.9435 15.9866 14.0968 15.8981 14.2501C15.8096 14.4033 15.72 14.5547 15.6294 14.7042C15.899 14.6583 16.1629 14.6074 16.4203 14.5515Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5.00006 3L4.35006 6.34H17.9401L17.5001 8.5H3.92006L3.26006 11.83H16.8501L16.0901 15.64L10.6101 17.45L5.86006 15.64L6.19006 14H2.85006L2.06006 18L9.91006 21L18.9601 18L20.1601 11.97L20.4001 10.76L21.9401 3H5.00006Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"></path>
          </svg>
        </section>

        <section>
          <div className="contain">
            <div className="max">
              <h3>Expertise</h3>
              <h2>
                As a front-end developer with a computer science background, I specialize in turning ideas into responsive, user-focused web applications.
              </h2>
            </div>

            <div className="cap">
              <div className="ways">
                <div className="dropbox">
                  <span></span>
                  <div></div>
                  <span></span>
                  <div></div>
                </div>

                <div className="wax">
                  <div className="drop">
                    <h3>Experience</h3>
                    <span>
                      <div>
                        <h4>Front-End Developer</h4>
                        <h5>IGHUB Front-End Development Track</h5>
                        <h6>Jan 2025 – Present</h6>
                      </div>
                      <p>
                        <li> Developing fully responsive websites using HTML, CSS, and JavaScript.</li>
                        <li>Utilized React.js for building dynamic and interactive user interfaces.</li>
                        <li> Implemented responsive design principles and best practices to ensure a seamless user experience across different devices and screen sizes. </li>
                      </p>
                    </span>
                  </div>

                  <div className="drop">
                    <span>
                      <div>
                        <h4>Personal Learning Projects</h4>
                        <h5> IGHUB Practice Environment</h5>
                        <h6>2025 - present</h6>
                      </div>
                      <p>
                        <li>Cloned Popular Websites like Netflix, Spotify, and Instagram homepages to practice layout precision and design responsiveness.</li>
                        <li>Developed REST API-based apps (e.g., weather app, GitHub user finder) using fetch() to handle asynchronous data requests.</li>
                        <li>Practiced JavaScript fundamentals by building interactive features like toggled menus, dark/light mode, and tabbed content</li>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="ways">
                <div className="dropbox">
                  <span></span>
                  <div></div>
                  <span></span>
                  <div></div>
                </div>

                <div className="wax">
                  <div className="drop">
                    <h3>Experience</h3>
                    <span>
                      <div>
                        <h4>Optimization Practice</h4>
                        <h5>Project-Based Learning Series</h5>
                        <h6>2025 - present</h6>
                      </div>
                      <p>
                        <li>Diagnosed and fixed layout shifts, broken grids, and inconsistent responsiveness across devices.</li>
                        <li> Learned to use Chrome DevTools for debugging CSS, tracking performance bottlenecks, and analyzing page load behavior.</li>
                        <li>Optimized images, minimized CSS/JS, and applied lazy loading to boost page speed.</li>
                        <li>Applied ARIA attributes and semantic HTML to make projects screen-reader-friendly</li>
                      </p>
                    </span>
                  </div>

                  <div className="drop">
                    <span>
                      <div>
                        <h4>Collaborative Coding Sessions</h4>
                        <h5>IGHUB Peer Projects & Hackathons</h5>
                        <h6>2025 - present</h6>
                      </div>
                      <p>
                      <li>Participated in team-based challenges to build small web apps under time constraints</li>
                      <li>Contributed to GitHub repos using branches, pull requests, and commit history tracking</li>
                      <li>Conducted and received code reviews, learning to give constructive feedback and improve readability</li>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works">
          <div className="works">
            <div>
              <h3>Recent Works</h3>
              <h1>
                Here are some of my favorite projects, I have <br /> done
                lately. Feel free to check them out.
              </h1>
            </div>
            <div className="projects">
              <div className="pro1">
                <li>
                  <a href="#">
                    <div className="steps1">
                    </div>
                    <div className="step1">
                      <span>
                        <h4>Website</h4>
                        <h2>Coin Cap</h2>
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="steps2">
                    </div>
                    <div className="step1">
                      <span>
                        <h4>Website</h4>
                        <h2>Movie Land</h2>
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="steps3">
                    </div>
                    <div className="step1">
                      <span>
                        <h4>Website</h4>
                        <h2>CargoNest</h2>
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </div>
              <div className="pro1">
                <li>
                  <a href="">
                    <div className="steps4">
                    </div>
                    <div className="step1">
                      <span>
                        <h4>Website</h4>
                        <h2>BrushWork</h2>
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="steps5">
                    </div>
                    <div className="step1">
                      <span>
                        <h4>Website</h4>
                        <h2>Insure</h2>
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="steps6">
                      <h3>+</h3>
                    </div>
                    <div className="step1">
                      <span>
                        <h4>Website</h4>
                        <h2>Mc,anus</h2>
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="clent">
            <div className="blog">
              <div className="gap">
                <img src={users} alt="" />
                <span>
                  <h3>NEC Global</h3>
                  <h4>NEC Global Painting Services</h4>
                </span>
              </div>
              <p>
            I needed a clean and modern website to showcase my painting business, and Good Day  delivered exactly what I imagined—and more! The layout, colors, and responsiveness were perfect for attracting new clients.

              </p>
            </div>

            <div className="blog">
              <div className="gap">
                <img src={user} alt="" />
                <span>
                  <h3>Samuel Bello</h3>
                  <h4>Project Manager, TechFlare Solutions</h4>
                </span>
              </div>
              <p>
              We needed a responsive UI for our web app, and Good Day  came through. Their understanding of modern JavaScript and React is impressive. Everything worked flawlessly on all devices.
              </p>
            </div>
          </div>
        </section>

        <section id="hello">
          <div className="top">
            <div className="first">
              <h3 className="main">Get In Touch</h3>
              <h1>
             I’m always excited to connect with fellow developers and potential clients.
              </h1>
            </div>
            <div className="could">
              <div>
                <h3 className="main">REACH ME AT</h3>
                <h4>
                  <a href="#">nwosuchinenyenwa4gmail.com</a>
                </h4>
                <h4 className="yeah">+2349061703513</h4>
              </div>
              <div>
                <h3 className="main">SOCIAL</h3>
                <h4 className="behave">
                  <span>Behance</span>,<span>Dribble</span>,
                  <span>
                    Twitter, <br />
                  </span>
                  <span>Instagram</span>,<span>Github</span>
                </h4>
              </div>
                <button>SAY HELLO</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="bottom">
          <div className="side">
            <h3 className="text">&copy; Copyright Luther 2025</h3>
            <h3>
              Design by <span> NcManus</span> Distribution By{" "}
              <span>Nwosu Chinenyenwa</span>
            </h3>
          </div>
          <div className="svg">
            <a href="#header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.0001 22.0003L11.0002 22.0004L11.0002 5.82845L7.05044 9.77817L5.63623 8.36396L12.0002 2L18.3642 8.36396L16.9499 9.77817L13.0002 5.8284L13.0001 22.0003Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;
