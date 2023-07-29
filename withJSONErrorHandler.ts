import { isError } from 'lodash-es'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { stringifyError } from '../../../libs/utils/JSON'

export function withJSONErrorHandler(handler: NextApiHandler<unknown>) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      await handler(req, res)
    } catch (err) {
      if (isError(err)) {
        res.status(500).send(stringifyError(err))
      } else {
        throw err
      }
    }
  }
}
