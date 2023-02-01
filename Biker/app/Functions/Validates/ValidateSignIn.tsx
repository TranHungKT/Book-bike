import * as Yup from 'yup'

import {
  MIN_LENGTH_SHORT_FIELD,
  MAX_LENGTH_SHORT_FIELD,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD
} from '@/Constants/InputConstants'
import {
  FIELD_REQUIRED,
  TOO_SHORT,
  TOO_LONG
} from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  userName: Yup.string()
    .min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
    .max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
    .required(FIELD_REQUIRED),
  password: Yup.string()
    .min(MIN_LENGTH_PASSWORD, TOO_SHORT)
    .max(MAX_LENGTH_PASSWORD, TOO_LONG)
    .required(FIELD_REQUIRED)
})
