"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[81373],{50981:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var l=t(83117),a=t(80102),r=(t(67294),t(3905)),s=t(13904),o=["components"],i={title:"Enrolment API",tags:["Enrolment","Library"]},u=void 0,d={unversionedId:"apis/subsystems/enrol",id:"apis/subsystems/enrol",title:"Enrolment API",description:"The enrolment API gives access to the enrolment methods and also to enrolment plugins instances.",source:"@site/docs/apis/subsystems/enrol.md",sourceDirName:"apis/subsystems",slug:"/apis/subsystems/enrol",permalink:"/devdocs/docs/apis/subsystems/enrol",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/enrol.md",tags:[{label:"Enrolment",permalink:"/devdocs/docs/tags/enrolment"},{label:"Library",permalink:"/devdocs/docs/tags/library"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654666245,formattedLastUpdatedAt:"08/06/2022",frontMatter:{title:"Enrolment API",tags:["Enrolment","Library"]},sidebar:"docs",previous:{title:"Analytics API",permalink:"/devdocs/docs/apis/subsystems/analytics/"},next:{title:"File API",permalink:"/devdocs/docs/apis/subsystems/files/"}},p={},m=[{value:"Difference between user enrolment and role assignment",id:"difference-between-user-enrolment-and-role-assignment",level:2},{value:"What is enrolment?",id:"what-is-enrolment",level:3},{value:"Unenrolment",id:"unenrolment",level:3},{value:"Enrolment status",id:"enrolment-status",level:3},{value:"Activity participation",id:"activity-participation",level:3},{value:"API functions",id:"api-functions",level:2},{value:"is_enrolled()",id:"is_enrolled",level:3},{value:"get_enrolled_users()",id:"get_enrolled_users",level:3},{value:"count_enrolled_users()",id:"count_enrolled_users",level:3},{value:"get_enrolled_sql()",id:"get_enrolled_sql",level:3},{value:"enrol_get_plugin(): enrol_plugin",id:"enrol_get_plugin-enrol_plugin",level:3},{value:"Enrolment plugin methods",id:"enrolment-plugin-methods",level:2},{value:"$enrol_plugin-&gt;enrol_user()",id:"enrol_plugin-enrol_user",level:3},{value:"$enrol_plugin-&gt;unenrol_user()",id:"enrol_plugin-unenrol_user",level:3},{value:"$enrol_plugin-&gt;update_user_enrol()",id:"enrol_plugin-update_user_enrol",level:3},{value:"$enrol_plugin-&gt;add_default_instance()",id:"enrol_plugin-add_default_instance",level:3},{value:"$enrol_plugin-&gt;delete_instance()",id:"enrol_plugin-delete_instance",level:3},{value:"See also",id:"see-also",level:2}],c={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,(0,l.Z)({frontMatter:i},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("p",null,"The enrolment API gives access to the enrolment methods and also to ",(0,r.kt)("a",{parentName:"p",href:"../plugintypes/enrol"},"enrolment plugins")," instances."),(0,r.kt)("h2",{id:"difference-between-user-enrolment-and-role-assignment"},"Difference between user enrolment and role assignment"),(0,r.kt)("p",null,"Users enrolled in a course have at least one record in ",(0,r.kt)("inlineCode",{parentName:"p"},"user_enrolments")," table. This table has the relation between courses and users ",(0,r.kt)("strong",{parentName:"p"},"through an enrolment plugin instance"),". However, ",(0,r.kt)("inlineCode",{parentName:"p"},"user_enrolments")," does not contain information about the user role in the course, only information about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enrolment plugin instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enrolment status")," (active or suspended)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enrolment Start and end dates"),".")),(0,r.kt)("p",null,"The specific role assignments are related to the context, not only to course (as activities and other pages can use its own). The specific roles of a user are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"role_assignments")," table. This table stores:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"user role id")," in the ",(0,r.kt)("strong",{parentName:"li"},"context")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"component item")," that assigned the role. In the case of a regular course, the ",(0,r.kt)("em",{parentName:"li"},"component")," is the name of the enrolment plugin and the ",(0,r.kt)("em",{parentName:"li"},"item id")," is the specific plugin instance.")),(0,r.kt)("h3",{id:"what-is-enrolment"},"What is enrolment?"),(0,r.kt)("p",null,"Enrolled users may fully participate in a course. Active user enrolment allows user to enter course. Only enrolled users may be group members. Grades are stored only for enrolled users."),(0,r.kt)("h3",{id:"unenrolment"},"Unenrolment"),(0,r.kt)("p",null,"Unenrolment is irreversible operation that purges user participation information. Full unenrolment is suitable only if you do not need to preserve all course participation information including user grades."),(0,r.kt)("h3",{id:"enrolment-status"},"Enrolment status"),(0,r.kt)("p",null,"Instead of full unenrolment it is usually better to only ",(0,r.kt)("em",{parentName:"p"},"suspend")," user enrolment. If there are other ways to enter the course (such guest access) it is recommended to remove user roles at the same time."),(0,r.kt)("p",null,"Enrolments have two states defined by two constants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENROL_USER_ACTIVE")," the enrolment is active"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENROL_USER_SUSPENDED")," the enrolment is suspended")),(0,r.kt)("h3",{id:"activity-participation"},"Activity participation"),(0,r.kt)("p",null,"Activity developers decide the enrolment related behaviour of module."),(0,r.kt)("p",null,"There are some general guidelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only users with active enrolments should receive notifications."),(0,r.kt)("li",{parentName:"ul"},"Activities should display enrolled users with some capability as participants."),(0,r.kt)("li",{parentName:"ul"},"By default only users with active enrolments should be displayed in reports."),(0,r.kt)("li",{parentName:"ul"},"There should be option to display all enrolled users including suspended enrolments."),(0,r.kt)("li",{parentName:"ul"},"For performance reasons invisible participation data should be purged on unenrolment."),(0,r.kt)("li",{parentName:"ul"},"Contributions visible by other participants should be kept after unenrolment (such as forum posts).")),(0,r.kt)("h2",{id:"api-functions"},"API functions"),(0,r.kt)("h3",{id:"is_enrolled"},"is_enrolled()"),(0,r.kt)("p",null,"Use this method to determine if a user is enrolled into a course. This method returns true for students and teachers, but false for administrators and other managers."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"User enrolments can be either active or suspended, suspended users can not enter the course (unless there is some kind of guest access allowed or have ",(0,r.kt)("inlineCode",{parentName:"p"},"moodle/course:view")," capability) and are usually hidden in the UI."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"function is_enrolled(\n    context $context,\n    stdClass $user = null,\n    string $withcapability = '',\n    bool $onlyactive = false\n)\n")),(0,r.kt)("p",null,"Good example is choice module where we have one slot for each participant, people that are not enrolled are not allowed to vote ",(0,r.kt)("inlineCode",{parentName:"p"},"is_enrolled($context, $USER, 'mod/choice:choose')"),". Another example is assignment where users need to be enrolled and have capability to submit assignments ",(0,r.kt)("inlineCode",{parentName:"p"},"is_enrolled($this->context, $USER, 'mod/assignment:submit')"),"."),(0,r.kt)("h3",{id:"get_enrolled_users"},"get_enrolled_users()"),(0,r.kt)("p",null,"Returns the list of enrolled users. This method allows to filter the result by capability, pagination or state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"function get_enrolled_users(\n    context $context,\n    string $withcapability = '',\n    int $groupid = 0,\n    string $userfields = 'u.*',\n    ?string $orderby = null,\n    int $limitfrom = 0,\n    int $limitnum = 0,\n    bool $onlyactive = false\n)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"View example"),(0,r.kt)("div",null,(0,r.kt)("p",null,"Get all users who are able to summit an assignment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$submissioncandidates = get_enrolled_users($modcontext, 'mod/assignment:submit');\n")))),(0,r.kt)("h3",{id:"count_enrolled_users"},"count_enrolled_users()"),(0,r.kt)("p",null,"This method is used to get the total count of enrolments of a context. As ",(0,r.kt)("inlineCode",{parentName:"p"},"get_enrolled_users")," this methods allow several filters like capability, group id or counting only active enrollments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"function count_enrolled_users(\n    context $context,\n    string $withcapability = '',\n    int $groupid = 0,\n    bool $onlyactive = false\n)\n")),(0,r.kt)("h3",{id:"get_enrolled_sql"},"get_enrolled_sql()"),(0,r.kt)("p",null,"SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"select from get_enrolled_sql()")," is often used for performance reasons as it can be used in joins to get specific information for enrolled users only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"function get_enrolled_sql(\n    context $context,\n    string $withcapability = '',\n    int $groupid = 0,\n    bool $onlyactive = false,\n    bool $onlysuspended,\n    int $enrolid = 0\n)\n")),(0,r.kt)("h3",{id:"enrol_get_plugin-enrol_plugin"},"enrol_get_plugin(): enrol_plugin"),(0,r.kt)("p",null,"Returns the enrolment plugin base class with the given name."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"View example"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$instance = $DB->get_record('enrol', ['courseid' => $course->id, 'enrol' => 'manual'])\n$enrolplugin = enrol_get_plugin($instance->enrol);\n$enrolplugin->enrol_user($instance, $user->id, $role->id, $timestart, $timeend);\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As can be seen in the example, to use the plugin enrol_user and unenrol_user methods you need to get the instance record of the plugin first."))))),(0,r.kt)("h2",{id:"enrolment-plugin-methods"},"Enrolment plugin methods"),(0,r.kt)("p",null,"Once you use ",(0,r.kt)("inlineCode",{parentName:"p"},"enrol_get_plugin")," function to get the enrolment plugin instance, you can use that class to modify the enrolments."),(0,r.kt)("h3",{id:"enrol_plugin-enrol_user"},"$enrol_plugin->enrol_user()"),(0,r.kt)("p",null,"Using this method you can enrol a user into a course."),(0,r.kt)("p",null,"The method takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enrol plugin instance record"),(0,r.kt)("li",{parentName:"ul"},"User id"),(0,r.kt)("li",{parentName:"ul"},"Role id"),(0,r.kt)("li",{parentName:"ul"},"Optional enrolment start and end timestamps"),(0,r.kt)("li",{parentName:"ul"},"Optional enrolment status (ENROL_USER_ACTIVE or ENROL_USER_SUSPENDED)"),(0,r.kt)("li",{parentName:"ul"},"If the enrol must try to recover the previous user enrolment grades (if any)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$enrolplugin->enrol_user($instance, $user->id, $role->id, $timestart, $timeend, ENROL_USER_ACTIVE);\n")),(0,r.kt)("h3",{id:"enrol_plugin-unenrol_user"},"$enrol_plugin->unenrol_user()"),(0,r.kt)("p",null,"Unenrol a user from a course enrolment method."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Other enrolment methods can define other roles to the same user."))),(0,r.kt)("p",null,"The method takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enrol plugin instance record"),(0,r.kt)("li",{parentName:"ul"},"User id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$enrolplugin->unenrol_user($instance, $user->id);\n")),(0,r.kt)("h3",{id:"enrol_plugin-update_user_enrol"},"$enrol_plugin->update_user_enrol()"),(0,r.kt)("p",null,"Updates a user enrolment ",(0,r.kt)("strong",{parentName:"p"},"status")," and the ",(0,r.kt)("strong",{parentName:"p"},"start or end dates"),"."),(0,r.kt)("p",null,"The method takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enrol plugin instance record"),(0,r.kt)("li",{parentName:"ul"},"User id"),(0,r.kt)("li",{parentName:"ul"},"Optional enrolment start and end timestamps"),(0,r.kt)("li",{parentName:"ul"},"Optional enrolment status (ENROL_USER_ACTIVE or ENROL_USER_SUSPENDED)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$enrolplugin->update_user_enrol($instance, $user->id, $timestart, $timeend, ENROL_USER_SUSPENDED);\n")),(0,r.kt)("h3",{id:"enrol_plugin-add_default_instance"},"$enrol_plugin->add_default_instance()"),(0,r.kt)("p",null,"Add a new enrolment instance to a specific course an returns the instance id. This method will create a new instance record in the ",(0,r.kt)("inlineCode",{parentName:"p"},"enrol")," table with the default values."),(0,r.kt)("p",null,"The method takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Course id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$enrolplugin->add_default_instance($course->id);\n")),(0,r.kt)("h3",{id:"enrol_plugin-delete_instance"},"$enrol_plugin->delete_instance()"),(0,r.kt)("p",null,"Remove an enrolment instance form a course and invalidate all related user enrolments."),(0,r.kt)("p",null,"The method takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enrol plugin instance record")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$enrolplugin->delete_instance($instance);\n")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../plugintypes/enrol"},"Enrolment plugins"))))}h.isMDXComponent=!0}}]);