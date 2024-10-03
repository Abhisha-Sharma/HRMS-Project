export const apiConstants = Object.freeze({
  registerEmployee: '/user/Employee/RegisterEmployee',
  getCountryList: '/user/Country/GetCountryList',
  getCityListByCountryId: '/user/City/GetCityByCountryId',
  getDepartmentList: '/user/Department/GetDepartmentList',
  getEmployeeList: '/user/Employee/GetRegisterEmployeeList',
  getEmployeeById: '/user/Employee/GetRegisterEmployeeDetailById',
  updateEmployee: '/user/Employee/UpdateRegisterEmployee',
  getRolesList: '/user/Employee/GetAllRoles',
  deleteEmployeeDetails: '/user/Employee/DeleteRegisterEmployee',
  getAddressDetailsById: '/user/Address/GetAddressDetailById',
  getProfilePictureOfEmp: '/user/Document/GetProfilePictureOfEmp?empId=',
  policy: '/attendanceLeave/Policy/CreatePolicy',
  calender: '/attendanceLeave/Attendance/GetAllAttendanceByEmployeeId',

  attendance: Object.freeze({
    getCheckInStatus: '/attendanceLeave/Attendance/CheckCheckInStatus',
    postCheckIn: '/attendanceLeave/Attendance/CheckIn',
    postCheckOut: '/attendanceLeave/Attendance/CheckOut',
    getTodaysAttendanceSummary:
      '/attendanceLeave/Attendance/GetCurrentDayAttendanceSummary',
    getEmployeePendingLeaveRequests:
      '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestListWithoutFilter',
    getEmployeeAllLeaveRequestList:
      '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestList',
    getEmployeeLeaveRequestAccordingToDateAndStatus:
      '/attendanceLeave/LeaveRequest/GetLeaveRequestAccordingToDateAndStatus',
    getAttandanceList: '/attendanceLeave/Attendance/ListAllAttendance',
    getAttendanceByEmployeeId: '/attendanceLeave/Attendance/GetAllAttendanceByEmployeeId',
    getTotalLeaveToday: '/attendanceLeave/LeaveRequest/TotalLeaveToday',
  }),

  employeeDetails: Object.freeze({
    getEmployeeDetailById: '/user/Employee/GetRegisterEmployeeDetailById',
    addDocumentOfEmployee: '/user/Document/AddDocumentOfEmp',
    getProfilePictureofEmployee: '/user/Document/GetProfilePictureOfEmp',
    patchProfilePictureofEmployee: '/user/Document/UpdateDocumentOfEmp',
  }),

  login: Object.freeze({
    login: '/user/Login/Login',
    requestOTP: '/user/Login/RequestOTP',
    resetPassword: '/user/Login/ResetPassword ',
    changePassword: '/user/Login/ChangePassword',
  }),
  leave: Object.freeze({
    addLeaveRequest: '/attendanceLeave/LeaveRequest/AddLeaveRequest',
    getLeaveRequestDetailById:
      '/attendanceLeave/LeaveRequest/GetLeaveRequestDetailById',
    getEmployeeLeaveRequestList:
      '/attendanceLeave/LeaveRequest/GetEmployeeLeaveRequestList',
    approveRejectLeaveRequest:
      '/attendanceLeave/LeaveRequest/ApproveRejectLeaveRequest',
    getLeaveBalanceofEmp: '/attendanceLeave/LeaveBalance/GetLeaveBalanceofEmp',
    getLeaveRequestByEmpId: '/attendanceLeave/LeaveRequest/GetLeaveRequestByEmpId',
    getAllLeaveBalance: '',
  }),
});
