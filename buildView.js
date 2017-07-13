function buildCourseView() {
	var courseView = document.getElementById("course-list");

	var HREF_BASE = "/Syllabi-Supply/web/viewer.html?file=syllabi/";
	var FILE_LIST = ["ANT207_F2016.pdf", "ANT253_W2015.pdf", "AST101_F2014.pdf", "AST201_W2015.pdf", "BIO120_S2016.pdf", "CCR199_F2014.pdf", "CLA204_W2017.pdf", "CSC104_F2016.pdf", "CSC108_F2015.pdf",
					 "CSC108_F2016.pdf", "CSC120_F2016.pdf", "CSC148_W2016.pdf", "CSC165_F2016.pdf", "CSC207_F2016.pdf", "CSC209_F2016.pdf", "CSC236_F2016.pdf", "CSC263_W2015.pdf", "CSC265_F2016.pdf",
 					 "CSC304_F2016.pdf", "CSC318_F2014.pdf", "CSC336_F2016.pdf", "CSC343_F2016.pdf", "CSC384_F2016.pdf", "CSC404_F2016.pdf", "CSC410_F2016.pdf", "CSC411_F2016.pdf", "CSC418_W2016.pdf",
 					 "CSC438_F2016.pdf", "CSC469_F2016.pdf", "CSC485_F2016.pdf", "CSC490_F2016.pdf", "ECO100_F2014.pdf", "ECO100_F2015.pdf", "ECO206_W2016.pdf", "ECO208_F2015.pdf", "ECO220_F2015.pdf",
 					 "ECO320_F2016.pdf", "ECO325_F2016.pdf", "ENV100_F2016.pdf", "ESS221_F2015.pdf", "ESS222_W2016.pdf", "ESS311_F2015.pdf", "ESS322_F2016.pdf", "ESS331_F2016.pdf", "ESS431_W2017.pdf",
 					 "FSL100_S2016.pdf", "GGR107_F2016.pdf", "GGR112_F2016.pdf", "GGR124_W2016.pdf", "GGR201_W2016.pdf", "GGR223_W2016.pdf", "GGR270_F2015.pdf", "GGR272_S2016.pdf", "GGR273_W2017.pdf",
 					 "GGR337_W2017.pdf", "GRK101_F2014.pdf", "HIS271_F2016.pdf", "IMM250_F2016.pdf", "JGA305_F2016.pdf", "LIN200_F2016.pdf", "MAT133_F2014.pdf", "MAT221_F2014.pdf", "MAT223_F2016.pdf",
 					 "NEW240_F2016.pdf", "NMC103_F2013.pdf", "PCL102_W2016.pdf", "PHL237_F2016.pdf", "PHL271_F2016.pdf", "PMU199_F2016.pdf", "POL201_F2016.pdf", "PSY100_F2015.pdf", "PSY220_F2016.pdf",
 					 "PSY230_F2016.pdf", "RSM100_F2014.pdf", "RSM219_F2015.pdf", "RSM220_W2016.pdf", "RSM221_F2016.pdf", "RSM222_W2016.pdf", "RSM225_F2015.pdf", "RSM320_W2017.pdf", "RSM322_F2016.pdf",
 					 "RSM323_W2017.pdf", "RSM324_F2016.pdf", "RSM332_F2016.pdf", "SDS255_F2016.pdf", "STA220_F2015.pdf", "STA247_F2016.pdf", "STA248_W2017.pdf", "STA255_W2017.pdf", "VIC203_F2016.pdf",
 					 "WGS271_F2016.pdf", "WGS273_F2016.pdf"];

	var courseCode = "";
	var courseSemester = "";
	var courseYear = "";

	for (var x = 0; x < FILE_LIST.length; x++) {

		//var courseViewInner = courseView.innerHTML;
		var courseViewInner = "";

		courseCode = FILE_LIST[x].slice(0,6);
		courseSemester = getSemester(FILE_LIST[x].slice(7,8));
		courseYear = FILE_LIST[x].slice(8,12);

		courseViewInner = '<li href="' + HREF_BASE + FILE_LIST[x] + '" class ="iframe">' +
						  '<span class="courseCode">' + courseCode + '</span>' +
						  '<span class="year">' + courseSemester + ' ' + courseYear + "</span></li>";
	
		courseView.innerHTML += courseViewInner;
	}

	courseView.innerHTML += '<li class="last"></li>';
};

function getSemester(initial) {
	if (initial == "F") {
		return "Fall";
	} else if (initial == "W") {
		return "Winter";
	} else if (initial == "S") {
		return "Summer";
	}
};