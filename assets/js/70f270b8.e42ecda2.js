"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9147],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(o),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9295:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],s={title:"Development process",description:"A summary of the various development processes used in Moodle development.",tags:["Processes","Quality Assurance","Core development","Git"]},l=void 0,d={unversionedId:"development/process",id:"development/process",title:"Development process",description:"A summary of the various development processes used in Moodle development.",source:"@site/general/development/process.md",sourceDirName:"development",slug:"/development/process",permalink:"/devdocs/general/development/process",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/process.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Quality Assurance",permalink:"/devdocs/general/tags/quality-assurance"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Git",permalink:"/devdocs/general/tags/git"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652696789,formattedLastUpdatedAt:"16/05/2022",frontMatter:{title:"Development process",description:"A summary of the various development processes used in Moodle development.",tags:["Processes","Quality Assurance","Core development","Git"]},sidebar:"process",next:{title:"Bug triage",permalink:"/devdocs/general/development/process/triage"}},p={},u=[{value:"Integration workflow in the tracker",id:"integration-workflow-in-the-tracker",level:2},{value:"Users",id:"users",level:3},{value:"Developers",id:"developers",level:3},{value:"CiBoT",id:"cibot",level:3},{value:"Component leads",id:"component-leads",level:3},{value:"Component leads reviewers",id:"component-leads-reviewers",level:3},{value:"Integrators",id:"integrators",level:3},{value:"Testers",id:"testers",level:3},{value:"Production maintainers",id:"production-maintainers",level:3},{value:"Stable maintenance cycles",id:"stable-maintenance-cycles",level:2},{value:"Minor release (point release) timing",id:"minor-release-point-release-timing",level:3},{value:"Issue triage",id:"issue-triage",level:3},{value:"Scrum",id:"scrum",level:3},{value:"Major release cycles",id:"major-release-cycles",level:2},{value:"Define roadmap",id:"define-roadmap",level:3},{value:"Planning and development",id:"planning-and-development",level:3},{value:"Testing",id:"testing",level:3},{value:"Sprints",id:"sprints",level:3},{value:"Events during cycle",id:"events-during-cycle",level:3},{value:"New feature development",id:"new-feature-development",level:2},{value:"Specification",id:"specification",level:3},{value:"Community consultation",id:"community-consultation",level:3},{value:"Develop the code using Git",id:"develop-the-code-using-git",level:3},{value:"Submit your code for peer review",id:"submit-your-code-for-peer-review",level:3},{value:"Peer review",id:"peer-review",level:3},{value:"Submit the code for integration",id:"submit-the-code-for-integration",level:3},{value:"Fixing a bug",id:"fixing-a-bug",level:2},{value:"Make sure there is a tracker issue",id:"make-sure-there-is-a-tracker-issue",level:3},{value:"Decide which branches the fix is required on",id:"decide-which-branches-the-fix-is-required-on",level:3},{value:"Develop your change using git",id:"develop-your-change-using-git",level:3},{value:"Submit your code for peer review",id:"submit-your-code-for-peer-review-1",level:3},{value:"Peer review",id:"peer-review-1",level:3},{value:"Submit your code for integration",id:"submit-your-code-for-integration",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"How to remove a branch from Github",id:"how-to-remove-a-branch-from-github",level:3},{value:"Policy issues",id:"policy-issues",level:2},{value:"See also",id:"see-also",level:2}],c={toc:u};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document summarises the various development processes used in developing Moodle. There are four main processes that overlap."),(0,n.kt)("h2",{id:"integration-workflow-in-the-tracker"},"Integration workflow in the tracker"),(0,n.kt)("p",null,"The Moodle tracker keeps track of the status of all bug fixes and new features."),(0,n.kt)("p",null,"We use a workflow that ensures that new code receives multiple reviews by different people before it is included into the core Moodle code."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A summary of the Moodle Development Process flow",src:o(1617).Z,width:"816",height:"1149"})),(0,n.kt)("p",null,"A number of roles make this work:"),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("p",null,"Users report bugs and make feature requests directly in the tracker, by creating new issues with a summary and a description."),(0,n.kt)("h3",{id:"developers"},"Developers"),(0,n.kt)("p",null,"Developers work on the issues in the tracker to specify solutions and write code that implements these solutions. They will often ask other developers to ",(0,n.kt)("em",{parentName:"p"},"peer review")," their code in the early stages to avoid problems later on."),(0,n.kt)("p",null,"While many of the developers work for Moodle.com, a large number are part of the global development community around Moodle. If you're interested in becoming a recognised developer, see ",(0,n.kt)("a",{parentName:"p",href:"./tracker/guide#tracker-groups-and-permissions"},"Tracker groups and permissions"),"."),(0,n.kt)("h3",{id:"cibot"},"CiBoT"),(0,n.kt)("p",null,"CiBoT is not a person but a bot who monitors the tracker and performs the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Automated_code_review"},"Automated code review")," when issue is submitted for Peer review or when developer added ",(0,n.kt)("inlineCode",{parentName:"p"},"cime")," label."),(0,n.kt)("h3",{id:"component-leads"},"Component leads"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/projects/MDL?selectedItem=com.atlassian.jira.jira-projects-plugin:components-page"},"Component leads")," are developers with some responsibility for particular components (plugins or modules) in Moodle. They have authority to decide that a particular fix is suitable and complete enough to be considered for integration in Moodle core and should be called upon to complete peer reviews for code in their components. Note that, apart from that, every component also has some ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Component_Leads"},"HQ Component leads")," that will specifically work on associated issues, triaging, monitoring, reviewing, fixing them."),(0,n.kt)("h3",{id:"component-leads-reviewers"},"Component leads reviewers"),(0,n.kt)("p",null,"Component Lead Reviewers are Component Leads who have the added responsibility of performing a second and final review of a selection of issues within their component.\nAfter reviewing the code, it is sent to the integration team to be pulled without further review."),(0,n.kt)("h3",{id:"integrators"},"Integrators"),(0,n.kt)("p",null,'From Monday to Thursday, the integration team (a small team of senior developers employed by Moodle HQ) conducts a code-level review of all issues in the integration queue. This is often called the "pull" process. If the fix is judged appropriate they will integrate the code into our git integration repository for further testing and it gets added to the testing queue.'),(0,n.kt)("p",null,"If they find problems they reject the issue and send it back to the developer for further work."),(0,n.kt)("h3",{id:"testers"},"Testers"),(0,n.kt)("p",null,"During each week the testers look at all the issues in the testing queue, trying each fix and feature to make sure that it does actually fix the problem it was supposed to, and that there are no regressions in the web version and the Moodle mobile app."),(0,n.kt)("p",null,"If they find problems they reject the issue and integrators may remove it from the integration repository and push it back to the developer for further work."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/testing/integrated-issues"},"Testing of integrated issues")," for more details."),(0,n.kt)("h3",{id:"production-maintainers"},"Production maintainers"),(0,n.kt)("p",null,"On Thursday each week, production maintainers merge all the issues that passed testing into the git production repository, and it becomes available for use on production systems via git and download packages."),(0,n.kt)("h2",{id:"stable-maintenance-cycles"},"Stable maintenance cycles"),(0,n.kt)("p",null,"Moodle releases regular updates of the stable version of the software to fix bugs and other issues. Releases like 2.2.1, 2.2.2, 2.2.3 etc only include fixes based on the latest major release (2.2) and never any significant new features or database changes."),(0,n.kt)("p",null,"At Moodle HQ there are teams of developers using the ",(0,n.kt)("a",{parentName:"p",href:"http://www.scrum.org/"},"Scrum framework")," to work on these issues (as well as new features for ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/#Major_release_cycles"},"major releases"),")."),(0,n.kt)("h3",{id:"minor-release-point-release-timing"},"Minor release (point release) timing"),(0,n.kt)("p",null,"After ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/#Major_release_cycles"},"major releases")," there will be minor releases."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x.x.1 will occur approximately two months after each major release (eg. 2.x)."),(0,n.kt)("li",{parentName:"ul"},"There will then be another point release every two months after that.\nSee the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Releases#General_release_calendar"},"General release calendar")," for details.")),(0,n.kt)("h3",{id:"issue-triage"},"Issue triage"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./process/triage"},"Issue triage")," involves evaluating new issues, making sure that they are recorded correctly. One of the most important jobs triagers do is to identify issues that should be fixed in the stable branch. These are set with a priority ranging from ",(0,n.kt)("em",{parentName:"p"},"Trivial")," up to ",(0,n.kt)("em",{parentName:"p"},"Blocker")," and other features are checked."),(0,n.kt)("p",null,"At Moodle HQ there are currently teams working on stable issues (mostly bugs reported by users) and improvements and new features (Partners, Moodle Association, user suggestions and Martin Dougiamas)."),(0,n.kt)("h3",{id:"scrum"},"Scrum"),(0,n.kt)("p",null,"At Moodle HQ, every three weeks, the stable team takes a number of the most urgent issues from the backlog to work on during a period known as a ",(0,n.kt)("em",{parentName:"p"},"sprint"),"."),(0,n.kt)("p",null,"At the start of a sprint there is a period of planning and estimation. All issues on the backlog are given a relative rank that is based on issue features including priority, security, Partner interest, patches and votes. Issues are given a relative size in Story Points and these points are summed to allow the teams to determine how many issues they can work on in the sprint."),(0,n.kt)("p",null,"During the sprint, the team meets daily to discuss solutions and progress, as well as to organise testing and peer reviews of code. The team has a ",(0,n.kt)("em",{parentName:"p"},"Scrum master")," to help everyone stay organised, to \"unblock\" any barriers to progress and to protect the team from distracting influences (mostly people attempting to add to the developers' workloads) during the sprint. The teams' work is documented publicly in the tracker."),(0,n.kt)("p",null,"Whenever a solution for an issue is finished, it is submitted to the standard integration workflow process described above."),(0,n.kt)("h2",{id:"major-release-cycles"},"Major release cycles"),(0,n.kt)("p",null,"Since Moodle 2.0, we have a policy of release major versions (eg 2.1, 2.2) every six months in May and November. See the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Releases#General_release_calendar"},"General release calendar")," for more details."),(0,n.kt)("p",null,"Each release can be different, but generally the cycles work as follows."),(0,n.kt)("h3",{id:"define-roadmap"},"Define roadmap"),(0,n.kt)("p",null,"The roadmap is prioritised based on user research, stakeholder inputs, community wishes, third-party developments and important issues within the existing code."),(0,n.kt)("p",null,"Sometimes new features might be based on earlier features, sometimes they may be something developed by a third party that needs to be evaluated and sometimes it might be something completely new."),(0,n.kt)("h3",{id:"planning-and-development"},"Planning and development"),(0,n.kt)("p",null,"The product teams together with UX, employed at Moodle HQ, work on specifications of major new features throughout the cycle, specifying projects ahead of development time."),(0,n.kt)("p",null,"The process of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/#New_feature_development"},"new feature development")," is described below. When specifications are in place, new code is developed during sprints, where designs and implementation are iterated as required, and goes through the standard weekly integration workflow described above."),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("p",null,"During development, as new code is integrated, automated testing conducted at the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/PHPUnit"},"code")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Acceptance_testing"},"interface")," levels, to make sure there are no regressions caused by new features."),(0,n.kt)("p",null,"In the last month before the release, a feature freeze is called (no new features can be added) and volunteer testers from the Moodle community perform manual ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/testing/qa"},"QA testing")," of Moodle features. The current set of functional tests is listed in ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLQA-1"},"MDLQA-1"),". The list of tests is extended as new features are added, though we're also trying to reduce the number as more automated ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Acceptance_testing"},"acceptance tests")," are developed."),(0,n.kt)("p",null,"There is also a set of tests for manually testing any major theme changes - ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLQA-11592"},"MDLQA-11592"),"."),(0,n.kt)("p",null,"For more details, see ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/testing"},"Testing"),"."),(0,n.kt)("h3",{id:"sprints"},"Sprints"),(0,n.kt)("p",null,"At Moodle HQ, development takes place in sprints. The sprints are two or three-week periods during which developers to focus on a fixed list of issues. For example, sprints can be arranged within each release cycle as shown in the diagram below."),(0,n.kt)("h3",{id:"events-during-cycle"},"Events during cycle"),(0,n.kt)("p",null,"During each cycle there are a periods and events that occur between and around sprints."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Development sprint calendar",src:o(9504).Z,width:"1501",height:"502"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Planning and bug fixing")," ",(0,n.kt)("br",null),"\nA period during which the Roadmap is explored, specs are written and prototypes are created. Regressions in the recent release are fixed as they arise."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"End sync period")," ",(0,n.kt)("br",null),"\nDuring the ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/integration-review#on-sync-period"},"on-sync period"),", the recent release and master versions are kept synchronised. No new code is added during this period, which ensures regressions are fixed rapidly. This also allows for planning and provides relief for developers after a release."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Personal projects")," ",(0,n.kt)("br",null),"\nAffecting full-time HQ developers only, this period allows for individual creations to be explored and provides a break from sprints."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Code freeze")," ",(0,n.kt)("br",null),"\nA point after which no new code (only fixes to existing code) is accepted until beyond the release. This stabilisation allows for ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/testing/qa"},"QA testing"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"QA, bug fixing, continuous integration")," ",(0,n.kt)("br",null),"\nA period after the code freeze where quality assurance testing takes place. No new code is added, which means developers are able to respond rapidly to bugs found. Integration becomes ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/integration-review#during-continuous-integrationfreezeqa-period"},"continuous"),", meaning that failed QA tests can be re-run within days rather than having to wait for the weekly release."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Release candidate")," ",(0,n.kt)("br",null),"\nA point prior to the full release where a candidate is made public for wider testing."),(0,n.kt)("h2",{id:"new-feature-development"},"New feature development"),(0,n.kt)("p",null,"Major new features in Moodle usually should go through the following process."),(0,n.kt)("h3",{id:"specification"},"Specification"),(0,n.kt)("p",null,"The User Experience (UX) team members create detailed wireframes and features and goals for the new feature, based on iterative user research, design sprints, user testing and co-design as part of the product team."),(0,n.kt)("p",null,"For bigger features there should be a clear overall vision for the outcomes that are to achieved. During implementation design may continue to iterate based on new findings."),(0,n.kt)("p",null,"Developers create a detailed spec (here in the developer docs) outlining their goals for the development and their design for meeting those goals."),(0,n.kt)("p",null,"Developers should also create an issue in the tracker (linking to your docs) to keep track of the project status."),(0,n.kt)("h3",{id:"community-consultation"},"Community consultation"),(0,n.kt)("p",null,"Get the community involved in looking at the spec to see if it meets their needs and to get further feedback. Please post in the ",(0,n.kt)("a",{parentName:"p",href:"http://moodle.org/mod/forum/view.php?id=8052"},"Future major features forum")," on moodle.org. You could also blog/tweet about it etc."),(0,n.kt)("p",null,"Community developers proposing a new feature will want to talk with HQ core developers to make sure the ideas make sense, and possibly get some review on database design, architecture and so on."),(0,n.kt)("h3",{id:"develop-the-code-using-git"},"Develop the code using Git"),(0,n.kt)("p",null,"Develop your code on an open Git repository, like github.com. That enables people to see your code and to help you as it develops. Testers and early adopters also have the opportunity to try it early in the process and give you more valuable feedback."),(0,n.kt)("p",null,"Coverage with automated tests (",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/PHPUnit"},"PHPUnit")," or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Behat"},"Behat integration"),") is mandatory for new features."),(0,n.kt)("p",null,"It is essential that your code follows the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Coding"},"Moodle Coding Guide"),"."),(0,n.kt)("h3",{id:"submit-your-code-for-peer-review"},"Submit your code for peer review"),(0,n.kt)("p",null,"Click on ",(0,n.kt)("em",{parentName:"p"},"Request peer review")," button in the tracker."),(0,n.kt)("p",null,"You need to fill in the information about your public git repository and which branches the fixes are on. Make sure you are listed as Assignee."),(0,n.kt)("p",null,"This would be a good time to fill in the testing instructions (read the ",(0,n.kt)("a",{parentName:"p",href:"./process/testing/guide"},"instructions guide"),") for how to verify your fix is correct. You may also wish to add a comment in the bug."),(0,n.kt)("p",null,"Component leads should put issues, which affect code in their components, up for peer review to allow interested parties to provide feedback. However, if it is not reviewed in a week, a component lead may send the issue to integration. If integrators consider that the issue has not been given proper chance for peer review (for example is extremely large or complex) it can be decided to move the issue back in the process."),(0,n.kt)("p",null,"All other developers, including people who are component leads but working outside their component, should have their issues peer reviewed before they are sent to integration."),(0,n.kt)("h3",{id:"peer-review"},"Peer review"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/HQ_component_leads"},"HQ component leads")," should peer-review the change. If there is no component lead for an affected component, any other recognised developer may complete the peer review. The peer reviewer will either give you comments on the code and if it needs more work."),(0,n.kt)("p",null,"Process and the list of things to check are described in ",(0,n.kt)("a",{parentName:"p",href:"process/peer-review"},"Peer reviewing"),"."),(0,n.kt)("h3",{id:"submit-the-code-for-integration"},"Submit the code for integration"),(0,n.kt)("p",null,"The developer is responsible for acting on the feedback from the peer reviewer. If changes have been made and the developer is satisfied that this has accommodated the feedback from the peer reviewer, then the developer can submit the issue for integration. If there have been significant changes after the peer review, or if the peer reviewer has raised concerns about the approach taken, then the developer should offer the issue up for peer review again, most often to the same peer reviewer, but not necessarily."),(0,n.kt)("p",null,"Submitting an issue to integration is much the same as for any Moodle code. In some cases the Component Lead may perform a Component Lead Review instead of the integration team. See ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/integration-review"},"Integration Review")," and the information about the integration workflow above."),(0,n.kt)("h2",{id:"fixing-a-bug"},"Fixing a bug"),(0,n.kt)("p",null,"Bug fixes, and minor features or enhancements should go through the following process. (The only exception is English language string typo fixes or suggested improvements, which may be contributed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"en_fix")," language pack on the ",(0,n.kt)("a",{parentName:"p",href:"http://lang.moodle.org/"},"Moodle translation site"),".)"),(0,n.kt)("h3",{id:"make-sure-there-is-a-tracker-issue"},"Make sure there is a tracker issue"),(0,n.kt)("p",null,"Every change must have an issue in the tracker. If you are fixing a bug, there is probably one there already, but if not, create one. ",(0,n.kt)("a",{parentName:"p",href:"/devdocs/general/development/tracker/tips/"},"Tips for searching tracker"),"."),(0,n.kt)("h3",{id:"decide-which-branches-the-fix-is-required-on"},"Decide which branches the fix is required on"),(0,n.kt)("p",null,"Bugs should normally be fixed on all the supported stable branches that are affected. New features should just go into master, but sometimes minor enhancements are made on the most recent stable branch."),(0,n.kt)("h3",{id:"develop-your-change-using-git"},"Develop your change using git"),(0,n.kt)("p",null,"Develop your fix and push the change to an open git repository, for example on github.com. See also ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Git_for_developers"},"Git for developers")),(0,n.kt)("p",null,"It is essential that your code follows the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Coding"},"Moodle Coding Guide"),"."),(0,n.kt)("p",null,"You will need to push one commit for each branch the fix needs to be applied to. Often people use branch names like ",(0,n.kt)("inlineCode",{parentName:"p"},"MDL-12345-31_brief_name")," so it is clear what each branch is. ",(0,n.kt)("a",{parentName:"p",href:"http://kernel.org/pub/software/scm/git/docs/git-cherry-pick.html"},"git cherry-pick")," can help with replicating the fix onto different branches."),(0,n.kt)("p",null,"Consider setting up ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Travis_integration"},"Travis integration")," with your repository so tests will be automatically run for you whenever you push work on your fix."),(0,n.kt)("h3",{id:"submit-your-code-for-peer-review-1"},"Submit your code for peer review"),(0,n.kt)("p",null,"Once your fix is done, it should be submitted for a peer review."),(0,n.kt)("p",null,"The following information is necessary for this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Information about your public git repository",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"repository URL"),(0,n.kt)("li",{parentName:"ul"},"branch name(s)"),(0,n.kt)("li",{parentName:"ul"},"diff URL"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./process/testing/guide"},"Testing instructions")," for how to verify your fix is correct.\nIf you have never contributed to Moodle and don't see a button ",(0,n.kt)("em",{parentName:"li"},"Request peer review"),", just comment on the issue with the above information. The component lead or another user with sufficient privileges will then send the issue up for peer review for you.")),(0,n.kt)("p",null,"After your first fix is integrated you will be added to developers group and will be able to send issues for peer review yourself. In this case make sure you are listed as Assignee and click on ",(0,n.kt)("em",{parentName:"p"},"Request peer review")," button in the tracker."),(0,n.kt)("p",null,"If you've set up ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Travis_integration"},"Travis integration"),", the issue will automatically show the Travis build status for the branch(es) you've submitted for peer review."),(0,n.kt)("h3",{id:"peer-review-1"},"Peer review"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/HQ_component_leads"},"HQ component leads")," should peer-review the change. If there is no component lead for an affected component, any other recognised developer may complete the peer review. The peer reviewer will either give you comments on the code and if it needs more work."),(0,n.kt)("p",null,"Process and the list of things to check are described in ",(0,n.kt)("a",{parentName:"p",href:"process/peer-review"},"Peer reviewing"),"."),(0,n.kt)("h3",{id:"submit-your-code-for-integration"},"Submit your code for integration"),(0,n.kt)("p",null,"It will then be reviewed the following week by one of the integration team and either integrated or rejected. Once integrated, the fix will be tested, and then included in the next weekly release. For details see ",(0,n.kt)("a",{parentName:"p",href:"/general/development/process/integration-review"},"Integration Review"),"."),(0,n.kt)("h2",{id:"security-issues"},"Security issues"),(0,n.kt)("p",null,"Issues identified as ",(0,n.kt)("a",{parentName:"p",href:"/general/development/policies/security"},"security issues")," are resolved in a slightly different way, in order to achieve responsible disclosure as described in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_security_procedures"},"Moodle security procedures"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Security issues should be labelled as "Minor" or "Serious" in order control visibility of the issue.',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'An issue reported with a security level of "Could be a security issue" should be evaluated as soon as possible and either set as "Minor" or "Serious" or the security level should be set to "None".'))),(0,n.kt)("li",{parentName:"ul"},"Solutions to security issues should not:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"be made available in public repositories.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If a developer has shared a solution as Git branches via Github, they should be asked to provide the solutions as ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/How_to_create_a_patch"},"stand-alone patches")," attached to the issue and to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/#How_to_remove_a_branch_from_Github"},"remove the solution from Github"),"."))),(0,n.kt)("li",{parentName:"ul"},"contain details about the security problem in the commit message.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Instead use generic terms like, "improve", "better handling of"'))))),(0,n.kt)("li",{parentName:"ul"},"The solution will not be integrated until the week before a ",(0,n.kt)("a",{parentName:"li",href:"#Stable-maintenance-cycles"},"minor release")," following the normal ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Release_process"},"Release process"),". In short, the issue will be incorporated into the integration version, rebased, tested and made ready for release as a normal issue would, but not until as late as possible."),(0,n.kt)("li",{parentName:"ul"},"Details of security issues will be shared with registered admins with the minor release."),(0,n.kt)("li",{parentName:"ul"},"Details of security issues will not be publicly announced until one week after a minor release to allow admins to update.\nNote that not all the labelled (minor) security issues are always handled following the procedure above. It's possible that, after discussion, it's decided a given issue is not a real Moodle security problem (say external disclosures/potential attacks using Moodle as vector, not as target, discussions revealing some private details). Those issues will be processed as normal issues, generating the needed user documentation if necessary and will be part of the habitual weekly releases.")),(0,n.kt)("h3",{id:"how-to-remove-a-branch-from-github"},"How to remove a branch from Github"),(0,n.kt)("p",null,"To remove a branch from Github, you can use the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git push github :remote_branch\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"remote_branch")," is the name of your remote branch, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"wip-mdl-1234"),".\nThis effectively replaces the remote branch with nothing, removing the remote branch, but leaving the branch intact in your local Git repository. Please note that its likely that your commit will still exist on github due to the nature of git, so its best to avoid doing this in the first place."),(0,n.kt)("h2",{id:"policy-issues"},"Policy issues"),(0,n.kt)("p",null,"Occasionally within Moodle we run into policy issues where a high-level decision needs to be made about how things are to be done."),(0,n.kt)("p",null,"In these cases the process is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create an issue in the tracker with a ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL/component/12733"},"Policy component")," and put ",(0,n.kt)("inlineCode",{parentName:"li"},"POLICY:")," as a prefix on the summary."),(0,n.kt)("li",{parentName:"ul"},"In the description describe the problem clearly as well as all the options. If it's long then make a page here in Moodle Dev Docs and link to it."),(0,n.kt)("li",{parentName:"ul"},"Do not use this issue for code. If there are issues that depend on this policy decision, then add tracker links to them as dependencies."),(0,n.kt)("li",{parentName:"ul"},"Feel free to encourage people to come and talk about the policy to support various points of view. The more evidence we have (from everyone in the community) the better.\nSome time has been scheduled in the weekly Moodle HQ meeting to look at Policy issues and try to make decisions on them. We discuss all the evidence and try to achieve a high amount of consensus. Deadlocked issues can be resolved by a decision from Martin Dougiamas (this is rarely needed).")),(0,n.kt)("p",null,"Decisions will be posted on the issue and that issue will be closed, allowing any dependent issues to continue to integration (or not). Decisions are final and bribes hardly ever work."),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Release_process"},"Release process")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/general/development/policies/deprecation"},"Deprecation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11350"},"Integration dashboard"),"\nWalks-though of the process for contributors:"),(0,n.kt)("li",{parentName:"ul"},"By Dan Poltawski, Integrator: ",(0,n.kt)("a",{parentName:"li",href:"http://www.slideshare.net/poltawski/how-to-guarantee-your-change-is-integrated-to-moodle-core"},"http://www.slideshare.net/poltawski/how-to-guarantee-your-change-is-integrated-to-moodle-core"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=836WtnM2YpM"},"https://www.youtube.com/watch?v=836WtnM2YpM")),(0,n.kt)("li",{parentName:"ul"},"By Tim Hunt, contributor: ",(0,n.kt)("a",{parentName:"li",href:"http://tjhunt.blogspot.co.uk/2012/03/fixing-bug-in-moodle-core-mechanics.html"},"http://tjhunt.blogspot.co.uk/2012/03/fixing-bug-in-moodle-core-mechanics.html")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=gPPA3h7OGQU"},"https://www.youtube.com/watch?v=gPPA3h7OGQU")," and ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/Hu8ne0NCRAg?t=11659"},"https://youtu.be/Hu8ne0NCRAg?t=11659"))))}h.isMDXComponent=!0},9504:function(e,t,o){t.Z=o.p+"assets/images/sprintcalendar-7d42782e6376ee60a2113271beb3a810.png"},1617:function(e,t,o){t.Z=o.p+"assets/images/workflow-d2aa970195d7c87fd3291004672acdee.jpg"}}]);