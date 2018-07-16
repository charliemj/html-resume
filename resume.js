var myName = "Charlie J. Moore";
var subtitle = "Software Engineer | Writer";
var myWebsite = "www.charlie.codes";
var myPhone = "617-388-8354";
var myEmail = "moorejchar@gmail.com";
var myGitHub = "charliemj";
var degree = "B.S. in Computer Science and Engineering and Comparative Media Studies";
var coursework = "Coursework in software engineering, user interface design, algorithms, + media studies.";

$(document).ready(function(){

    $("#myname").append(myName);
    $(".subtitle").append(subtitle);
    $("#website").append(myWebsite);
    $("#myEmail").append(myEmail);
    $("#myPhone").append(myPhone);
    $("#github").append(myGitHub);
    $("#degree").append(degree);
    $("#coursework").append(coursework);
    makeExpBlock(experiences);
    makeProjectsBlock(projects);
    //leadershipExp = buildLeadershipBlocks();
    //$("section #leadership").append(leadershipExp);

    //projectExp = buildProjectBlocks();
    //$("section #projects").append(projectExp);

});

//details is a list of strings where each string
//will be an <li>

//FORMAT
// <section class="blocks">
//   <div class="date">
//     <span class="startdate"></span><span class="enddate"></span>
//   </div>
//   <div class="decorator">
//   </div>
//   <div class="details">
//     <header>
//       <h3 class="positiontitle"></h3>
//       <span class="place"></span>
//       <span class="location"></span>
//     </header>
//     <div>
//       <ul class="positiondetails">
//       </ul>
//       </div>
//   </div>
// </section>

// blocks is a list of content lists
// content = [startDate, endDate, positionTitle, company, location, details]
var makeExpBlock = function(blocks){
    var i;
    for(i=0; i < blocks.length; i++){
        exp = blocks[i];
        var startDate = exp[0];
        var endDate = exp[1];
        var positionTitle = exp[2];
        var company = exp[3];
        var location = exp[4];
        var details = exp[5];

        var detailsLI = makeDetailsLI(details);

        var result = `<section class="blocks">
          <div class="date">
            <span class="startdate">`+startDate+`</span><span class="enddate">`+endDate+`</span>
          </div>
          <div class="decorator">
          </div>
          <div class="details">
            <header>
              <h3 class="positiontitle">`+positionTitle+`</h3>
              <span class="place">`+company+`</span>
              <span class="location">`+location+`</span>
            </header>
            <div>
              <ul class="positiondetails">`+detailsLI+`
              </ul>
              </div>
          </div>
        </section>`;

        $("#leadership").append(result);

    }
};


var makeDetailsLI = function(details){
    var i;
    var result = "";
    for(i=0; i < details.length; i++){
        var detailLI = "<li>" + details[i] + "</li>";
        result += detailLI;
    }
    return result;
};


// blocks is a list of content lists
// content = [startDate, endDate, projectTitle, company, location, details]
var makeProjectsBlock = function(blocks){
    var i;
    for(i=0; i < blocks.length; i++){
        exp = blocks[i];
        var startDate = exp[0];
        var endDate = exp[1];
        var projectTitle = exp[2];
        var company = exp[3];
        var location = exp[4];
        var details = exp[5];

        var detailsLI = makeDetailsLI(details);

        var resultWithEnd = `<section class="blocks">
          <div class="date">
            <span class="startdate">`+startDate+`</span><span class="enddate">`+endDate+`</span>
          </div>
          <div class="decorator">
          </div>
          <div class="details">
            <header>
              <h3 class="positiontitle">`+projectTitle+`</h3>
              <span class="place">`+company+`</span>
              <span class="location">`+location+`</span>
            </header>
            <div>
              <ul class="positiondetails">`+detailsLI+`
              </ul>
              </div>
          </div>
        </section>`;

        var resultNoEnd = `<section class="blocks">
          <div class="date">
            <span class="startdate">`+startDate+`</span>
          </div>
          <div class="decorator">
          </div>
          <div class="details">
            <header>
              <h3 class="positiontitle">`+projectTitle+`</h3>
              <span class="place">`+company+`</span>
              <span class="location">`+location+`</span>
            </header>
            <div>
              <ul class="positiondetails">`+detailsLI+`
              </ul>
              </div>
          </div>
        </section>`;
        var result;
        if(endDate===""){
            result = resultNoEnd;
        }
        else{
            result = resultWithEnd;
        }

        $("#projects").append(result);

    }
    //https://api.jquery.com/eq-selector/
    //keep track of index
};

//Experience
var a = ["Sept. 2017", "Present", "Chairman", "The Tech (MIT student newspaper)", "Cambridge, MA", ["Oversees the operations of the newspaper and its staff of ~130. Directly manages a staff of 14 departments and ~20 editors as the paper's Chief Executive Officer.","Led recruitment efforts that increased The Tech's staff size by 30% in 2017.","Launched an advertisement and marketing initiative that increased our 2017 revenue by more than 40%."]];
var b = ["Sept. 2017", "May 2018", "Teaching Assistant for 6.009 Fundamentals of Programming", "Electrical Engineering and Computer Science Department, MIT","Cambridge, MA", ["Held ~15 office hours a week to help and provide feedback to students on weekly programming assignments in Python.", "Coordinated schedules for staffing hours for ~60 lab and teaching assistants."]];
var c = ["Sept. 2013","Sept. 2017", "News Editor (former Senior Editor, Arts Editor)", "The Tech (MIT student newspaper)", "Cambridge, MA",["Edited writing of ~15 writers to publish ~5 articles per week, reaching ~21,000 readers.", "Led meetings, recruited, and trained new writers and editors."]];
var d = ["June 2017", "July 2017", "Youth and Media + Artificial Intelligence Research Intern (Team Lead)", "Harvard Berkman Klein Center for Internet + Society", "Cambridge, MA", ["Designed educational materials about AI topics intended for non-technical audiences."]];
var e = ["Mar. 2016", "Aug. 2016", "Math and Science Writing Intern", "Brilliant.org (STEM education startup with 4 million users)", "Worked remotely", ["Wrote 60+ educational computer science wiki pages and practice problems used by students of all ages.", "Provided feedback and peer reviewed other writers’ pages on a weekly basis."]];

var experiences = [a,b,c,d,e];

//Projects

var z = ["Jan. 2018", "Present", "Google Drive-based college newsroom software toolkit", "The Tech (MIT student newspaper)", "Cambridge, MA", ["Automating creation of files/folders/documents central to newsroom workflow.","Implementing a light-weight Google Drive based invoicing and bookkeeping system.","Using Google's Drive/Sheets/Docs APIs and JavaScript/HTML/CSS."]];
var y = ["Spring 2017", "", "EatSafe", "User Interface Design and Implementation 6.813 Project (team of 4)", "MIT", ["Designed a functioning front-end UI for a recipe conversion app for users with food allergies.", "Wrote front-end code using JavaScript/jQuery, HTML, and CSS.", "Focused design on usability, learnability, safety, accessibility, and other design principles.", "Conducted multiple rounds of prototyping and user testing."]];
var x = ["Jan. 2017", "", "Scheduler WebApp for Pax Populi", "Code for Good 6.S187 Project (team of 4)", "MIT", ["Worked with an education non-profit Pax Populi to build a scheduling web app to create user profiles and schedule tutor-student video calls.", "Wrote server-side code using Node.js, MongoDB, and Express.js, and client-side code using Angular.js, Handlebars, HTML, and CSS."]];
var w = ["Fall 2017", "", "StitchHub","6.170 Software Studio Final Project (team of 4)", "MIT", ["Used Node.js, Express.js, JavaScript, MongoDB, and HTML/CSS to create a web app for designing and sharing knitting patterns."]];

var projects = [z,y,x,w];

// content = [skill-category, skills_li, icon]
var makeSkillsBlock = function(content){};

//I didn't mind updating the HTML for these because there wasn't a ton of nesting or special formatting
// var softwareSkillsExperienced = [];
// var softwareSkillsFamiliar = [];
// var designSkills = [];
// var communicationSkills = [];

//var addSkills = function(skill){};


