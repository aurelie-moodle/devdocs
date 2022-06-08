"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[46375],{51305:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),l=["components"],i={title:"Moodle 2.9.4",tags:["Release notes","Moodle 2.9"],sidebar_position:4,moodleVersion:"2.9.4"},d=void 0,m={unversionedId:"releases/2.9/2.9.4",id:"releases/2.9/2.9.4",title:"Moodle 2.9.4",description:"Release date: 11 January 2016",source:"@site/general/releases/2.9/2.9.4.md",sourceDirName:"releases/2.9",slug:"/releases/2.9/2.9.4",permalink:"/devdocs/general/releases/2.9/2.9.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.9/2.9.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.9",permalink:"/devdocs/general/tags/moodle-2-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654666245,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.9.4",tags:["Release notes","Moodle 2.9"],sidebar_position:4,moodleVersion:"2.9.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.9.3",permalink:"/devdocs/general/releases/2.9/2.9.3"},next:{title:"Moodle 2.9.5",permalink:"/devdocs/general/releases/2.9/2.9.5"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 11 January 2016"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.9.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.9.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44330"},"MDL-44330")," - When using assignment grading in several tabs the links to individual students grades work correctly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37834"},"MDL-37834")," - Excel can be used to edit the assignment offline grading worksheet"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49473"},"MDL-49473")," - Logs export contains year"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52078"},"MDL-52078")," - Fixed error in grade totals when using natural grading and excluding hidden items that appeared only when viewed by students")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=326205"},"MSA-16-0001")," Two enrolment-related web services don't check course visibility"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=326206"},"MSA-16-0002")," XSS Vulnerability in course management search")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40245"},"MDL-40245")," - Downloading all assignment submissions no longer fails due to 30 second execution time out"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52354"},"MDL-52354"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52355"},"MDL-52355")," - Database module now allows to set dates in a broader range and respects calendar type plugin"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42571"},"MDL-42571")," - Edit PDF: Fixed bug with viewing a second PDF on the assignment grading page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43069"},"MDL-43069"),' - Assignment grading: "Submission comments" fail to expand if you hide the "file submissions" column'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37308"},"MDL-37308")," - Uploaded PNG images preserve transparency when resized"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49490"},"MDL-49490")," - Fixed export to portfolio link in assignment with additional files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51257"},"MDL-51257")," - Messaging screen now indicates when a message is not sent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52194"},"MDL-52194")," - Fixed Flowplayer not working with insecure configuration of request_order")),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51582"},"MDL-51582")," - Switch to grunt to compile LESS as recess is no longer maintained")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.9.4"},"Notes de mise \xe0 jour de Moodle 2.9.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.9.4"},"Notas de Moodle 2.9.4"))))}g.isMDXComponent=!0}}]);