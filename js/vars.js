var defaultClassChoice="NaN";
var defaultDeptChoice="NaN";
var file_contents=[];
var file_contents=init(file_contents);
var currentDropDownID="NaN";
var currentDropDown= "NaN";
var studentList = {};
var classList={};
var myData={};
var  dropDown_dept =[];
var dropDown_class=[];
var dept_Codes={};

myData["myDDropDown"]=dropDown_dept;
myData["myCDropDown"]=dropDown_class;
myData["dept_Codes"]=dept_Codes;
myData["classList"]=classList;
myData["studentList"]=studentList;

function init(file_contents){

  var tempVar={
    "Name": "David",
    "Year": "Sophomore",
    "Quarter":"Fall",
    "Major": "Fucking Nerd",
    "Classes":
      [{"Dept":"ICS","Code":"5"},
        {"Dept":"Film","Code":"85A"},
          {"Dept":"Econ","Code":"20B"}
        ]
      };
  file_contents["b1"]=tempVar;
  file_contents["b2"]={
    "Name": "Gary",
    "Year": "Senior",
    "Quarter":"Fall",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"CS","Code":"161"},
        {"Dept":"Inf","Code":"122"},
          {"Dept":"Math","Code":"2B"},
            {"Dept":"ICS","Code":"46"}
          ]
        };
  file_contents["b3"]={
    "Name": "Jonathan",
    "Year": "Senior",
    "Quarter":"Fall",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"ICS","Code":"31"},
        {"Dept":"Inf","Code":"43"},
          {"Dept":"Math","Code":"2A"},
            {"Dept":"ICS","Code":"45J"}
          ]
        };
  file_contents["b4"]={
    "Name": "Jonathan",
    "Year": "Senior",
    "Quarter":"Winter",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"ICS","Code":"32"},
        {"Dept":"Inf","Code":"121"},
          {"Dept":"Math","Code":"2B"},
            {"Dept":"ICS","Code":"45C"}
          ]
        };
  file_contents["b5"]={
    "Name": "Max",
    "Year": "Freshman",
    "Quarter":"Winter",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"Writing","Code":"30"},
        {"Dept":"Inf","Code":"43"},
          {"Dept":"ICS","Code":"45C"}
        ]
      };
  file_contents["b6"]={
    "Name": "Max",
    "Year": "Freshman",
    "Quarter":"Winter",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"ICS","Code":"33"},
        {"Dept":"Inf","Code":"122"},
          {"Dept":"Math","Code":"2B"},
            {"Dept":"ICS","Code":"46"}
          ]
        };
  file_contents["b7"]={
    "Name": "Vedang",
    "Year": "Freshman",
    "Quarter":"Fall",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"Bio","Code":"36A"},
        {"Dept":"Rel Std","Code":"5A"},
          {"Dept":"Soc","Code":"56A"},
            {"Dept":"Stats","Code":"10"}
          ]
        };
  file_contents["b8"]={
    "Name": "Vedang",
    "Year": "Freshman",
    "Quarter":"Fall",
    "Major": "Computer Science",
    "Classes":
      [{"Dept":"ICS","Code":"32"},
        {"Dept":"Inf","Code":"122"},
          {"Dept":"CS","Code":"132"},
            {"Dept":"ICS","Code":"45C"}
          ]
        };
  return file_contents;
}
