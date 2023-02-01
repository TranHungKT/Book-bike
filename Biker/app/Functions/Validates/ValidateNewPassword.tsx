import * as Yup from 'yup'

import {
  FIELD_REQUIRED,
  MATCH_PASSWORD
} from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  password: Yup.string().required(FIELD_REQUIRED),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    MATCH_PASSWORD
  )
})
