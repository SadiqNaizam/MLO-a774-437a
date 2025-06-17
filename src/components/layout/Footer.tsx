import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Your Company Name. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React & Shadcn/UI.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 mb-4 md:mb-0">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
            About Us
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
            Contact
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;