import * as Yup from 'yup'

import {
  MIN_LENGTH_SHORT_FIELD,
  MAX_LENGTH_SHORT_FIELD
} from '@/Constants/InputConstants'
import {
  FIELD_REQUIRED,
  TOO_SHORT,
  TOO_LONG
} from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  numberID: Yup.string().required(FIELD_REQUIRED),
  birthday: Yup.string().required(FIELD_REQUIRED),
  dateCreated: Yup.string().required(FIELD_REQUIRED),
  address: Yup.string()
    .min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
    .max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
    .required(FIELD_REQUIRED),
  place: Yup.string().required(FIELD_REQUIRED),
  outDate: Yup.string().required(FIELD_REQUIRED)
})
