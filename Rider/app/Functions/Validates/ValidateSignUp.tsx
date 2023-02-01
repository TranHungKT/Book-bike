import * as Yup from 'yup'

import {
  MIN_LENGTH_SHORT_FIELD,
  MAX_LENGTH_SHORT_FIELD,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_PHONE,
  MAX_LENGTH_PHONE
} from '@/Constants/InputConstants'
import {
  FIELD_REQUIRED,
  TOO_SHORT,
  TOO_LONG,
  IN_VALID_EMAIL
} from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  email: Yup.string().email(IN_VALID_EMAIL).required(FIELD_REQUIRED),
  firstName: Yup.string()
    .min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
    .max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
    .required(FIELD_REQUIRED),
  lastName: Yup.string()
    .min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
    .max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
    .required(FIELD_REQUIRED),
  gender: Yup.boolean().required(FIELD_REQUIRED),
  dateOfBirth: Yup.date().required(FIELD_REQUIRED),
  address: Yup.string()
    .min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
    .max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
    .required(FIELD_REQUIRED),
  phoneNumber: Yup.string()
    .min(MIN_LENGTH_PHONE, TOO_SHORT)
    .max(MAX_LENGTH_PHONE, TOO_LONG)
    .required(FIELD_REQUIRED),
  password: Yup.string()
    .min(MIN_LENGTH_PASSWORD, TOO_SHORT)
    .max(MAX_LENGTH_PASSWORD, TOO_LONG)
    .required(FIELD_REQUIRED)
})
