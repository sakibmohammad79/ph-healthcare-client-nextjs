export interface IDoctorData {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE";
  appointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  averageRating: number;
  createdAt: string;
  updatedAt: string;
  doctorSpecialties?: ISpecialties[];
}

export interface ISpecialties {
  specialtiesId: number;
  isDeleted?: null;
}

export interface IDoctor {
  password: string;
  doctor: IDoctorData;
}
