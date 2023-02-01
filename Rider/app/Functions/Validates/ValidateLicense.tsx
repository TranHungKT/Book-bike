import * as Yup from 'yup'

import { FIELD_REQUIRED } from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  numberLicense: Yup.string().required(FIELD_REQUIRED)
})
