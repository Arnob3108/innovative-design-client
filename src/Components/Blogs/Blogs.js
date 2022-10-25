import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo2.png";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Blogs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <Link to="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-20 h-20 rounded-full">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-16 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span class="relative">A</span> <br />
              </span>{" "}
              <br />
              Modern Innovative Design Creator
            </h2>
          </div>
        </div>
        <div class="space-y-4 text-slate-600">
          <Item title="what is cors in express.js?">
            CORS is a node.js package for providing a Connect/Express middleware
            that can be used to enable CORS with various options.
          </Item>
          <Item title="Why are you using firebase? What other options do you have to implement authentication except firebase?">
            Google Firebase is an application development platform that allows
            developers to create iOS, Android, and Web apps. Google Firebase
            offers many features that pitch it as the go-to backend development
            tool for web and mobile apps. It reduces development workload and
            time. And it's a perfect prototyping tool.
            <br />
            <h1 className="text-lg font-bold">
              12 User Authentication Platforms [Auth0, Firebase Alternatives]
            </h1>
            1.STYTCH 2.Ory 3.Supabase 4.Okta 5.PingIdentity 6.Keycloak
            7.Frontegg 8.Authress 9.Auth0 10.Firebase 11.Amazon 12.Cognito
            OneLogin
          </Item>
          <Item title="How does the react private route component work?">
            The react private route component renders a route component if the
            user is logged in and in an authorised role for the route, if the
            user isn’t logged in they’re redirected to the /login page, if the
            user is logged in but aren’t in an authorised role they’re
            redirected to the home page.
          </Item>
          <Item title=" What is Node? How does Node work?">
            Node.js, also referred to as node, is a runtime environment for
            server-side applications, first released in 2009. It is an open
            source software architecture that is event-driven: it detects and
            reacts to things that happen, as they happen. <br />
            Node.JS, commonly referred to simply as Node, is a JavaScript
            runtime that allows you to run JS code outside of a web browser.
            Node is built on Google’s V8 JavaScript engine, the same one used
            for processing in Chrome. It’s commonly used for building
            applications, working with modern web app frameworks, and
            server-side scripting with JS.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
