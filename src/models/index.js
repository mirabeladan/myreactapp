// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Email } = initSchema(schema);

export {
  Email
};