"use client";
type TParams = {
  params: {
    doctorId: string;
  };
};
const UpdateDoctorPage = ({ params }: TParams) => {
  const id = params?.doctorId;
  console.log(id);
  return (
    <div>
      <h2>This is UpdateDoctorPage component</h2>
    </div>
  );
};

export default UpdateDoctorPage;
