import React, { useEffect } from "react";
import "./Terms.css";

function Accessibility({ onClick, navigate }) {
  useEffect(() => {
    document.title = "Accessibility Statement | IPM Scoutek";
  }, []);

  return (
    <div className="terms-page">
      <h1>Accessibility Statement</h1>

      <div className="terms-container">
        <p><strong>IPM Scoutek strives to be AA WCAG compliant.</strong> We follow the Government of Canada’s <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=23601" target="blank">Standard on Web Accessibility.</a> This standard follows the World Wide Web Consortium (W3C) <a href="https://www.w3.org/TR/WCAG20/" target="blank">Web Content Accessibility Guidelines</a>(WCAG) 2.1.</p>
        <p>At IPM Scoutek, we are committed to ensuring digital accessibility for everyone, including individuals with disabilities. We continually strive to improve the user experience for all visitors to our website</p>
        <p><strong>The standard we adhere to</strong></p>
        <p>IPM Scoutek strives to be Web Content Accessibility Guidelines 2.1 (WCAG) AA compliant. The WCAG is an open standard for determining accessibility. AA compliance is considered good support for a website geared towards a global audience.</p>
        <p>We aim to meet the WCAG 2.1 AA guidelines as created by W3C. The content we provide is accessible and the website is designed and developed based on the WCAG 2.1 AA guidelines as created by W3C.</p>
        <p><strong>Accessibility features</strong></p>
        <p>In addition to semantic HTML, these features are set up specifically to work with assistive technology:</p>
        <ul>
            <li>Distinct, descriptive page titles.</li>
            <li>Ordered headings to construct a logical document flow.</li>
            <li>This website makes use of ARIA mark-up that makes it easier to identify the major sections and roles on each page.</li>
            <li>All images on this web site have alternative text descriptions.</li>
            <li>Our content is usable or accessible without images.</li>
            <li>We do our best to have links written so that they make sense out of context. If this is not possible, we add a title attribute or other type of search aid to create context.</li>
            <li>Unique, descriptive names for links, buttons, and other interactive controls.</li>
            <li>The first link in every document is the default “Skip to main content” link. This allows the user to skip directly to the main section of the page (the content).</li>
            <li>All form controls are appropriately and clearly labeled.</li>
            <li>Maintaining a color palette with high contrast ratios values to keep content legible.</li>
            <li>This site uses only relative font sizes. These are compatible with the user-chosen “text size” option in visual browsers.</li>
            <li>Any information conveyed with colour is also available without colour (i.e. text based).</li>
        </ul>

        <p><strong>Known issues</strong></p>
        <p>This site does not have a “resize” option. However, all the tools and functions provided by a widget like this are already built into all major browsers.</p>
        <p>Here are key options :</p>
        <ul>
            <li>Press Ctrl & + to increase the page size.</li>
            <li>Press Ctrl & – to decrease the page size.</li>
            <li>Press Ctrl & 0 (zero) to reset the page size to the web page’s default size.</li>
        </ul>
        <p><strong>Accessibility tools</strong></p>
        <ul>
            <li><strong><a href="http://www.nvda-project.org/wiki/Download" target="blank">NVDA</a></strong> a free, open-source screen reader (Windows)</li>
            <li><strong><a href="http://www.satogo.com/" target="blank">System Access</a></strong> (Windows)</li>
            <li><strong><a href="http://www.freedomscientific.com/jaws-hq.asp" target="blank">JAWS </a></strong>(Windows)</li>
            <li><strong><a href="https://www.apple.com/voiceover/info/guide/" target="blank">VoiceOver</a></strong> (Mac)</li>
            <li><strong><a href="https://wiki.gnome.org/action/show/Projects/Orca?action=show&redirect=Orca" target="blank">Orca</a></strong> (Linux)</li>
        </ul>
        <p><strong>Accessibility guidelines and related resources</strong></p>
        <ul>
            <li><strong><a href="http://www.webaim.org/">WebAIM</a></strong></li>
            <li><strong><a href="https://www.w3.org/TR/WCAG21/">W3 accessibility guidelines</a></strong></li>
        </ul>

        <p><strong>Tell us how we’re doing</strong></p>
        <p>We are always happy to get feedback from you. Our ongoing accessibility efforts work toward making our website as accessible as possible. IPM Scoutek welcomes comments on how to improve the site’s accessibility for users with disabilities. If you have trouble, questions or suggestions about the accessibility of our website, please contact us at <a href="mailto:info@ipmscoutek.com">info@ipmscoutek.com</a>.</p>
      </div>
    </div>
  );
}

export default Accessibility;
