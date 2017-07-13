function buildCourseView(fileList) {
	var courseView = document.getElementById("course-list");

	var courseCode = "";
	var courseSemester = "";
	var courseYear = "";

	for (var x = 0; x < fileList.length; x++) {

		var courseViewInner = courseView.innerHTML;

		courseCode = fileList[x].slice(0,6);
		courseSemester = fileList[x].slice(7,8);
		courseYear = fileList[x].slice(8.12)

	}
};