export interface ProfileDetails {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  mobileNo: string;
  addressId: number;
  email: string;
  citizenshipNo: string;
  dob: string;
  departmentId: number;
  role: string;
  gender: number;
  nationality: string;
  startDate: string;
}

export interface ProfilePicture {
  employeeId: number;
  imageName: string | null;
  imageDataBase64: string | null;
}
