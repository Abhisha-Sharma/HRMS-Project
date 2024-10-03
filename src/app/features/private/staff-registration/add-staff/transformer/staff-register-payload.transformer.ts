import { GetEmployeeDetails, RegisterStaffPayload, StaffDetailsFormValue } from '../model/add-staff';

export const convertToStaffPayload = (staff: StaffDetailsFormValue): RegisterStaffPayload => ({
    firstName: staff?.firstName,
    lastName: staff?.lastName,
    middleName: staff?.middleName,
    mobileNo: staff?.mobileNo?.toString(),
    address: {
        name: staff?.address,
        countryId: staff?.country?.id,
        cityId: staff?.city.id,
    },
    email: staff.email,
    citizenshipNo: staff.citizenshipNo,
    dob: staff.dob,
    departmentId: staff.departmentId.id,
    role: staff.role.key,
    gender: +staff.gender,
    nationality: staff.nationality,
    startDate: staff.startDate,
    password: staff.password,
    confirmPassword: staff.confirmPassword,
});


export function getDate(date: string = '  '): string {
    if (!date || !date.includes('/')) {
        return '';
    }

    const [month, day, year] = date.split(" ")[0].split("/");

    if (!month || !day || !year) {
        return '';
    }

    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}
