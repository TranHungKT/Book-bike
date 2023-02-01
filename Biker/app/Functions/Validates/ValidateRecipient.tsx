import * as Yup from 'yup'

import {
  MIN_LENGTH_SHORT_FIELD,
  MAX_LENGTH_SHORT_FIELD,
  MIN_LENGTH_PHONE,
  MAX_LENGTH_PHONE
} from '@/Constants/InputConstants'
import {
  FIELD_REQUIRED,
  TOO_SHORT,
  TOO_LONG
} from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  recipientName: Yup.string()
    .min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
    .max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
    .required(FIELD_REQUIRED),
  phoneNumber: Yup.string()
    .min(MIN_LENGTH_PHONE, TOO_SHORT)
    .max(MAX_LENGTH_PHONE, TOO_LONG)
    .required(FIELD_REQUIRED)
})
