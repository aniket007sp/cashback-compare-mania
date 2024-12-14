import { travelTerms } from './terms/travelTerms';
import { retailTerms } from './terms/retailTerms';
import { financeTerms } from './terms/financeTerms';
import { otherTerms } from './terms/otherTerms';

export const termsConditions = {
  ...travelTerms,
  ...retailTerms,
  ...financeTerms,
  ...otherTerms
};