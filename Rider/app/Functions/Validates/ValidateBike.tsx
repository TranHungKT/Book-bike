import * as Yup from 'yup'

import { FIELD_REQUIRED } from '@/Constants/MessagesInputConstants'

export default Yup.object().shape({
  licensePlate: Yup.string().required(FIELD_REQUIRED),
  brand: Yup.string().required(FIELD_REQUIRED),
  dateManufacture: Yup.string().required(FIELD_REQUIRED)
})
