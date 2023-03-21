import * as yup from 'yup';

const staff_metadata = yup.object().shape({
  points: yup.number(0).integer().required("Οι `Πόντοι` δεν μπορούν να είναι κενοί!"),
  mta_payment: yup.bool(),
  special_category: yup.mixed().oneOf(["ΠΟΛΥΤΕΚΝΙΑ", "ΤΡΙΤΕΚΝΙΑ", "ΑΜΕΑ", "ΜΟΝΟΓΟΝΕΙΚΗ", null]).required()
});

const StaffCreateSchema = yup.object().shape({
  name: yup.string().trim().matches(/[a-zA-Z]+/).required("To `Όνομα` δεν μπορεί να είναι κενό!"),
  surname: yup.string().trim().matches(/[a-zA-Z]+/).required("To `Επώνυμο` δεν μπορεί να είναι κενό!"),
  asma: yup.number().integer().min(5).max(5).required("To `ΑΣΜΑ` δεν μπορεί να είναι κενό!"),
  unit: yup.mixed().oneOf(["ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ", "ΣΤΡΑΤΟΣ ΞΗΡΑΣ", "ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ"]).required(),
  mobile_phone: yup.string().trim().matches(/69[0-9]{8}/).required("To `Κινητό Τηλέφωνο` δεν μπορεί να είναι κενό!"),
  work_phone: yup.string().trim().matches(/[0-9]{4}/),
  staff_metadata
});

export default StaffCreateSchema;