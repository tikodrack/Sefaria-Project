import {
  ReaderNavigationMenuSection,
  TextBlockLink,
  TwoOrThreeBox,
  NBox,
  LanguageToggleButton,
} from './Misc';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes  from 'prop-types';
import classNames  from 'classnames';
import Sefaria  from './sefaria/sefaria';
import $  from './sefaria/sefariaJquery';
import ReaderNavigationCategoryMenu  from './ReaderNavigationCategoryMenu';
import Footer  from './Footer';
import MobileHeader from './MobileHeader';
import {TopicCategory} from './TopicPage';

// The Navigation menu for browsing and searching texts, plus some site links.
const ReaderNavigationMenu = ({categories, topic, topicTitle, settings, setCategories, setNavTopic, 
        setTopic, onClose, openNav, openSearch, showMoreTexts, setMoreTexts,
        showMoreTopics, setMoreTopics, toggleLanguage, openMenu, 
        handleClick, openDisplaySettings,
        hideHeader, hideNavHeader, multiPanel, home, compare, interfaceLang}) => {

  const initialWidth = hideNavHeader ? 1000 : 500; // Assume we're in a small panel if we're hiding the nav header
  const [width, setWidth] = useState(initialWidth);

  const ref = useRef(null);
  useEffect(() => {
    deriveAndSetWidth();
    window.addEventListener("resize", deriveAndSetWidth);
    return () => {
        window.removeEventListener("resize", deriveAndSetWidth);
    }
  }, []);

  const deriveAndSetWidth = () => setWidth(ref.current ? ref.current.offsetWidth : initialWidth);

  const navHome = () => {
    setCategories([]);
    setNavTopic("", null);
    openNav();
  };

  const enableShowMoreTexts = (event) => {
    event.preventDefault();
    setMoreTexts(true);
  };
  const enableShowMoreTopics = (event) => {
    event.preventDefault();
    setMoreTopics(true);
  };

  // List of Texts in a Category
  if (categories.length) {
    return (
        <div ref={ref} className="readerNavMenu" onClick={handleClick}>
            <ReaderNavigationCategoryMenu
              categories={categories}
              category={categories.slice(-1)[0]}
              closeNav={onClose}
              setCategories={setCategories}
              toggleLanguage={toggleLanguage}
              openDisplaySettings={openDisplaySettings}
              navHome={navHome}
              compare={compare}
              hideNavHeader={hideNavHeader}
              width={width}
              contentLang={settings.language}
              interfaceLang={interfaceLang} />
        </div>
    );
  }

  // Topics List
  if (topic.length) {
    return (
        <div ref={ref} className="readerNavMenu" onClick={handleClick}>
            <TopicCategory
              topic={topic}
              topicTitle={topicTitle}
              setTopic={setTopic}
              setNavTopic={setNavTopic}
              toggleLanguage={toggleLanguage}
              contentLang={settings.language}
              interfaceLang={interfaceLang}
              width={width}
              multiPanel={multiPanel}
              compare={compare}
              hideNavHeader={hideNavHeader}
              openDisplaySettings={openDisplaySettings}
              openSearch={openSearch}
              onClose={onClose}
            />
        </div>
    )
  }
  // Root Library Menu
  let categoriesBlock = Sefaria.toc.map(cat => {
    const style = {"borderColor": Sefaria.palette.categoryColor(cat.category)};
    const openCat = e => {e.preventDefault(); setCategories([cat.category])};
    return (<a href={`/texts/${cat.category}`} className="readerNavCategory" data-cat={cat.category} style={style} onClick={openCat}>
                <span className="en">{cat.category}</span>
                <span className="he">{cat.heCategory}</span>
              </a>
            );
  });
  const more = (<a href="#" className="readerNavCategory readerNavMore sans-serif" onClick={enableShowMoreTexts}>
                  <span className="int-en">More<img src="/static/img/arrow-right.png" alt="" /></span>
                  <span className="int-he">עוד<img src="/static/img/arrow-left.png" alt="" /></span>
              </a>);
  const nCats  = width < 500 ? 9 : 8;
  categoriesBlock = showMoreTexts ? categoriesBlock : categoriesBlock.slice(0, nCats).concat(more);
  categoriesBlock = (<div className="readerNavCategories"><TwoOrThreeBox content={categoriesBlock} width={width} /></div>);


  let siteLinks = Sefaria._uid ?
                [(<a className="siteLink" key='profile' href="/my/profile">
                    <i className="fa fa-user"></i>
                    <span className="en">Your Profile</span>
                    <span className="he">הפרופיל שלי</span>
                  </a>),
                 (<span className='divider' key="d1">•</span>),
                 (<a className="siteLink" key='about' href="/about">
                    <span className="en">About Sefaria</span>
                    <span className="he">אודות ספריא</span>
                  </a>),
                 (<span className='divider' key="d2">•</span>),
                 (<a className="siteLink" key='logout' href="/logout">
                    <span className="en">Logout</span>
                    <span className="he">התנתק</span>
                  </a>)] :

                [(<a className="siteLink" key='about' href="/about">
                    <span className="en">About Sefaria</span>
                    <span className="he">אודות ספריא</span>
                  </a>),
                 (<span className='divider' key="d1">•</span>),
                 (<a className="siteLink" id='loginLink' key='login' href="/login">
                    <span className="en">Sign In</span>
                    <span className="he">התחבר</span>
                  </a>)];
  siteLinks = (<div className="siteLinks">
                {siteLinks}
              </div>);


  let calendar = Sefaria.calendars.map(function(item) {
      return (<TextBlockLink
                sref={item.ref}
                url_string={item.url}
                title={item.title["en"]}
                heTitle={item.title["he"]}
                displayValue={item.displayValue["en"]}
                heDisplayValue={item.displayValue["he"]}
                category={item.category}
                showSections={false}
                recentItem={false}/>)
  });
  calendar = (<div className="readerNavCalendar"><TwoOrThreeBox content={calendar} width={width} /></div>);


  let resources = [
      <TocLink en="Create a Sheet" he="צור דף חדש" href="/sheets/new" resourcesLink={true}
            img="/static/img/new-sheet.svg"  alt="new source sheet icon" />,
      <TocLink en="Authors" he="רשימת מחברים" href="/people" resourcesLink={true}
            img="/static/img/authors-icon.png" alt="author icon"/>,
      <TocLink en="Collections" he="אסופות" href="/collections" resourcesLink={true}
            img="/static/icons/collection.svg" alt="Collections icon"/>,
      <TocLink en="Visualizations" he="תרשימים גרפיים" href="/visualizations" resourcesLink={true}
            img="/static/img/visualizations-icon.png" alt="visualization icon" />,
  ];

  const torahSpecificResources = ["/visualizations", "/people"];
  if (!Sefaria._siteSettings.TORAH_SPECIFIC) {
    resources = resources.filter(r => torahSpecificResources.indexOf(r.props.href) == -1);
  }
  resources = (<div className="readerTocResources"><NBox n={2} content={resources} width={width} /></div>);


  const topContent = hideNavHeader ? null : (
    <MobileHeader
      mode={home ? 'home' : 'mainTOC'}
      navHome={navHome}
      interfaceLang={interfaceLang}
      openDisplaySettings={openDisplaySettings}
      onClose={onClose}
      compare={compare}
      openSearch={openSearch}
    />
  );

  let topUserData = [
      <TocLink en="Saved" he="שמורים" href="/texts/saved" resourcesLink={true} img="/static/img/star.png" alt="saved text icon"/>,
      <TocLink en="History" he="היסטוריה" href="/texts/history" resourcesLink={true} img="/static/img/clock.png" alt="history icon"/>
  ];
  topUserData = (<div className="readerTocResources userDataButtons"><NBox n={2} content={topUserData} width={width} /></div>);

  let donation  = [
      <TocLink en="Make a Donation" he="תרומות" resourcesLink={true} classes="donationLink" img="/static/img/heart.png" alt="donation icon" href="https://sefaria.nationbuilder.com/supportsefaria"/>,
      <TocLink en="Sponsor a day" he="תנו חסות ליום לימוד" resourcesLink={true} classes="donationLink" img="/static/img/calendar.svg" alt="donation icon" href="https://sefaria.nationbuilder.com/sponsor"/>,
  ];

  donation = (<div className="readerTocResources"><NBox n={2} content={donation} width={width} /></div>);


  let topicBlocks = Sefaria.topicTocPage().map((t,i) => {
      const openTopic = e => {e.preventDefault(); setNavTopic(t.slug, {en: t.en, he: t.he})};
      return <a href={"/topics/category/" + t.slug}
         onClick={openTopic}
         className="blockLink"
         key={i}>
          <span className='en'>{t.en}</span>
          <span className='he'>{t.he}</span>
      </a>
  });
  const moreTopics = (<a href="#" className="blockLink readerNavMore sans-serif" onClick={enableShowMoreTopics}>
                  <span className="int-en">More<img src="/static/img/arrow-right.png" alt="" /></span>
                  <span className="int-he">עוד<img src="/static/img/arrow-left.png" alt="" /></span>
              </a>);
  const azButton = (
    <a href={"/topics"}
       onClick={openMenu.bind(null, "topics")}
       className="blockLink readerNavMore sans-serif"
    >
        <span className='en'>All Topics</span>
        <span className='he'>כל הנושאים</span>
    </a>
  );
  topicBlocks = showMoreTopics ? topicBlocks.concat(azButton) : topicBlocks.slice(0, nCats).concat(moreTopics);
  const topicsBlock = (<div className="readerTocTopics"><TwoOrThreeBox content={topicBlocks} width={width} /></div>);


  const title = (<h1 className="sans-serif-in-hebrew">
                { multiPanel && interfaceLang !== "hebrew" && Sefaria._siteSettings.TORAH_SPECIFIC ?
                 <LanguageToggleButton toggleLanguage={toggleLanguage} /> : null }
                <span className="int-en">{Sefaria._siteSettings.LIBRARY_NAME.en}</span>
                <span className="int-he">{Sefaria._siteSettings.LIBRARY_NAME.he}</span>
              </h1>);


  const dedication = Sefaria._siteSettings.TORAH_SPECIFIC && ! compare ? <Dedication /> : null;

  const libraryMessage = Sefaria._siteSettings.LIBRARY_MESSAGE && !compare ? 
                          <div className="libraryMessage" dangerouslySetInnerHTML={ {__html: Sefaria._siteSettings.LIBRARY_MESSAGE} }></div> :
                          null;

  const footer = compare ? null : <Footer />;
  const classes = classNames({readerNavMenu:1, noHeader: !hideHeader, compare: compare, home: home, noLangToggleInHebrew: 1 });
  const contentClasses = classNames({content: 1, hasFooter: footer != null});

  return(<div ref={ref} className={classes} onClick={handleClick} key="0">
          {topContent}
          <div className={contentClasses}>
            <div className="contentInner">
              { compare ? null : title }
              { dedication }
              { libraryMessage }
              { topUserData }
              <ReaderNavigationMenuSection title="Texts" heTitle="טקסטים" content={categoriesBlock} />
              { Sefaria._siteSettings.TORAH_SPECIFIC ? <ReaderNavigationMenuSection title="Calendar" heTitle="לוח יומי" content={calendar} enableAnchor={true} /> : null }
              { Sefaria.topicTocPage().length ? <ReaderNavigationMenuSection title="Topics" heTitle="נושאים" content={topicsBlock} /> : null }
              { !compare ? (<ReaderNavigationMenuSection title="Resources" heTitle="קהילה" content={resources} />) : null }
              { Sefaria._siteSettings.TORAH_SPECIFIC ? <ReaderNavigationMenuSection title="Support Sefaria" heTitle="תמכו בספריא" content={donation} /> : null }
              { multiPanel ? null : siteLinks }
            </div>
            {footer}
          </div>
        </div>);
};
ReaderNavigationMenu.propTypes = {
  categories:          PropTypes.array.isRequired,
  topic:               PropTypes.string.isRequired,
  settings:            PropTypes.object.isRequired,
  setCategories:       PropTypes.func.isRequired,
  setNavTopic:         PropTypes.func.isRequired,
  onClose:             PropTypes.func.isRequired,
  openNav:             PropTypes.func.isRequired,
  openSearch:          PropTypes.func.isRequired,
  openMenu:            PropTypes.func.isRequired,
  handleClick:         PropTypes.func.isRequired,
  openDisplaySettings: PropTypes.func,
  toggleLanguage:      PropTypes.func,
  hideNavHeader:       PropTypes.bool,
  hideHeader:          PropTypes.bool,
  multiPanel:          PropTypes.bool,
  home:                PropTypes.bool,
  compare:             PropTypes.bool,
  interfaceLang:       PropTypes.string,
};  


const TocLink = ({en, he, img, alt, href, resourcesLink, classes, onClick}) =>
    <a className={"sans-serif " + (resourcesLink ? "resourcesLink " : "") + (classes || "")} href={href} onClick={onClick}>
        {img?<img src={img} alt={alt} />:""}
        <span className="int-en">{en}</span>
        <span className="int-he">{he}</span>
    </a>;


const Dedication = () => {
    //Get the local date 6 hours from now (so that dedication changes at 6pm local time
    let dedDate = new Date();
    dedDate.setHours(dedDate .getHours() + 6);
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const date = new Date(dedDate - tzoffset).toISOString().substring(0, 10);

    const [dedicationData, setDedicationData] = useState(Sefaria._tableOfContentsDedications[date]);

    const $url = 'https://spreadsheets.google.com/feeds/cells/1DWVfyX8H9biliNYEy-EfAd9F-8OotGnZG9jmOVNwojs/2/public/full?alt=json';

    async function fetchDedicationData(date) {
        const response = await $.getJSON($url).then(function (data) {
            return {data}
        });
        const dedicationData = response["data"]["feed"]["entry"];
        const enDedication = dedicationData[1]["content"]["$t"];
        const heDedication = dedicationData[2]["content"]["$t"];
        const enDedicationTomorrow = dedicationData[4]["content"]["$t"];
        const heDedicationTomorrow = dedicationData[5]["content"]["$t"];
        Sefaria._tableOfContentsDedications[dedicationData[0]["content"]["$t"]] = {"en": enDedication, "he": heDedication};
        Sefaria._tableOfContentsDedications[dedicationData[3]["content"]["$t"]] = {"en": enDedicationTomorrow, "he": heDedicationTomorrow};
        setDedicationData(Sefaria._tableOfContentsDedications[date]);
    }

    useEffect( () => {
        if (!dedicationData) {
            fetchDedicationData(date);
        }
    }, []);

    return (
        !dedicationData ? null :
        <div className="dedication">
          <span>
              <span className="int-en">{dedicationData.en}</span>
              <span className="int-he">{dedicationData.he}</span>
          </span>
        </div>
    );
};


export default ReaderNavigationMenu;
