import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const [submitted, setSubmitted] = useState(false);
  const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) ${submitted ? 'scale(1.1)' : 'scale(1)'}`,
    padding: '20px',
    backgroundColor: '#b3a369',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    opacity: submitted ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    textAlign: 'center',
  };

  return (
    submitted ?
      <div style={containerStyle}>
        <p>Surprise! You've just encountered a phishing attempt!</p>
      </div> :
      <div>
        <title>Cybersecurity Conference Registration Form – Conference Services</title>
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <meta name="robots" content="max-image-preview:large" />
        <link href="//fonts.googleapis.com" rel="dns-prefetch" />
        <link
          href="https://conference.gatech.edu/feed/"
          rel="alternate"
          title="Conference Services » Feed"
          type="application/rss+xml"
        />
        <style
          id="content-control-block-styles"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 640px) {\n\t.cc-hide-on-mobile {\n\t\tdisplay: none !important;\n\t}\n}\n@media (min-width: 641px) and (max-width: 920px) {\n\t.cc-hide-on-tablet {\n\t\tdisplay: none !important;\n\t}\n}\n@media (min-width: 921px) and (max-width: 1440px) {\n\t.cc-hide-on-desktop {\n\t\tdisplay: none !important;\n\t}\n}\n\t"
          }}
        />
        <link
          href="https://conference.gatech.edu?load_frmpro_css=true&ver=8131231"
          id="formidable-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/atomic-blocks/dist/assets/fontawesome/css/all.min.css?ver=1725559296"
          id="atomic-blocks-fontawesome-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <style
          id="wp-emoji-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "img.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n\t"
          }}
        />
        <link
          href="https://conference.gatech.edu/wp-includes/css/dist/block-library/style.min.css?ver=6.5.5"
          id="wp-block-library-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <style
          id="safe-svg-svg-icon-style-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".safe-svg-cover{text-align:center}.safe-svg-cover .safe-svg-inside{display:inline-block;max-width:100%}.safe-svg-cover svg{height:100%;max-height:100%;max-width:100%;width:100%}\n\t"
          }}
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/atomic-blocks/dist/blocks.style.build.css?ver=1725559296"
          id="atomic-blocks-style-css-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/content-control/dist/style-block-editor.css?ver=2.4.0"
          id="content-control-block-styles-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <style
          id="classic-theme-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "/*! This file is auto-generated */\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n\t"
          }}
        />
        <style
          id="global-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}\n:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}\n.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}\n\t"
          }}
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/responsive-lightbox-lite/assets/nivo-lightbox/nivo-lightbox.css?ver=6.5.5"
          id="responsive-lightbox-nivo_lightbox-css-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/responsive-lightbox-lite/assets/nivo-lightbox/themes/default/default.css?ver=6.5.5"
          id="responsive-lightbox-nivo_lightbox-css-d-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/wp-pagenavi/pagenavi-css.css?ver=2.70"
          id="wp-pagenavi-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic%7CMontserrat%3A400%2C700%7CInconsolata%3A400&subset=latin%2Clatin-ext"
          id="gt3-wpfonts-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/themes/gt_theme_wp/genericons/genericons.css?ver=3.4.1"
          id="genericons-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/themes/gt_theme_wp/gt3theme/css/gt3.5-css.css?ver=6.5.5"
          id="gt3-css-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/themes/gt_theme_wp/style.css?ver=6.5.5"
          id="gt3-style-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        {/*[if lt IE 10]>
<link rel='stylesheet' id='gt3-ie-css' href='https://conference.gatech.edu/wp-content/themes/gt_theme_wp/css/ie.css?ver=20160816' type='text/css' media='all' />
<![endif]*/}
        {/*[if lt IE 9]>
<link rel='stylesheet' id='gt3-ie8-css' href='https://conference.gatech.edu/wp-content/themes/gt_theme_wp/css/ie8.css?ver=20160816' type='text/css' media='all' />
<![endif]*/}
        {/*[if lt IE 8]>
<link rel='stylesheet' id='gt3-ie7-css' href='https://conference.gatech.edu/wp-content/themes/gt_theme_wp/css/ie7.css?ver=20160816' type='text/css' media='all' />
<![endif]*/}
        <link
          href="https://conference.gatech.edu/wp-content/plugins/divi-builder/css/style-static.min.css?ver=4.27.1"
          id="divi-builder-style-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/wp-content/plugins/forget-about-shortcode-buttons/public/css/button-styles.css?ver=2.1.2"
          id="forget-about-shortcode-buttons-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://conference.gatech.edu/?sccss=1&ver=6.5.5"
          id="sccss_style-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        {/*[if lt IE 9]>

<![endif]*/}
        <link
          href="https://conference.gatech.edu/wp-json/"
          rel="https://api.w.org/"
        />
        <link
          href="https://conference.gatech.edu/wp-json/wp/v2/pages/254815"
          rel="alternate"
          type="application/json"
        />
        <link
          href="https://conference.gatech.edu/xmlrpc.php?rsd"
          rel="EditURI"
          title="RSD"
          type="application/rsd+xml"
        />
        <meta
          name="generator"
          content="Sites @ Georgia Tech 6.5.5 - http://sites.gatech.edu/"
        />
        <link
          href="https://conference.gatech.edu/summer-camp-or-conference-request-form/"
          rel="canonical"
        />
        <link href="https://conference.gatech.edu/?p=254815" rel="shortlink" />
        <link
          href="https://conference.gatech.edu/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fconference.gatech.edu%2Fsummer-camp-or-conference-request-form%2F"
          rel="alternate"
          type="application/json+oembed"
        />
        <link
          href="https://conference.gatech.edu/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fconference.gatech.edu%2Fsummer-camp-or-conference-request-form%2F&format=xml"
          rel="alternate"
          type="text/xml+oembed"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "@media screen and (max-width: 782px) {\n\t\t\t#wpadminbar li#wp-admin-bar-log-in,\n\t\t\t#wpadminbar li#wp-admin-bar-register {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t#wpadminbar li#wp-admin-bar-log-in a,\n\t\t\t#wpadminbar li#wp-admin-bar-register a {\n\t\t\t\tpadding: 0 8px;\n\t\t\t}\n\t\t}\n\t"
          }}
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".mlslider-screen-reader-text {\n\t\t\tborder: 0;\n\t\t\tclip: rect(1px, 1px, 1px, 1px);\n\t\t\t-webkit-clip-path: inset(50%);\n\t\t\tclip-path: inset(50%);\n\t\t\theight: 1px;\n\t\t\tmargin: -1px;\n\t\t\toverflow: hidden;\n\t\t\tpadding: 0;\n\t\t\tposition: absolute;\n\t\t\twidth: 1px;\n\t\t\tword-wrap: normal !important;\n\t\t}\n\t"
          }}
        />
        {/* Google Analytics tracking code output by Beehive Analytics Pro */}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "#wp-admin-bar-abm-login{display:block!important}body .wp-video-shortcode video,body video.wp-video-shortcode{margin:0;padding:0;background:0 0;border:none;box-shadow:none;min-width:0;height:auto;min-height:0}.screen-reader-text:not(button){clip:rect(1px,1px,1px,1px);position:absolute!important;height:1px;width:1px;overflow:hidden}\n\t"
          }}
        />
        <link
          href="https://conference.gatech.edu/wp-content/themes/gt_theme_wp/favicon.ico"
          rel="shortcut icon"
          type="image/vnd.microsoft.icon"
        />
        <div className="site" id="page">
          <a className="skip-link screen-reader-text" href="#page-navigation">
            Skip to main navigation
          </a>{" "}
          <a className="skip-link screen-reader-text" href="#main-content">
            Skip to content
          </a>
          <header className="site-header" id="gt-header" role="banner">
            <div className="gt-background-gt-header" id="brandhead">
              <div className="gt-gt-header">
                <div className="gt-header-logo">
                  <a href="http://www.gatech.edu/">
                    <img
                      alt="Georgia Institute of Technology"
                      src="https://conference.gatech.edu/wp-content/themes/gt_theme_wp/gt3theme/images/gt-logo-oneline-white.svg"
                    />
                  </a>
                </div>
                <button
                  aria-label="mobile menu button"
                  className="gt-mobile-menu-activator"
                  data-menu-id="main"
                  id="gt-mobile-menu-activator"
                />
                <div className="gt-mobile-icon-wrapper">&nbsp;</div>
              </div>
              {/* gt-gt-header */}
            </div>
            {/* gt-background-gt-header */}
            <div className="gt-site-identity">
              <div className="gt-branding__name">
                <h2 className="gt-branding__thisUnit" id="gt-branding-site-name">
                  <a href="https://conference.gatech.edu" rel="home" title="Home">
                    Conference Services
                  </a>
                </h2>
              </div>
              {/* gt-branding__name */}
            </div>
            <div className="gt-background-menu">
              <div className="container">
                <div className="region-primary-menu" id="gt-primary-menu">
                  <div className="gt-menu-flex-wrapper">
                    <div className="gt-main-menu" id="page-navigation">
                      <nav
                        aria-label="Primary Menu"
                        className="gt-accessible-menu gt-menu-main"
                        id="block-gt-main-menu"
                        role="navigation"
                      >
                        <ul className="gt-main-menu primary-menu" id="gt-menu-main">
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-256500"
                            id="menu-item-256500"
                          >
                            <a
                              aria-expanded="false"
                              aria-haspopup="true"
                              className="gt-menu-top-link gt-menu-link-main"
                              data-menu-id="main"
                              data-tray-id={1}
                              href="#"
                              id="gt-menu-toplink-main-1"
                            >
                              Home{" "}
                            </a>
                            <div className="gt-menu-tray" id="gt-menu-main-tray-1">
                              <ul className="sub-menu">
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52"
                                  id="menu-item-52"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-1"
                                    data-menu-id="main"
                                    data-tray-id={1}
                                    href="https://conference.gatech.edu/what-we-do/"
                                  >
                                    Who we are &amp; What we do
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53"
                                  id="menu-item-53"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-1"
                                    data-menu-id="main"
                                    data-tray-id={1}
                                    href="https://conference.gatech.edu/evaluations/"
                                  >
                                    Evaluations
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54"
                                  id="menu-item-54"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-1"
                                    data-menu-id="main"
                                    data-tray-id={1}
                                    href="https://conference.gatech.edu/student-staff-applications/"
                                  >
                                    Join Our Team
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"
                                  id="menu-item-30"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-1"
                                    data-menu-id="main"
                                    data-tray-id={1}
                                    href="https://conference.gatech.edu/contact/"
                                  >
                                    Contact Us
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56"
                            id="menu-item-56"
                          >
                            <a
                              aria-expanded="false"
                              aria-haspopup="true"
                              className="gt-menu-top-link gt-menu-link-main"
                              data-menu-id="main"
                              data-tray-id={2}
                              href="#"
                              id="gt-menu-toplink-main-2"
                            >
                              Sleep{" "}
                            </a>
                            <div className="gt-menu-tray" id="gt-menu-main-tray-2">
                              <ul className="sub-menu">
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-255273"
                                  id="menu-item-255273"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-2"
                                    data-menu-id="main"
                                    data-tray-id={2}
                                    href="https://conference.gatech.edu/sleep/"
                                  >
                                    Sleep
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60"
                                  id="menu-item-60"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-2"
                                    data-menu-id="main"
                                    data-tray-id={2}
                                    href="https://conference.gatech.edu/summer-conferences-camps/"
                                  >
                                    Summer Conferences &amp; Camps
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-61"
                                  id="menu-item-61"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-2"
                                    data-menu-id="main"
                                    data-tray-id={2}
                                    href="https://conference.gatech.edu/internlodging/"
                                  >
                                    Summer Intern Lodging
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                      id="menu-item-62"
                                    >
                                      <a
                                        className="gt-submenu-link gt-menu-link-main-2"
                                        data-menu-id="main"
                                        data-tray-id={2}
                                        href="https://conference.gatech.edu/intern-lodging-faq/"
                                      >
                                        Intern Lodging FAQ
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                                  id="menu-item-63"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-2"
                                    data-menu-id="main"
                                    data-tray-id={2}
                                    href="https://conference.gatech.edu/gt-departmental-sponsored-lodging/"
                                  >
                                    GT Departmental Sponsored Lodging
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"
                                  id="menu-item-64"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-2"
                                    data-menu-id="main"
                                    data-tray-id={2}
                                    href="https://conference.gatech.edu/guest-housing/"
                                  >
                                    Guest Housing
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"
                                  id="menu-item-65"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-2"
                                    data-menu-id="main"
                                    data-tray-id={2}
                                    href="https://conference.gatech.edu/provost-housing/"
                                  >
                                    Provost Housing
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-57"
                            id="menu-item-57"
                          >
                            <a
                              aria-expanded="false"
                              aria-haspopup="true"
                              className="gt-menu-top-link gt-menu-link-main"
                              data-menu-id="main"
                              data-tray-id={3}
                              href="#"
                              id="gt-menu-toplink-main-3"
                            >
                              Dine{" "}
                            </a>
                            <div className="gt-menu-tray" id="gt-menu-main-tray-3">
                              <ul className="sub-menu">
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-255271"
                                  id="menu-item-255271"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-3"
                                    data-menu-id="main"
                                    data-tray-id={3}
                                    href="https://conference.gatech.edu/dine/"
                                  >
                                    Dine
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-255249"
                                  id="menu-item-255249"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-3"
                                    data-menu-id="main"
                                    data-tray-id={3}
                                    href="https://dining.gatech.edu/"
                                  >
                                    Residential Dining
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-255250"
                                  id="menu-item-255250"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-3"
                                    data-menu-id="main"
                                    data-tray-id={3}
                                    href="https://dining.gatech.edu/catering"
                                  >
                                    Catering Services
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-58"
                            id="menu-item-58"
                          >
                            <a
                              aria-expanded="false"
                              aria-haspopup="true"
                              className="gt-menu-top-link gt-menu-link-main"
                              data-menu-id="main"
                              data-tray-id={4}
                              href="#"
                              id="gt-menu-toplink-main-4"
                            >
                              Meet{" "}
                            </a>
                            <div className="gt-menu-tray" id="gt-menu-main-tray-4">
                              <ul className="sub-menu">
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-255270"
                                  id="menu-item-255270"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-4"
                                    data-menu-id="main"
                                    data-tray-id={4}
                                    href="https://conference.gatech.edu/meet/"
                                  >
                                    Meet
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"
                                  id="menu-item-68"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-4"
                                    data-menu-id="main"
                                    data-tray-id={4}
                                    href="https://conference.gatech.edu/housing-activity-space-reservations-management/"
                                  >
                                    Housing activity space reservations &amp;
                                    management
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-255261"
                                  id="menu-item-255261"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-4"
                                    data-menu-id="main"
                                    data-tray-id={4}
                                    href="https://sites.gatech.edu/conference/meet/#Auxiliary"
                                  >
                                    Auxiliary Spaces
                                  </a>
                                </li>
                                <li
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-255277"
                                  id="menu-item-255277"
                                >
                                  <a
                                    className="gt-submenu-link gt-menu-link-main-4"
                                    data-menu-id="main"
                                    data-tray-id={4}
                                    href="https://conference.gatech.edu/registration-services/"
                                  >
                                    Registration Services
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"
                            id="menu-item-59"
                          >
                            <a
                              className="gt-menu-link-main"
                              data-menu-id="main"
                              data-tray-id={5}
                              href="https://conference.gatech.edu/unwind/"
                              id="gt-menu-toplink-main-5"
                            >
                              Unwind
                            </a>
                          </li>
                        </ul>
                      </nav>
                      {/* .main-navigation */}
                    </div>
                    {/* gt-main-menu*/}
                    <div
                      className="gt-quick-menu utility-desktop"
                      id="utility-search-wrapper"
                    >
                      <div className="utility-navigation">
                        <div>
                          <nav
                            aria-label="Quick Links Menu"
                            className="gt-menu-quick"
                            id="block-gt-account-menu"
                            role="navigation"
                          >
                            <ul
                              aria-label="Quick Links Menu"
                              className="gt-main-menu utility-navigation"
                              id="gt-menu-main-quick"
                            >
                              <li className="gt-menu-item nav-item" role="none">
                                <button
                                  aria-label="expand search"
                                  className="nav-link"
                                  id="gt-search-toggle"
                                />
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* gt-menu-flex-wrapper */}
                  <div
                    className="gt-tray-container gt-search-tray search-desktop"
                    id="gt-search-tray-desktop"
                  >
                    <form
                      action=""
                      className="search-form"
                      method="get"
                      role="search"
                    >
                      <input
                        type="hidden"
                        defaultValue="https://conference.gatech.edu/"
                      />{" "}
                      <label htmlFor="gt3-main-search">
                        {" "}
                        <span className="screen-reader-text">Search for:</span>{" "}
                      </label>{" "}
                      <input
                        className="search-field"
                        id="gt3-main-search"
                        placeholder="Search here …"
                        type="search"
                        defaultValue=""
                      />
                      <button className="search-submit" type="submit">
                        <span className="screen-reader-text">Search</span>
                      </button>
                    </form>
                  </div>
                  {/* gt-search-tray */}
                  <div
                    className="gt-mobile-utility-menu-wrapper"
                    id="gt-mobile-utility-menu"
                  >
                    <div className="gt-quick-menu" id="utility-search-wrapper">
                      <div className="utility-navigation">
                        <div>
                          <nav
                            aria-label="Quick Links Menu"
                            className="gt-menu-quick mobile"
                            id="block-gt-account-menu"
                            role="navigation"
                          >
                            <ul
                              aria-label="Quick Links Menu"
                              className="gt-main-menu utility-navigation"
                              id="gt-menu-main-quick"
                            >
                              <li className="gt-menu-item nav-item" role="none">
                                <a
                                  className="nav-link"
                                  href="https://sites.gatech.edu/conference/contact/"
                                >
                                  Reserve Now{" "}
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="search-container">
                      <div
                        className="gt-tray-container-mobile gt-search-tray-mobile"
                        id="gt-search-tray-mobile"
                      >
                        <form
                          action=""
                          className="search-form"
                          method="get"
                          role="search"
                        >
                          <input
                            type="hidden"
                            defaultValue="https://conference.gatech.edu/"
                          />{" "}
                          <label htmlFor="gt3-main-search">
                            {" "}
                            <span className="screen-reader-text">
                              Search for:
                            </span>{" "}
                          </label>{" "}
                          <input
                            className="search-field"
                            id="gt3-main-search"
                            placeholder="Search here …"
                            type="search"
                            defaultValue=""
                          />
                          <button className="search-submit" type="submit">
                            <span className="screen-reader-text">Search</span>
                          </button>
                        </form>
                      </div>
                      {/* gt-search-tray */}
                    </div>
                  </div>
                </div>
                {/* region-primary-menu */}
              </div>
              {/* container */}
            </div>
            {/* gt-background-menu */}
          </header>
          <div className="gt-background-page">
            <div className="visually-hidden" id="main-content" tabIndex={-1}>
              Now in main content
            </div>
            <div className="gt-page-body" id="gt-page-body">
              <div className="content-area" id="primary">
                <main className="site-main" id="main" role="main">
                  <article
                    className="post-254815 page type-page status-publish hentry"
                    id="post-254815"
                  >
                    <header className="entry-header">
                      <h1 className="entry-title">
                        Cybersecurity Conference Guest Speaker Registration
                      </h1>
                    </header>
                    {/* .entry-header */}
                    <div className="entry-content">
                      <div className="et-boc" id="et-boc">
                        <div
                          className="et_builder_outer_content"
                          id="et_builder_outer_content"
                        >
                          <div className="et-l et-l--post">
                            <div className="et_builder_inner_content et_pb_gutters3">
                              <div className="et_pb_section et_pb_section_0 et_section_regular et_section_transparent">
                                <div className="et_pb_row et_pb_row_0">
                                  <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                    <div className="et_pb_module et_pb_code et_pb_code_0">
                                      <div className="et_pb_code_inner">
                                        <div
                                          className="frm_forms  with_frm_style frm_style_formidable-style"
                                          id="frm_form_3_container"
                                        >
                                          <div
                                            className="frm-show-form  frm_pro_form "
                                          >
                                            <input
                                              type="hidden"
                                              defaultValue="https://conference.gatech.edu/summer-camp-or-conference-request-form/"
                                            />
                                            <div className="frm_form_fields ">
                                              <fieldset>
                                                <legend className="frm_screen_reader">
                                                  Summer Camp or Conference Request
                                                  Form
                                                </legend>
                                                <div className="frm_fields_container">
                                                  <input
                                                    type="hidden"
                                                    defaultValue="create"
                                                  />{" "}
                                                  <input
                                                    type="hidden"
                                                    defaultValue={3}
                                                  />{" "}
                                                  <input
                                                    id="frm_hide_fields_3"
                                                    type="hidden"
                                                    defaultValue=""
                                                  />{" "}
                                                  <input
                                                    type="hidden"
                                                    defaultValue="summercamporconferencerequestform"
                                                  />{" "}
                                                  <input
                                                    type="hidden"
                                                    defaultValue=""
                                                  />{" "}
                                                  <input
                                                    id="frm_submit_entry_3"
                                                    type="hidden"
                                                    defaultValue="fcbaee44f5"
                                                  />
                                                  <input
                                                    type="hidden"
                                                    defaultValue="/summer-camp-or-conference-request-form/"
                                                  />
                                                  <div
                                                    className="frm_form_field frm_section_heading form-field "
                                                    id="frm_field_44_container"
                                                  >
                                                  </div>
                                                  <div style={{ textAlign: 'justify', 'marginTop': '3%', marginBottom: '3%' }}>
                                                    We are excited to invite you to join us as a guest speaker at our upcoming Georgia Tech Cybersecurity Conference. This event will bring together cybersecurity professionals, researchers, and students to explore the latest trends, challenges, and innovations in the field. Please complete the information below, and our conference services team will reach out to you regarding availability and further details.
                                                  </div>
                                                  <div style={{ textAlign: 'justify', 'marginTop': '3%' }}>
                                                    Date: September 26, 2024, at 10:00 AM ET
                                                  </div>
                                                  <div style={{ textAlign: 'justify', marginBottom: '5%' }}>
                                                    Location: Online via Microsoft Teams
                                                  </div>
                                                  <div
                                                    className="frm_form_field frm_section_heading form-field "
                                                    id="frm_field_51_container"
                                                  >
                                                    <h3 className="frm_pos_top frm_section_spacing">
                                                      Contact Information
                                                    </h3>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_53_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_xctnd"
                                                        id="field_xctnd_label"
                                                      >
                                                        Name{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Text is invalid"
                                                        data-reqmsg="Name cannot be blank."
                                                        data-sectionid={51}
                                                        id="field_xctnd"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_54_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_s5cxg"
                                                        id="field_s5cxg_label"
                                                      >
                                                        Phone{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Phone is invalid"
                                                        data-reqmsg="Phone cannot be blank."
                                                        data-sectionid={51}
                                                        id="field_s5cxg"
                                                        pattern="((\+\d{1,3}(-|.| )?\(?\d\)?(-| |.)?\d{1,5})|(\(?\d{2,6}\)?))(-|.| )?(\d{3,4})(-|.| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                                                        type="tel"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_56_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_pxkks"
                                                        id="field_pxkks_label"
                                                      >
                                                        Email Address{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Email is invalid"
                                                        data-reqmsg="Email Address cannot be blank."
                                                        data-sectionid={51}
                                                        id="field_pxkks"
                                                        type="email"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_58_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_ykceo"
                                                        id="field_ykceo_label"
                                                      >
                                                        Street Address{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Text is invalid"
                                                        data-reqmsg="Street Address cannot be blank."
                                                        data-sectionid={51}
                                                        id="field_ykceo"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_59_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_qf2cc"
                                                        id="field_qf2cc_label"
                                                      >
                                                        City{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Text is invalid"
                                                        data-reqmsg="City cannot be blank."
                                                        data-sectionid={51}
                                                        id="field_qf2cc"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_60_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_fw2ri"
                                                        id="field_fw2ri_label"
                                                      >
                                                        State{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Text is invalid"
                                                        data-reqmsg="State cannot be blank."
                                                        data-sectionid={51}
                                                        id="field_fw2ri"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_top_container frm12 frm_first"
                                                      id="frm_field_61_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_k9s62"
                                                        id="field_k9s62_label"
                                                      >
                                                        Country{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        data-invmsg="Text is invalid"
                                                        data-sectionid={51}
                                                        id="field_k9s62"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_top_container frm12 frm_first"
                                                      id="frm_field_63_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_7si7a"
                                                        id="field_7si7a_label"
                                                      >
                                                        ZIP Code{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        data-invmsg="Text is invalid"
                                                        data-sectionid={51}
                                                        id="field_7si7a"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="frm_form_field frm_section_heading form-field "
                                                    id="frm_field_64_container"
                                                  >
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first"
                                                      id="frm_field_73_container"
                                                    >
                                                      <label
                                                        className="frm_primary_label"
                                                        htmlFor="field_wtooe"
                                                        id="field_wtooe_label"
                                                      >
                                                        Session Topic{" "}
                                                        <span
                                                          aria-hidden="true"
                                                          className="frm_required"
                                                        >
                                                          *
                                                        </span>{" "}
                                                      </label>{" "}
                                                      <input
                                                        aria-invalid="false"
                                                        aria-required="true"
                                                        data-invmsg="Text is invalid"
                                                        data-reqmsg="Attendance cannot be blank."
                                                        data-sectionid={64}
                                                        id="field_wtooe"
                                                        type="text"
                                                        defaultValue=""
                                                      />
                                                    </div>
                                                    <div
                                                      className="frm_form_field form-field  frm_required_field frm_top_container frm12 frm_first vertical_radio"
                                                      id="frm_field_74_container"
                                                    >
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    defaultValue=""
                                                  />
                                                  <input
                                                    type="hidden"
                                                    defaultValue="gCkJBlw3hkqgaBJGXV/Xza78N3w0CQ1xCpTtoXrqAF3oRFkMNqkoNEgDLfGFm00t"
                                                  />
                                                  <input
                                                    className="formidable-g-recaptcha-response"
                                                    type="hidden"
                                                  />
                                                  <p className="formidable-recaptcha-privacy">
                                                    <small>
                                                      This form is protected by
                                                      reCAPTCHA and the Google{" "}
                                                      <a
                                                        href="https://policies.google.com/privacy"
                                                        rel="nofollow"
                                                      >
                                                        Privacy Policy
                                                      </a>{" "}
                                                      and{" "}
                                                      <a
                                                        href="https://policies.google.com/terms"
                                                        rel="nofollow"
                                                      >
                                                        Terms of Service
                                                      </a>{" "}
                                                      apply.
                                                    </small>
                                                  </p>
                                                  <div>
                                                    <button
                                                      onClick={() => { setSubmitted(true); }}
                                                      style={{
                                                        backgroundColor: '#007bff',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        padding: '10px 20px',
                                                        fontSize: '16px',
                                                        fontWeight: 'bold',
                                                        cursor: 'pointer',
                                                        transition: 'background-color 0.3s, transform 0.2s'
                                                      }}
                                                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                                                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                                                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                                                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                    >
                                                      Submit
                                                    </button>
                                                  </div>
                                                </div>
                                              </fieldset>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* .entry-content */}
                  </article>
                  {/* #post-254815 */}
                </main>
                {/* .site-main */}
              </div>
              {/* .content-area */}
            </div>
            {/* gt-page-body */}
          </div>
          {/* gt-background-page */}
          <footer className="site-footer" id="gt-footer" role="contentinfo">
            <div className="gt-background-site-footer">
              <div className="gt-site-footer gt-super-footer" id="gt-superfooter">
                <div className="gt-four-columns">
                  <div className="gt-site-footer-column">
                    <nav
                      aria-label="georgia tech footer section one menu"
                      className="super-footer-links"
                      role="navigation"
                    >
                      <ul className="menu">
                        <li>
                          <a className="btn btn-primary btn-lg disabled" href="">
                            Georgia Tech Resources
                          </a>
                        </li>
                        <li>
                          <a href="https://gatech.edu/offices-and-departments">
                            Offices and Departments
                          </a>
                        </li>
                        <li>
                          <a href="https://news.gatech.edu/">News Center</a>
                        </li>
                        <li>
                          <a href="https://calendar.gatech.edu/">Campus Calendar</a>
                        </li>
                        <li>
                          <a href="https://specialevents.gatech.edu/">
                            Special Events
                          </a>
                        </li>
                        <li>
                          <a href="https://greenbuzz.gatech.edu/">GreenBuzz</a>
                        </li>
                        <li>
                          <a href="https://comm.gatech.edu/">
                            Institute Communications
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-primary btn-lg disabled" href="">
                            Visitor Resources
                          </a>
                        </li>
                        <li>
                          <a href="https://admission.gatech.edu/visit">
                            Campus Visits
                          </a>
                        </li>
                        <li>
                          <a href="https://www.gatech.edu/about/visit">
                            Directions to Campus
                          </a>
                        </li>
                        <li>
                          <a href="https://pts.gatech.edu/visitors">
                            Visitor Parking Information
                          </a>
                        </li>
                        <li>
                          <a href="https://lawn.gatech.edu/gtvisitor">
                            GT visitor Wireless Network Information
                          </a>
                        </li>
                        <li>
                          <a href="https://pe.gatech.edu/global-learning-center">
                            Georgia Tech Global Learning Center
                          </a>
                        </li>
                        <li>
                          <a href="https://gatechhotel.com/">
                            Georgia Tech Hotel and Conference Center
                          </a>
                        </li>
                        <li>
                          <a href="https://gatech.bncollege.com/shop/gatech/home">
                            Barnes and Noble at Georgia Tech
                          </a>
                        </li>
                        <li>
                          <a href="https://arts.gatech.edu/">
                            Ferst Center for the Arts
                          </a>
                        </li>
                        <li>
                          <a href="https://paper.gatech.edu/">
                            Robert C. Williams Paper Museum
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*gt-site-footer-column*/}
                  <div className="gt-site-footer-column">
                    <nav
                      aria-label="georgia tech footer section two menu"
                      className="super-footer-links"
                      role="navigation"
                    >
                      <ul className="menu">
                        <li>
                          <a className="btn btn-primary btn-lg disabled" href="">
                            Colleges, Instructional Sites and Research
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-secondary btn-sm disabled" href="">
                            Colleges
                          </a>
                        </li>
                        <li>
                          <a href="https://cc.gatech.edu/">College of Computing</a>
                        </li>
                        <li>
                          <a href="https://design.gatech.edu/">College of Design</a>
                        </li>
                        <li>
                          <a href="https://coe.gatech.edu/">College of Engineering</a>
                        </li>
                        <li>
                          <a href="https://cos.gatech.edu/">College of Sciences</a>
                        </li>
                        <li>
                          <a href="https://iac.gatech.edu/">
                            Ivan Allen College of Liberal Arts
                          </a>
                        </li>
                        <li>
                          <a href="https://scheller.gatech.edu/">
                            Scheller College of Business
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-secondary btn-sm disabled" href="">
                            Instructional Sites
                          </a>
                        </li>
                        <li>
                          <a href="https://europe.gatech.edu/">Georgia Tech-Europe</a>
                        </li>
                        <li>
                          <a href="https://shenzhen.gatech.edu/">
                            Georgia Tech-Shenzhen
                          </a>
                        </li>
                        <li>
                          <a href="https://pe.gatech.edu/georgia-tech-online">
                            Georgia Tech Online
                          </a>
                        </li>
                        <li>
                          <a href="https://pe.gatech.edu/">Professional Education</a>
                        </li>
                        <li>
                          <a href="https://esl.gatech.edu/">The Language Institute</a>
                        </li>
                        <li>
                          <a className="btn btn-secondary btn-sm disabled" href="">
                            Global Footprint
                          </a>
                        </li>
                        <li>
                          <a href="https://global.gatech.edu/">Global Engagement</a>
                        </li>
                        <li>
                          <a className="btn btn-secondary btn-sm disabled" href="">
                            Research
                          </a>
                        </li>
                        <li>
                          <a href="https://gtri.gatech.edu/">
                            Georgia Tech Research Institute
                          </a>
                        </li>
                        <li>
                          <a href="https://research.gatech.edu/">
                            Research at Georgia Tech
                          </a>
                        </li>
                        <li>
                          <a href="https://research.gatech.edu/meet-dr-chaouki-t-abdallah">
                            Executive Vice President for Research
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*gt-site-footer-column*/}
                  <div className="gt-site-footer-column">
                    <nav
                      aria-label="georgia tech footer section three menu"
                      className="super-footer-links"
                      role="navigation"
                    >
                      <ul className="menu">
                        <li>
                          <a className="btn btn-primary btn-lg disabled" href="">
                            Student and Parent Resources
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-secondary btn-sm disabled" href="">
                            Student Resources
                          </a>
                        </li>
                        <li>
                          <a href="https://gatech.edu/admission">Apply</a>
                        </li>
                        <li>
                          <a href="https://buzzport.gatech.edu/">BuzzPort</a>
                        </li>
                        <li>
                          <a href="https://buzzcard.gatech.edu/">Buzzcard</a>
                        </li>
                        <li>
                          <a href="https://career.gatech.edu/">Career Center</a>
                        </li>
                        <li>
                          <a href="https://commencement.gatech.edu/">Commencement</a>
                        </li>
                        <li>
                          <a href="https://library.gatech.edu/">Library</a>
                        </li>
                        <li>
                          <a href="https://studentlife.gatech.edu">Student Life</a>
                        </li>
                        <li>
                          <a href="https://create-x.gatech.edu/">
                            Student Entrepreneurship
                          </a>
                        </li>
                        <li>
                          <a href="https://ea.oie.gatech.edu/">Study Abroad</a>
                        </li>
                        <li>
                          <a href="https://canvas.gatech.edu/">Canvas</a>
                        </li>
                        <li>
                          <a className="btn btn-secondary btn-sm disabled" href="">
                            Parent Resources
                          </a>
                        </li>
                        <li>
                          <a href="https://parents.gatech.edu/">
                            Parent and Family Programs
                          </a>
                        </li>
                        <li>
                          <a href="https://studentlife.gatech.edu">
                            Division of Student Life
                          </a>
                        </li>
                        <li>
                          <a href="https://finaid.gatech.edu/">
                            Scholarships and Financial Aid
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*gt-site-footer-column*/}
                  <div className="gt-site-footer-column">
                    <nav
                      aria-label="georgia tech footer section four menu"
                      className="super-footer-links"
                      role="navigation"
                    >
                      &nbsp;
                    </nav>
                  </div>
                  {/*gt-site-footer-column*/}
                </div>
                {/* gt-four-columns */}
              </div>
              {/* gt-site-footer */}
              <div className="gt-site-super-footer-hamburger">
                <button
                  aria-controls="footercollapse"
                  aria-expanded="false"
                  aria-label="expand footer menu"
                  className="gt-superfooter-toggle"
                />
              </div>
            </div>
            {/* gt-background-site-footer */}
            <div className="gt-background-gt-footer">
              {/* Color bar that does a reverse of the gradient on the main section of the footer */}
              <div className="gt-background-gt-footer-alt">&nbsp;</div>
              <div className="gt-gt-footer">
                <div className="gt-gt-footer-content">
                  <div className="gt-gt-footer-left first-column">
                    <div className="gt-gt-footer-farleftcol">
                      <div className="gt-gt-footer-address">
                        <div className="gt-social-media">
                          <nav aria-label="Social Media Menu" role="navigation">
                            <ul className="gt-social-menu" id="gt-social-menu">
                              <li className="gt-social-item">
                                <a
                                  className="gt-social-link"
                                  href="https://www.instagram.com/gatechconfserv/"
                                >
                                  <span className="visually-hidden">Instagram</span>
                                </a>
                              </li>
                              <li className="gt-social-item">
                                <a
                                  className="gt-social-link"
                                  href="https://www.facebook.com/gatechconfserv"
                                >
                                  <span className="visually-hidden">Facebook</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <h3>Georgia Institute of Technology</h3>
                        <p>
                          North Avenue
                          <br />
                          Atlanta, GA 30332
                        </p>
                        <span itemProp="telephone">
                          <a
                            aria-label="telephone"
                            className="gt-phone"
                            href="tel: +14048942000"
                          >
                            +1 404.894.2000
                          </a>{" "}
                        </span>{" "}
                        <a
                          aria-label="Campus Map"
                          className="gt-campus-map"
                          href="https://map.gatech.edu/"
                        >
                          Campus Map
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="gt-gt-footer-left second-column">
                    <nav
                      aria-label="General and emergency information links"
                      className="gt-gt-footer-legalcolumns"
                      role="navigation"
                    >
                      <ul className="gt-gt-footer-legallinks">
                        <li>General</li>
                        <li>
                          <a href="https://directory.gatech.edu/">Directory</a>
                        </li>
                        <li>
                          <a href="https://hr.gatech.edu/employment/careers">
                            Employment
                          </a>
                        </li>
                        <li>
                          <a href="https://www.gatech.edu/emergency/">
                            Emergency Information
                          </a>
                        </li>
                      </ul>
                      <ul className="gt-gt-footer-legallinks">
                        <li>Legal</li>
                        <li>
                          <a href="https://www.gatech.edu/privacy">
                            Legal &amp; Privacy Information
                          </a>
                        </li>
                        <li>
                          <a href="https://gbi.georgia.gov/human-trafficking-notice">
                            Human Trafficking Notice
                          </a>
                        </li>
                        <li>
                          <a href="https://titleix.gatech.edu/">
                            Title IX/Sexual Misconduct
                          </a>
                        </li>
                        <li>
                          <a href="https://osi.gatech.edu/hazing-conduct-history">
                            Hazing Public Disclosures
                          </a>
                        </li>
                        <li>
                          <a href="https://www.gatech.edu/accessibility/">
                            Accessibility
                          </a>
                        </li>
                        <li>
                          <a href="https://www.gatech.edu/accountability/">
                            Accountability
                          </a>
                        </li>
                        <li>
                          <a href="https://www.gatech.edu/accreditation/">
                            Accreditation
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="gt-gt-footer-right">
                  <a href="http://www.gatech.edu/">
                    <img
                      alt="Georgia Institute of Technology Logo"
                      aria-label="logo link to main campus site"
                      src="https://conference.gatech.edu/wp-content/themes/gt_theme_wp/gt3theme/images/gt-logo-full-text.svg"
                    />
                  </a>
                  <p className="gt-gt-footer-copyright">
                    © 2024 Georgia Institute of Technology
                  </p>
                  <div className="menu gt-wp-login">
                    <a
                      aria-label="admin login"
                      href="https://sites.gatech.edu/conference/wp-login.php?action=shibboleth"
                    >
                      GT LOGIN
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* gt-gt-footer */}
          </footer>
        </div>
        {/* gt-background-gt-footer */}
        <p>
          <button id="backtotop">Back to top</button>
          {/* .site-footer */}
          {/* .site */}
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '.wmd-buttons-button,\n        .wmd-buttons-content {\n            display: inline-block;\n        }\n        .wmd-buttons-button {\n            text-decoration:none !important;\n            cursor:pointer;\n            position: relative;\n            text-decoration: none;\n            letter-spacing:1px;\n            margin:5px;\n        }\n        .wmd-buttons-button:hover {\n            opacity:0.8;\n            -moz-opacity: 0.8;\n            -khtml-opacity: 0.8;\n            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";\n            filter: alpha(opacity=80);\n        }\n'
            }}
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                ".grecaptcha-badge { visibility: hidden; }.frm_dropzone_disabled{max-width:100% !important; padding: 10px;}.frm_dropzone_disabled .dz-message {display:block;border:none;text-align:left;margin:0;padding:0;}.frm_dropzone_disabled .frm_upload_icon,.frm_dropzone_disabled .frm_upload_text{display: none;}\n"
            }}
          />
        </p>
        <link
          href="https://conference.gatech.edu/wp-content/plugins/formidable/pro/css/ui-lightness/jquery-ui.css?ver=6.11.2"
          id="jquery-theme-css"
          media="all"
          rel="stylesheet"
          type="text/css"
        />
        <style
          id="et-builder-module-design-254815-cached-inline-styles"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".et_divi_builder #et_builder_outer_content .et_pb_module.et_pb_text ul,.et_divi_builder #et_builder_outer_content .et_pb_module.et_pb_text ol{padding:0 0 23px 16px}.et_divi_builder #et_builder_outer_content .et_pb_module.et_pb_text ul li{list-style-type:disc}.et_divi_builder #et_builder_outer_content .et_pb_module.et_pb_text ol li{list-style-type:decimal}\n"
          }}
        />
      </div>
  );
}

export default App;
