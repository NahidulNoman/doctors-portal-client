import React from "react";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="footer p-10 bg-accent text-white font-semibold rounded-md mb-2">
        <div className="lg:mt-20">
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <span className="link link-hover">Branding</span>
          <span className="link link-hover">Design</span>
          <span className="link link-hover">Marketing</span>
          <span className="link link-hover">Advertisement</span>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <span className="link link-hover">About us</span>
          <span className="link link-hover">Contact</span>
          <span className="link link-hover">Jobs</span>
          <span className="link link-hover">Press kit</span>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <span className="link link-hover">Terms of use</span>
          <span className="link link-hover">Privacy policy</span>
          <span className="link link-hover">Cookie policy</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
