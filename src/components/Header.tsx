"use client";

import { useState } from "react";

import { TransitionLink } from "./animations";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [blogMenuActive, setBlogMenuActive] = useState(false);
  const [cvMenuActive, setCvMenuActive] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white bg-opacity-20 px-4 backdrop-blur-3xl lg:px-12 lg:py-1 xl:px-32">
      <TransitionLink href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="91"
          fill="none"
          viewBox="0 0 330 91"
        >
          <path
            fill="#00293A"
            fill-rule="evenodd"
            d="M61.075 0h2.074l.892.815h1.491v2.728L63.15 5.855c.395.588.947 1.764 0 1.764h-2.074l-1.346-1.764-.891-1.097V2.58l.891-.948L61.075 0zm-11.93 4.758h-2.221L45.58 5.855 43.796 8.85l1.783.682v2.046h3.566c.947 0 1.594-1.819 1.8-2.728V5.855h-1.8V4.758zm-9.823 9.399l-4.473-.949-1.783 3.128 1.783 2.179 2.982-1.364 1.491-2.994zM14.15 28.328c-3.099-.652-10.725.272-14.15.816L11.022 25.6c3.625.094 11.917.418 16.08.963 4.162.546 5.018.228 4.927 0h1.037c2.231-1.862 7.352-6.16 9.985-8.45 2.54-2.207 5.504-3.365 8.64-4.589.927-.362 1.869-.73 2.82-1.132 3.102-1.314 7.536-2.11 11.814-2.878 1.465-.263 2.912-.522 4.28-.798 4.293-.866 10.423-2.456 12.952-3.143-10.623 4.18-32.613 12.95-35.595 14.587-2.835 1.555-5.576 4.833-7.518 7.156-.612.732-1.144 1.369-1.575 1.827-1.44 1.53-3.182 5.084-3.874 6.67-1.686-.86-5.861-2.988-9.077-4.625-2.866-1.458-5.657-1.876-8.427-2.292-1.116-.167-2.228-.334-3.34-.569zm75.177-10.613h-6.938l-2.058.533-18.964 10.644h-1.378c0-.48-.117-1.634-.584-2.417-.242-.406-.384-.8-.523-1.185-.194-.542-.383-1.067-.838-1.587-.623-.711-2.345-.652-3.128-.533h-5.09v.533l-1.556 1.972h-.989v.8l.989.712v3.676c-.33.06-.989.32-.989.89 0 .569-.843 2.856-1.264 3.928l-1.265 3.039-3.241 3.498-1.167 2.772v11.074l7.537 20.13 5.56 5.99c1.56 1.072 4.901 3.377 5.77 4.017 1.086.8 4.392 2.15 7.035 2.594 2.113.356 20.05 1.581 28.754 2.15-.821-.243-2.736-.87-3.825-1.438-1.09-.57-1.816-1.424-2.043-1.78l-.988-.459-1.265.46H83.07c-.443 0-1.092-.444-1.899-.995-.963-.659-2.15-1.471-3.482-1.866-1.958-.581-8.445-.608-11.443-.549-.52-.919-2.027-3.151-3.907-4.729-1.88-1.577-5.214-4.65-6.645-5.989-.13-1.818-.467-5.813-.779-7.248-.31-1.435-1.566-3.514-2.155-4.373l-3.712-5.01v-4.656c.448-1.037 1.426-3.347 1.75-4.284l.09-.258c.412-1.197 1.058-3.071 1.872-4.574.7-1.293 8.504-8.761 12.318-12.334l3.42-1.971c.81-.539 2.668-1.776 3.615-2.417.947-.64 5.16-4.556 7.148-6.433l3.031-.445.681-.637 3.128-.712 3.226-.534zM2.354 34.998l3.601-.928 1.166.041 11.785 3.764.715-.184c-.087-.284-.237-.983-.137-1.508.051-.273.053-.526.055-.772.002-.347.005-.683.146-1.051.194-.505 1.098-.7 1.527-.734l2.642-.681.097.316 1.167.959.514-.132.145.473-.383.554.67 2.175c.182-.008.572.058.675.395.104.337.959 1.578 1.373 2.156l1.21 1.63 2.32 1.636 1.112 1.485 2.018 6.554-.243 12.923-1.795 4.288c-.615.843-1.93 2.654-2.263 3.149-.418.619-1.889 1.86-3.18 2.476-1.032.493-10.12 3.617-14.535 5.117.383-.253 1.262-.88 1.724-1.362a3.11 3.11 0 00.736-1.326l.43-.405.74.103 1.977-.509c.23-.06.486-.409.804-.843.38-.518.849-1.158 1.468-1.57.91-.606 4.273-1.489 5.84-1.855.102-.613.478-2.136 1.167-3.32.688-1.186 1.859-3.45 2.358-4.434-.264-1.094-.817-3.504-.918-4.394-.1-.891.174-2.29.323-2.877l1.013-3.462-.848-2.755c-.422-.554-1.35-1.79-1.69-2.301l-.093-.141c-.432-.653-1.11-1.677-1.806-2.457-.599-.672-6.011-4.048-8.643-5.653l-2.135-.71c-.518-.21-1.708-.694-2.316-.946-.609-.253-3.51-2.007-4.884-2.852l-1.654.142-.47-.287-1.754-.002-1.771.115z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#00293A"
            d="M119.261 38.358c-.201.328-.41.574-.629.738-.219.146-.492.219-.82.219-.347 0-.738-.146-1.176-.438-.419-.291-.948-.61-1.585-.957-.62-.364-1.358-.692-2.215-.984-.856-.31-1.877-.464-3.062-.464-1.093 0-2.059.136-2.898.41-.82.273-1.512.656-2.077 1.148a4.84 4.84 0 00-1.285 1.75 5.55 5.55 0 00-.41 2.16c0 1.002.264 1.84.793 2.514.528.657 1.221 1.221 2.077 1.695a18.09 18.09 0 002.98 1.258c1.112.346 2.242.72 3.39 1.12 1.167.402 2.306.857 3.417 1.368a11.362 11.362 0 012.953 1.94c.875.785 1.576 1.741 2.105 2.871.529 1.13.793 2.506.793 4.128 0 1.75-.301 3.39-.902 4.921a11.65 11.65 0 01-2.625 4.02c-1.13 1.13-2.533 2.022-4.21 2.678-1.659.656-3.554.984-5.686.984-1.258 0-2.488-.127-3.691-.382a19.433 19.433 0 01-3.417-1.012 17.975 17.975 0 01-3.035-1.64 15.305 15.305 0 01-2.542-2.133l1.859-3.061c.164-.256.373-.456.628-.602.256-.146.538-.219.848-.219.42 0 .884.2 1.394.602.51.383 1.121.81 1.832 1.285.729.455 1.604.884 2.624 1.285 1.021.382 2.242.574 3.664.574 2.314 0 4.1-.565 5.358-1.695 1.276-1.13 1.914-2.688 1.914-4.675 0-1.112-.265-2.014-.793-2.707-.529-.71-1.23-1.303-2.105-1.777-.857-.473-1.841-.874-2.953-1.203a174.168 174.168 0 01-3.39-1.038 38.348 38.348 0 01-3.39-1.313 11.456 11.456 0 01-2.98-1.968c-.856-.82-1.549-1.823-2.077-3.007-.529-1.203-.793-2.698-.793-4.484 0-1.421.273-2.797.82-4.128a10.643 10.643 0 012.433-3.526c1.075-1.04 2.397-1.868 3.964-2.488 1.568-.62 3.354-.93 5.359-.93 2.26 0 4.328.356 6.205 1.066 1.896.711 3.527 1.723 4.894 3.035l-1.558 3.062zm60.8-6.725L167.813 71h-5.768l-9.241-28.268c-.109-.31-.218-.647-.328-1.011a39.199 39.199 0 01-.273-1.176c-.091.42-.191.811-.301 1.176-.091.364-.191.701-.3 1.011L142.279 71h-5.768l-12.248-39.367h5.359c.546 0 1.002.136 1.366.41.383.255.638.61.766 1.066l7.381 25.233c.146.547.283 1.14.41 1.777.128.638.256 1.303.383 1.996.128-.693.264-1.358.41-1.996.164-.656.337-1.248.52-1.777l8.447-25.233c.128-.364.383-.702.766-1.012.382-.31.838-.464 1.367-.464h1.859c.565 0 1.02.146 1.366.437.347.273.611.62.793 1.039l8.421 25.233c.182.529.346 1.103.492 1.723.164.601.309 1.239.437 1.913.128-.674.246-1.312.355-1.913.128-.62.265-1.194.411-1.723l7.354-25.233c.109-.401.355-.747.738-1.039a2.306 2.306 0 011.394-.437h5.003zm36.866 19.984V67.2c-3.919 2.825-8.475 4.237-13.67 4.237-3.189 0-6.078-.492-8.666-1.476-2.57-1.002-4.766-2.387-6.588-4.155-1.823-1.786-3.226-3.91-4.21-6.37-.985-2.46-1.477-5.167-1.477-8.12 0-2.97.474-5.686 1.422-8.147.948-2.478 2.305-4.601 4.073-6.37 1.768-1.785 3.901-3.161 6.397-4.127 2.497-.985 5.304-1.477 8.421-1.477 1.585 0 3.052.128 4.401.383 1.367.237 2.634.574 3.8 1.012 1.167.437 2.242.965 3.226 1.585s1.887 1.312 2.707 2.078l-1.832 2.925c-.292.456-.665.738-1.121.848-.456.109-.948 0-1.476-.329-.529-.31-1.094-.637-1.695-.984a13.121 13.121 0 00-2.023-.956c-.766-.31-1.65-.556-2.652-.739-1.002-.2-2.187-.3-3.554-.3-2.078 0-3.955.346-5.632 1.038a11.82 11.82 0 00-4.265 2.926c-1.184 1.257-2.095 2.788-2.733 4.593-.638 1.804-.957 3.818-.957 6.041 0 2.351.337 4.456 1.011 6.316.675 1.84 1.632 3.408 2.871 4.702 1.239 1.275 2.734 2.25 4.483 2.925 1.768.674 3.737 1.011 5.905 1.011 1.623 0 3.062-.173 4.32-.519a19.607 19.607 0 003.745-1.449v-7.819h-5.495c-.419 0-.747-.109-.984-.328-.237-.237-.355-.537-.355-.902v-3.636h12.603z"
          ></path>
        </svg>
      </TransitionLink>

      <div>
        <button
          className={`ham-btn ${menuActive && "active"} lg:hidden`}
          onClick={() => {
            menuActive ? setMenuActive(false) : setMenuActive(true);
          }}
        >
          <span></span>
        </button>
        <nav
          className={`fixed right-[5vw] bg-white text-lg lg:static lg:bg-transparent ${menuActive ? "top-24" : "-top-[100vh]"} flex w-[90vw] max-w-96 flex-col gap-3 rounded-lg border-2 px-6 py-6 transition-all duration-500 lg:w-auto lg:max-w-fit lg:flex-row lg:gap-12 lg:border-0`}
        >
          <TransitionLink
            href="/about"
            className="nav--transition relative font-medium transition hover:text-primary text-lg"
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/events"
            className="nav--transition relative font-medium transition hover:text-primary text-lg"
          >
            Events
          </TransitionLink>
          <TransitionLink
            href="/resources"
            className="nav--transition relative font-medium transition hover:text-primary text-lg"
          >
            Resources
          </TransitionLink>
          <div
            className="lg:relative"
            onMouseEnter={() => {
              setCvMenuActive(true);
            }}
            onMouseLeave={() => {
              setCvMenuActive(false);
            }}
          >
            <button
              className={`font-medium hover:text-primary text-lg ${cvMenuActive && "text-primary"} nav--transition relative flex items-center gap-2 transition`}
              onClick={() => {
                cvMenuActive ? setCvMenuActive(false) : setCvMenuActive(true);
              }}
            >
              Cv Repo
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                  stroke={cvMenuActive ? "#028d93" : "#000"}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              className={`flex flex-col gap-3 rounded-lg bg-gray-50 transition-all duration-500 lg:absolute lg:-right-2 lg:top-12 lg:w-52 lg:gap-4 lg:py-6 lg:shadow-lg ${cvMenuActive ? "mt-4 p-6 lg:mt-0 lg:translate-y-2 lg:border-2 lg:border-gray-200 lg:p-0 lg:px-6" : "max-h-0 translate-y-8 overflow-hidden px-6 lg:invisible lg:max-h-fit lg:overflow-auto lg:opacity-0"}`}
            >
              <TransitionLink
                href="/cv-repo/software"
                className="font-medium transition hover:text-primary"
              >
                Software
              </TransitionLink>
              <TransitionLink
                href="/cv-repo/consultant"
                className="font-medium transition hover:text-primary"
              >
                Consultant
              </TransitionLink>
              <TransitionLink
                href="/cv-repo/data"
                className="font-medium transition hover:text-primary"
              >
                Data
              </TransitionLink>
              <TransitionLink
                href="/cv-repo/product"
                className="font-medium transition hover:text-primary"
              >
                Product
              </TransitionLink>
              <TransitionLink
                href="/cv-repo/quant"
                className="font-medium transition hover:text-primary"
              >
                Quant
              </TransitionLink>
              <TransitionLink
                href="/cv-repo/finance"
                className="font-medium transition hover:text-primary"
              >
                Finance
              </TransitionLink>
            </div>
          </div>
          <div
            className="lg:relative"
            onMouseEnter={() => {
              setBlogMenuActive(true);
            }}
            onMouseLeave={() => {
              setBlogMenuActive(false);
            }}
          >
            <button
              className={`font-medium hover:text-primary text-lg ${blogMenuActive && "text-primary"} nav--transition relative flex items-center gap-2 transition`}
              onClick={() => {
                blogMenuActive
                  ? setBlogMenuActive(false)
                  : setBlogMenuActive(true);
              }}
            >
              Blog
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                  stroke={blogMenuActive ? "#028d93" : "#000"}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              className={`flex flex-col gap-3 rounded-lg bg-gray-50 transition-all duration-500 lg:absolute lg:-right-2 lg:top-12 lg:w-52 lg:gap-4 lg:py-6 lg:shadow-lg ${blogMenuActive ? "mt-4 p-6 lg:mt-0 lg:translate-y-2 lg:border-2 lg:border-gray-200 lg:p-0 lg:px-6" : "max-h-0 translate-y-8 overflow-hidden px-6 lg:invisible lg:max-h-fit lg:overflow-auto lg:opacity-0"}`}
            >
              <TransitionLink
                href="/blogs/internship"
                className="font-medium transition hover:text-primary"
              >
                Internship Blogs
              </TransitionLink>
              <TransitionLink
                href="/blogs/placement"
                className="font-medium transition hover:text-primary"
              >
                Placement Blogs
              </TransitionLink>
              <TransitionLink
                href="/blogs/adieu-kgp"
                className="font-medium transition hover:text-primary"
              >
                Adieu Kgp
              </TransitionLink>
              <TransitionLink
                href="/blogs/know-your-department"
                className="font-medium transition hover:text-primary"
              >
                Know Your Department
              </TransitionLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
