//num1
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
        this.featureName = featureName;
        this.isEnabled = isEnabled;
        this.userGroupAccess = userGroupAccess;
    }
  FeatureToggle.prototype.canAccess= function(userRole) {
        if (!this.isEnabled){
             return false;
        }
        for (let role of this.userGroupAccess) {
            if (role === userRole){
                return true;
            }
        }
        return false;
    }
   FeatureToggle.prototype.toggleFeature= function(flag) {
        this.isEnabled = flag;
    }

const feature = new FeatureToggle("Optimizely", false, ["betaTesters", "admins"]);
function simulateAccess(feature, userRole) {
    switch (userRole) {
        case "betaTesters":
        case "admins":
            return feature.canAccess(userRole) ? "Access granted" : "Access denied";
        default:
            return "No access";
    }
}
console.log(feature.canAccess("betaTesters"));
console.log(feature.canAccess("guest"));
console.log(simulateAccess(feature, "betaTesters"));
feature.toggleFeature(true);
console.log(simulateAccess(feature,"guest")); 

//num2

  function TimeLog (freelancerName, projectDetails, logs) {
        this.freelancerName = freelancerName;
        this.projectDetails = projectDetails;
        this.logs = logs;
    }
    TimeLog.prototype.totalEarnings = function() {
        let totalHours = 0;
        for (let log of this.logs) {
            totalHours += log.hoursWorked;
        }
        return totalHours * this.projectDetails.hourlyRate;
    }
   TimeLog.prototype.filterByDateRange= function(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const filtered = [];
        for (let log of this.logs) {
            const logDate = new Date(log.date);
            if (logDate >= start && logDate <= end) {
                filtered.push(log);
            }
        }
        return filtered;
    }
    TimeLog.prototype.exceedsWeeklyHours= function() {
        let totalHours = 0;
        for (let log of this.logs) {
            totalHours += log.hoursWorked;
        }
        switch (true) {
            case totalHours > 40:
                return "Over 40 hours";
            default:
                return "Within limit";
        }
    }

const logs = [
    { date: "2024-06-04", hoursWorked: 27 },
    { date: "2024-05-02", hoursWorked: 23 }
];
const timeLog = new TimeLog("Adeday", { name: "JS-project", hourlyRate: 30 }, logs);
console.log(timeLog.totalEarnings()); 
console.log(timeLog.filterByDateRange("2024-06-04", "2024-05-02").length); 
console.log(timeLog.exceedsWeeklyHours());

//num3

    function Order (customer, items, status) {
        this.customer = customer;
        this.items = items;
        this.status = status;
    }
    Order.prototype.totalCost= function() {
        let total = 0;
        for (let item of this.items) {
            total += item.quantity * item.unitPrice;
        }
        return total;
    }
    Order.prototype.updateStatus =function(isPaid) {
        switch (isPaid) {
            case true:
                this.status = "Paid";
                break;
            default:
                this.status = "Pending";
        }
    }
   Order.prototype.orderUrgency = function() {
        const total = this.totalCost();
        switch (true) {
            case total > 1000:
                return "High";
            case total > 500:
                return "Medium";
            default:
                return "Low";
        }
    }

const order = new Order(
    { name: "Bereket", email: "bereket@gmail.com" },
    [
        { productName: "Mobile-Phone", quantity: 3, unitPrice: 1000 },
        { productName: "ipad", quantity: 2, unitPrice: 1500 }
    ],
    "Pending"
);
console.log(order.totalCost()); 
order.updateStatus(true);
console.log(order.status); 
console.log(order.orderUrgency());

//num4
function Employee (id, name, performanceMetrics, feedback) {
        this.id = id;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback = feedback;
    }
    Employee.prototype.averageScore = function() {
        const scores = Object.values(this.performanceMetrics);
        let sum = 0;
        for (let score of scores) {
            sum += score;
        }
        return sum / scores.length;
    }
    Employee.prototype.performanceLevel = function() {
        const avg = this.averageScore();
        switch (true) {
            case avg >= 9:
                return "Excellent";
            case avg >= 7:
                return "Good";
            default:
                return "Make Improvement";
        }
    }
    Employee.prototype.addFeedback = function(newFeedback) {
        if (newFeedback) {
            this.feedback.push(newFeedback);
            return "Feedback added";
        }
        return "No feedback";
    }

const employee = new Employee(
    1,
    "Jenifer",
    { communication: 8, efficiency: 7, reliability: 9 },
    ["Good Job!"]
);
console.log(employee.averageScore()); 
console.log(employee.performanceLevel()); 
console.log(employee.addFeedback("Good Job!")); 
console.log(employee.feedback); 

//num5
 function Course (title, instructor, students) {
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }
   Course.prototype.completedStudents = function() {
        const completed = [];
        for (let student of this.students) {
            if (student.completionStatus) {
                completed.push(student.name);
            }
        }
        return completed;
    }
    Course.prototype.countByExpertise = function() {
        let count = 0;
        for (let student of this.students) {
            if (this.instructor.expertise === "coding") {
                count++;
            }
        }
        return count;
    }
    Course.prototype.instructorMessage = function() {
        const count = this.students.length;
        switch (true) {
            case count > 5:
                return "most choosen course!";
            default:
                return "Needs more students";
        }
    }

const course = new Course(
    "JavaScript",
    { name: "Jack", expertise: "coding" },
    [
        { name: "Semhal", completionStatus: true },
        { name: "Fana", completionStatus: false },
        { name: "Arsema", completionStatus: true }
    ]
);
console.log(course.completedStudents()); 
console.log(course.countByExpertise());
console.log(course.instructorMessage()); 
