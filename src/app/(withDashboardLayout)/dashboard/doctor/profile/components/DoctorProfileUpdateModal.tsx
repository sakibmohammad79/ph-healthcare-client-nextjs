import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { PHSelect } from "@/components/Forms/PHSelect";
import PHFullScreenModal from "@/components/Shared/PHFullScreenModal/PHFullScreenModal";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { genderItem } from "@/types";
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import MultipleSelectChip from "./MultipleSelectChip";
import { useGetAllSpecialiesQuery } from "@/redux/api/specialtiesApi";
import { toast } from "sonner";
type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};
const DoctorProfileUpdateModal = ({ open, setOpen, id }: TModalProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetSingleDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialiesQuery({});
  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  useEffect(() => {
    if (!isSuccess) {
      return;
    } else {
      setSelectedSpecialtiesIds(
        doctorData?.doctorSpecialties.map((sp: any) => {
          return sp.specialtiesId;
        })
      );
    }
  }, [isSuccess, doctorData]);

  const handleDoctorUpdate = async (values: FieldValues) => {
    const specialties = selectedSpecialtiesIds.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    const excluedFields: Array<keyof typeof values> = [
      "id",
      "email",
      "status",
      "role",
      "needPasswordChange",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excluedFields.includes(key);
      })
    );
    updatedValues.appointmentFee = Number(updatedValues.appointmentFee);
    updatedValues.experience = Number(updatedValues.experience);
    updatedValues.specialties = specialties;

    try {
      const res = await updateDoctor({ body: updatedValues, id }).unwrap();
      if (res?.id) {
        toast.success("Doctor information update success!");
        refetch();
        setOpen(false);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <PHForm onSubmit={handleDoctorUpdate} defaultValues={doctorData}>
        <Grid
          container
          spacing={4}
          justifyContent="start"
          alignItems="center"
          my={5}
        >
          <Grid item xs={12} sm={12} md={4}>
            <PHInput name="name" label="Name" fullWidth={true}></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput name="email" label="Email" fullWidth={true}></PHInput>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="contactNumber"
              label="Contact Number"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput name="address" label="Address" fullWidth={true}></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="experience"
              label="Experience"
              fullWidth={true}
              type="number"
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelect
              name="gender"
              label="Gender"
              fullWidth={true}
              item={genderItem}
            ></PHSelect>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="appointmentFee"
              label="Appointment Fee"
              fullWidth={true}
              type="number"
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="qualification"
              label="Qualification"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="designation"
              label="Designation"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MultipleSelectChip
              allSpecialties={allSpecialties}
              selectedIds={selectedSpecialtiesIds}
              setSelectedIds={setSelectedSpecialtiesIds}
            />
          </Grid>
        </Grid>
        <Box mt={4} textAlign="end">
          <Button disabled={updating} type="submit">
            Update
          </Button>
        </Box>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorProfileUpdateModal;
