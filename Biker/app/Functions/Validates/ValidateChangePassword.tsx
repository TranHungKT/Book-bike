import * as Yup from 'yup'

import { FIELD_REQUIRED, TOO_SHORT } from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  password: Yup.string().min(8, TOO_SHORT).required(FIELD_REQUIRED)
})
