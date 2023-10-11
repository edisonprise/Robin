let Submit_Group_3 = document.getElementById("Submit_Group");

Submit_Group_3.addEventListener("click", Submit_Group_3_Function);

function Submit_Group_3_Function() {
  let team1_values = document.querySelectorAll("._value")[0];
  let team2_values = document.querySelectorAll("._value")[2];
  let team3_values = document.querySelectorAll("._value")[8];
  let team4_values = document.querySelectorAll("._value")[10];

  let team1_input = document.querySelectorAll(".Team_Name")[0];
  let team2_input = document.querySelectorAll(".Team_Name")[3];
  let team3_input = document.querySelectorAll(".Team_Name")[2];
  let team4_input = document.querySelectorAll(".Team_Name")[1];

  team1_input.textContent = team1_values.textContent;
  team2_input.textContent = team2_values.textContent;
  team3_input.textContent = team3_values.textContent;
  team4_input.textContent = team4_values.textContent;
  console.log(team1_input);

  let team1_bracket = document.querySelectorAll(".bracket_names")[0];
  let team2_bracket = document.querySelectorAll(".bracket_names")[1];
  let team3_bracket = document.querySelectorAll(".bracket_names")[2];
  let team4_bracket = document.querySelectorAll(".bracket_names")[3];

  let team1_input_forBracket = document.querySelectorAll(".Team_Name")[0];
  let team2_input_forBracket = document.querySelectorAll(".Team_Name")[1];
  let team3_input_forBracket = document.querySelectorAll(".Team_Name")[2];
  let team4_input_forBracket = document.querySelectorAll(".Team_Name")[3];

  team1_bracket.textContent = team1_input_forBracket.textContent;
  team2_bracket.textContent = team2_input_forBracket.textContent;
  team3_bracket.textContent = team3_input_forBracket.textContent;
  team4_bracket.textContent = team4_input_forBracket.textContent;
}

let submit_semi = document.getElementById("submit_semi");

submit_semi.addEventListener("click", submit_semi_Function);

function submit_semi_Function() {
  let team1_input = document.querySelectorAll(".Team_Name")[0];
  let team2_input = document.querySelectorAll(".Team_Name")[1];
  let team3_input = document.querySelectorAll(".Team_Name")[2];
  let team4_input = document.querySelectorAll(".Team_Name")[3];

  let Result1 = parseInt(document.querySelectorAll(".result_class")[0].value);
  let Result2 = parseInt(document.querySelectorAll(".result_class")[1].value);
  let Result3 = parseInt(document.querySelectorAll(".result_class")[2].value);
  let Result4 = parseInt(document.querySelectorAll(".result_class")[3].value);

  let team_finals_input1 = document.querySelectorAll(".Team_Name2")[0];
  let team_finals_input2 = document.querySelectorAll(".Team_Name2")[1];
  /* let Result_finals_1 = document.querySelectorAll(".result_class")[0].value;
let Result_finals_2 = document.querySelectorAll(".result_class")[1].value; */

  /*-------------------------------------------------------------*/

  let team1_bracket_forbracket = document.querySelectorAll(".Team_Name")[0];
  let team2_bracket_forbracket = document.querySelectorAll(".Team_Name")[1];
  let team3_bracket_forbracket = document.querySelectorAll(".Team_Name")[2];
  let team4_bracket_forbracket = document.querySelectorAll(".Team_Name")[3];

  let team1_bracket = document.querySelectorAll(".bracket_names_2")[0];
  let team2_bracket = document.querySelectorAll(".bracket_names_2")[1];

  let team1_bracket_semi = document.querySelectorAll(".bracket_names")[0];
  let team2_bracket_semi = document.querySelectorAll(".bracket_names")[1];
  let team3_bracket_semi = document.querySelectorAll(".bracket_names")[2];
  let team4_bracket_semi = document.querySelectorAll(".bracket_names")[3];

  let result_01_semi = document.getElementById("result_G1_1");
  let result_02_semi = document.getElementById("result_G2_2");
  let result_03_semi = document.getElementById("result_G2_1");
  let result_04_semi = document.getElementById("result_G1_2");

  let team_input_bracket1 = document.querySelectorAll(".bracket_Input")[0];
  let team_input_bracket2 = document.querySelectorAll(".bracket_Input")[1];
  let team_input_bracket3 = document.querySelectorAll(".bracket_Input")[2];
  let team_input_bracket4 = document.querySelectorAll(".bracket_Input")[3];

  team_input_bracket1.textContent = result_01_semi.value;
  team_input_bracket2.textContent = result_02_semi.value;
  team_input_bracket3.textContent = result_03_semi.value;
  team_input_bracket4.textContent = result_04_semi.value;
  //////////////////////////////////////////////////////////////////////////////
  if (Result1 > Result2) {
    team_finals_input1.textContent = team1_input.textContent;

    team1_bracket.textContent = team1_bracket_forbracket.textContent;
    team1_bracket_semi.className = "bracket_names winner";
    team2_bracket_semi.className = "bracket_names";
  } else if (Result1 < Result2) {
    team_finals_input1.textContent = team2_input.textContent;

    team1_bracket.textContent = team2_bracket_forbracket.textContent;
    team2_bracket_semi.className = "bracket_names winner";
    team1_bracket_semi.className = "bracket_names";
  } else if (Result1 === Result2) {
    team_finals_input1.textContent = "Winner Match 1";

    team1_bracket.textContent = "Winner Match 1";
    team2_bracket_semi.className = "bracket_names";
    team1_bracket_semi.className = "bracket_names";
  }

  if (Result3 > Result4) {
    team_finals_input2.textContent = team3_input.textContent;

    team2_bracket.textContent = team3_bracket_forbracket.textContent;
    team3_bracket_semi.className = "bracket_names winner";
    team4_bracket_semi.className = "bracket_names";
  } else if (Result3 < Result4) {
    team_finals_input2.textContent = team4_input.textContent;

    team2_bracket.textContent = team4_bracket_forbracket.textContent;
    team4_bracket_semi.className = "bracket_names winner";
    team3_bracket_semi.className = "bracket_names";
  } else if (Result3 === Result4) {
    team_finals_input2.textContent = "Winner Match 2";

    team2_bracket.textContent = "Winner Match 2";
    team3_bracket_semi.className = "bracket_names";
    team4_bracket_semi.className = "bracket_names";
  }
}

let submit_finals = document.getElementById("submit_finals");

submit_finals.addEventListener("click", submit_finals_Function);

function submit_finals_Function() {
  /*Top*/
  let team_finals1 = document.getElementsByClassName("Team_Name2")[0];
  let team_finals2 = document.getElementsByClassName("Team_Name2")[1];

  let team_finals_result1 =
    document.getElementsByClassName("result_class2")[0].value;
  let team_finals_result2 =
    document.getElementsByClassName("result_class2")[1].value;

  /*Bottom*/
  let team_finals_name_bracket1 =
    document.getElementsByClassName("bracket_names_2")[0];
  let team_finals_name_bracket2 =
    document.getElementsByClassName("bracket_names_2")[1];

  let team_finals_result_bracket1 =
    document.getElementsByClassName("bracket_Input_2")[0];
  let team_finals_result_bracket2 =
    document.getElementsByClassName("bracket_Input_2")[1];

  /*Final Box*/

  let finals_object = document.getElementsByClassName("bracket_names_3")[0];

  team_finals_result_bracket1.textContent = team_finals_result1;
  team_finals_result_bracket2.textContent = team_finals_result2;

  if (team_finals_result1 > team_finals_result2) {
    finals_object.textContent = team_finals1.textContent;

    team_finals_name_bracket1.className = "bracket_names_2 winner";
    team_finals_name_bracket2.className = "bracket_names_2";

    finals_object.className = "bracket_names_3 winner_gold";
  } else if (team_finals_result1 < team_finals_result2) {
    finals_object.textContent = team_finals2.textContent;

    team_finals_name_bracket1.className = "bracket_names_2";
    team_finals_name_bracket2.className = "bracket_names_2 winner";

    finals_object.className = "bracket_names_3 winner_gold";
  } else if (team_finals_result1 === team_finals_result2) {
    finals_object.textContent = "Winner Finals";

    team_finals_name_bracket1.className = "bracket_names_2";
    team_finals_name_bracket2.className = "bracket_names_2";

    finals_object.className = "bracket_names_3";
  }
}

/* function Submit_Group_3_Function() {
  let matchresults = [];

  let homeResult = document.querySelectorAll("#Group_1_Home_");
  let awayResult = document.querySelectorAll("#Group_1_Away_");
  let Team1_Group_1_Values = [
    {
      name: Group_1[0],
      M1: [homeResult[0].value, awayResult[0].value],
      M2: [homeResult[2].value, awayResult[2].value],
      M3: [homeResult[4].value, awayResult[4].value],
    },

    {
      name: Group_1[1],
      M1: [awayResult[0].value, homeResult[0].value],
      M2: [homeResult[3].value, awayResult[3].value],
      M3: [homeResult[5].value, awayResult[5].value],
    },
    {
      name: Group_1[2],
      M1: [homeResult[1].value, awayResult[1].value],
      M2: [awayResult[2].value, homeResult[2].value],
      M3: [awayResult[5].value, homeResult[5].value],
    },
    {
      name: Group_1[3],
      M1: [awayResult[1].value, homeResult[1].value],
      M2: [awayResult[3].value, homeResult[3].value],
      M3: [awayResult[4].value, homeResult[4].value],
    },
  ];
  //console.log(Team1_Group_1_Values);

  let myTable = [];

  for (let i = 0; i < 4; i++) {
    let teamName = Team1_Group_1_Values[i].name;
    let result1 = Team1_Group_1_Values[i].M1;
    let result2 = Team1_Group_1_Values[i].M2;
    let result3 = Team1_Group_1_Values[i].M3;

    let point_counter = [];

    if (result1[0] > result1[1]) {
      point_counter[0] = 3;
    } else if (result1[0] < result1[1]) {
      point_counter[0] = 0;
    } else if (result1[0] === result1[1]) {
      point_counter[0] = 1;
    }

    if (result2[0] > result2[1]) {
      point_counter[1] = 3;
    } else if (result2[0] < result2[1]) {
      point_counter[1] = 0;
    } else if (result2[0] === result2[1]) {
      point_counter[1] = 1;
    }

    if (result3[0] > result3[1]) {
      point_counter[2] = 3;
    } else if (result3[0] < result3[1]) {
      point_counter[2] = 0;
    } else if (result3[0] === result3[1]) {
      point_counter[2] = 1;
    }

    let total_points = point_counter.reduce((a, b) => a + b, 0);
    myTable[i] = { teamName, total_points };
  }
  let All_Matches_Sort = myTable.sort(
    (firstItem, secondItem) => secondItem.total_points - firstItem.total_points
  );

  console.log(All_Matches_Sort);
  let container = document.getElementById("standingGroup1");
  container.innerHTML = "";

  let div_grid = document.createElement("div");
  div_grid.className = "Grid_Groupstage";

  let myheaderteamname = document.createElement("div");
  myheaderteamname.textContent = "Team Name";
  myheaderteamname.className = "Header";

  let myheaderteamPoint = document.createElement("div");
  myheaderteamPoint.textContent = "Points";
  myheaderteamPoint.className = "Header";

  container.append(div_grid);

  div_grid.append(myheaderteamname);
  div_grid.append(myheaderteamPoint);

  for (let x = 0; x < 4; x++) {
    let div_grid_ = document.createElement("div");
    div_grid_.className = "Grid_Groupstage";

    let myheaderteamname_ = document.createElement("div");
    myheaderteamname_.textContent = All_Matches_Sort[x].teamName;
    myheaderteamname_.className = "_value";

    let myheaderteamPoint_ = document.createElement("div");
    myheaderteamPoint_.textContent = All_Matches_Sort[x].total_points;
    myheaderteamPoint_.className = "_value";

    container.append(div_grid_);

    div_grid_.append(myheaderteamname_);
    div_grid_.append(myheaderteamPoint_);
  }
} */
