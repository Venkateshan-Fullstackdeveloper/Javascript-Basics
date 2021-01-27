var user = {
    firstName : "Venkateshan",
    lastName : "Arumugam Prabhakaran",
    role : "Admin",
    logInCount : 32,
    googleLoginIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function() {
        return `firstName : ${this.firstName}
courseList : ${this.courseList}
getCourseCount : ${this.getCourseCount()} 
googleLoginIn : ${this.googleLoginIn} `
    }

};

// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("React js course");
user.buyCourse("Angular course");
// console.log(user.getCourseCount());
console.log(user.info());