import React, {useState, useRef} from 'react';
import {
    SimpleInterfaceBlock,
    NewsletterSignUpForm,
    TwoOrThreeBox,
    ResponsiveNBox
} from './Misc';
import palette from './sefaria/palette';
import classNames from 'classnames';
import Cookies from 'js-cookie';



/*  Templates:

        <Header
            enTitle=""
            enText=""
            enImg="/static/img/"
            enImgAlt=""
            enActionURL={null}
            enActionText={null}
            heTitle=""
            heText=""
            heImg="/static/img/"
            heImgAlt=""
            heActionURL={null}
            heActionText={null}
        />

        <H2Block
            en=""
            he=""
        />

        <EnBlock padded={true}>
            {Any content}
        </EnBlock

        <HeBlock padded={true}>
            {Any content}
        </HeBlock>

        <Feature
            enTitle=""
            enText=""
            enImg="/static/img/"
            enImgAlt=""
            heTitle=""
            heText=""
            heImg="/static/img/"
            heImgAlt=""
            borderColor="#"
        />

        <About
            enTitle=""
            heTitle=""
            enText=""
            heText=""
            backgroundColor=""
        />
 */


const ContestLandingPage = () => (
    <StaticPage>
        <Header
            enTitle="Powered by Sefaria Contest"
            enText="Advance the frontiers of tech and Torah this summer. Build something new using our free data or API."
            enImg="/static/img/contest-landing-page/codemockup3.png"
            enImgAlt=""
            enActionURL="http://sefaria.nationbuilder.com/contest2021"
            enActionText="Register to Join"
            heTitle="תחרות פיתוח תוכנה"
            heText="הצטרפו אלינו לאתגר שיקדם את תחום התורה והטכנולוגיה בבניית תוצר יצירתי ועצמאי בעזרת המאגר החופשי וממשק ה־API של ספריא."
            heImg="/static/img/contest-landing-page/codemockup3.png"
            heImgAlt=""
            heActionURL="http://sefaria.nationbuilder.com/contest2021"
            heActionText="הרשמה לתחרות"
        />

        <H2Block en="The Contest" he="התחרות"/>
        <EnBlock padded={true}>
            <p>Sefaria offers a free digital dataset of Jewish texts, translations, and interconnections that is open for anyone to reuse in novel ways. Last year, we received over 50 innovative Powered by Sefaria projects using our open data or API (<a href="/powered-by-sefaria-contest-2020">see the winners and honorable mentions!</a>). We’re eager to see what else our community can dream up to advance the frontiers of Torah and technology in this year’s contest!</p>
            <p>What you create is up to you. It could be a functioning web app or just a compelling demo; an interactive visualization, or just a question that digs into data quantitatively in search of an answer; something useful and impactful to the world of learning, or just a crazy experiment that fascinates you without a clear application. <b>The only requirement is that your project must prominently make use of the data that Sefaria has to offer</b>.</p>
            <p>To get your ideas flowing, here are three great examples from last year’s Powered by Sefaria contest. You can find dozens more projects on our <a href="https://github.com/Sefaria/Sefaria-Project/wiki/Projects-Powered-by-Sefaria">Powered by Sefaria list</a> on GitHub and on the <a href="https://www.sefaria.org/powered-by-sefaria-contest-2020">Powered by Sefaria 2020 Winners & Honorable Mentions page</a>.</p>
        </EnBlock>
        <HeBlock padded={true}>
            <p>ספריא מציעה לציבור מסד נתונים דיגיטלי וחופשי של מקורות יהודיים, תרגומים וקישורים בין־טקסטואליים.  בשנה שעברה הגיעו לפתחנו יותר מ־50 מיזמים חדשניים שהשתמשו במסד הנתונים הפתוח  או ב־API שלנו (<a href="/powered-by-sefaria-contest-2020">ראו את המיזמים הזוכים ואת המיזמים שזכו להערכה מיוחדת</a>). אנו מלאי ציפייה לראות מה עוד מסוגלת הקהילה שלנו לעשות כדי לחצות את הגבולות המוכרים של התורה והטכנולוגיה?</p>
            <p>המיזם תלוי רק בכם: זה יכול להיות יישומון רשת פעיל או דמו משכנע; ויזואליזציה אינטראקטיבית או שאלה שיורדת לעומקם של הנתונים הכמותיים של המערכת; כלי שימושי ויעיל לעולם הלימוד או ניסוי מדליק ללא תוצר ברור שפשוט מרתק אתכם. <b>הדרישה היחידה היא שבמיזם ייעשה שימוש מובהק במסד הנתונים של ספריא</b>.</p>
            <p>כדי לעזור לכם להתחיל הינה שלוש דוגמאות מעולות מתחרות פיתוח התוכנה בשנה שעברה. אפשר למצוא עשרות מיזמים אחרים ברשימת המיזמים של התחרות ב<a href="https://github.com/Sefaria/Sefaria-Project/wiki/Projects-Powered-by-Sefaria">גיטהאב</a> וב<a href="/powered-by-sefaria-contest-2020">עמוד המיזמים הזוכים והמיזמים שזכו להערכה מיוחדת בתחרות פיתוח התוכנה לשנת 2020</a>.</p>
        </HeBlock>

        <ButtonRow white={true}>
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="https://www.youtube.com/watch?v=C6nMn4CLuEU"
                he_href="https://www.youtube.com/watch?v=C6nMn4CLuEU"
                he="סרגל הכלים של התלמוד"
                en="Talmud Sidebar Extension"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="https://www.youtube.com/watch?v=uB4In-Nc2WU"
                he_href="https://www.youtube.com/watch?v=uB4In-Nc2WU"
                he="מזמור שיר"
                en="Mizmor Shir"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="https://jhostyk.github.io/SeferSimilarityMap/"
                he_href="https://jhostyk.github.io/SeferSimilarityMap/"
                he="ספר – מפת דמיון בין טקסטים"
                en="Sefer Similarity Map"
            />
        </ButtonRow>


        <H2Block en="Timeline and Prize" he="לוח זמנים ופרסים" />
        <EnBlock padded={true}>
            <p>The contest is open from Sunday, June 13th through Tuesday, August 31st. <a href="https://sefaria.nationbuilder.com/contest2021">Registered participants</a> will receive a form to submit their projects. The contest deliverable must be in the form of a URL where our judges can directly access your work. For many projects, this will be a running demo of an app on the web. For other projects, your URL may point to a description and summary of the work you've done, much like a poster for a research project presented at a conference. For desktop or mobile apps, you will need to host your app on a web-based emulator (like <a href="https://appetize.io/">Appetize.io</a>) so our judges can interact with it without downloading executables.</p>
            <p>A jury will select three projects to win cash prizes: $5,000 for the grand prize, $5,000 for the Women in Tech prize, and $3,600 for the youth prize.</p>
            <p>A selection of completed projects will also be featured on a contest page and shared with our community.</p>
        </EnBlock>
        <HeBlock padded={true}>
            <p>התחרות תתחיל ביום רשון, 13 ביוני, ותסתיים ביום שלישי, 31 באוגוסט. <a href="https://sefaria.nationbuilder.com/contest2021">המשתתפים והמשתתפות שיירשמו</a> יקבלו טופס להגשת המיזם. ההגשה צריכה להיות בפורמט URL שדרכו יוכלו השופטים לגשת ישירות אל המיזם. עבור מיזמים רבים משמעות הדבר היא העלאת גרסת דמו חיה של היישומון, שתפעל ברשת. עבור מיזמים אחרים כתובת ה־URL תוביל לתיאור ולתקציר של המיזם, בדומה לכרזות המציגות מיזמי מחקר בכנסים. אם המיזם שלכם הוא יישומון לשולחן עבודה או לטלפון נייד, יש להפעיל אותו באמצעות אמולטור מבוסס רשת (לדוגמה <a href="https://appetize.io">Appetize.io</a>), כדי שהשופטים והשופטות יוכלו להשתמש בו בלי להוריד קובצי הרצה כלשהם.</p>
            <p>השופטים יבחרו שלושה מיזמים שיזכו בפרס כספי: 5,000 דולר לפרס הכללי, 5,000 דולר לפרס לנשים מפתחות תוכנה ו־3,600 דולר לפרס המתמודד הצעיר.</p>
            <p>מבחר מיזמים אחרים שיושלמו, יופיעו אף הם בדף התחרות וישותפו עם קהילת ספריא.</p>
        </HeBlock>

        <H2Block en="Eligibility" he="זכאות" />
        <EnBlock padded={true}>
            <p>The Contest is open to applicants from the United States and Israel. All participants are eligible to enter the grand prize. Eligible participants for the Women in Tech prize include a) individuals who identify as women or b) groups of 3 or more, the majority of whom identify as women. Participants who are eligible for the Women in Tech prize may submit their project into both the Women in Tech prize and grand prize categories, and the youth prize category if eligible. Eligible participants for the youth prize include people under the age of 23. Participants who are eligible for the youth prize may submit their project into both the youth prize and grand prize categories, as well as the Women in Tech category if eligible. All entrants under the age of 18 must obtain permission from their parent or guardian before entering the contest. <b>To learn more, see our official <a href="https://drive.google.com/file/d/1CMlxEe-xIk8RNpfdBRlytLDWsdLMXPpl/view">Contest Rules</a></b>.</p>
        </EnBlock>
        <HeBlock padded={true}>
            <p>התחרות הכללית פתוחה למועמדים מארצות הברית ומישראל (נשים וגברים). הפרס המיוחד עבור נשים מיועד לנשים שמפתחות תוכנה או לקבוצה בתנאי שיש בה רוב נשי. א. אישה; ב. קבוצה של שלושה משתתפים או יותר, שמורכבת רובה מנשים. המשתתפות הזכאיות יכולות לשלוח את המיזם שלהן להתמודדות על כמה פרסים: הפרס הכללי, הפרס לנשים מפתחות תוכנה ועל פרס המתמודד הצעיר, אם הן עומדות בתנאיו. התנאי להתמודדות בקטגוריית פרס המתמודד הצעיר הוא שגיל המשתתף אינו עולה על 23. כל המשתתפים בתחרות מתחת לגיל 18 חייבים להציג אישור מהורה או מאפטרופוס לפני הכניסה לתחרות. לעיון נוסף, ראו את <a href="https://drive.google.com/file/d/1CMlxEe-xIk8RNpfdBRlytLDWsdLMXPpl/view">תקנון התחרות הרשמי שלנו</a>.</p>
        </HeBlock>
        <Spacer/>

        <GreyBox>
            <ImageWithText
                enText="<i>“By open-sourcing a vast array of Jewish texts, Sefaria's API makes programmatic analysis of Jewish tradition simple for the everyday programmer. talmud.page began as my own hand-tailored UI for learning Daf Yomi. The more developers use Sefaria's API to solve creative questions, the richer Jewish learning will be worldwide.”
                    <br/><br/>
                    - Ron Shapiro, <a href='https://talmud.page'>talmud.page</a></i></div>"
                enImg="/static/img/contest-landing-page/AdobeStock_314348719.png"
                enImgAlt=""
                heText='<i>"על-ידי אספקת גישה למגוון עצום של טקסטים יהודיים, ה-API של ספריא מאפשר למתכנת הפשוט לבצע ניתוח פרוגרמטי של המסורת היהודי. talmud.page החל כממשק משתמש אישי לצורך לימוד דף יומי. ככל שמפתחים ישתמשו יותר  ב-API של ספריא לפתרון שאלות יצירתיות- הלימוד היהודי בכל העולם- יזכה"
                    <br/><br/>
                    - רון שפירא, <a href="https://talmud.page">talmud.page</a></i>'
                heImg="/static/img/contest-landing-page/AdobeStock_314348719.png"
                heImgAlt=""
            />
        </GreyBox>

        <H2Block en="Winner Selection" he="בחירת הזוכה" />
        <EnBlock padded={true}>
            <p>Winners will be selected by a panel of three judges. The judges will evaluate each project on the basis of four criteria:</p>
            <ol>
                <li>Highlighting of Jewish texts and their unique value</li>
                <li>Technological accomplishment</li>
                <li>Potential for impact or inspiration</li>
                <li>Creativity</li>
            </ol>
            <p>Projects that existed prior to the call for submission may enter on the basis of additional work added since the time the contest began. Judges will evaluate the projects on the basis of the additional work. Projects don’t have to be 100% complete or polished to enter either; our judges will be happy to see the potential in a promising start. </p>
        </EnBlock>
        <HeBlock padded={true}>
            <p>הזוכים ייבחרו על ידי פאנל של שלושה שופטים. השופטים יבחנו כל פרויקט על בסיס הקריטריונים הבאים:</p>
            <ol>
                <li>דגש על טקסטים יהודיים וערכם המיוחד</li>
                <li>ההישגים הטכנולוגיים שבמיזם</li>
                <li>פוטנציאל ההשפעה או ההשראה הטמון במיזם</li>
                <li>יצירתיות המיזם</li>
            </ol>
            <p>אפשר להגיש מיזמים שהתחילו עוד לפני פרסום הקול קורא, כל עוד תיעשה עבודה נוספת במיזם אחרי שהתחרות כבר החלה. השופטים יעריכו את המיזמים על פי העבודה שהתווספה.</p>
        </HeBlock>

        <H2Block en="Registration" he="הרשמה"/>
        <EnBlock padded={true}>
            <p>Interested in participating in the contest? <a href="http://sefaria.nationbuilder.com/contest2021">Sign up</a> for updates and resources, including office hours with the Sefaria engineering team. We'll share a link for project submissions with you in the coming weeks!</p>
        </EnBlock>
        <HeBlock padded={true}>
            <p>אם אתם מעוניינים להשתתף בתחרות, <a href="https://sefaria.nationbuilder.com/contest2021">לחצו כאן להרשמה</a>, כדי שנוכל לשלוח לכם עדכונים במהלך התחרות בנוגע לכלים ומשאבים, כולל שעות העבודה של המתכנתים שלנו, שתוכלו לשאול אותם שאלות ולהתייעץ איתם על רעיונות אחד־על־אחד. תוכלו להתמודד באופן עצמאי או כחלק מצוות, ולהירשם בכל שלב מעכשיו ועד לסיום התחרות.</p>
        </HeBlock>

        <ButtonRow white={true}>
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="http://sefaria.nationbuilder.com/contest2021"
                he_href="http://sefaria.nationbuilder.com/contest2021"
                he="טופס הרשמה"
                en="Register"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="https://drive.google.com/file/d/1CMlxEe-xIk8RNpfdBRlytLDWsdLMXPpl/view"
                he_href="https://drive.google.com/file/d/1CMlxEe-xIk8RNpfdBRlytLDWsdLMXPpl/view"
                he="כללי התחרות"
                en="Official Rules"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="https://github.com/Sefaria/Sefaria-Project"
                he_href="https://github.com/Sefaria/Sefaria-Project"
                he="GitHub"
                en="GitHub"
            />
        </ButtonRow>

        <CallToActionFooterWithButton
            href="/powered-by-sefaria-contest-2020"
            he_href="/powered-by-sefaria-contest-2020"
            enText="Need Inspiration?"
            heText="רוצה לקבל השראה?"
            enButtonText="See 2020 Projects"
            heButtonText="למיזמי 2020"
        />

        {/*
        <CallToActionFooterWithButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYygtWWCte6ljlNUq7qwVItoJREeaVRXznuuVC8213xw6k4w/viewform"
            he_href="https://docs.google.com/forms/d/e/1FAIpQLSdYygtWWCte6ljlNUq7qwVItoJREeaVRXznuuVC8213xw6k4w/viewform"
            enText="Ready to share what you created?"
            heText="מוכנים לשתף את מה שיצרתם?"
            enButtonText="Submit your project"
            heButtonText="הגישו את הפרוייקט שלכם"
        />
        */}
    </StaticPage>
);


const RambanLandingPage = () => {
    const emailLink = <a target="_blank" href="mailto:hannah@sefaria.org?Subject=Ramban Sponsorship">hannah@sefaria.org</a>
    return <StaticPage optionalClass="englishOnly">
        <Header
            enTitle="Ramban on Torah: A Translation"
            enText="Sefaria is thrilled to release Rabbi Charles Chavel's classic English translation of Rabbi Moshe ben Nachman (known as Ramban or Nachmanides) on Torah. This historic launch makes a complete bilingual version of Ramban's commentary available online for the very first time, and it will remain free for use and re-use under a CC-BY license. We are profoundly grateful to the following donors for making this possible."
            enActionText="Read the Text"
            enActionURL="/texts/Tanakh/Rishonim%20on%20Tanakh/Ramban"
            heTitle="Ramban on Torah: A Translation"
            heText="Sefaria is thrilled to be able to offer Rabbi Charles Chavel's classic English translation of Ramban (Nachmanides) on Torah
            to the world.  This historic launch makes a complete version of this work available online for the very first time,
            and it will remain free for use and re-use under a CC-BY license. We are profoundly grateful to the following donors for making this possible."
            heActionURL="/texts/Tanakh/Rishonim%20on%20Tanakh/Ramban"
            heActionText="Read the Text"
            enImg=""
            heImg=""
        />
        <div className="staticPageBlockInner flexContainer">
        <ResponsiveNBox content={
            [['Bereshit', 'Leib and Linda Koyfman', 'In honor of Hilary and Mo Koyfman and family', '/Genesis.1.1?with=Ramban'],
            ['Noach', 'Tali and Sender Cohen', '', '/Genesis.6.9?with=Ramban'],
            ['Lech Lecha', 'Rabbi David Aladjem', 'In support of Sefaria', '/Genesis.12.1?with=Ramban'],
            ['Vayera', 'Howard and Tova Weiser', 'In honor of their children and grandchildren', '/Genesis.18.1?with=Ramban'],
            ['Chayei Sara', 'Rechtschaffen Family', "In honor of the 30th anniversary of Andrew Rechtscaffen's bar mitzvah", '/Genesis.23.1?with=Ramban'],
            ['Toldot', 'Shapira-Stern Family', 'In honor of David Shapira', '/Genesis.25.19?with=Ramban'],
            ['Vayetzei', null, null, '/Genesis.28.10?with=Ramban'],
            ['Vayishlach', null, null, '/Genesis.32.4?with=Ramban'],
            ['Vayashev', null, null, '/Genesis.37.1?with=Ramban'],
            ['Miketz', 'Raquel and Aryeh Rubin', 'In memory of the one and a half million children', '/Genesis.41.1?with=Ramban'],
            ['Vayigash', 'Laurie and Milton Wakschlag', 'In memory of their parents Fishel and Sheva Wakschlag', '/Genesis.44.18?with=Ramban'],
            ['Vayechi', 'The Stein Children', 'In memory of their father Jacob K. Stein z"l', '/Genesis.47.28?with=Ramban']]
            .map(i => <ParashaSponsorship title={i[0]} sponsorNames={i[1]} message={i[2]} link={i[3]}/>)}/>
        </div>

        <StaticHR />

        <div className="staticPageBlockInner flexContainer">
        <ResponsiveNBox content={
            [['Shemot', 'Sam and Debbie Moed', 'In memory of Henry I. Zeisel, who derived tremendous joy from learning. This perush of his bar mitzvah parashah is dedicated with love.', '/Exodus.1.1?with=Ramban'],
            ['Vaera', 'The loving children and children-in-law of Arthur Helft', 'In memory of Dr. Arthur Helft', '/Exodus.6.2?with=Ramban'],
            ['Bo', 'Honey Kessler Amado', 'In memory of her husband, Ralph A. Amado; her parents, Bernard and Mildred Kessler; and our teacher, Rabbi Moshe ben Nachman (Nachmanides).', '/Exodus.10.1?with=Ramban'],
            ['Beshalach', 'Nicole and Raanan Agus', 'In memory of Dr. Saul G. Agus z"l', '/Exodus.13.17?with=Ramban'],
            ['Yitro', 'Anonymous', 'To honor the memory of Joe and Rose Rudis', '/Exodus.18.1?with=Ramban'],
            ['Mishpatim ', null, null, '/Exodus.21.1?with=Ramban'],
            ['Terumah', 'Julia Baum and Adam Feldman', 'In memory of Earl Katz and Annette Steinman', '/Exodus.25.1?with=Ramban'],
            ['Tetzaveh', 'Huti and Jay', 'In Gratitude to all the Health Care Workers during the Pandemic', '/Exodus.27.20?with=Ramban'],
            ['Ki Tisa', 'Nicole and Raanan Agus', 'In memory of Dr. Saul G. Agus z"l', '/Exodus.30.11?with=Ramban'],
            ['Vayahkel', 'The Berkowitz Family', 'In honor of their parents and grandparents (Bebe, Bepop, Pop pop, and grandmama) who provide a sense of inspiration and demonstrate a desire to constantly learn more.', '/Exodus.35.1?with=Ramban'],
            ['Pekudei', 'The Hiltzik Family', '', '/Exodus.38.21?with=Ramban']]
            .map(i => <ParashaSponsorship title={i[0]} sponsorNames={i[1]} message={i[2]} link={i[3]}/>)}/>
        </div>
        
        <StaticHR />

        <div className="staticPageBlockInner flexContainer">
        <ResponsiveNBox content={
            [['Vayikra', 'Edy and Jacob Kupietzky and Family', '', '/Leviticus.1.1?with=Ramban'],
            ['Tzav', 'Rabbi Ruth Adar', 'In memory of K\'vod HaRav André Zaoui, z"l', '/Leviticus.6.1?with=Ramban'],
            ['Shmini', 'Joshua and Dinah Foer', '', '/Leviticus.9.1?with=Ramban'],
            ['Tazria', 'Diane and Howard Zack and Family', 'In honor of their parents', '/Leviticus.12.1?with=Ramban'],
            ['Metzora', 'Anne Germanacos', 'In honor of Rabbi Noa Kusher and Rabbi Jessica Kate Meyer in gratitude for their brilliance and resilience during the pandemic, and their friendship in all times.', '/Leviticus.14.1?with=Ramban'],
            ['Achrei Mot', 'Anne Germanacos', 'In honor of Rabbi Noa Kusher and Rabbi Jessica Kate Meyer in gratitude for their brilliance and resilience during the pandemic, and their friendship in all times.', '/Leviticus.16.1?with=Ramban'],
            ['Kedoshim', 'Karine and Michael Bloch', 'In honor of our children Eitan, Yoel, and Tali'], ['Emor', 'Joshua and Dinah Foer', '', '/Leviticus.19.1?with=Ramban'],
            ['Behar ', 'Tamar and Eric Goldstein', 'In honor of Aryeh’s aufruf', '/Leviticus.25.1?with=Ramban'],
            ['Bechukotai ', 'Tamar and Eric Goldstein', 'In honor of Aryeh’s aufruf', '/Leviticus.26.3?with=Ramban']]
            .map(i => <ParashaSponsorship title={i[0]} sponsorNames={i[1]} message={i[2]} link={i[3]}/>)}/>
        </div>

        <StaticHR />

        <div className="staticPageBlockInner flexContainer">
        <ResponsiveNBox content={
            [['Bamidbar', 'The Hiltzik Family', '', '/Numbers.1.1?with=Ramban'],
            ['Nasso', 'Annoymous Sponsor', 'In honor of Tzeela, Rina Faiga, Dalia and Penina Malka', '/Numbers.4.21?with=Ramban'],
            ["Beha'alotcha", null, null, '/Numbers.8.1?with=Ramban'],
            ["Sh'lach", 'Meyer Family', 'In honor of the bar mitzvah of George Meyer', '/Numbers.13.1?with=Ramban'],
            ['Korach', 'Fred Blau and Maayan Roth', 'In memory of Sarita Blau, loving mother and teacher', '/Numbers.16.1?with=Ramban'],
            ['Chukat', 'Kevin Waldman', 'In support of Sefaria', '/Numbers.19.1?with=Ramban'],
            ['Balak', null, null, '/Numbers.22.2?with=Ramban'],
            ['Pinchas', 'The Berkowitz Family', "In honor of our parent's and grandparent's (Bebe, Bepop, Pop pop, and grandmama) who provide a sense of inspiration and demonstrate a desire to constantly learn more.", '/Numbers.25.10?with=Ramban'],
            ['Matot', 'Shprintzy and Effy', 'Dedicated in memory of the late Mendel Schoenberg, son of the late Naftali Binyamin and Shprintza. Born in Sanok, Poland, in Elul, between the years 5684 and 5686. Passed away at a ripe old age at his home in Brooklyn, New York, on the First Night of Chanukah 5779.', '/Numbers.30.2?with=Ramban', '/Numbers.33.1?with=Ramban'],
            ['Masei', 'Nadine and Beni Gesundheit', '', '/Numbers.33.1?with=Ramban']]
            .map(i => <ParashaSponsorship title={i[0]} sponsorNames={i[1]} message={i[2]} link={i[3]}/>)}/>
        </div>

        <StaticHR />

        <div className="staticPageBlockInner flexContainer">
        <ResponsiveNBox content={
            [['Devarim', null, null, '/Deuteronomy.1.1?with=Ramban'],
            ['Vaetchanan', 'Becky and Avi Katz', 'In honor of Sefaria', '/Deuteronomy.3.23?with=Ramban'],
            ['Eikev', 'Annoymous Sponsor', '', '/Deuteronomy.7.12?with=Ramban'],
            ["Re'eh", 'Tamar and Eric Goldstein', "In honor of Adin's aufruf", '/Deuteronomy.11.26?with=Ramban'],
            ['Shoftim', 'Tricia Gibbs', 'In memory of F. Warren Hellman', '/Deuteronomy.16.18?with=Ramban'],
            ['Ki Tetzei', 'The Katz Family', 'In honor of the victims of Covid-19', '/Deuteronomy.21.10?with=Ramban'],
            ['Ki Tavo ', 'Rechtschaffen Family', "In honor of the 3rd anniversary of Jordan Rechtscaffen's bar mitzvah", '/Deuteronomy.26.1?with=Ramban'],
            ['Nitzavim', 'Jeremy Rosenthal', 'In honor of Judy and Stuart Rosenthal, in gratitude for their commitment to a sustained Jewish future.', '/Deuteronomy.29.9?with=Ramban'],
            ['Vayeilech', 'Nicole and Raanan Agus', 'In memory of Dr. Saul G. Agus z"l', '/Deuteronomy.31.1?with=Ramban'],
            ["Ha'Azinu", 'Mayer', 'In honour of Shalom Rosenzweig, on the occasion of his Bar Mitzvah, October 10, 1992', '/Deuteronomy.32.1?with=Ramban'],
            ["V'Zot HaBerachah", 'Elisha Wiesel', 'In memory of Elie Wiesel', '/Deuteronomy.33.1?with=Ramban']]
            .map(i => <ParashaSponsorship title={i[0]} sponsorNames={i[1]} message={i[2]} link={i[3]}/>)}/>
        </div>
        <Spacer/>
        <Spacer/>
        <Spacer/>
        <div className="staticPageCallToActionFooter">
            <div className="staticPageBlockInner flexContainer">
                <div className="callToActionText noButton">
                    <span className="int-en">Interested in sponsoring a parashah? Please email {emailLink} for more information.</span>
                    <span className="int-he">Interested in sponsoring a parashah? Please email {emailLink} for more information.</span>
                </div>
            </div>
        </div>
    </StaticPage>
};

const SheetsLandingPage = () => (
    <StaticPage>
        <Header
            enTitle="Sheets"
            enText="Mix and match sources from Sefaria’s library of Jewish texts, and add your comments, images and videos."
            enImg="/static/img/sheets-landing-page/sheetspage_headerimage.png"
            enImgAlt="Sefaria Sheets"
            enActionURL="/sheets/new?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
            enActionText="Make a Sheet"
            heTitle="דפי מקורות"
            heText="בחרו לכם מקורות מארון הספרים היהודי של ספריא והוסיפו הערות, תמונות או סרטונים משלכם."
            heImg="/static/img/sheets-landing-page/sheetspage_headerimage_HEB.png"
            heImgAlt="דפי מקורות"
            heActionURL="/sheets/new?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
            heActionText="בנו דף מקורות"
        />
        <GreyBox light={true}>
            <H2Block
                en="Discover new ways to learn & teach"
                he="גלו דרכים חדשות ללמוד וללמד"
            />
        </GreyBox>
        <Feature
            enTitle="Organize Sources"
            enText="Sheets let you mix and match sources from our library. Type in a source title and chapter to add it to your sheet, then edit the source to cut it down or customize  the translation. Use sources in any order you wish. "
            enImg="/static/img/sheets-landing-page/organizesources.jpg"
            enImgAlt="Organize Sources"
            heTitle="סדרו את המקורות"
            heText="תוכלו לבחור טקסטים מתוך שלל המקורות בספרייה שלנו ולצרף אותם לדף מקורות. הקלידו את שם המקור ואת מספר הפרק כדי להוסיף אותו לדף המקורות שלכם. בשלב הבא תוכלו לערוך ולקצר את המקור, לבחור בתרגום אחר ולארגן את המקורות בסדר הרצוי לכם."
            heImg="/static/img/sheets-landing-page/organizesources_HEB.jpg"
            heImgAlt="סדרו את המקורות"
            borderColor="#004E5F"
        />
        <Feature
            enTitle="Add Your Commentary"
            enText="Make it more than sources. You can easily add your own commentary or texts from outside our library to create something new. You can also add images and videos to enhance your reader’s experience even more. "
            enImg="/static/img/sheets-landing-page/commentary_sheet.jpg"
            enImgAlt="Add Your Commentary"
            heTitle="הוסיפו הערות משלכם"
            heText="התוצר שלכם יכול להיות יותר מרשימת מקורות בלבד. תוכלו בקלות להוסיף הערות, פרשנות והסברים משלכם וכן טקסטים אחרים כדי ליצור משהו חדש. לחוויית לימוד משמעותית יותר תוכלו אפילו להוסיף תמונות וסרטונים."
            heImg="/static/img/sheets-landing-page/addcommentary_HEB.jpg"
            heImgAlt="הוסיפו הערות משלכם"
            borderColor="#CCB479"
        />
        <Feature
            enTitle="Share Your Work"
            enText="You can share your sheet privately with a link, publicly on our site, or print it out for your class. Make your sheet public and add it to our library of over 200,000 user-created sheets. "
            enImg="/static/img/sheets-landing-page/shareyoursheets.jpg"
            enImgAlt="Share Your Work"
            heTitle="שתפו"
            heText="תוכלו לשתף את דף המקורות באופן פרטי בעזרת לינק, להדפיס אותו עבור הכיתה שלכם או להעלות אותו לאתר שלנו לתועלת ציבור הגולשים. אתם מוזמנים להוסיף את דף המקורות לספרייה שלנו – תוכלו למצוא בה למעלה מ־200,000 דפי מקורות שנוצרו על ידי גולשי האתר."
            heImg="/static/img/sheets-landing-page/shareyoursheets_HEB.jpg"
            heImgAlt="שתפו"
            borderColor="#802F3E"
        />
        <Feature
            enTitle="Find Great Resources"
            enText="Browse user-created sheets by topic to research for your next class, learn something new, or to get inspiration for your own sheets. Filter results further by keyword and sort by relevance, views, or creation date."
            enImg="/static/img/sheets-landing-page/sheetssearch.jpg"
            enImgAlt="Find Great Resources"
            heTitle="אתרו מקורות מעולים"
            heText="כדי להעשיר את השיעור הבא שלכם, ללמוד משהו חדש או לחפש השראה לדף מקורות משלכם, דפדפו לפי נושא בדפי מקורות שיצרו משתמשים אחרים. סננו את התוצאות לפי מילות מפתח או לפי רלוונטיות, תצוגה או תאריך."
            heImg="/static/img/sheets-landing-page/sheetssearch_HEB.jpg"
            heImgAlt="אתרו מקורות מעולים"
            borderColor="#5A99B7"
        />
        <H2Block
            en="See what people are making with Sheets"
            he="ראו מה משתמשים אחרים יוצרים בעזרת דפי המקורות שלהם"
        />
        <EnBlock>
            <Section>
                <Sheet
                    title="Creation and Consciousness"
                    link="/sheets/17566?lang=bi&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
                    author="Michael Feuer"
                    image="/static/img/sheets-landing-page/michael.png"
                />
                <Sheet
                    title="Is Love the Death of Duty? A Tanakh Take on the Game of Thrones Maxim"
                    link="/sheets/184685?lang=bi&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
                    author="Olivia Friedman"
                    image="/static/img/sheets-landing-page/olivia.png"
                />
                <Sheet
                    title="Practical Torah for Time Management"
                    link="/sheets/193023?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
                    author="Loren Berman (Moishe House)"
                    image="/static/img/sheets-landing-page/loren.png"
                />
                <Sheet
                    title="The Four (Thousand) Questions: Cultivating Question-Asking at Your Pesach Seder"
                    link="/sheets/9219?lang=bi&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
                    author="Dasi Fruchter"
                    image="/static/img/sheets-landing-page/dasi.png"
                />
            </Section>
        </EnBlock>
        <HeBlock>
            <Section>
                <Sheet
                    title="תפילת הדרך"
                    link="/sheets/216261?lang=he&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
                    author="אתר מדרשת"
                    image="/static/img/sheets-landing-page/midreshet.png"
                />
                <Sheet
                    title="כיצד למד הבעל שם טוב את התורה?"
                    link="/sheets/112651?lang=he&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
                    author="יכין אפשטיין (זושא: מגלים את הסיפור החסידי)"
                    image="/static/img/sheets-landing-page/yachin.png"
                />
                <Sheet
                    title="ילדים רואים את עצמם כאילו יצאו ממצרים"
                    link="/sheets/222661?lang=he&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
                    author="חדוה יחיאלי"
                    image="/static/img/sheets-landing-page/hedva.png"
                />
                <Sheet
                    title="מעשה ברבי ישמעאל"
                    link="/sheets/141399?lang=he&utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
                    author="יורם גלילי (בואו נלמד משפט ויושר)"
                    image="/static/img/sheets-landing-page/yoram.png"
                />
            </Section>
        </HeBlock>
        <Section>
            <SimpleButton
                he="חפשו עוד לפי נושא"
                en="Explore More by Topic"
                href="/topics?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
                he_href="/topics?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
            />
        </Section>
        <Spacer />
        <CallToActionFooterWithButton
            href="/sheets/228095?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets"
            he_href="/sheets/226003?utm_source=Sefaria&utm_medium=LandingPage&utm_campaign=Sheets_HEB"
            enText="Start creating a sheet today."
            heText="צרו דף מקורות היום"
            enButtonText="How to Create a Sheet"
            heButtonText="איך יוצרים דף מקורות"
        />

    </StaticPage>
);

const RemoteLearningPage = () => (
    <StaticPage>
        <Header
            enTitle="Remote Learning"
            enText="Discover the power of online education. Sefaria is always available to provide foundational Jewish texts, educational materials, and the tools to allow you to engage with dynamic Jewish learning."
            enImg="/static/img/distance-learning-landing-page/remotelearning_headerimage.png"
            enImgAlt="Sefaria on tablet."
            enActionURL={null}
            enActionText={null}
            heTitle="מקורות ללימוד וללמידה מרחוק"
            heText="לומדים רבים ברחבי העולם מגלים את הכוח והפוטנציאל שיש בלמידה מקוונת. אתר ספריא פתוח לכולם בחינם, ומציע מאגר רחב של מקורות יהודיים וכלים מתקדמים להעצמת הלמידה."
            heImg="/static/img/distance-learning-landing-page/remotelearningpage_headerimage_HEB.png"
            heImgAlt="Sefaria on tablet."
            heActionURL={null}
            heActionText={null}
        />
        <GreyBox>
            <ButtonRow enTitle="Browse our Latest Resources" heTitle="מקורות בספריא">
                <SimpleButton
                    white={true}
                    rounded={false}
                    tall={true}
                    href="/collections/Educator-Newsletters?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                    he_href="/sheets/219410?lang=he?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                    he="דפי מקורות אקטואליים"
                    en="Educator Newsletters"
                />
                <SimpleButton
                    white={true}
                    rounded={false}
                    tall={true}
                    href="/collections/A-Jewish-Response-to-Coronavirus?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                    he_href="/sheets/227981.5?lang=he&utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                    he="נגיף הקורונה"
                    en="A Jewish Response to COVID-19"
                />
                <SimpleButton
                    white={true}
                    rounded={false}
                    tall={true}
                    href="/collections/Online-Learning-Resources?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                    he_href="/sheets/228257?lang=he&utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                    he="עשרת הדיברות ללמידה מרחוק"
                    en="Online Learning Resources"
                />
            </ButtonRow>
        </GreyBox>
        <GreyBox light={true}>
            <H2Block en="Resources for Everyone" he="לומדים עם ספריא" />
        </GreyBox>
        <Feature
            enTitle="Learners"
            enText="Whether you’re a pro, or a new user, Sefaria has resources to help your virtual study thrive. Join a Sefaria 101 webinar, browse our tutorials, or sign up for the online student training course to up your skills on all things Sefaria. <a href='/register?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning'>Create a free account</a> to track your learning, save texts, and follow users creating things that interest you."
            enImg="/static/img/distance-learning-landing-page/remotelearningpage_learners.png"
            enImgAlt="Source Sheet - Pesach 101"
            heTitle="לומדים עם ספריא"
            heText={
                "ספריא נותנת כלים להעצים את הלימוד המקוון שלכם. השתמשו בוובינרים וב'מדריך למשתמש המתחיל' כדי ללמוד איך להשתמש באתר. "
                + "<a href='/register?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning'>"
                + "צרו חשבון משתמש"
                + "</a>"
                + " כדי לארגן את חומרי הלימוד שלכם, לשמור מקורות ולעקוב אחר חומרים של אנשים אחרים שמעניינים אתכם."
            }
            heImg="/static/img/distance-learning-landing-page/remotelearningpage_learners_HEB.png"
            heImgAlt=""
            borderColor="#004E5F"
        />
        <ButtonRow light={true}>
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="/collections/Webinars-for-Learners?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he_href="/sheets/224909?lang=he?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he="וובינרים"
                en="Webinars for Learners"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="/collections/Tutorials-for-Learners?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he_href="/sheets/224919?lang=he?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he="מדריך למשתמש המתחיל"
                en="Tutorials for Learners"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="/collections/Sefaria-Student-Course?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he_href="/sheets/228260?lang=he&utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he="הסודות של ספריא"
                en="Student Course"
            />
        </ButtonRow>
        <Feature
            enTitle="Educators & Rabbis"
            enText="Sefaria is here to support your online teaching. Our <a href='/educators?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning'>Learning Department</a> has a variety of resources to get you started with distance learning using Sefaria. <a href='/register?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning'>Create a free account</a> to make and assign source sheets to your students, organize your sheets into groups, and save texts."
            enImg="/static/img/distance-learning-landing-page/remotelearningpage_educators.png"
            enImgAlt="Source Sheet - Teaching with Sefaria Online"
            heTitle="מורים ואנשי הוראה"
            heText={"צוות ספריא תומך בהוראה דיגיטלית ובהוראה מרחוק. למדו בעזרת החומרים שצוות החינוך שלנו יצר עבורכם, בכיתה ומחוצה לה. "
                + "<a href='/register?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning'>"
                + "צרו חשבון משתמש"
                + "</a>"
                + ' כדי ליצור דפי מקורות עבורכם או עבור תלמידים, לארגן דפי מקורות ע"פי נושאים ולשמור מקורות נבחרים.'
            }
            heImg="/static/img/distance-learning-landing-page/remotelearningpage_educators_HEB.png"
            heImgAlt=""
            borderColor="#CCB479"
        />
        <ButtonRow light={true}>
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="/collections/Webinars-for-Educators?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he_href="/sheets/224909?lang=he?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he="וובינרים"
                en="Webinars for Educators"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="/collections/Tutorials-for-Educators?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he_href="/sheets/224923?lang=he?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he="קורס למורים: 'ספריא בכיתה'"
                en="Tutorials for Educators"
            />
            <SimpleButton
                white={true}
                rounded={false}
                tall={true}
                href="/sheets/187032?lang=bi?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he_href="/sheets/223245?lang=he?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning"
                he="טיפים להוראה עם ספריא"
                en="Educator Course"
            />
        </ButtonRow>
        <Feature
            enTitle="Institutions & Organizations"
            enText="Is it time to start incorporating digital texts into your website, blog, or app? Sefaria has you covered. All of our software is open source and our texts are all in the creative commons – meaning you can use anything we have for your own projects. Take a look at these resources and get in touch with your web/app developer to start including Sefaria’s texts on your site."
            enImg="/static/img/distance-learning-landing-page/remotelearningpage_developers.png"
            enImgAlt="Source Sheet - Link Sefaria to your Site"
            heTitle="מוסדות וארגונים"
            heText="האם תרצו להטמיע מקורות דיגיטליים לאתר, לבלוג או לאפליקציה שלכם? ספריא יכולה לסייע לכם. כל המידע שיש באתר הינו בקוד פתוח, ותוכלו להשתמש בכל המקורות של ספריא עבור הפרוייקטים האישיים שלכם. אתם מוזמנים לפנות למפתחים ולמהנדסים שלכם בכדי להשתמש במקורות של ספריא באתר שלכם."
            heImg="/static/img/distance-learning-landing-page/remotelearningpage_developers_HEB.png"
            heImgAlt=""
            borderColor="#802F3E"
        />
        <ButtonRow light={true}>
            <SimpleButton white={true} tall={true} rounded={false} href="/linker?utm_source=sefaria&utm_medium=landingpage&utm_campaign=remotelearning" he="לינקר דו צדדי" en="Two-Way Linker"/>
            <SimpleButton white={true} tall={true} rounded={false} href="https://github.com/Sefaria/Sefaria-Project/wiki/Projects-Powered-by-Sefaria" he="אתרים המופעלים ע”י ספריא" en="Powered by Sefaria"/>
            <SimpleButton white={true} tall={true} rounded={false} href="https://github.com/Sefaria/Sefaria-Project/wiki#developers" he="Github גיטהאב" en="GitHub"/>
        </ButtonRow>
        <CallToActionFooterWithNewsletter
            enText="Sign up for our mailing list to get updates in your inbox."
            heText="הרשמו לרשימת התפוצה שלנו על מנת לקבל עדכונים מספריא."
            includeEducatorOption={true}
        />
    </StaticPage>
);

const EducatorsPage = () => (
  <StaticPage>
    <HeaderForEducatorsPage/>
    <GreyBox>
      <H2Block en="Empower and Engage" he=""/>
      <EnBlock padded={true}>
        <p>Empower your students with Sefaria’s free library of digital texts, in Hebrew and English translation, and use our teaching materials to spark creativity and foster independence. Learn new ways of teaching and engaging your students in the centuries-old conversation around Jewish texts, and join Sefaria’s Educator community.</p>
      </EnBlock>
      <Spacer/>
    </GreyBox>


    <Feature
      enTitle="Professional Development"
      enText="Whether you’re a pro or a new user, Sefaria has resources to help you and your students learn and thrive. Join a Sefaria webinar, browse our tutorials, sign up for our Educator course, or request a custom workshop for your team or your students."
      enImg="/static/img/educators-landing-page/teaching-with-sefaria-library.png"
      enImgAlt="Professional Development"
      heTitle="Professional Development"
      heText="Whether you’re a pro or a new user, Sefaria has resources to help you and your students learn and thrive. Join a Sefaria webinar, browse our tutorials, sign up for our Educator course, or request a custom workshop for your team or your students."
      heImg="/static/img/educators-landing-page/teaching-with-sefaria-library.png"
      heImgAlt="Professional Development"
      borderColor={palette.colors.darkblue}
    />

    <ButtonRow white={true} enTitle="" heTitle="">
      { [
          ["Online Educator Course", "", "https://sefaria.typeform.com/to/tJVexqpG"],
          ["Lesson Plans on Sefaria", "", "/collections/pedagogy-on-sefaria-exemplary-lesson-plans"],
          ["Schedule A Workshop", "", "https://sefaria.typeform.com/to/Pl3biam8"]
      ].map(i =>
          <SimpleButton
              white={true}
              rounded={false}
              tall={true}
              newTab={true}
              href={i[2]}
              he_href={i[2]}
              he={i[0]}
              en={i[0]}
          />)
      }
    </ButtonRow>

     <Feature
      enTitle="Resources for Educators"
      enText="Stay up to date with the latest news and resources from Sefaria. Learn from other educators’ experiences teaching and using Sefaria’s resources, and get inspired to try new things in your work. Discover our adaptable lesson plans and resources, or find learning materials and activities ready-to-go for your classroom!"
      enImg="/static/img/educators-landing-page/megillah-activity.png"
      enImgAlt="Resources for Educators"
      heTitle=""
      heText=""
      heImg="/static/img/educators-landing-page/megillah-activity.png"
      heImgAlt=""
      borderColor={palette.colors.gold}
      link=""
     />

    <ButtonRow white={true} enTitle="" heTitle="">
      { [
          ["Past Educator Newsletters", "", "/collections/qZ0UWi5y"],
          ["Sefaria in Action", "", "/sheets/311116?lang=bi"],
          ["For Your Students", "", "/sheets/311291?lang=bi"]
      ].map(i =>
          <SimpleButton
              white={true}
              rounded={false}
              tall={true}
              newTab={true}
              href={i[2]}
              he_href={i[2]}
              he={i[0]}
              en={i[0]}
          />)
      }
    </ButtonRow>
    <Feature
      enTitle="Sefaria for Educators How-Tos"
      enText="Browse our FAQ’s and learn more about how to use Sefaria’s tools to study and to teach. Sefaria’s Learning Team is always available to support you and your students or answer any questions you might have. If there are texts, translations, lesson plans, or student materials that would enhance your teaching, please share that with us as well."
      enImg="/static/img/educators-landing-page/tutorials-for-educators.png"
      enImgAlt="Sefaria for Educators How-Tos"
      heTitle=""
      heText=""
      heImg="/static/img/educators-landing-page/tutorials-for-educators.png"
      heImgAlt=""
      borderColor={palette.colors.red}
    />

    <ButtonRow white={true} enTitle="" heTitle="">
      { [
          ["Educator FAQ", "", "/collections/tutorials-for-educators"],
          ["Request New Resources", "", "https://sefaria.typeform.com/to/aaZmi4JD"],
          ["Webinars for Educators", "", "/collections/qJLU68HQ"]
      ].map(i =>
          <SimpleButton
              white={true}
              rounded={false}
              tall={true}
              newTab={true}
              href={i[2]}
              he_href={i[2]}
              he={i[0]}
              en={i[0]}
          />)
      }
    </ButtonRow>

    <GreyBox>
      <H2Block en="Get in touch" he=""/>
      <EnBlock padded={true}>
          <p>Was your teaching enhanced by Sefaria? Did you have a “Sefaria moment” with your students? Share it with us! We love to hear how educators are using Sefaria in the field and we learn from the feedback we receive. We are also available to answer all of your Sefaria questions. Write to us at education@sefaria.org.</p>
      </EnBlock>
      <Spacer/>
    </GreyBox>

    <H2Block en="What the educators have to say…" he=""/>

    <Section>
      <UserQuote
          heText=""
          enText="As an educator, I have come to appreciate Sefaria more and more. I now make sure to expose all of my students to what Sefaria has to offer. I show them how to use Sefaria to make source sheets. <b>I love hearing their excitement as they realize how easy it is to make a sheet on Sefaria and how organized their final products look.</b> They also are impressed at how Sefaria helps them do research by finding sources that connect to their topic. I am grateful that Sefaria is there to provide Torah resources to my students after they complete their formal Jewish education. Overall, the experience of using Sefaria with my students has been very positive!"
          enName="Sarit Anstandig | High School Judaics Teacher | Farber Hebrew Day School"
          heName=""
          image="/static/img/educators-landing-page/sarit anstandig.png"
      />
      <UserQuote
          enText="I really appreciate Sefaria. I use it all the time studying for tests, doing homework, doing learning on my own or even preparing for a seminary interview. <b>The fact that I can quickly and easily find whatever I need wherever I am and understand and study it is incredible.</b> I'm so so grateful for Sefaria. I've introduced all my friends to it and they all use it now too."
          heText=""
          enName="Anonymous day school student"
          heName=""
          image="/static/img/educators-landing-page/anonymous.png"
      />
      <UserQuote
        heText=""
        enText="Digital learning is making its way into all aspects of our students' education and learning, and if we are not on the train we will lose the hearts and minds of our students. We risk Torah being viewed as antiquated if it does not respond to our students' way of thinking about the world. Equally important, there are tools at our disposal which can enhance the experience of learning Torah and it would be malpractice not to see them. Through Sefaria's innovative educational features, my students' learning has been greatly enhanced. <b>We owe it to our students, and to ourselves, to make the most of this platform and to help make it better.</b>"
        enName="Leib Zalesch | Judaic Studies Teacher | Beth Tfiloh Dahan Community School"
        heName=""
        image="/static/img/educators-landing-page/Leib Pic Prof.png"
      />
      <UserQuote
        enText="Students have exposure to so many more commentaries than they would have in the past because of Sefaria and online texts. What I like most about Sefaria is the ability to compare and contrast texts clearly with the text side by side. It is a very powerful tool in the classroom and allows students to be more active in the learning process. Sefaria has also enhanced the level of sophistication of student project based learning."
        heText=""
        enName="Yael Goldfischer | Chair: Chumash Department | The Frisch School"
        heName=""
        image="/static/img/educators-landing-page/Yael Goldfischer.png"
      />
    </Section>

    <div className="staticPageCallToActionFooter">
      <div className="staticPageBlockInner flexContainer">
        <SimpleInterfaceBlock classes="callToActionText" en="Sign up for our mailing list to get updates in your inbox" he="Sign up for our mailing list to get updates in your inbox" />
        <EducatorSubscribeButton/>
      </div>
    </div>


  </StaticPage>
);

const PBSC2020LandingPage = () => (
    <StaticPage>
        <Header
            enTitle="Powered by Sefaria Contest 2020"
            enText="Explore the Projects"
            enImg="/static/img/pbsc-2020-landing-page/codemockup3.png"
            enImgAlt=""
            heTitle="תחרות פיתוח תוכנה 2020"
            heText="הכירו את המיזמים"
            heImg="/static/img/pbsc-2020-landing-page/codemockup3.png"
            heImgAlt=""
        />

        <GreyBox>
            <H2Block en="Inviting Innovation" he=""/>
            <EnBlock padded={true}>
                <p>In an effort to seed the digital future of Jewish texts, the Powered by Sefaria Contest was launched in July 2020 — inviting the global Sefaria community to make use of our free and open digital dataset of Jewish texts, translations, and interconnections. Over the years, dozens of third parties have created apps, visualizations, and conducted research using our data or API, and we wanted to see what else our community could dream up. We saw tremendous enthusiasm and welcomed 50 high quality submissions from Sefaria users around the world. <b>Keep reading to learn more about the two winners and some incredibly innovative honorable mentions.</b></p>
            </EnBlock>
            <HeBlock padded={true}>
                <p>מתוך רצון לטפח את העתיד הדיגיטלי של מקורות יהודיים, הוצאנו לפועל ביולי 2020 את תחרות פיתוח התוכנה של ספריא. הזמנו את קהילת ספריא ברחבי העולם להשתמש במסד הנתונים הפתוח שלנו, הכולל מקורות יהודיים, תרגומים וקישורים אינטרטקסטואליים. במשך השנים השתמשו עשרות גופי צד שלישי ב־API שלנו, ערכו בעזרתו מחקרים ויצרו באמצעותו יישומים ותרשימים גרפיים. כעת רצינו לראות מה עוד הקהילה שלנו מסוגלת להמציא. נענינו בהתלהבות יוצאת דופן וקיבלנו בברכה 50 מיזמים איכותיים מאוד ממשתמשי ספריא ברחבי העולם. המשיכו לקרוא כדי לדעת עוד על שני הזוכים ועל כמה רעיונות יצירתיים מאוד הראויים בעינינו למקום של כבוד.</p>
            </HeBlock>
            <Spacer/>
        </GreyBox>

        <GreyBox light={true}>
            <H2Block en="Grand Prize Winner" he="זוכה הפרס הראשון"/>
        </GreyBox>

        <Feature
            enTitle="Talmud Sidebar Extension"
            enText="By Dov Katz<br/><br/>The Talmud Sidebar Extension brings Sefaria’s learning resources to Daf Yomi sites across the web. Created in response to the move to Zoom for Daf Yomi classes the world over in the wake of COVID-19, the extension recognizes what daf you’re learning or listening to on nearly a dozen Daf Yomi sites. It then enables a sidebar to see connections from Sefaria’s library or link straight back to Sefaria."
            enImg="/static/img/pbsc-2020-landing-page/talmudsidebar.png"
            enImgAlt="Talmud Sidebar Extension"
            heTitle="תוסף סרגל הכלים של התלמוד"
            heText="דב כץ<br/><br/>תוסף סרגל הכלים של התלמוד מביא את משאבי הלימוד של ספריא לאתרי דף יומי ברחבי הרשת. הפיתוח הזה נוצר מתוך רצון להתמודד עם המעבר של שיעורי הדף היומי ברחבי העולם אל המרחב הווירטואלי בעקבות נגיף קורונה.  התוסף יכול לזהות בדיוק מהו הדף שאנחנו לומדים או מאזינים לו מתוך קרוב לתריסר אתרי דף יומי – Hadran.org.il, YUTorah.org, Steinsaltz-center.org, OUTorah.org ועוד – ולפתוח סרגל כלים הכולל קישורים לטקסטים רלוונטיים במאגר של ספריא וכן קישור לדף היומי של ספריא."
            heImg="/static/img/pbsc-2020-landing-page/talmudsidebar.png"
            heImgAlt="תוסף סרגל הכלים של התלמוד"
            borderColor={palette.colors.yellow}
            link="https://chrome.google.com/webstore/detail/talmud-sidebar-extension/dmpiiciebnbekblfbcdeogjkbbmeeimi"
        />

        <GreyBox>
            <H2Block en="Meet the Grand Prize Winner" he="הכירו את הזוכה"/>
            <EnBlock padded={true}>
                <p>Originally from Memphis, TN and now living in Modiin, Israel, Dov Katz leads a developer productivity group for the technology arm of a large financial services firm and enjoys tinkering with tech in his free time. Long interested in the ways technology could increase access to Jewish life and Torah study – he created the popular Jewish site OnlySimchas.com back in 1999! – he invented the Sidebar Extension this summer to meet the new digital needs of his own formerly in-person Daf Yomi shiur. Dov’s passion for access leads him to be a strong advocate of Open Source and he currently sits as the Chairman of the board on the Fintech Open Source Foundation.</p>
            </EnBlock>
            <HeBlock padded={true}>
                <p>דב כץ גדל בממפיס שבמדינת טנסי בארצות הברית וכיום מתגורר במודיעין. הוא עומד בראש צוות פיתוח ייצור באגף הטכנולוגי של חברת שירותים פיננסיים גדולה, ובשעות הפנאי הוא מפתח חובב של חידושים טכנולוגיים. מציאת דרכים להרחבת הגישה לחיים יהודיים וללימוד תורה באמצעות טכנולוגיה מעסיקה את דב זה זמן רב, ועוד בשנת 1999 הוא הקים את האתר המוכר onlysimchas.com, מעין לוח שמחות אינטרנטי. בקיץ האחרון יצר את תוסף סרגל הכלים של התלמוד כדי לענות על צרכים דיגיטליים חדשים בשיעור הדף היומי שלו שהפך מקוון. בזכות התשוקה של דב לשכלול דרכי גישה דיגיטליות הוא נהיה תומך נלהב בקוד פתוח וכיום משמש יו"ר הדירקטוריון של קרן הקוד הפתוח של Fintech.</p>
            </HeBlock>
            <Spacer/>
        </GreyBox>

        <GreyBox light={true}>
            <H2Block en="Youth Prize Winner" he="זוכי פרס המתמודד הצעיר"/>
        </GreyBox>

        <Feature
            enTitle="Mizmor Shir"
            enText="By Immanuel Bissel, Simon Landau, and Ben Kotton<br/><br/>Mizmor Shir explores the intersections of Torah and music as two forms of holy language. Using the Kabbalistic tradition of gematria, Mizmor Shir transforms the text of the Torah into music, in keys and scales that you choose, to reveal unseen (and unheard) patterns within it. "
            enImg="/static/img/pbsc-2020-landing-page/mizmorshir.png"
            enImgAlt="Talmud Sidebar Extension"
            heTitle="מזמור שיר"
            heText='עמנואל ביסל, סיימון לנדאו ובן קוטון<br/><br/>"מזמור שיר" מתבונן בממשקים של תורה ומוזיקה כמפגש בין שתי צורות שונות של שפת קודש. באמצעות שימוש בגימטרייה קבלית הופך מזמור שיר את התורה הכתובה למוזיקה בתווים ובסולמות הניתנים לבחירה, וחושף בה דפוסים שלא נראו (ולא נשמעו) מעולם.'
            heImg="/static/img/pbsc-2020-landing-page/mizmorshir.png"
            heImgAlt="מזמור שיר"
            borderColor={palette.colors.raspberry}
            link="http://mizmor-shir.herokuapp.com/"
        />

        <GreyBox>
            <H2Block en="Meet the Youth Prize Winners" he="הכירו את זוכי הפרס"/>
            <EnBlock padded={true}>
                <p>Mizmor Shir was created by three college students – Simon Landau, a junior at USC majoring in Computer Science; Immanuel Bissel, a rising sophomore at Yale majoring in Earth and Planetary Science; and Ben Kotton, also a rising Sophomore at Yale, majoring in applied mathematics. Friends from a childhood shared in Los Angeles, all three are avid music lovers – Simon plays both orchestral bass as well as guitar in a three-piece band, Emmanuel the guitar, and Ben the mandolin. It was this love that got them excited to respond to Sefaria’s PBS challenge with an idea that combined music with Torah and harnessed the power of technology to reveal the beauty of each in new ways.</p>
            </EnBlock>
            <HeBlock padded={true}>
                <p>מזמור שיר נוצר בידי שלושה סטודנטים – סיימון לנדאו, סטודנט בשנה השלישית למדעי המחשב באוניברסיטת דרום קליפורניה; עמנואל ביסל, סטודנט בשנה השנייה למדעי כדור הארץ וכוכבי הלכת באוניברסיטת ייל; ובן קוטון, סטודנט בשנה השנייה למתמטיקה שימושית באוניברסיטת ייל. שלושתם חברי ילדות מלוס אנג'לס ואוהבי מוזיקה נלהבים: סיימון הוא נגן קונטרבס וגיטריסט בשלישייה מוזיקלית, עמנואל מנגן גם הוא בגיטרה, ובן מנגן במנדולינה. האהבה הזו היא שדרבנה אותם לנסות להתמודד עם האתגר של ספריא בעזרת רעיון ששילב מוזיקה ותורה ורתם את כוחה של הטכנולוגיה לחשוף את היופי שבכל אחת מהן בדרכים חדשות.</p>
            </HeBlock>
            <Spacer/>
        </GreyBox>

        <H2Block en="What the Judges Had to Say" he="דברי השופטים"/>

        <Section>
            <UserQuote
                enText="It was very exciting to see all of the creative applications to the Powered by Sefaria Contest. There was such a wide range of ideas, truly displaying the power of Sefaria to engage a range of audiences. At the core of all of the ideas was creating innovative ways to allow more people to engage with text in a deeper way, from bringing the text to life through interactive museums to creating additional features and ease for the toolbar and the Sefaria browsing experience.<br/><br/>Many of the ideas are very promising and I hope the contestants continue to explore their ideas and bring their passion to life. Thanks to Sefaria for creating such an accessible and open platform to allow for such a meaningful and collaborative competition."
                heText="התרגשנו מאוד לראות את המיזמים היצירתיים שנשלחו לתחרות פיתוח התוכנה של ספריא. מנעד הרעיונות היה רחב במיוחד וחשף את כוחה של ספריא לרתום מגוון קהלים. הלב של כל הרעיונות הללו היה אחד – יצירת דרכים חדשניות לאפשר לעוד ועוד אנשים לעסוק בטקסט באופן עמוק יותר, החל במוזיאונים אינטראקטיביים המפיחים חיים בטקסטים עצמם וכלה בשלל כלים שמטרתם להוסיף נוחות ויעילות לחוויית הגלישה בספריא או לשימוש בסרגל הכלים שלה. רבים מן הרעיונות האלה מבטיחים מאוד, ואנו מקווים שהמשתתפים והמשתתפות ימשיכו לחקור את הרעיונות שלהם ולהגשים את שאיפותיהם. תודה לספריא על יצירת פלטפורמה נגישה ופתוחה כל כך המאפשרת תחרות בעלת ערך ושיתופי פעולה."
                enName="Libby Novack, <i>Chief Operations Officer, Maapilim; Sefaria advisory board member</i>"
                heName='ליבי נובאק, סמנכ"ל תפעול בחברת "מעפילים"; חברה בצוות הייעוץ לספריא.'
                image="/static/img/pbsc-2020-landing-page/libby.png"
            />
            <UserQuote
                enText="Each of the top projects that I looked into were intriguing and useful.The Sidebar extension won deservedly because it is so obviously helpful for increasing Sefaria's efficiency. But I greatly admired the cleverness of the Shulkhan tool, the mathematical sophistication of the Sefer Similarity Map, and the ingenuity and resourcefulness of all the submissions."
                heText='כל אחד מן המיזמים המעולים שבחנתי היו מסקרנים ושימושיים. במקום הראשון זכה ביושר תוסף סרגל הכלים של התלמוד, מכיוון שברור שבכוחו להגביר את היעילות של ספריא בקרב משתמשיה. עם זאת יש בי גם הערכה רבה לפיקחות של מיזם "השולחן", לתחכום המתמטי של "ספר" – מפת הדמיון הטקסטואלית – ולתושייה וכוח ההמצאה של כל אחד מן המיזמים האחרים.'
                enName="Moshe Koppel, <i>Professor of Computer Science at Bar-Ilan University; Founder of DICTA, a laboratory creating computational linguistics tools for the analysis of Jewish and Hebrew texts</i>"
                heName='משה קופל, פרופסור במחלקה למדעי המחשב באוניברסיטת בר־אילן; המקים של "דיקטה", מעבדה לפיתוח כלי לשון דיגיטליים לניתוח של טקסטים עבריים ויהודיים.'
                image="/static/img/pbsc-2020-landing-page/moshe.png"
            />
            <UserQuote
                enText="I was incredibly impressed by the submissions to the Powered by Sefaria contest. When Sefaria started, we could not have imagined the level of technical talent that would be applied to enhancing Sefaria's texts and platform. The submissions to the contest were both interesting and often quite practical, many adding useful features on top of Sefaria's existing platform. I was especially excited to see such wonderful energy from our younger supporters who brought creativity and vision to the contest. Congratulations to all the submitters!"
                heText="התרשמתי עמוקות מן המיזמים שנשלחו לתחרות פיתוח התוכנה של ספריא. כשספריא החלה את פעילותה, לא יכולנו לדמיין שבעתיד ייעשה שימוש ברמה גבוהה כל כך של מיומנות טכנולוגית כדי לשכלל את הפלטפורמה ואת הטקסטים של ספריא. המיזמים שנשלחו לתחרות היו מעניינים ולרוב גם מעשיים למדי, ובהם תוספים שימושיים רבים לפלטפורמה הנוכחית של ספריא. התרגשתי מאוד לראות אנרגיה מופלאה כל כך מתומכינו הצעירים, שהביאו אל התחרות חזון ויצירתיות. ברכות לכל המשתתפים והמשתתפות!"
                enName="Mo Koyfman, <i>Founder of early-stage venture capital firm, Shine Capital; founding Sefaria board member</i>"
                heName="מוֹ קאופמן, מייסד Shine Capital, קרן הון־סיכון לחברות הזנק; חבר הנהלה בצוות המייסדים של ספריא."
                image="/static/img/pbsc-2020-landing-page/mo.png"
            />
        </Section>

        <GreyBox light={true}>
            <H2Block en="Honorable Mentions" he="מיזמים שזכו להערכה מיוחדת"/>
        </GreyBox>

        <Feature
            enTitle="Shulkhan"
            enText="By Joseph Tepperman<br/><br/>Shulkhan is a touch interface for the printed Talmud. Using a camera and projector, Shulkan can watch as you learn with a book and project translations to the passages of text that you touch."
            enImg="/static/img/pbsc-2020-landing-page/shulkhan.png"
            enImgAlt="Shulkhan"
            heTitle="שולחן"
            heText='ג׳וזף טפרמן<br/><br/>שולחן הוא ממשק מגע המיועד לתלמוד מודפס. באמצעות מצלמה ומקרן, "שולחן" יכול לצפות במשתמש בזמן לימוד גמרא ולהקרין תרגומים של הפיסקה שהם נוגעים בה. לקריאה נוספת על המיזם.'
            heImg="/static/img/pbsc-2020-landing-page/shulkhan.png"
            heImgAlt="שולחן"
            borderColor={palette.colors.green}
            link="http://josephtepperman.com/shulkhan.htm"
        />


        <Feature
            enTitle="Goof - Body parts in Tefillah"
            enText="By Judah Kaunfer and Matan Kotler-Berkowitz<br/><br/>Goof lets you explore texts of Tefillah through the lens of the body. Pick a body part and see texts that relate to it. <b>Goof has the honor of being the project submitted to the contest by the youngest entrant, Mr. Kaunfer, at 11 years old.</b>"
            enImg="/static/img/pbsc-2020-landing-page/goof.png"
            enImgAlt="Goof - Body parts in Tefillah"
            heTitle="גוף: איברי הגוף בתפילה"
            heText='יהודה קאונפר ומתן קוטלר־ברקוביץ<br/><br/>גוף עוזר לחקור את הטקסטים של התפילה דרך הגוף. בעזרת "גוף" אפשר לבחור באיבר בגוף ולראות את הטקסטים הקשורים אליו. למיזם זה מקום של כבוד בהיותו המיזם שנשלח לתחרות על ידי המתמודד הצעיר ביותר, מר קאונפר, בן 11 בלבד'
            heImg="/static/img/pbsc-2020-landing-page/goof.png"
            heImgAlt="גוף: איברי הגוף בתפילה"
            borderColor={palette.colors.paleblue}
            link="https://goof.surge.sh/"
        />


        <Feature
            enTitle="Capish - Interactive Learning"
            enText="By Chanah Emunah Deitch and Shalva Eisenberg<br/><br/>Capish is an interactive learning environment for Jewish texts. For this contest, Capish added a feature that allows users to record themselves reading lines of text. As they play back their recordings the users see words highlighted as they are spoken, or jump to parts of the recording by clicking words."
            enImg="/static/img/pbsc-2020-landing-page/capish.png"
            enImgAlt="Capish - Interactive Learning"
            heTitle="קאפיש: לימוד אינטראקטיבי"
            heText="חנה אמונה דייטש ושלווה אייזנברג<br/><br/>קאפיש הוא מרחב לימוד אינטראקטיבי לטקסטים יהודיים. לצורך התחרות נוסף לקאפיש כלי חדש המאפשר למשתמשים להקליט את עצמם בזמן קריאת שורות בטקסט. כאשר מפעילים את ההקלטה, אפשר לראות את המילים המושמעות בולטות בתוך הטקסט או לחלופין לדלג לחלקים אחרים בהקלטה באמצעות לחיצה על מילים בטקסט."
            heImg="/static/img/pbsc-2020-landing-page/capish.png"
            heImgAlt="קאפיש: לימוד אינטראקטיבי"
            borderColor={palette.colors.blue}
            link="https://capish.me/"
        />


        <Feature
            enTitle="Daf Yomi Crossword"
            enText="By Chanoch Goldfarb<br/><br/>Daf Yomi Crossword automatically generates a crossword puzzle based on any page of Talmud. The clues ask you to find words used on the page based on their context, or to find the words that commentaries choose to comment on."
            enImg="/static/img/pbsc-2020-landing-page/dafyomicrossword.png"
            enImgAlt="Daf Yomi Crossword"
            heTitle="תשבץ דף יומי"
            heText="חנוך גולדפרב<br/><br/>תשבץ דף יומי הוא תשבץ שנוצר אוטומטית על בסיס כל עמוד בתלמוד. הרמזים מובילים את המשתמשים למצוא מילים שנעשה בהן שימוש בעמוד בהתאם להקשר שלהן או למצוא מילים שהמפרשים עוסקים בהן."
            heImg="/static/img/pbsc-2020-landing-page/dafyomicrossword.png"
            heImgAlt="תשבץ דף יומי"
            borderColor={palette.colors.orange}
            link="http://ee.cooper.edu/~goldfarb/daf/"
        />


        <Feature
            enTitle="Sefer Similarity Map"
            enText="By Joseph Hostyk and Alex Zaloum<br/><br/>Sefer Similarity Map visualizes relationships among Jewish texts by analyzing their usage of words or phrases to show which texts and sections have the most in common. Exploring the results in graphical form can illuminate historical, authorial, linguistic, and stylistic connections between texts."
            enImg="/static/img/pbsc-2020-landing-page/sefersimilarity.png"
            enImgAlt="Sefer Similarity Map"
            heTitle="ספר– מפת דמיון בין טקסטים"
            heText='ג׳וזף הוסטיק ואלכס זאלום<br/><br/>בעזרת ניתוח של אחוזי השימוש במילים או בביטויים מסוימים, "ספר" – מפת דמיון בין טקסטים – ממחישה את הקשרים בין טקסטים יהודיים, ובאופן זה מראה לאילו מהטקסטים או הקטעים הנבחרים יש הכי הרבה במשותף. הצגת התוצאות בצורה גרפית כזו יכולה לשפוך אור על קשרים היסטוריים, לשוניים וסגנוניים ואחרים בין טקסטים.'
            heImg="/static/img/pbsc-2020-landing-page/sefersimilarity.png"
            heImgAlt="ספר– מפת דמיון בין טקסטים"
            borderColor={palette.colors.lightpink}
            link="https://jhostyk.github.io/SeferSimilarityMap/"
        />


        <Feature
            enTitle="Custom Mikraot Gedolot"
            enText="By Eshel Sinclair and Ben Gold<br/><br/>Custom Mikraot Gedolot lets you create your own Mikraot Gedolot. You choose the texts, translations and up to 9 commentaries, and the app will automatically generate a PDF that you can download and print."
            enImg="/static/img/pbsc-2020-landing-page/mikraotgedolot.png"
            enImgAlt="Custom Mikraot Gedolot"
            heTitle="מקראות גדולות בהתאמה אישית"
            heText="אשל סינקלייר ובן גולד<br/><br/>יישומון מקראות גדולות בהתאמה אישית מאפשר לך ליצור מקראות גדולות אישיות. ביכולתך לבחור את הטקסטים, את התרגומים וכן עד 9 פרשנים שונים, ובהתאם לבחירות אלה ייצור היישומון קובץ PDF באופן אוטומטי."
            heImg="/static/img/pbsc-2020-landing-page/mikraotgedolot.png"
            heImgAlt="מקראות גדולות בהתאמה אישית"
            borderColor={palette.colors.darkblue}
            link="http://ec2-3-129-165-55.us-east-2.compute.amazonaws.com:3002/"
        />


        <Feature
            enTitle="Sefaria Space: (Topic Museum + Text Mania)"
            enText="By David Komer<br/><br/>The Sefaria Space has two parts: the Topic Museum creates an immersive 3D environment where you can explore texts related to a topic as though they were paintings hanging on a wall. Text Mania is a 3D game based on the letters of a text of your choosing."
            enImg="/static/img/pbsc-2020-landing-page/sefariaspace.png"
            enImgAlt="Sefaria Space: (Topic Museum + Text Mania)"
            heTitle="מרחב ספריא (מוזיאון נושאי + טָרֶפֶת טקסט)"
            heText='דוד קומר<br/><br/>מרחב ספריא מורכב משני חלקים: המוזיאון הנושאי – סביבה תלת־ממדית סוחפת שבה אפשר לחקור טקסטים על פי נושא כאילו היו ציורים על הקיר – ו"טרפת טקסט", משחק תלת־ממד המבוסס על האותיות של הטקסט שבחרתם.'
            heImg="/static/img/pbsc-2020-landing-page/sefariaspace.png"
            heImgAlt="מרחב ספריא (מוזיאון נושאי + טָרֶפֶת טקסט)"
            borderColor={palette.colors.darkpink}
            link=" https://sefaria-space.web.app/"
        />


        <Feature
            enTitle="The Rabbinic Citation Network"
            enText="By Michael Satlow and Mike Sperling<br/><br/>Using Sefaria's digital text of the Bavli, the Rabbinic Citation Networks extracts the names and links of rabbis who cite (or who are cited by) other rabbis and visualizes the resulting network."
            enImg="/static/img/pbsc-2020-landing-page/rabbiniccitation.png"
            enImgAlt="The Rabbinic Citation Network"
            heTitle="רשת ציטוטים של חכמי התלמוד"
            heText="מייקל סאטלו ומייק ספרלינג<br/><br/>באמצעות טקסט התלמוד הבבלי המקוון בספריא, רשת הציטוטים של חכמי התלמוד מחלצת את השמות ואת הקישורים של החכמים המצטטים (או המצוטטים בידי) חכמים אחרים וממחישה את רשת התוצאות."
            heImg="/static/img/pbsc-2020-landing-page/rabbiniccitation.png"
            heImgAlt="רשת ציטוטים של חכמי התלמוד"
            borderColor={palette.colors.lavender}
            link="http://www.rabbiniccitations.jewishstudies.digitalscholarship.brown.edu/blog/"
        />


        <Feature
            enTitle="T'Feeling"
            enText="By Matan Kotler-Berkowitz<br/><br/>T’Feeling encourages people to think deeply and intentionally about the connections between t'fillot and emotions. The site allows users to browse t’fillot by emotion (either what they’re currently feeling or what they hope to be feeling), as well as contribute their own ratings for which t’fillot connect most to which emotions."
            enImg="/static/img/pbsc-2020-landing-page/tfeeling.png"
            enImgAlt="T'Feeling"
            heTitle="ת'פילינג"
            heText="מתן קוטלר־ברקוביץ<br/><br/>ת'פילינג (T’Feeling) מעודד לחשוב בצורה עמוקה ומכוונת יותר על הקשרים שבין תפילות ורגשות. האתר מציג למשתמשים שלל תפילות על פי רגש (שאותו הם מרגישים עכשיו או מייחלים לחוש), וכן מאפשר להם לדרג אילו תפילות הן המתאימות ביותר לכל רגש."
            heImg="/static/img/pbsc-2020-landing-page/tfeeling.png"
            heImgAlt="ת'פילינג"
            borderColor={palette.colors.yellow}
            link="https://tfeeling.netlify.app"
        />


        <Feature
            enTitle="CiteMakor"
            enText="By Ariel Caplan<br/><br/>CiteMakor is a Twitter bot which accepts requests for citations and responds by tweeting back one or more images that include the cited text. The goal of CiteMakor is to make it easy to bring source texts into discussions of Jewish topics on Twitter."
            enImg="/static/img/pbsc-2020-landing-page/citemakor.png"
            enImgAlt="CiteMakor"
            heTitle="המצ'טט"
            heText="אריאל קפלן<br/><br/>המצ'טט הוא בוט טוויטר המקבל בקשות למקורות מסוימים ומשיב על ידי ציוץ של תמונה אחת או יותר הכוללת את הטקסט המצוטט. מטרת־העל של המצ'טט היא להקל על הבאת מקורות טקסטואליים לתוך דיונים יהודיים עכשוויים בטוויטר."
            heImg="/static/img/pbsc-2020-landing-page/citemakor.png"
            heImgAlt=""
            borderColor={palette.colors.purple}
            link="https://twitter.com/CiteMakor"
        />


        <Feature
            enTitle="Gifaria"
            enText="By John Cassil and Tiger Tang<br/><br/>For a little bit of fun, gifaria finds GIFs relevant to any verse in Tanakh. This project provides an engaging way for people to interact with biblical texts in a lighthearted way."
            enImg="/static/img/pbsc-2020-landing-page/gifaria.png"
            enImgAlt="Gifaria"
            heTitle="גיפַריא"
            heText='ג׳ון קסיל וטייגר טאנג<br/><br/>אי אפשר בלי קצת כיף. בעזרת גיפריא תוכלו למצוא גיפים רלוונטיים לכל פסוק בתנ"ך. המיזם הזה מספק דרך אטרקטיבית וקלילה לעסוק בטקסטים תנ"כיים.'
            heImg="/static/img/pbsc-2020-landing-page/gifaria.png"
            heImgAlt="גיפַריא"
            borderColor={palette.colors.lightblue}
            link="https://tiger-tang.shinyapps.io/gifaria/"
        />


        <Feature
            enTitle="The Taryag Mitzvos"
            enText="By Rafi Wolfe<br/><br/>The Taryag Mitzvos is an interactive visualization of the 613 commandments, and the different ways that different scholars have enumerated that list. The interface lets users view and sort according to which opinions support each mitzvah’s inclusion, as well as compare the differences between different lists."
            enImg="/static/img/pbsc-2020-landing-page/thetaryag.png"
            enImgAlt="The Taryag Mitzvos"
            heTitle='תרי"ג מצוות'
            heText='רפי וולף<br/><br/>תרי"ג מצוות הוא המחשה אינטראקטיבית של 613 המצוות ושל שלל דרכי המנייה שלהן שנקטו חכמים שונים ביצירת הרשימה הזו. הממשק מאפשר למשתמשים ולמשתמשות לגלות אילו מצוות נמנו בידי אילו רבנים ולמיין אותן בהתאם, וכן להשוות בין הרשימות'
            heImg="/static/img/pbsc-2020-landing-page/thetaryag.png"
            heImgAlt='תרי"ג מצוות'
            borderColor={palette.colors.lightgreen}
            link="https://thetaryag.com/"
        />


        <Feature
            enTitle="3D Tanach Family Tree"
            enText='By Moshe Escott, Shlomo Gordon, Simcha Schaum, Aaron Farntrog and Ari Abramowitz<br/><br/>The 3D Tanach Family Tree is an interactive 3D visualization of characters mentioned in Tanach. As you float through the tree you can find information about each character, search relationships between them, and find verses on Tanach where they appear.  Select "Tanach Family Tree" from the menu at top right to view.'
            enImg="/static/img/pbsc-2020-landing-page/familytree.jpg"
            enImgAlt="3D Tanach Family Tree"
            heTitle='אילן יוחסין תנ"כי תלת ממדי'
            heText='משה אסקוט, שלמה גורדון, שמחה שאום, אהרון פרנטרוג וארי אברמוביץ<br/><br/>אילן היוחסין התנ"כי והתלת־ממדי הוא המחשה תלת־ממדית של דמויות תנ"כיות. ביכולתך לשוטט בתוך האילן ולמצוא מידע על כל דמות ודמות, לחפש קשרים ביניהן ולגלות פסוקים שבהם הן נזכרות. כדי לצפות באילן, יש ללחוץ על "אילן יוחסין תנ"כי" שבתפריט הנמצא בפינה הימנית העליונה של הדף.'
            heImg="/static/img/pbsc-2020-landing-page/familytree.jpg"
            heImgAlt='אילן יוחסין תנ"כי תלת־ממדי'
            borderColor={palette.colors.red}
            link="http://www.basehasefer.com/"
        />


        <Feature
            enTitle="Gematriaphone"
            enText="By Alexander Boxer<br/><br/>Gematriaphone lets you hear the Torah's hidden mathematical music. Starting from any word of Torah, users can hear tones corresponding to the gematria of each word as it is highlighted on the screen."
            enImg="/static/img/pbsc-2020-landing-page/gematriaphone.png"
            enImgAlt="Gematriaphone"
            heTitle='גימטריה קולית'
            heText="אלכסנדר בוקסר<br/><br/>הגימטריה הקולית מאפשרת לך לשמוע את המוזיקה המתמטית החבויה בתורה. המשתמשים והמשתמשות יכולים לבחור כל מילה בתורה, לשמוע את הצלילים על פי הגימטריה שלה ולראות אותה מודגשת על הצג."
            heImg="/static/img/pbsc-2020-landing-page/gematriaphone.png"
            heImgAlt="גימטריה קולית"
            borderColor={palette.colors.teal}
            link="http://alexboxer.com/gematriaphone/"
        />


        <Feature
            enTitle="sefaria-connections"
            enText="By Charles Loder<br/><br/>Sefaria-connections is an interactive visualization of the connections between texts in Sefaria’s library. Starting from any line of Tanakh you can choose a type of connection, see the sources that match that type, and see the sources connected to those sources."
            enImg="/static/img/pbsc-2020-landing-page/sefariaconnections.png"
            enImgAlt="SefariAcrostic"
            heTitle="קשרי ספריא"
            heText='צ׳רלס לודר<br/><br/>קשרי ספריא הם המחשה אינטראקטיבית של הַקשרים שבין הטקסטים המצויים בספריית ספריא. אפשר לבחור כל פסוק בתנ"ך ואת סוג הקשר האינטרטקסטואלי, לראות את המקורות המתאימים לסוג הקשר הזה ולגלות את המקורות הקשורים לאותם המקורות.'
            heImg="/static/img/pbsc-2020-landing-page/sefariaconnections.png"
            heImgAlt="קשרי ספריא"
            borderColor={palette.colors.tan}
            link="https://charlesloder.github.io/sefaria-connections/"
        />


        <Feature
            enTitle="SefariAcrostic"
            enText="By Ezra Gordon<br/><br/>SefariaAcrostic searches books of Tanakh for acrostics that match a person’s Hebrew name. Acrostics can be used to create digital art or to inspire personalized artwork for a simcha, such as finding an acrostic with the couple's names for a wedding."
            enImg="/static/img/pbsc-2020-landing-page/acrostic.png"
            enImgAlt="SefariAcrostic"
            heTitle="ספריאקרוסטיכון"
            heText='עזרא גורדון<br/><br/>ספריאקרוסטיכון מסוגל למצוא אקרוסטיכונים בספרי התנ"ך לפי שמות פרטיים עבריים. בעזרת המיזם אפשר ליצור אומנות דיגיטלית או קטע אומנות אישי לצורך אירוע משמח, למשל אקרוסטיכון לחתונה עם שמות בני הזוג.'
            heImg="/static/img/pbsc-2020-landing-page/acrostic.png"
            heImgAlt="ספריאקרוסטיכון"
            borderColor={palette.colors.lightbg}
            link="https://20gordone.github.io/SefariaContest/"
        />


        <CallToActionFooterWithButton
            href="https://github.com/Sefaria/Sefaria-Project"
            he_href="https://github.com/Sefaria/Sefaria-Project"
            enText="Want to create something of your own?"
            heText="רוצה ליצור משהו משלך?"
            enButtonText="GitHub"
            heButtonText="GitHub"
        />

        <ButtonRow white={true} enTitle="Explore more projects" heTitle="למידע על עוד כמה מיזמים">
            { [ 
                ["Abba Saul", "", "https://github.com/scopreon/abba-saul/"],
                ["Amud-anan", "", "https://github.com/Binyomin-Cohen/sefaria"],
                ["Bashamayim Hi", "", "https://yosefsklar.github.io/bashamayim-hi/"],
                ["Daily Daf Tracker", "", "https://mattpolanieckidev.github.io/dailydaf/"],
                ["I’m Learning Lucky", "", "https://github.com/jmcaplan/sefariaExtension"],
                ["Jew And A", "", "https://seph-efd35.web.app/"],
                ["Leiner", "", "https://appetize.io/app/w380pbm112n7ar9m4n6er9kpm8?device=iphone11promax&scale=100&orientation=portrait&osVersion=13.3"],
                ["Memorize Plus", "", "https://www.dropbox.com/sh/cd5xhc1gg8oqqk7/AAAeFSscagGfesVgyBkBwEiIa?dl=0"],
                ["NLP-Talmud", "", "https://github.com/adinabruce/NLP-Talmud"],
                ["Pninim", "", "https://pninim.yiddishe-kop.com/"],
                ["QUIZARIA", "", "https://www.figma.com/proto/wk07O8t1I9Wxw989SGopwr/QUIZARIA!?node-id=11%3A14&scaling=scale-down"],
                ["Quran Tanakh Kabbalah Project", "", "https://bref-saucisson-56522.herokuapp.com/"],
                ["RecurrentRav", "", "https://github.com/leerosenthalj/RecurrentRav"],
                ["Scribe", "", "https://www.youtube.com/watch?v=BkCKrLf6pvk&feature=youtu.be"],
                ["Sheilta", "", "https://www.sheilta.ml/"],
                ["Talmud Note", "", "https://play.google.com/store/apps/details?id=com.graytapps.talmudnote"],
                ["Talmudoi Beyodoi", "", " https://torah.yiddishe-kop.com/"],
                ["The Jewish Story Through Books", "", "https://joshcooper417.github.io/"],
                ["Torah for the Blind", "", "https://torahfortheblind.com/"],
                ["Tweet Yomi", "", "https://tweetyomi.org/"],
                ["Visualizations of Sefaria", "", "https://guedalia.github.io/testab/test"],
                ["Visualizing Talmud Topics", "", "https://share.streamlit.io/guedalia/streamlit/main/first_app.py"],
                ["Visualizing Works Influence", "", "https://adinabechhofer.github.io/"],
                ["Yamim Noraim Machzor", "", "https://play.google.com/store/apps/details?id=com.machzoryamimnoraim"],
                ["Yomyomishna", "", "https://yomyomishna.web.app/"]
            ].map(i => 
                <SimpleButton
                    white={true}
                    rounded={false}
                    tall={true}
                    newTab={true}
                    href={i[2]}
                    he_href={i[2]}
                    he={i[0]}
                    en={i[0]}
                />)
            }
        </ButtonRow>

    </StaticPage>
);


const StaticPage = ({children, optionalClass=""}) => {
    var staticPageClass = "staticPage";
    if (optionalClass !== "") {
        staticPageClass += " " + optionalClass;
    }
    return <div className={staticPageClass}>
        {children}
    </div>
};

const Spacer = ({height}) => <div className={"staticPageSpacer"} style={{height: height || 60}}></div>;

const HeBlock = ({children, padded}) => <div className={"int-he" + (padded ? " staticPageBlockInner" : "")}>{children}</div>;

const EnBlock = ({children, padded}) => <div className={"int-en" + (padded ? " staticPageBlockInner" : "")}>{children}</div>;

const GreyBox = ({children, light}) => <div className={light ? "lightgreyBackground" : "greyBackground"}>{children}</div>;

const H2Block = ({en, he, classes}) =>
  <div className="staticPageBlockInner">
    <h2 className="staticPageH2">
        <SimpleInterfaceBlock en={en} he={he} />
    </h2>
  </div>;

const EducatorSubscribeButton = () => {
  const email = Sefaria._email;
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const heActionText = useRef("הירשמו לקבלת הניוזלטר");
  const enActionText = useRef("Get the Newsletter");

  if (email.length === 0) {
    enActionText.current = "Sign up to get updates";
    heActionText.current = "הירשמו לקבלת עדכונים";
  }
  const handleClick = () => {
    if (Sefaria.util.isValidEmailAddress(email)) {
      setMessage("Subscribing...");
      setMessageStyle("italics");
      var lists = Sefaria.interfaceLang == "hebrew" ?
              "Announcements_General_Hebrew|Announcements_Edu_Hebrew"
              : "Announcements_General|Announcements_Edu"
      const request = new Request(
          "/api/subscribe/" + email,
          {headers: {'X-CSRFToken': Cookies.get('csrftoken')}}
      );
      fetch(request, {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        body: {"lists": lists},
      }).then(response => {
        if (!response.ok) {
          response.text().then(resp_text => {
            setMessage(resp_text)
            setMessageStyle("");
          });
        } else {
          response.json().then(resp_json => {
            if (resp_json.hasOwnProperty("status") && resp_json["status"] == "ok") {
              setMessage("Subscribed! Welcome to our list.");
              setMessageStyle("");
            }
            else if (resp_json.hasOwnProperty("error")) {
              setMessage(resp_json["error"]);
              setMessageStyle("");
            }
          });
        }
      }).catch(error => {
        setMessage(error.message);
      });
    }
  }

  return <span>
      <div className="simpleButtonWrapper signUpEducators">
        <div onClick={handleClick} className={classNames({button:1, flexContainer:1, "int-en":1, white: true, tall: false, rounded:true})}>
          <span className="int-en">{email.length === 0 ? <a href="/register?educator=true&next=/educators">{enActionText.current}</a> : enActionText.current}<img src="/static/img/circled-arrow-right.svg"/></span>
        </div>
        <div onClick={handleClick} className={classNames({button:1, flexContainer:1, "int-he":1, white: true, tall: false, rounded:true})}>
          <span className="int-he">{email.length === 0 ? <a href="/register?educator=true&next=/educators">{heActionText.current}</a> : heActionText.current}<img src="/static/img/circled-arrow-right.svg"/></span>
        </div>
      </div>
      <div className={`signUpEducatorsMessage ${messageStyle}`}>{message}<br/></div>
  </span>
}

const HeaderForEducatorsPage = () => {
  var enTitle="Teach with Sefaria"
  var enText="Discover the power of digital texts and tools in your classroom. Explore Sefaria’s many resources to enrich teaching and learning in your community."
  var heText="Discover the power of digital texts and tools in your classroom. Explore Sefaria’s many resources to enrich teaching and learning in your community."
  var heTitle="Teach with Sefaria"

  return <div className="staticPageHeader educators">
    <div className="staticPageBlockInner flexContainer">
      <div className="staticPageHeaderTextBox educators">
        <h1>
          <span className="int-en">{enTitle}</span>
          <span className="int-he">{heTitle}</span>
        </h1>
        <SimpleInterfaceBlock classes="staticPageHeaderText" he={heText} en={enText}/>
        <EducatorSubscribeButton/>
      </div>
    </div>
  </div>
};

const Header = ({enTitle, heTitle, enText, heText, enImg, heImg, enImgAlt, heImgAlt, enActionURL, enActionText, heActionURL, heActionText}) => {
    var staticPageHeaderClass = "staticPageHeader";
    var imgComponent = "";
    if (enImg === "" && heImg === "") {
      staticPageHeaderClass += " textOnly";
    }
    else
    {
      imgComponent = <span><img className="int-en" src={enImg} alt={enImgAlt}/><img className="int-he" src={heImg} alt={heImgAlt}/></span>;
    }
    return <div className={staticPageHeaderClass}>
        <div className="staticPageBlockInner flexContainer">
            <div className="staticPageHeaderTextBox">
                <h1>
                    <span className="int-en">{enTitle}</span>
                    <span className="int-he">{heTitle}</span>
                </h1>
                <SimpleInterfaceBlock classes="staticPageHeaderText" he={heText} en={enText}/>
                {enActionURL ?
                    <SimpleButton en={enActionText} he={heActionText} href={enActionURL} he_href={heActionURL}
                                  white={true}/> : null}
            </div>
            <div className="staticPageHeaderImg">
                {imgComponent}
            </div>
        </div>
    </div>
};

const Section = ({children}) =>
    <div className={"staticPageBlockInner staticPageSection"}>
        {children}
    </div>;

const UserQuote = ({enText, heText, image, enName, heName}) =>
    <div className="staticPageUserQuote">
        <div className="staticPageUserQuoteContent">
            <div className="int-en" dangerouslySetInnerHTML={{__html:enText}} />
            <div className="int-he" dangerouslySetInnerHTML={{__html:heText}} />
        </div>
        <div className="staticPageUserQuoteNameBox">
            <img src={image} />
            <div className="staticPageUserQuoteName">
                <span className="int-en" dangerouslySetInnerHTML={{__html:enName}} />
                <span className="int-he" dangerouslySetInnerHTML={{__html:heName}} />
            </div>
        </div>
    </div>;

const Sheet = ({title, link, author, image}) =>
    <div className="staticPageSheetItem">
        <a href={link}>{title}</a>
        <img src={image}/>
        <span className="staticPageSheetAuthor">{author}</span>
    </div>;

const CallToActionFooterWithButton = ({href, he_href, enText, heText, enButtonText, heButtonText}) => (
  <div className="staticPageCallToActionFooter">
    <div className="staticPageBlockInner flexContainer">
      <SimpleInterfaceBlock classes="callToActionText" en={enText} he={heText} />
      <SimpleButton href={href} he_href={he_href} en={enButtonText} he={heButtonText} white={true}/>
    </div>
  </div>
);

const CallToActionFooter = ({enText, heText}) => (
    <div className="staticPageCallToActionFooter">
        <div className="staticPageBlockInner flexContainer">
            <SimpleInterfaceBlock classes="callToActionText noButton" en={enText} he={heText} />
        </div>
    </div>
);

const CallToActionFooterWithNewsletter = ({enText, heText, includeEducatorOption}) => (
    <div className="staticPageCallToActionFooter">
        <div className="staticPageBlockInner flexContainer">
            <SimpleInterfaceBlock classes="callToActionText" en={enText} he={heText} />
            <NewsletterSignUpForm contextName="Distance Learning Static Page" includeEducatorOption={includeEducatorOption} />
        </div>
    </div>
);

const About = ({enTitle, heTitle, enText, heText, backgroundColor}) => (
    <div className={"staticPageAbout" + (backgroundColor == "grey" ? " greyBackground" : "")}>
        <div className="staticPageBlockInner">
            <h2>
                <span className="int-en">{enTitle}</span>
                <span className="int-he">{heTitle}</span>
            </h2>
            <SimpleInterfaceBlock classes="staticPageAboutText" he={heText} en={enText} />
        </div>
    </div>
);

const ImageWithText = ({enText, heText, enImg, heImg, enImgAlt, heImgAlt}) => (
    <div className="feature blockVerticalPadding" style={{backgroundColor: "inherit"}}>
        <div className="staticPageBlockInner flexContainer">
            <div className="featureText" style={{borderTop: 0}}>
                <div className="int-en" dangerouslySetInnerHTML={{__html:enText}} />
                <div className="int-he" dangerouslySetInnerHTML={{__html:heText}} />
            </div>
            <div className="featureImage">
                <img className="int-en" src={enImg} alt={enImgAlt}/>
                <img className="int-he" src={heImg} alt={heImgAlt}/>
            </div>
        </div>
    </div>
);

const Feature = ({enTitle, heTitle, enText, heText, enImg, heImg, enImgAlt, heImgAlt, borderColor, link}) => (
    <div className="feature">
        <div className="staticPageBlockInner flexContainer">
            <div className="featureText" style={{borderColor: borderColor}}>
                <div className="featureHeader">
                    <ConditionalLink link={link}>
                        <h3>
                            <span className="int-en">{enTitle}</span>
                            <span className="int-he">{heTitle}</span>
                        </h3>
                    </ConditionalLink>
                </div>
                <div className="int-en" dangerouslySetInnerHTML={{__html:enText}} />
                <div className="int-he" dangerouslySetInnerHTML={{__html:heText}} />
            </div>
            <ConditionalLink link={link}>
                <div className="featureImage">
                    <img className="int-en" src={enImg} alt={enImgAlt}/>
                    <img className="int-he" src={heImg} alt={heImgAlt}/>
                </div>
            </ConditionalLink>
        </div>
    </div>
);

const ButtonRow = ({children, light, white, enTitle, heTitle}) => (
    <div className={classNames({
        "buttonRow": 1,
        "staticPageBlockInner": 1, 
        "blockVerticalPadding": 1, 
        "lightgreyBackground": light,
        "greyBackground": !white && !light
    })}>
        {enTitle && heTitle ? 
            <h2 className="staticPageH2">
                <SimpleInterfaceBlock en={enTitle} he={heTitle} />
            </h2>
            : null }
        <div className="flexContainer">{children}</div>
    </div>
);

const SimpleButton = ({href, he_href, he, en, white, rounded=true, tall=false, newTab=false}) => (
    <div className="simpleButtonWrapper">
        <a href={href} className={classNames({button:1, flexContainer:1, "int-en":1, white: white, tall: tall, rounded:rounded})} target={newTab ? "_blank" : "_self"}>
            <span className="int-en">{en}</span>
        </a>
        <a href={he_href || href} className={classNames({button:1, flexContainer:1, "int-he":1, white: white, tall: tall, rounded:rounded})}>
            <span className="int-he">{he}</span>
        </a>
    </div>
);

const ParashaSponsorship = ({title, sponsorNames, message, link}) => {
    if (!sponsorNames) {
        return <div className="parashaSponsorship">
            <div className="parashaTitle">{title}</div>
            <div className="parashaSponsorNames"><a target="_blank" href='mailto:hannah@sefaria.org?subject=Ramban Sponsorship'><b><i>Available for Sponsorship</i></b></a></div>
        </div>
    }
    else {
        return <div className="parashaSponsorship">
            <a href={link} className="parashaTitle">{title}</a>
            <div className="parashaSponsorNames">{sponsorNames}</div>
            {message ?
            <div className="parashaMessage">{message}</div> : null }
        </div>
    }
};

const StaticHR = () =>
    <div className="staticPageBlockInner"><hr /></div>;

const ConditionalLink = ({ link, children }) => 
  link ? <a href={link} target="_blank">{children}</a> : children;


export {
    RemoteLearningPage,
    SheetsLandingPage,
    PBSC2020LandingPage,
    ContestLandingPage,
    RambanLandingPage,
    EducatorsPage
}