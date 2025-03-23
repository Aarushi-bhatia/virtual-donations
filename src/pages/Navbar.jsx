import clsx from "clsx";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const navItems = [
  { name: "TodaysCause", link: "/todayscause" },
  { name: "Donate", link: "/donate" },
  { name: "Impact Reports", link: "/impact-reports" },
  { name: "Recurring Donations", link: "/recurring-donations" },
  { name: "Recipient Dashboard", link: "/dashboard" },
  { name: "Profile", link: "/profile" },
  { name: "Login / Signup", link: "/auth" },
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Ref for audio
  const audioElementRef = useRef(null);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 bg-black shadow-md">
      <header className="w-full">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link to="/">
             {/*  <img src="/img/logo.png" alt="logo" className="w-10" /> */}
            </Link>

            <Button
              id="donate-button"
              title="Home"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              link="/"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link key={index} to={item.link} className="nav-hover-btn">
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
