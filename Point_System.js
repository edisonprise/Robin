let Submit_Group = document.getElementById("Submit_Group");

Submit_Group.addEventListener("click", Submit_Group_Function);

function Submit_Group_Function() {
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
}
///////////////////////////////////////////////////////////////////////
let Submit_Group_2 = document.getElementById("Submit_Group");

Submit_Group_2.addEventListener("click", Submit_Group_Function_2);

function Submit_Group_Function_2() {
  let matchresults = [];

  let homeResult = document.querySelectorAll("#Group_2_Home_");
  let awayResult = document.querySelectorAll("#Group_2_Away_");
  let Team1_Group_1_Values = [
    {
      name: Group_2[0],
      M1: [homeResult[0].value, awayResult[0].value],
      M2: [homeResult[2].value, awayResult[2].value],
      M3: [homeResult[4].value, awayResult[4].value],
    },

    {
      name: Group_2[1],
      M1: [awayResult[0].value, homeResult[0].value],
      M2: [homeResult[3].value, awayResult[3].value],
      M3: [homeResult[5].value, awayResult[5].value],
    },
    {
      name: Group_2[2],
      M1: [homeResult[1].value, awayResult[1].value],
      M2: [awayResult[2].value, homeResult[2].value],
      M3: [awayResult[5].value, homeResult[5].value],
    },
    {
      name: Group_2[3],
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
  let container = document.getElementById("standingGroup2");
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
}
